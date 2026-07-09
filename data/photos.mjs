// ============================================================
// ASM TAXI — Photos des pages (licence Unsplash : usage
// commercial autorisé, sans attribution obligatoire).
// Remplaçables par vos propres photos : mettre l'URL ou un
// chemin local (ex. "/img/la-rosiere.jpg").
// ============================================================

export const PHOTOS = {
  // Accueil
  hero: "https://images.unsplash.com/photo-1770225816712-c6ee43ac12c3",

  // Stations & villages
  "la-rosiere": "https://images.unsplash.com/photo-1602327535250-cb0b6ff77a97",
  "les-arcs-1600": "https://images.unsplash.com/photo-1595687730598-6246a33f0910",
  "les-arcs-1800": "https://images.unsplash.com/photo-1524992622325-a5b57c403ad3",
  "les-arcs-1950": "https://images.unsplash.com/photo-1546593064-053d21199be1",
  "les-arcs-2000": "https://images.unsplash.com/photo-1667899984179-cdd91b51b4c4",
  "peisey-vallandry": "https://images.unsplash.com/photo-1613254838115-2a0997be5a39",
  "la-plagne": "https://images.unsplash.com/photo-1641057159535-e18d4d7c36e0",
  "sainte-foy-tarentaise": "https://images.unsplash.com/photo-1771707685982-1fe8688f3a8f",
  "villaroger": "https://images.unsplash.com/photo-1772963352670-c40cc8dadd44",
  "tignes": "https://images.unsplash.com/photo-1649780648332-34626b90da31",
  "val-disere": "https://images.unsplash.com/photo-1706480883949-797b813aab17",
  "seez": "https://images.unsplash.com/photo-1574768202791-e7693d43be2d",
  "montvalezan": "https://images.unsplash.com/photo-1572491671313-e2bb1bf15e76",
  "les-chapieux": "https://images.unsplash.com/photo-1600818596647-9d5318c20a8a",
  "aime-la-plagne": "https://images.unsplash.com/photo-1758210606800-8b0a9f021175",

  // Aéroports, gares & villes
  geneve: "https://images.unsplash.com/photo-1755252128470-2947c8f707a8",
  lyon: "https://images.unsplash.com/photo-1741789136990-597372f86871",
  chambery: "https://images.unsplash.com/photo-1759337253775-92888c8cc905",
  grenoble: "https://images.unsplash.com/photo-1748196476298-a212b9f0097a",
  annecy: "https://images.unsplash.com/photo-1660601634773-ec3018945bc3",
  moutiers: "https://images.unsplash.com/photo-1673018646756-16767d4904da",
  albertville: "https://images.unsplash.com/photo-1664577487498-e12bab795739",

  // Transport médical
  medical: "https://images.unsplash.com/photo-1764173039743-c5c503f1a408",
};

// Helpers de taille (paramètres CDN Unsplash)
export const photoHero = (slug) => PHOTOS[slug] ? `${PHOTOS[slug]}?auto=format&fit=crop&w=1800&q=72` : null;
export const photoCard = (slug) => PHOTOS[slug] ? `${PHOTOS[slug]}?auto=format&fit=crop&w=800&q=65` : null;
