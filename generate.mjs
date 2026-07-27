// ============================================================
// ASM TAXI — Générateur de pages destinations (FR + EN)
// Usage : node generate.mjs
// Produit : destinations/<slug>.html, stations.html, sitemap.xml
//           + version anglaise : en/destinations/<slug>.html,
//           en/stations.html (en/index.html et
//           en/transport-medical.html sont maintenus à la main).
// Source de vérité : data/stations.mjs + data/hubs.mjs (français)
//                    data/stations.en.mjs + data/hubs.en.mjs (anglais)
// Les CHIFFRES (prix, km, suppléments) viennent toujours des
// fichiers français ; les fichiers .en.mjs ne portent que les textes.
// ============================================================
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STATIONS } from "./data/stations.mjs";
import { HUBS } from "./data/hubs.mjs";
import { STATIONS_EN } from "./data/stations.en.mjs";
import { HUBS_EN } from "./data/hubs.en.mjs";
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
// Règles :
//  - base hubs : km (gare BSM → destination) × 2,35 €/km, arrondi aux 5 €
//  - supplément stations : km (station → gare BSM) × 3,45 €/km
//  - 5 à 8 passagers : +15 € (courses locales) ou +30 € (longue distance)
//  - Nuit (19h-7h), dimanche & jours fériés : +15 % arrondi aux 5 €,
//    UNIQUEMENT si le tarif jour 1-4 est ≤ 120 € — au-delà (transferts
//    longue distance), le tarif nuit = tarif jour, sans majoration.
const r5 = (n) => Math.round(n / 5) * 5;
const prix = (d14) => {
  const d58 = d14 + (d14 >= 200 ? 30 : 15);
  const sansMajoration = d14 > 120;
  return {
    d14, d58,
    n14: sansMajoration ? d14 : r5(d14 * 1.15),
    n58: sansMajoration ? d58 : r5(d58 * 1.15),
  };
};

// Format monétaire : « 390 € » en français, « €390 » en anglais
const eur = (n, loc) => (loc === "en" ? `€${n}` : `${n} €`);

// Les 4 hubs affichés dans les tableaux des pages stations
const HUB_ROWS = ["geneve", "lyon", "grenoble", "chambery"];
// Les stations affichées dans les tableaux des pages hubs (matrix)
const STATION_ROWS = [
  "la-rosiere", "les-arcs-1600", "les-arcs-1800", "les-arcs-1950",
  "les-arcs-2000", "peisey-vallandry", "sainte-foy-tarentaise",
  "villaroger", "tignes", "val-disere", "la-plagne", "courchevel",
];

// ---------- Données par langue ----------
// Les chiffres viennent TOUJOURS du français ; les .en.mjs portent les textes.
const frStationBySlug = Object.fromEntries(STATIONS.map((s) => [s.slug, s]));
const frHubBySlug = Object.fromEntries(HUBS.map((h) => [h.slug, h]));
const NUM_KEYS = ["gare14", "supplement", "base", "km", "matrix", "altitude"];
const mergeNums = (en, fr) => {
  const out = { ...en };
  for (const k of NUM_KEYS) if (k in fr) out[k] = fr[k];
  return out;
};
const DATA = {
  fr: { stations: STATIONS, hubs: HUBS },
  en: {
    stations: STATIONS_EN.map((s) => mergeNums(s, frStationBySlug[s.slug] || {})),
    hubs: HUBS_EN.map((h) => mergeNums(h, frHubBySlug[h.slug] || {})),
  },
};

// ---------- Libellés d'interface par langue ----------
const L = {
  fr: {
    lang: "fr", ogLocale: "fr_FR",
    topHours: "7j/7 — 24h/24",
    topPlace: "Gare SNCF de Bourg-Saint-Maurice",
    logoSmall: "Bourg-Saint-Maurice — Gare SNCF",
    navHome: "Accueil", navDest: "Destinations &amp; tarifs", navMed: "Médical",
    navServices: "Services", navAvis: "Avis", navResa: "Réservation",
    call: "☎ Appeler", quote: "Devis gratuit",
    langBtn: (href) => `<a href="${href}" class="btn btn-lang" title="Read this website in English" lang="en">🇬🇧 EN</a>`,
    infoBand: [
      ["🚖", "Porte à porte", "Transport direct, sans arrêt ni correspondance"],
      ["🕐", "7j/7 — 24h/24", "Jour, nuit, dimanches et jours fériés"],
      ["✈️", "Suivi vol &amp; train", "Retards absorbés, sans supplément"],
      ["❄️", "Équipé montagne", "Pneus hiver, chaînes, chauffeur local"],
    ],
    nightCaption: "🌙 Tarifs nuit (19h – 7h), dimanches, jours fériés &amp; saison d'hiver — à partir de",
    dayCaption: "☀️ Tarifs jour (7h – 19h, hors saison d'hiver) — à partir de",
    thRoute: (name) => `Départ ou arrivée ${name}`,
    thPax14: "1 à 4 passagers", thPax58: "5 à 8 passagers",
    bsmRow: "Gare de Bourg-Saint-Maurice",
    priceNote: `<strong>Tous les prix sont donnés à titre indicatif</strong>, « à partir de », par véhicule et par trajet, bagages et matériel de ski inclus. <strong>Bon à savoir : sur les trajets longue distance (tarif jour supérieur à 120 €), aucune majoration de nuit ni de saison — le tarif nuit est identique au tarif jour.</strong> Les samedis en période de vacances scolaires — journées de très forte affluence en Tarentaise — une majoration peut s'appliquer. Le prix ferme est confirmé gratuitement à la réservation selon votre adresse exacte, l'horaire et la saison : aucune surprise à l'arrivée.`,
    chipDuree: "Durée estimée", chipKm: "Depuis la gare BSM", chipAlt: "Altitude",
    chipFrom: (n) => `dès ${n} €`, chipPax: "1-4 pers. jour",
    crumbHome: "Accueil", crumbDest: "Destinations &amp; tarifs",
    destTitle: (name) => `Taxi &amp; VTC ${name}`,
    destGoldStation: "⇄ Gare de Bourg-Saint-Maurice",
    destGoldHub: "⇄ Bourg-Saint-Maurice &amp; stations",
    subStation: (name) => `Transfert privé entre la gare TGV de Bourg-Saint-Maurice, les aéroports et ${name}. Ponctuel, confortable, disponible jour et nuit — skis et bagages bienvenus.`,
    subHub: (name) => `Transfert privé entre ${name}, Bourg-Saint-Maurice et toutes les stations de Haute-Tarentaise. Ponctuel, confortable, disponible jour et nuit.`,
    bookBtn: "Réserver mon taxi", seePrices: "Voir les tarifs",
    yourTrip: "Votre trajet",
    withUs: (name) => `Taxi &amp; VTC ${name} avec ASM Taxi`,
    pricesKicker: "Tarifs",
    pricesTitle: (name) => `Tarifs taxi &amp; VTC ${name}`,
    faqKicker: "Questions fréquentes",
    faqTitle: (name) => `Taxi &amp; VTC ${name} : vos questions`,
    nearby: "Destinations proches",
    allDest: "Toutes les destinations →",
    crossLink: (name) => `Taxi &amp; VTC ${name}`,
    ctaTitle: (name) => `Réservez votre taxi ou VTC ${name}`,
    ctaSub: "Devis gratuit, prix ferme confirmé avant le départ. Réponse rapide 7j/7.",
    ctaQuote: "Demander un devis",
    footerDesc: "Taxi à Bourg-Saint-Maurice (basé à la gare SNCF) et VTC au départ de toutes les stations, gares et aéroports. Transferts, navettes stations et courses locales en Haute-Tarentaise, 7j/7, hiver comme été.",
    footStations: "Stations", footHubs: "Aéroports &amp; gares", footContact: "Contact",
    footLink: (name) => `Taxi &amp; VTC ${name}`,
    footMed: "🏥 Transport médical (CPAM)",
    footAddr: "📍 Gare SNCF, 73700 Bourg-Saint-Maurice",
    footRights: "Tous droits réservés",
    hubMetaTitle: "Destinations & tarifs taxi — Bourg-Saint-Maurice | ASM TAXI",
    hubMetaDesc: "Toutes les destinations d'ASM TAXI au départ de la gare de Bourg-Saint-Maurice : La Rosière, Les Arcs, Val d'Isère, Tignes, La Plagne… et aéroports de Genève, Lyon, Chambéry, Grenoble. Tarifs jour/nuit.",
    hubKicker: "Une page dédiée par trajet",
    hubH1: `Destinations <span class="gold">&amp; tarifs</span>`,
    hubLead: "Choisissez votre destination : chaque page détaille le trajet depuis la gare de Bourg-Saint-Maurice, les tarifs jour/nuit et les réponses à vos questions.",
    hubGroupStations: "Stations &amp; villages",
    hubGroupStationsH2: "Navettes stations depuis la gare de Bourg-Saint-Maurice",
    hubGroupHubs: "Longue distance",
    hubGroupHubsH2: "Aéroports, gares &amp; villes",
    cardMeta: (duree, from) => `${duree} depuis la gare BSM • dès ${from} €`,
    hubCtaTitle: "Votre destination n'est pas dans la liste ?",
    hubCtaSub: "Nous roulons partout en France et en Europe : demandez votre devis.",
    crumbAllDest: "Destinations &amp; tarifs",
    serviceType: (name) => `Taxi & VTC ${name} — transfert privé`,
  },
  en: {
    lang: "en", ogLocale: "en_GB",
    topHours: "7 days a week — 24 hrs",
    topPlace: "Bourg-Saint-Maurice SNCF train station",
    logoSmall: "Bourg-Saint-Maurice — SNCF station",
    navHome: "Home", navDest: "Destinations &amp; prices", navMed: "Medical",
    navServices: "Services", navAvis: "Reviews", navResa: "Booking",
    call: "☎ Call", quote: "Free quote",
    langBtn: (href) => `<a href="${href}" class="btn btn-lang" title="Lire ce site en français" lang="fr">🇫🇷 FR</a>`,
    infoBand: [
      ["🚖", "Door to door", "Direct private transfer — no stops, no changes"],
      ["🕐", "24/7, all year", "Day, night, Sundays and public holidays"],
      ["✈️", "Flight &amp; train tracking", "Delays absorbed, at no extra charge"],
      ["❄️", "Mountain-ready", "Winter tyres, snow chains, local driver"],
    ],
    nightCaption: "🌙 Night fares (7pm – 7am), Sundays, public holidays &amp; winter season — from",
    dayCaption: "☀️ Day fares (7am – 7pm, outside the winter season) — from",
    thRoute: (name) => `To or from ${name}`,
    thPax14: "1 to 4 passengers", thPax58: "5 to 8 passengers",
    bsmRow: "Bourg-Saint-Maurice train station",
    priceNote: `<strong>All prices are indicative “from” prices</strong>, per vehicle and per journey, luggage and ski equipment included. <strong>Good to know: on long-distance journeys (day fare above €120) there is no night or season surcharge — the night fare is the same as the day fare.</strong> On Saturdays during school holidays — the busiest days in the Tarentaise — a surcharge may apply. Your firm price is confirmed free of charge when you book, based on your exact address, the time and the season: no surprises on arrival.`,
    chipDuree: "Journey time", chipKm: "From BSM station", chipAlt: "Altitude",
    chipFrom: (n) => `from €${n}`, chipPax: "1-4 pax, day",
    crumbHome: "Home", crumbDest: "Destinations &amp; prices",
    destTitle: (name) => `Taxi &amp; Private Transfers ${name}`,
    destGoldStation: "⇄ Bourg-Saint-Maurice train station",
    destGoldHub: "⇄ Bourg-Saint-Maurice &amp; ski resorts",
    subStation: (name) => `Private transfer between Bourg-Saint-Maurice TGV station, the airports and ${name}. Punctual, comfortable, day and night — skis and luggage welcome.`,
    subHub: (name) => `Private transfer between ${name}, Bourg-Saint-Maurice and every ski resort in the Haute-Tarentaise. Punctual, comfortable, available day and night.`,
    bookBtn: "Book my taxi", seePrices: "See prices",
    yourTrip: "Your journey",
    withUs: (name) => `${name} with ASM Taxi`,
    pricesKicker: "Prices",
    pricesTitle: (name) => `Taxi &amp; transfer prices — ${name}`,
    faqKicker: "FAQ",
    faqTitle: (name) => `${name} transfers: your questions`,
    nearby: "Nearby destinations",
    allDest: "All destinations →",
    crossLink: (name) => `Taxi ${name}`,
    ctaTitle: (name) => `Book your ${name} transfer`,
    ctaSub: "Free quote, firm price confirmed before departure. Fast reply, 7 days a week.",
    ctaQuote: "Request a quote",
    footerDesc: "Taxi based at Bourg-Saint-Maurice SNCF train station and private transfers from every ski resort, train station and airport. Resort shuttles and local rides across the Haute-Tarentaise, 7 days a week, winter and summer.",
    footStations: "Ski resorts", footHubs: "Airports &amp; stations", footContact: "Contact",
    footLink: (name) => `Taxi ${name}`,
    footMed: "🏥 Medical transport (CPAM)",
    footAddr: "📍 SNCF station, 73700 Bourg-Saint-Maurice",
    footRights: "All rights reserved",
    hubMetaTitle: "Destinations & taxi prices — Bourg-Saint-Maurice | ASM TAXI",
    hubMetaDesc: "All ASM TAXI destinations from Bourg-Saint-Maurice train station: La Rosière, Les Arcs, Val d'Isère, Tignes, La Plagne… plus Geneva, Lyon, Chambéry and Grenoble airports. Day/night fares.",
    hubKicker: "A dedicated page for every route",
    hubH1: `Destinations <span class="gold">&amp; prices</span>`,
    hubLead: "Pick your destination: each page details the journey from Bourg-Saint-Maurice train station, day/night fares and answers to your questions.",
    hubGroupStations: "Ski resorts &amp; villages",
    hubGroupStationsH2: "Resort transfers from Bourg-Saint-Maurice train station",
    hubGroupHubs: "Long distance",
    hubGroupHubsH2: "Airports, train stations &amp; cities",
    cardMeta: (duree, from) => `${duree} from BSM station • from €${from}`,
    hubCtaTitle: "Can't see your destination?",
    hubCtaSub: "We drive anywhere in France and across Europe: ask for your quote.",
    crumbAllDest: "Destinations &amp; prices",
    serviceType: (name) => `Taxi & private transfer ${name}`,
  },
};

// ---------- Chemins par langue ----------
// FR : destinations/x.html, stations.html (racine du site)
// EN : en/destinations/x.html, en/stations.html
// asset = préfixe vers css/js/img ; page = préfixe vers les pages de la langue ;
// langHref = lien vers la page équivalente dans l'autre langue.
const PATHS = {
  fr: {
    destDir: "destinations",
    hubFile: "stations.html",
    destCanonical: (slug) => `${SITE.base}/destinations/${slug}.html`,
    hubCanonical: `${SITE.base}/stations.html`,
    destAsset: "../", destPage: "../",
    hubAsset: "", hubPage: "",
    destLangHref: (slug) => `../en/destinations/${slug}.html`,
    hubLangHref: "en/stations.html",
    altFr: (p) => `${SITE.base}/${p}`,
    altEn: (p) => `${SITE.base}/en/${p}`,
  },
  en: {
    destDir: "en/destinations",
    hubFile: "en/stations.html",
    destCanonical: (slug) => `${SITE.base}/en/destinations/${slug}.html`,
    hubCanonical: `${SITE.base}/en/stations.html`,
    destAsset: "../../", destPage: "../",
    hubAsset: "../", hubPage: "",
    destLangHref: (slug) => `../../destinations/${slug}.html`,
    hubLangHref: "../stations.html",
    altFr: (p) => `${SITE.base}/${p}`,
    altEn: (p) => `${SITE.base}/en/${p}`,
  },
};

const hreflang = (relPath) => `
  <link rel="alternate" hreflang="fr" href="${SITE.base}/${relPath}" />
  <link rel="alternate" hreflang="en" href="${SITE.base}/en/${relPath}" />
  <link rel="alternate" hreflang="x-default" href="${SITE.base}/${relPath}" />`;

// ---------- Fragments partagés ----------
const head = (d, loc, canonical, relPath, assetPrefix) => `<!DOCTYPE html>
<html lang="${L[loc].lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${d.metaTitle}</title>
  <meta name="description" content="${d.metaDesc}" />
  <link rel="canonical" href="${canonical}" />${hreflang(relPath)}
  <meta name="robots" content="index, follow" />
  <meta name="geo.region" content="FR-73" />
  <meta name="geo.placename" content="Bourg-Saint-Maurice" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="${L[loc].ogLocale}" />
  <meta property="og:site_name" content="${SITE.name}" />
  <meta property="og:title" content="${d.metaTitle}" />
  <meta property="og:description" content="${d.metaDesc}" />
  <meta property="og:url" content="${canonical}" />
  <link rel="icon" href="${FAVICON}" />
  <link rel="stylesheet" href="${assetPrefix}css/styles.css" />
  ${jsonLd(d, loc, canonical)}
</head>`;

function jsonLd(d, loc, canonical) {
  const t = L[loc];
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
    serviceType: t.serviceType(d.name),
    provider: {
      "@type": "TaxiService",
      name: SITE.name,
      telephone: SITE.telIntl,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc === "en" ? "Bourg-Saint-Maurice SNCF train station" : "Gare SNCF de Bourg-Saint-Maurice",
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
      { "@type": "ListItem", position: 1, name: loc === "en" ? "Home" : "Accueil", item: loc === "en" ? `${SITE.base}/en/` : `${SITE.base}/` },
      { "@type": "ListItem", position: 2, name: "Destinations", item: loc === "en" ? `${SITE.base}/en/stations.html` : `${SITE.base}/stations.html` },
      { "@type": "ListItem", position: 3, name: d.name, item: canonical },
    ],
  };
  return [serviceLd, faqLd, crumbs]
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`)
    .join("\n  ");
}

const header = (loc, assetPrefix, pagePrefix, langHref) => {
  const t = L[loc];
  return `
  <div class="topbar">
    <div class="container">
      <div class="badges">
        <span>🕐 <b>${t.topHours}</b></span>
        <span>📍 ${t.topPlace}</span>
      </div>
      <div><a href="tel:${SITE.telIntl}">☎ ${SITE.tel}</a></div>
    </div>
  </div>
  <header class="header">
    <nav class="nav">
      <a href="${pagePrefix}index.html" class="logo">
        <span class="mark">ASM</span>
        <span class="name">ASM Taxi<small>${t.logoSmall}</small></span>
      </a>
      <div class="nav-links">
        <a href="${pagePrefix}index.html">${t.navHome}</a>
        <a href="${pagePrefix}stations.html">${t.navDest}</a>
        <a href="${pagePrefix}transport-medical.html">${t.navMed}</a>
        <a href="${pagePrefix}index.html#services">${t.navServices}</a>
        <a href="${pagePrefix}index.html#avis">${t.navAvis}</a>
        <a href="${pagePrefix}index.html#devis">${t.navResa}</a>
      </div>
      <div class="nav-cta">
        <a href="tel:${SITE.telIntl}" class="btn btn-line">${t.call}</a>
        <a href="${pagePrefix}index.html#devis" class="btn btn-gold">${t.quote}</a>
        ${t.langBtn(langHref)}
      </div>
      <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </nav>
  </header>`;
};

const footer = (loc, assetPrefix, pagePrefix) => {
  const t = L[loc];
  const d = DATA[loc];
  const stationLink = (slug) => {
    const s = d.stations.find((x) => x.slug === slug);
    return `<a href="${pagePrefix}destinations/${slug}.html">${t.footLink(s ? s.name : slug)}</a>`;
  };
  const hubLink = (slug) => {
    const h = d.hubs.find((x) => x.slug === slug);
    return `<a href="${pagePrefix}destinations/${slug}.html">${h ? h.name : slug}</a>`;
  };
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="${pagePrefix}index.html" class="logo">
            <span class="mark">ASM</span>
            <span class="name">ASM Taxi<small>${t.logoSmall}</small></span>
          </a>
          <p>${t.footerDesc}</p>
        </div>
        <div>
          <h4>${t.footStations}</h4>
          ${stationLink("la-rosiere")}
          ${stationLink("les-arcs-1800")}
          ${stationLink("val-disere")}
          ${stationLink("tignes")}
          ${stationLink("la-plagne")}
          ${stationLink("courchevel")}
          <a href="${pagePrefix}stations.html">${t.allDest}</a>
        </div>
        <div>
          <h4>${t.footHubs}</h4>
          ${hubLink("geneve")}
          ${hubLink("lyon")}
          ${hubLink("chambery")}
          ${hubLink("grenoble")}
          ${hubLink("moutiers")}
        </div>
        <div>
          <h4>${t.footContact}</h4>
          <a href="tel:${SITE.telIntl}">☎ ${SITE.tel}</a>
          <a href="https://wa.me/${SITE.wa}" target="_blank" rel="noopener">💬 WhatsApp</a>
          <a href="mailto:${SITE.email}">📧 ${SITE.email}</a>
          <a href="${pagePrefix}transport-medical.html">${t.footMed}</a>
          <a>${t.footAddr}</a>
        </div>
      </div>
      <div class="footer-bottom">© <span class="js-year">2026</span> ${SITE.name} — Taxi Bourg-Saint-Maurice — ${t.footRights}</div>
    </div>
  </footer>
  <div class="floating">
    <a href="tel:${SITE.telIntl}" class="btn btn-gold">${L[loc].call}</a>
    <a href="https://wa.me/${SITE.wa}" target="_blank" rel="noopener" class="btn btn-wa">💬 WhatsApp</a>
  </div>
  <script src="${assetPrefix}js/main.js"></script>`;
};

const infoBand = (loc) => `
  <section class="bg-dark" style="padding:46px 0;">
    <div class="container">
      <div class="info-band">
        ${L[loc].infoBand
          .map(([ic, b, s]) => `<div class="info-cell"><div class="ic">${ic}</div><b>${b}</b><span>${s}</span></div>`)
          .join("\n        ")}
      </div>
    </div>
  </section>`;

// ---------- Tableaux de tarifs ----------
function tableRows(rows, col, loc) {
  return rows
    .map(
      (r) => `<tr><td>${r.label}</td><td class="price">${eur(r[col + "14"], loc)}</td><td class="price">${eur(r[col + "58"], loc)}</td></tr>`
    )
    .join("\n          ");
}

function priceTables(d, rows, loc) {
  const t = L[loc];
  return `
      <div class="price-table-wrap">
        <table class="price-table">
          <caption>${t.nightCaption}</caption>
          <thead><tr><th>${t.thRoute(d.name)}</th><th>${t.thPax14}</th><th>${t.thPax58}</th></tr></thead>
          <tbody>
          ${tableRows(rows, "n", loc)}
          </tbody>
        </table>
      </div>
      <div class="price-table-wrap">
        <table class="price-table">
          <caption>${t.dayCaption}</caption>
          <thead><tr><th>${t.thRoute(d.name)}</th><th>${t.thPax14}</th><th>${t.thPax58}</th></tr></thead>
          <tbody>
          ${tableRows(rows, "d", loc)}
          </tbody>
        </table>
      </div>
      <p class="price-note">${t.priceNote}</p>`;
}

function stationPriceRows(s, loc) {
  const d = DATA[loc];
  const rows = [{ label: L[loc].bsmRow, ...prix(s.gare14) }];
  for (const slug of HUB_ROWS) {
    const h = d.hubs.find((x) => x.slug === slug);
    rows.push({ label: h.name, ...prix(h.base + s.supplement) });
  }
  return rows;
}

function hubPriceRows(h, loc) {
  const d = DATA[loc];
  const rows = [{ label: L[loc].bsmRow, ...prix(h.base) }];
  if (h.matrix) {
    for (const slug of STATION_ROWS) {
      const s = d.stations.find((x) => x.slug === slug);
      rows.push({ label: s.name, ...prix(h.base + s.supplement) });
    }
  }
  return rows;
}

// ---------- Blocs de page ----------
const chips = (d, loc) => {
  const t = L[loc];
  const from = d.gare14 ?? d.base;
  return `
      <div class="trip-chips">
        <div class="trip-chip"><b>${d.duree}</b><span>${t.chipDuree}</span></div>
        <div class="trip-chip"><b>${d.km}</b><span>${t.chipKm}</span></div>
        ${d.altitude ? `<div class="trip-chip"><b>${d.altitude}</b><span>${t.chipAlt}</span></div>` : ""}
        <div class="trip-chip"><b>${t.chipFrom(from)}</b><span>${t.chipPax}</span></div>
      </div>`;
};

const faqBlock = (d, loc) => `
  <section class="bg-white">
    <div class="container">
      <div class="section-head center">
        <div class="kicker">${L[loc].faqKicker}</div>
        <h2>${L[loc].faqTitle(d.name)}</h2>
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

const crossLinks = (d, loc, pagePrefix) => {
  const t = L[loc];
  const all = { ...Object.fromEntries(DATA[loc].stations.map((s) => [s.slug, s])), ...Object.fromEntries(DATA[loc].hubs.map((h) => [h.slug, h])) };
  return `
      <h2>${t.nearby}</h2>
      <div class="cross-links">
        ${d.proches
          .map((slug) => {
            const x = all[slug];
            return x ? `<a class="cross-link" href="${pagePrefix}destinations/${x.slug}.html">${t.crossLink(x.name)}</a>` : "";
          })
          .join("\n        ")}
        <a class="cross-link" href="${pagePrefix}stations.html">${t.allDest}</a>
      </div>`;
};

const ctaBand = (d, loc, pagePrefix) => `
  <section style="padding-top:0;">
    <div class="container">
      <div class="cta-band">
        <h2>${L[loc].ctaTitle(d.name)}</h2>
        <p>${L[loc].ctaSub}</p>
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <a href="${pagePrefix}index.html#devis" class="btn btn-dark btn-lg">${L[loc].ctaQuote}</a>
          <a href="tel:${SITE.telIntl}" class="btn btn-dark btn-lg">☎ ${SITE.tel}</a>
        </div>
      </div>
    </div>
  </section>`;

// ---------- Page destination complète ----------
function destinationPage(d, loc) {
  const t = L[loc];
  const P = PATHS[loc];
  const isStation = "gare14" in d;
  const rows = isStation ? stationPriceRows(d, loc) : hubPriceRows(d, loc);
  const sub = isStation ? t.subStation(d.name) : t.subHub(d.name);
  const heroPhoto = photoHero(d.slug);
  const canonical = P.destCanonical(d.slug);
  return `${head(d, loc, canonical, `destinations/${d.slug}.html`, P.destAsset)}
<body>
${header(loc, P.destAsset, P.destPage, P.destLangHref(d.slug))}

  <section class="page-hero"${heroPhoto ? ` style="--photo:url('${heroPhoto}')"` : ""}>
    <div class="container">
      <div class="breadcrumb"><a href="${P.destPage}index.html">${t.crumbHome}</a> › <a href="${P.destPage}stations.html">${t.crumbDest}</a> › ${t.destTitle(d.name)}</div>
      <div class="kicker">${d.tag}</div>
      <h1>${t.destTitle(d.name)}<br /><span class="gold">${isStation ? t.destGoldStation : t.destGoldHub}</span></h1>
      <p class="lead">${sub}</p>
      ${chips(d, loc)}
      <div class="actions">
        <a href="${P.destPage}index.html#devis" class="btn btn-gold btn-lg">${t.bookBtn}</a>
        <a href="#tarifs" class="btn btn-line btn-lg">${t.seePrices}</a>
        <a href="tel:${SITE.telIntl}" class="btn btn-line btn-lg">☎ ${SITE.tel}</a>
      </div>
    </div>
  </section>

${infoBand(loc)}

  <section>
    <div class="container">
      <div class="content-prose">
        <div class="kicker">${t.yourTrip}</div>
        <h2>${t.withUs(t.destTitle(d.name))}</h2>
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
        <div class="kicker">${t.pricesKicker}</div>
        <h2>${t.pricesTitle(d.name)}</h2>
        <div class="rule"></div>
      </div>
${priceTables(d, rows, loc)}
    </div>
  </section>

${faqBlock(d, loc)}

  <section style="padding-bottom:40px;">
    <div class="container">
${crossLinks(d, loc, P.destPage)}
    </div>
  </section>

${ctaBand(d, loc, P.destPage)}
${footer(loc, P.destAsset, P.destPage)}
</body>
</html>
`;
}

// ---------- Hub « toutes les destinations » ----------
function hubPage(loc) {
  const t = L[loc];
  const P = PATHS[loc];
  const d = DATA[loc];
  const card = (x) => {
    const from = x.gare14 ?? x.base;
    const p = photoCard(x.slug);
    return `<a href="destinations/${x.slug}.html" class="dest-card"${p ? ` style="--photo:url('${p}')"` : ""}>
          <span class="tag">${x.tag}</span><span class="go">→</span>
          <div><h3>${x.name}</h3><div class="meta">${t.cardMeta(x.duree, from)}</div></div>
        </a>`;
  };
  const stations = d.stations.map((s) => card(s)).join("\n        ");
  const hubs = d.hubs.map((h) => card(h)).join("\n        ");

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.hubMetaTitle}</title>
  <meta name="description" content="${t.hubMetaDesc}" />
  <link rel="canonical" href="${P.hubCanonical}" />${hreflang("stations.html")}
  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="${t.ogLocale}" />
  <meta property="og:site_name" content="${SITE.name}" />
  <meta property="og:title" content="${t.hubMetaTitle}" />
  <meta property="og:description" content="${t.hubMetaDesc}" />
  <meta property="og:url" content="${P.hubCanonical}" />
  <link rel="icon" href="${FAVICON}" />
  <link rel="stylesheet" href="${P.hubAsset}css/styles.css" />
</head>
<body>
${header(loc, P.hubAsset, P.hubPage, P.hubLangHref)}

  <section class="page-hero">
    <div class="container">
      <div class="breadcrumb"><a href="index.html">${t.crumbHome}</a> › ${t.crumbAllDest}</div>
      <div class="kicker">${t.hubKicker}</div>
      <h1>${t.hubH1}</h1>
      <p class="lead">${t.hubLead}</p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="hub-group">
        <div class="kicker">${t.hubGroupStations}</div>
        <h2>${t.hubGroupStationsH2}</h2>
        <div class="rule" style="margin-bottom:26px;"></div>
        <div class="grid grid-3">
        ${stations}
        </div>
      </div>
      <div class="hub-group">
        <div class="kicker">${t.hubGroupHubs}</div>
        <h2>${t.hubGroupHubsH2}</h2>
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
        <h2>${t.hubCtaTitle}</h2>
        <p>${t.hubCtaSub}</p>
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <a href="index.html#devis" class="btn btn-dark btn-lg">${t.ctaQuote}</a>
          <a href="tel:${SITE.telIntl}" class="btn btn-dark btn-lg">☎ ${SITE.tel}</a>
        </div>
      </div>
    </div>
  </section>
${footer(loc, P.hubAsset, P.hubPage)}
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
    { loc: `${SITE.base}/en/index.html`, prio: "0.8" },
    { loc: `${SITE.base}/en/stations.html`, prio: "0.7" },
    { loc: `${SITE.base}/en/transport-medical.html`, prio: "0.7" },
    ...[...STATIONS, ...HUBS].map((d) => ({
      loc: `${SITE.base}/en/destinations/${d.slug}.html`,
      prio: "0.6",
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
let count = 0;
for (const loc of ["fr", "en"]) {
  const P = PATHS[loc];
  await mkdir(path.join(ROOT, P.destDir), { recursive: true });
  for (const d of [...DATA[loc].stations, ...DATA[loc].hubs]) {
    await writeFile(path.join(ROOT, P.destDir, `${d.slug}.html`), destinationPage(d, loc));
    count++;
  }
  await writeFile(path.join(ROOT, P.hubFile), hubPage(loc));
}
await writeFile(path.join(ROOT, "sitemap.xml"), sitemap());
console.log(`✔ ${count} pages destinations (FR+EN) + stations.html ×2 + sitemap.xml générés`);
