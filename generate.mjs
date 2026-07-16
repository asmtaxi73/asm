// ============================================================
// ASM TAXI — Générateur de pages destinations
// Usage : node generate.mjs
// Produit : destinations/<slug>.html (22 pages), stations.html
//           (hub de toutes les destinations) et sitemap.xml.
// Source de vérité unique : data/stations.mjs + data/hubs.mjs
// ============================================================
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STATIONS } from "./data/stations.mjs";
import { HUBS } from "./data/hubs.mjs";
import { photoHero, photoCard } from "./data/photos.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));

// ---------- Constantes site ----------
const SITE = {
  name: "ASM TAXI",
  base: "https://www.asm-taxi.fr",
  tel: "07 67 67 69 81",
  telIntl: "+33767676981",
  wa: "33767676981",
  email: "asm.taxi73@gmail.com",
};

const FAVICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%231f3440'/%3E%3Cpath d='M18 62 L38 38 L50 52 L64 30 L82 62 Z' fill='%234e9fc4'/%3E%3Ctext x='50' y='86' font-family='Arial' font-size='22' font-weight='bold' text-anchor='middle' fill='%23ffffff'%3EASM%3C/text%3E%3C/svg%3E`;

// ---------- Tarification ----------
// Règles (indicatives, alignées marché local — à valider par ASM TAXI) :
//  - 5 à 8 passagers : +15 € (courses locales) ou +30 € (longue distance)
//  - Nuit (19h-7h), dimanche & jours fériés : +15 % arrondi aux 5 €
const r5 = (n) => Math.round(n / 5) * 5;
const prix = (d14) => {
  const d58 = d14 + (d14 >= 200 ? 30 : 15);
  return {
    d14, d58,
    n14: r5(d14 * 1.15),
    n58: r5(d58 * 1.15),
  };
};
const eur = (n) => `${n} €`;

// Les 4 hubs affichés dans les tableaux des pages stations
const HUB_ROWS = ["geneve", "lyon", "grenoble", "chambery"];
// Les stations affichées dans les tableaux des pages hubs (matrix)
const STATION_ROWS = [
  "la-rosiere", "les-arcs-1600", "les-arcs-1800", "les-arcs-1950",
  "les-arcs-2000", "peisey-vallandry", "sainte-foy-tarentaise",
  "villaroger", "tignes", "val-disere", "la-plagne", "courchevel",
];

const hubBySlug = Object.fromEntries(HUBS.map((h) => [h.slug, h]));
const stationBySlug = Object.fromEntries(STATIONS.map((s) => [s.slug, s]));
const allBySlug = { ...stationBySlug, ...hubBySlug };

// ---------- Fragments partagés ----------
const head = (d) => `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${d.metaTitle}</title>
  <meta name="description" content="${d.metaDesc}" />
  <link rel="canonical" href="${SITE.base}/destinations/${d.slug}.html" />
  <meta name="robots" content="index, follow" />
  <meta name="geo.region" content="FR-73" />
  <meta name="geo.placename" content="Bourg-Saint-Maurice" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:site_name" content="${SITE.name}" />
  <meta property="og:title" content="${d.metaTitle}" />
  <meta property="og:description" content="${d.metaDesc}" />
  <meta property="og:url" content="${SITE.base}/destinations/${d.slug}.html" />
  <link rel="icon" href="${FAVICON}" />
  <link rel="stylesheet" href="../css/styles.css" />
  ${jsonLd(d)}
</head>`;

function jsonLd(d) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") },
    })),
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Taxi & VTC ${d.name} — transfert privé`,
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      telephone: SITE.telIntl,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gare SNCF de Bourg-Saint-Maurice",
        addressLocality: "Bourg-Saint-Maurice",
        postalCode: "73700",
        addressRegion: "Savoie",
        addressCountry: "FR",
      },
    },
    areaServed: ["Bourg-Saint-Maurice", d.name, "Haute-Tarentaise"],
    description: d.metaDesc,
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE.base}/` },
      { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE.base}/stations.html` },
      { "@type": "ListItem", position: 3, name: d.name, item: `${SITE.base}/destinations/${d.slug}.html` },
    ],
  };
  return [serviceLd, faqLd, crumbs]
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`)
    .join("\n  ");
}

const header = (prefix) => `
  <div class="topbar">
    <div class="container">
      <div class="badges">
        <span>🕐 <b>7j/7 — 24h/24</b></span>
        <span>📍 Gare SNCF de Bourg-Saint-Maurice</span>
      </div>
      <div><a href="tel:${SITE.telIntl}">☎ ${SITE.tel}</a></div>
    </div>
  </div>
  <header class="header">
    <nav class="nav">
      <a href="${prefix}index.html" class="logo">
        <span class="mark">ASM</span>
        <span class="name">ASM Taxi<small>Bourg-Saint-Maurice — Gare SNCF</small></span>
      </a>
      <div class="nav-links">
        <a href="${prefix}index.html">Accueil</a>
        <a href="${prefix}stations.html">Destinations &amp; tarifs</a>
        <a href="${prefix}transport-medical.html">Médical</a>
        <a href="${prefix}index.html#services">Services</a>
        <a href="${prefix}index.html#avis">Avis</a>
        <a href="${prefix}index.html#devis">Réservation</a>
      </div>
      <div class="nav-cta">
        <a href="tel:${SITE.telIntl}" class="btn btn-line">☎ Appeler</a>
        <a href="${prefix}index.html#devis" class="btn btn-gold">Devis gratuit</a>
      </div>
      <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </nav>
  </header>`;

const footer = (prefix) => `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="${prefix}index.html" class="logo">
            <span class="mark">ASM</span>
            <span class="name">ASM Taxi<small>Bourg-Saint-Maurice — Gare SNCF</small></span>
          </a>
          <p>Taxi à Bourg-Saint-Maurice (basé à la gare SNCF) et VTC au départ de toutes les stations, gares et aéroports. Transferts, navettes stations et courses locales en Haute-Tarentaise, 7j/7, hiver comme été.</p>
        </div>
        <div>
          <h4>Stations</h4>
          <a href="${prefix}destinations/la-rosiere.html">Taxi &amp; VTC La Rosière</a>
          <a href="${prefix}destinations/les-arcs-1800.html">Taxi &amp; VTC Les Arcs</a>
          <a href="${prefix}destinations/val-disere.html">Taxi &amp; VTC Val d'Isère</a>
          <a href="${prefix}destinations/tignes.html">Taxi &amp; VTC Tignes</a>
          <a href="${prefix}destinations/la-plagne.html">Taxi &amp; VTC La Plagne</a>
          <a href="${prefix}destinations/courchevel.html">Taxi &amp; VTC Courchevel</a>
          <a href="${prefix}stations.html">Toutes les destinations →</a>
        </div>
        <div>
          <h4>Aéroports &amp; gares</h4>
          <a href="${prefix}destinations/geneve.html">Aéroport de Genève</a>
          <a href="${prefix}destinations/lyon.html">Aéroport de Lyon</a>
          <a href="${prefix}destinations/chambery.html">Chambéry</a>
          <a href="${prefix}destinations/grenoble.html">Aéroport de Grenoble</a>
          <a href="${prefix}destinations/moutiers.html">Gare de Moûtiers</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:${SITE.telIntl}">☎ ${SITE.tel}</a>
          <a href="https://wa.me/${SITE.wa}" target="_blank" rel="noopener">💬 WhatsApp</a>
          <a href="mailto:${SITE.email}">📧 ${SITE.email}</a>
          <a href="${prefix}transport-medical.html">🏥 Transport médical (CPAM)</a>
          <a>📍 Gare SNCF, 73700 Bourg-Saint-Maurice</a>
        </div>
      </div>
      <div class="footer-bottom">© <span class="js-year">2026</span> ${SITE.name} — Taxi Bourg-Saint-Maurice — Tous droits réservés</div>
    </div>
  </footer>
  <div class="floating">
    <a href="tel:${SITE.telIntl}" class="btn btn-gold">☎ Appeler</a>
    <a href="https://wa.me/${SITE.wa}" target="_blank" rel="noopener" class="btn btn-wa">💬 WhatsApp</a>
  </div>
  <script src="${prefix}js/main.js"></script>`;

const infoBand = `
  <section class="bg-dark" style="padding:46px 0;">
    <div class="container">
      <div class="info-band">
        <div class="info-cell"><div class="ic">🚖</div><b>Porte à porte</b><span>Transport direct, sans arrêt ni correspondance</span></div>
        <div class="info-cell"><div class="ic">🕐</div><b>7j/7 — 24h/24</b><span>Jour, nuit, dimanches et jours fériés</span></div>
        <div class="info-cell"><div class="ic">✈️</div><b>Suivi vol &amp; train</b><span>Retards absorbés, sans supplément</span></div>
        <div class="info-cell"><div class="ic">❄️</div><b>Équipé montagne</b><span>Pneus hiver, chaînes, chauffeur local</span></div>
      </div>
    </div>
  </section>`;

// ---------- Tableaux de tarifs ----------
function tableRows(rows, col) {
  return rows
    .map(
      (r) => `<tr><td>${r.label}</td><td class="price">${eur(r[col + "14"])}</td><td class="price">${eur(r[col + "58"])}</td></tr>`
    )
    .join("\n          ");
}

function priceTables(d, rows) {
  return `
      <div class="price-table-wrap">
        <table class="price-table">
          <caption>🌙 Tarifs nuit (19h – 7h), dimanches, jours fériés &amp; saison d'hiver — à partir de</caption>
          <thead><tr><th>Départ ou arrivée ${d.name}</th><th>1 à 4 passagers</th><th>5 à 8 passagers</th></tr></thead>
          <tbody>
          ${tableRows(rows, "n")}
          </tbody>
        </table>
      </div>
      <div class="price-table-wrap">
        <table class="price-table">
          <caption>☀️ Tarifs jour (7h – 19h, hors saison d'hiver) — à partir de</caption>
          <thead><tr><th>Départ ou arrivée ${d.name}</th><th>1 à 4 passagers</th><th>5 à 8 passagers</th></tr></thead>
          <tbody>
          ${tableRows(rows, "d")}
          </tbody>
        </table>
      </div>
      <p class="price-note"><strong>Tous les prix sont donnés à titre indicatif</strong>, « à partir de », par véhicule et par trajet, bagages et matériel de ski inclus. <strong>Durant la période hivernale, le tarif de nuit s'applique à toutes les courses.</strong> Les samedis en période de vacances scolaires — journées de très forte affluence en Tarentaise — une majoration peut s'appliquer. Le prix ferme est confirmé gratuitement à la réservation selon votre adresse exacte, l'horaire et la saison : aucune surprise à l'arrivée.</p>`;
}

function stationPriceRows(s) {
  const rows = [{ label: "Gare de Bourg-Saint-Maurice", ...prix(s.gare14) }];
  for (const slug of HUB_ROWS) {
    const h = hubBySlug[slug];
    rows.push({ label: h.name, ...prix(h.base + s.supplement) });
  }
  return rows;
}

function hubPriceRows(h) {
  const rows = [{ label: "Gare de Bourg-Saint-Maurice", ...prix(h.base) }];
  if (h.matrix) {
    for (const slug of STATION_ROWS) {
      const s = stationBySlug[slug];
      rows.push({ label: s.name, ...prix(h.base + s.supplement) });
    }
  }
  return rows;
}

// ---------- Blocs de page ----------
const chips = (d) => {
  const from = d.gare14 ?? d.base;
  return `
      <div class="trip-chips">
        <div class="trip-chip"><b>${d.duree}</b><span>Durée estimée</span></div>
        <div class="trip-chip"><b>${d.km}</b><span>Depuis la gare BSM</span></div>
        ${d.altitude ? `<div class="trip-chip"><b>${d.altitude}</b><span>Altitude</span></div>` : ""}
        <div class="trip-chip"><b>dès ${from} €</b><span>1-4 pers. jour</span></div>
      </div>`;
};

const faqBlock = (d) => `
  <section class="bg-white">
    <div class="container">
      <div class="section-head center">
        <div class="kicker">Questions fréquentes</div>
        <h2>Taxi &amp; VTC ${d.name} : vos questions</h2>
        <div class="rule center"></div>
      </div>
      <div class="faq">
        ${d.faq
          .map(
            (f) => `<div class="faq-item"><button class="faq-q">${f.q}</button><div class="faq-a"><p>${f.a}</p></div></div>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>`;

const crossLinks = (d, prefix) => `
      <h2>Destinations proches</h2>
      <div class="cross-links">
        ${d.proches
          .map((slug) => {
            const t = allBySlug[slug];
            return t ? `<a class="cross-link" href="${prefix}destinations/${t.slug}.html">Taxi &amp; VTC ${t.name}</a>` : "";
          })
          .join("\n        ")}
        <a class="cross-link" href="${prefix}stations.html">Toutes les destinations →</a>
      </div>`;

const ctaBand = (d) => `
  <section style="padding-top:0;">
    <div class="container">
      <div class="cta-band">
        <h2>Réservez votre taxi ou VTC ${d.name}</h2>
        <p>Devis gratuit, prix ferme confirmé avant le départ. Réponse rapide 7j/7.</p>
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <a href="../index.html#devis" class="btn btn-dark btn-lg">Demander un devis</a>
          <a href="tel:${SITE.telIntl}" class="btn btn-dark btn-lg">☎ ${SITE.tel}</a>
        </div>
      </div>
    </div>
  </section>`;

// ---------- Page destination complète ----------
function destinationPage(d) {
  const isStation = "gare14" in d;
  const rows = isStation ? stationPriceRows(d) : hubPriceRows(d);
  const sub = isStation
    ? `Transfert privé entre la gare TGV de Bourg-Saint-Maurice, les aéroports et ${d.name}. Ponctuel, confortable, disponible jour et nuit — skis et bagages bienvenus.`
    : `Transfert privé entre ${d.name}, Bourg-Saint-Maurice et toutes les stations de Haute-Tarentaise. Ponctuel, confortable, disponible jour et nuit.`;

  const heroPhoto = photoHero(d.slug);
  return `${head(d)}
<body>
${header("../")}

  <section class="page-hero"${heroPhoto ? ` style="--photo:url('${heroPhoto}')"` : ""}>
    <div class="container">
      <div class="breadcrumb"><a href="../index.html">Accueil</a> › <a href="../stations.html">Destinations &amp; tarifs</a> › Taxi &amp; VTC ${d.name}</div>
      <div class="kicker">${d.tag}</div>
      <h1>Taxi &amp; VTC ${d.name}<br /><span class="gold">${isStation ? "⇄ Gare de Bourg-Saint-Maurice" : "⇄ Bourg-Saint-Maurice & stations"}</span></h1>
      <p class="lead">${sub}</p>
      ${chips(d)}
      <div class="actions">
        <a href="../index.html#devis" class="btn btn-gold btn-lg">Réserver mon taxi</a>
        <a href="#tarifs" class="btn btn-line btn-lg">Voir les tarifs</a>
        <a href="tel:${SITE.telIntl}" class="btn btn-line btn-lg">☎ ${SITE.tel}</a>
      </div>
    </div>
  </section>

${infoBand}

  <section>
    <div class="container">
      <div class="content-prose">
        <div class="kicker">Votre trajet</div>
        <h2>Taxi &amp; VTC ${d.name} avec ASM Taxi</h2>
        <div class="rule"></div>
        ${d.intro.map((p) => `<p>${p}</p>`).join("\n        ")}
        <ul>
          ${d.points.map((p) => `<li>${p}</li>`).join("\n          ")}
        </ul>
        ${d.savoir.map((s) => `<h3>${s.h3}</h3>\n        <p>${s.p}</p>`).join("\n        ")}
      </div>
    </div>
  </section>

  <section class="bg-white" id="tarifs">
    <div class="container">
      <div class="section-head">
        <div class="kicker">Tarifs</div>
        <h2>Tarifs taxi &amp; VTC ${d.name}</h2>
        <div class="rule"></div>
      </div>
${priceTables(d, rows)}
    </div>
  </section>

${faqBlock(d)}

  <section style="padding-bottom:40px;">
    <div class="container">
${crossLinks(d, "../")}
    </div>
  </section>

${ctaBand(d)}
${footer("../")}
</body>
</html>
`;
}

// ---------- Hub « toutes les destinations » ----------
function hubPage() {
  const card = (d, prefix) => {
    const from = d.gare14 ?? d.base;
    const p = photoCard(d.slug);
    return `<a href="${prefix}destinations/${d.slug}.html" class="dest-card"${p ? ` style="--photo:url('${p}')"` : ""}>
          <span class="tag">${d.tag}</span><span class="go">→</span>
          <div><h3>${d.name}</h3><div class="meta">${d.duree} depuis la gare BSM • dès ${from} €</div></div>
        </a>`;
  };
  const stations = STATIONS.map((s) => card(s, "")).join("\n        ");
  const hubs = HUBS.map((h) => card(h, "")).join("\n        ");

  const meta = {
    slug: "stations",
    metaTitle: "Destinations & tarifs taxi — Bourg-Saint-Maurice | ASM TAXI",
    metaDesc:
      "Toutes les destinations d'ASM TAXI au départ de la gare de Bourg-Saint-Maurice : La Rosière, Les Arcs, Val d'Isère, Tignes, La Plagne… et aéroports de Genève, Lyon, Chambéry, Grenoble. Tarifs jour/nuit.",
  };

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.metaTitle}</title>
  <meta name="description" content="${meta.metaDesc}" />
  <link rel="canonical" href="${SITE.base}/stations.html" />
  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:site_name" content="${SITE.name}" />
  <meta property="og:title" content="${meta.metaTitle}" />
  <meta property="og:description" content="${meta.metaDesc}" />
  <meta property="og:url" content="${SITE.base}/stations.html" />
  <link rel="icon" href="${FAVICON}" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
${header("")}

  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="index.html">Accueil</a> › Destinations &amp; tarifs</div>
      <div class="kicker">Une page dédiée par trajet</div>
      <h1>Destinations <span class="gold">&amp; tarifs</span></h1>
      <p class="lead">Choisissez votre destination : chaque page détaille le trajet depuis la gare de Bourg-Saint-Maurice, les tarifs jour/nuit et les réponses à vos questions.</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="hub-group">
        <div class="kicker">Stations &amp; villages</div>
        <h2>Navettes stations depuis la gare de Bourg-Saint-Maurice</h2>
        <div class="rule" style="margin-bottom:26px;"></div>
        <div class="grid grid-3">
        ${stations}
        </div>
      </div>
      <div class="hub-group">
        <div class="kicker">Longue distance</div>
        <h2>Aéroports, gares &amp; villes</h2>
        <div class="rule" style="margin-bottom:26px;"></div>
        <div class="grid grid-3">
        ${hubs}
        </div>
      </div>
    </div>
  </section>

  <section style="padding-top:0;">
    <div class="container">
      <div class="cta-band">
        <h2>Votre destination n'est pas dans la liste ?</h2>
        <p>Nous roulons partout en France et en Europe : demandez votre devis.</p>
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <a href="index.html#devis" class="btn btn-dark btn-lg">Demander un devis</a>
          <a href="tel:${SITE.telIntl}" class="btn btn-dark btn-lg">☎ ${SITE.tel}</a>
        </div>
      </div>
    </div>
  </section>
${footer("")}
</body>
</html>
`;
}

// ---------- Sitemap ----------
function sitemap() {
  const urls = [
    { loc: `${SITE.base}/`, prio: "1.0" },
    { loc: `${SITE.base}/stations.html`, prio: "0.9" },
    { loc: `${SITE.base}/transport-medical.html`, prio: "0.9" },
    ...[...STATIONS, ...HUBS].map((d) => ({
      loc: `${SITE.base}/destinations/${d.slug}.html`,
      prio: d.slug === "geneve" || d.slug === "la-rosiere" ? "0.9" : "0.8",
    })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${u.prio}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;
}

// ---------- Exécution ----------
await mkdir(path.join(ROOT, "destinations"), { recursive: true });
let count = 0;
for (const d of [...STATIONS, ...HUBS]) {
  await writeFile(path.join(ROOT, "destinations", `${d.slug}.html`), destinationPage(d));
  count++;
}
await writeFile(path.join(ROOT, "stations.html"), hubPage());
await writeFile(path.join(ROOT, "sitemap.xml"), sitemap());
console.log(`✔ ${count} pages destinations + stations.html + sitemap.xml générés`);
