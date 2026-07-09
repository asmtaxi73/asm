// ============================================================
// ASM TAXI — Données AÉROPORTS, GARES & VILLES
// base : prix "à partir de" (1-4 passagers, jour) depuis/vers
//        la gare de Bourg-Saint-Maurice.
// matrix: true → la page affiche le tableau des tarifs depuis
//        les principales stations (base + supplement de chaque station).
// ⚠ TARIFS INDICATIFS alignés sur le marché local — à valider.
// ============================================================

export const HUBS = [
  {
    slug: "geneve",
    name: "Aéroport de Genève",
    short: "Genève",
    tag: "N°1 des transferts",
    kind: "aeroport",
    duree: "2 h 30",
    km: "165 km",
    base: 450,
    matrix: true,
    metaTitle: "Taxi Bourg-Saint-Maurice ⇄ Aéroport de Genève | ASM TAXI",
    metaDesc: "Transfert taxi entre Bourg-Saint-Maurice, les stations de Tarentaise et l'aéroport de Genève (GVA) : privé, direct, suivi de vol, 7j/7. Tarifs jour/nuit toutes stations. ☎ 07 67 67 69 81",
    intro: [
      "Première porte d'entrée internationale des stations de Tarentaise, l'<strong>aéroport de Genève-Cointrin</strong> (GVA) est notre destination la plus demandée. ASM TAXI relie Bourg-Saint-Maurice et toutes les stations voisines au terminal en un trajet direct, sans arrêt ni correspondance.",
      "Vol retardé ? Nous le voyons en temps réel et ajustons la prise en charge. À l'arrivée, votre chauffeur vous attend en zone arrivées, panneau à votre nom, et vous conduit jusqu'à votre chalet — même à minuit, même sous la neige."
    ],
    points: [
      "Trajet direct terminal ⇄ station, environ 2 h 30 depuis Bourg-Saint-Maurice",
      "Suivi de vol en temps réel : retards et avances absorbés sans frais",
      "Accueil personnalisé en zone arrivées avec panneau à votre nom",
      "Passage de frontière maîtrisé : documents, files, itinéraires malins"
    ],
    savoir: [
      { h3: "Combien de temps avant mon vol ?", p: "Nous calons le départ pour vous déposer 2 h avant un vol européen et 3 h avant un long-courrier, en intégrant la circulation du jour (les samedis d'hiver, l'autoroute A41 et la douane de Bardonnex peuvent être chargées)." },
      { h3: "Genève côté pratique", p: "L'aéroport se trouve côté Suisse mais dispose d'un secteur France. Selon votre compagnie et votre terminal, nous vous déposons au plus près du bon hall — pensez à nous indiquer votre numéro de vol à la réservation." }
    ],
    faq: [
      { q: "Combien coûte un taxi Bourg-Saint-Maurice → aéroport de Genève ?", a: "À partir de 450 € en journée pour 1 à 4 passagers (tarif indicatif). Le tableau ci-dessus donne les tarifs depuis chaque station ; demandez votre devis gratuit pour un prix ferme." },
      { q: "Que se passe-t-il si mon avion a du retard ?", a: "Nous suivons votre vol en direct : l'heure de prise en charge s'ajuste automatiquement, sans supplément. Vous ne payez jamais une attente due à l'avion." },
      { q: "Le passage de frontière pose-t-il problème ?", a: "Non : munissez-vous simplement d'une pièce d'identité en cours de validité. Votre chauffeur connaît les postes frontières et choisit le passage le plus fluide selon le trafic." }
    ],
    proches: ["lyon", "chambery", "annecy", "grenoble"]
  },

  {
    slug: "lyon",
    name: "Aéroport Lyon-Saint-Exupéry",
    short: "Lyon",
    tag: "Aéroport & gare TGV",
    kind: "aeroport",
    duree: "2 h 15",
    km: "200 km",
    base: 540,
    matrix: true,
    metaTitle: "Taxi Bourg-Saint-Maurice ⇄ Aéroport de Lyon | ASM TAXI",
    metaDesc: "Transfert taxi entre Bourg-Saint-Maurice, les stations de Tarentaise et l'aéroport Lyon-Saint-Exupéry (LYS) + gare TGV : privé, direct, suivi de vol, 7j/7. ☎ 07 67 67 69 81",
    intro: [
      "Deuxième hub des vacanciers de Tarentaise, l'<strong>aéroport Lyon-Saint-Exupéry</strong> (LYS) et sa gare TGV attenante se rejoignent en 2 h 15 environ depuis Bourg-Saint-Maurice, par un itinéraire autoroutier direct.",
      "ASM TAXI vous prend en charge à votre résidence — de Val d'Isère aux Arcs — et vous dépose devant le bon terminal. Au retour, votre chauffeur vous attend en zone arrivées, quelle que soit l'heure de votre atterrissage."
    ],
    points: [
      "Autoroute directe : le trajet le plus roulant vers un grand aéroport",
      "Terminal 1, Terminal 2 ou gare TGV : dépose au plus près",
      "Suivi des vols et des TGV en temps réel",
      "Départs très matinaux assurés pour les premiers vols (dès 3 h du matin)"
    ],
    savoir: [
      { h3: "Aéroport + TGV au même endroit", p: "Lyon-Saint-Exupéry combine aéroport international et gare TGV (Paris en 2 h) : une correspondance pratique quand les TGV neige directs sont complets. Nous assurons les deux déposes indifféremment." },
      { h3: "Le bon timing", p: "Comptez 2 h 15 de trajet hors affluence. Les samedis d'hiver, l'axe Albertville-Chambéry peut saturer : nous partons en avance et connaissons les itinéraires de délestage par la Chartreuse ou les Bauges." }
    ],
    faq: [
      { q: "Combien coûte un taxi Bourg-Saint-Maurice → aéroport de Lyon ?", a: "À partir de 540 € en journée pour 1 à 4 passagers (tarif indicatif). Consultez le tableau des tarifs depuis chaque station et demandez votre devis." },
      { q: "Pouvez-vous nous déposer à la gare TGV de Lyon-Saint-Exupéry ?", a: "Oui, la gare est intégrée à l'aéroport : même trajet, même tarif. Indiquez simplement votre train à la réservation." },
      { q: "Faites-vous les départs pour les vols de 6 h du matin ?", a: "Oui : nous partons de la station à l'heure nécessaire, y compris en pleine nuit. Le tarif de nuit s'applique avant 7 h." }
    ],
    proches: ["geneve", "chambery", "grenoble", "annecy"]
  },

  {
    slug: "chambery",
    name: "Chambéry (gare & aéroport)",
    short: "Chambéry",
    tag: "Le plus proche",
    kind: "aeroport",
    duree: "1 h 30",
    km: "105 km",
    base: 350,
    matrix: true,
    metaTitle: "Taxi Bourg-Saint-Maurice ⇄ Chambéry | ASM TAXI",
    metaDesc: "Transfert taxi entre Bourg-Saint-Maurice, les stations de Tarentaise et Chambéry : gare SNCF, aéroport Chambéry-Savoie (CMF), centre-ville. 7j/7. ☎ 07 67 67 69 81",
    intro: [
      "Préfecture de la Savoie et carrefour ferroviaire, <strong>Chambéry</strong> est la grande ville la plus proche de la Haute-Tarentaise : 1 h 30 de route environ depuis Bourg-Saint-Maurice. ASM TAXI dessert sa gare SNCF, l'aéroport Chambéry-Savoie-Mont-Blanc (CMF) et le centre-ville.",
      "Correspondances TGV, vols saisonniers britanniques, rendez-vous médicaux au centre hospitalier Métropole Savoie, démarches administratives : le trajet Bourg ⇄ Chambéry fait partie de notre quotidien."
    ],
    points: [
      "Le transfert aéroport/gare le plus court — et le plus économique",
      "Gare SNCF, aéroport CMF et hôpital desservis",
      "Correspondances serrées assurées grâce au suivi des trains",
      "Aller-retour dans la demi-journée possible pour vos rendez-vous"
    ],
    savoir: [
      { h3: "L'aéroport de Chambéry", p: "CMF est l'aéroport « neige » par excellence : ses vols saisonniers (Royaume-Uni notamment) atterrissent à 1 h 30 des pistes. Attention, l'activité y est concentrée sur les samedis d'hiver — réservez votre transfert tôt." },
      { h3: "La gare de Chambéry", p: "Quand les TGV directs pour Bourg-Saint-Maurice sont complets ou hors saison, passer par Chambéry est la meilleure alternative : trains fréquents depuis Paris et Lyon, puis 1 h 30 de taxi jusqu'à votre station." }
    ],
    faq: [
      { q: "Combien coûte un taxi Bourg-Saint-Maurice → Chambéry ?", a: "À partir de 350 € en journée pour 1 à 4 passagers (tarif indicatif), gare ou aéroport. Voir le tableau pour les départs depuis les stations." },
      { q: "Assurez-vous les transferts vers l'hôpital de Chambéry ?", a: "Oui, nous réalisons les trajets vers le centre hospitalier Métropole Savoie et les cliniques, à l'aller comme au retour." },
      { q: "Chambéry ou Genève : quel aéroport choisir ?", a: "Chambéry est plus proche (1 h 30 contre 2 h 30) mais propose moins de vols. Genève offre plus de fréquences et de destinations. À trajets égaux, Chambéry est le plus économique en taxi." }
    ],
    proches: ["annecy", "geneve", "grenoble", "albertville"]
  },

  {
    slug: "grenoble",
    name: "Aéroport de Grenoble",
    short: "Grenoble",
    tag: "Aéroport & ville",
    kind: "aeroport",
    duree: "2 h 15",
    km: "190 km",
    base: 540,
    matrix: true,
    metaTitle: "Taxi Bourg-Saint-Maurice ⇄ Grenoble | ASM TAXI",
    metaDesc: "Transfert taxi entre Bourg-Saint-Maurice, les stations de Tarentaise et Grenoble : aéroport Grenoble-Alpes-Isère (GNB), gare, centre-ville. 7j/7. ☎ 07 67 67 69 81",
    intro: [
      "L'<strong>aéroport Grenoble-Alpes-Isère</strong> (GNB) accueille chaque hiver des dizaines de vols charter et low-cost venus du Royaume-Uni et d'Europe du Nord. ASM TAXI le relie à Bourg-Saint-Maurice et aux stations de Tarentaise en 2 h 15 environ.",
      "Nous desservons également la gare de Grenoble et le centre-ville — pratique pour les étudiants, les rendez-vous professionnels au sein de la métropole ou les correspondances ferroviaires."
    ],
    points: [
      "Vols hiver UK & Europe du Nord : nous connaissons les pics du samedi",
      "Aéroport GNB, gare SNCF et centre-ville desservis",
      "Suivi de vol en temps réel, accueil panneau en zone arrivées",
      "Itinéraire autoroutier direct par la combe de Savoie"
    ],
    savoir: [
      { h3: "Un aéroport very British", p: "GNB fonctionne surtout l'hiver, avec une clientèle majoritairement britannique en route vers les stations. Les transferts s'y concentrent le samedi : réservez plusieurs semaines à l'avance pour les vacances de février. English spoken!" },
      { h3: "Grenoble ville", p: "Capitale des Alpes à 2 h de la Tarentaise, Grenoble concentre CHU, université et entreprises. Nous assurons les liaisons médicales, professionnelles et étudiantes depuis toute la vallée." }
    ],
    faq: [
      { q: "Combien coûte un taxi Bourg-Saint-Maurice → aéroport de Grenoble ?", a: "À partir de 540 € en journée pour 1 à 4 passagers (tarif indicatif). Le tableau détaille les tarifs depuis chaque station." },
      { q: "Mon vol arrive samedi à GNB en février : faut-il réserver longtemps à l'avance ?", a: "Oui, les samedis d'hiver sont très demandés. Réservez dès l'achat de vos billets — nous garantissons alors votre créneau, vol suivi en temps réel." },
      { q: "Desservez-vous le CHU de Grenoble ?", a: "Oui, nous assurons les trajets vers le CHU Grenoble-Alpes et les cliniques de l'agglomération." }
    ],
    proches: ["chambery", "lyon", "geneve", "albertville"]
  },

  {
    slug: "annecy",
    name: "Annecy",
    short: "Annecy",
    tag: "Lac & montagne",
    kind: "ville",
    duree: "2 h 00",
    km: "130 km",
    base: 420,
    matrix: true,
    metaTitle: "Taxi Bourg-Saint-Maurice ⇄ Annecy | ASM TAXI",
    metaDesc: "Transfert taxi entre Bourg-Saint-Maurice, les stations de Tarentaise et Annecy : gare, vieille ville, lac, aéroport Annecy Mont-Blanc. 7j/7. ☎ 07 67 67 69 81",
    intro: [
      "La « Venise des Alpes » et son lac turquoise se rejoignent en 2 heures environ depuis Bourg-Saint-Maurice. ASM TAXI relie la Tarentaise à <strong>Annecy</strong> : gare, vieille ville, rives du lac et aéroport Annecy Mont-Blanc.",
      "Escapade en amoureux, correspondance ferroviaire, rendez-vous professionnel ou navette vers un séminaire au bord du lac : nous organisons votre trajet porte à porte, à l'aller comme au retour."
    ],
    points: [
      "Excursions à la journée depuis les stations : lac, vieille ville, marchés",
      "Gare d'Annecy : correspondances TER/TGV vers Genève et Paris",
      "Séminaires et événements au bord du lac : navettes groupes jusqu'à 8",
      "Itinéraire panoramique par le massif des Bauges ou l'autoroute"
    ],
    savoir: [
      { h3: "Annecy depuis les stations", p: "Comptez 2 h depuis Bourg-Saint-Maurice, 2 h 30 depuis Val d'Isère ou Tignes. Une excursion à la journée est tout à fait envisageable : nous vous déposons au bord du lac le matin et vous récupérons en fin de journée." },
      { h3: "L'aéroport d'Annecy", p: "Annecy Mont-Blanc (NCY) accueille l'aviation d'affaires et quelques liaisons saisonnières. Nous assurons les transferts jets privés vers toutes les stations de Tarentaise, avec accueil au pied de l'avion quand l'opérateur le permet." }
    ],
    faq: [
      { q: "Combien coûte un taxi Bourg-Saint-Maurice → Annecy ?", a: "À partir de 420 € en journée pour 1 à 4 passagers (tarif indicatif)." },
      { q: "Proposez-vous des excursions à la journée vers Annecy ?", a: "Oui : dépose le matin, récupération le soir, à l'heure convenue. Tarif aller-retour préférentiel — demandez votre devis." },
      { q: "Assurez-vous les transferts depuis l'aéroport d'affaires d'Annecy ?", a: "Oui, nous prenons en charge les passagers de l'aviation d'affaires (NCY) vers Val d'Isère, Courchevel, Les Arcs et toute la Tarentaise." }
    ],
    proches: ["geneve", "chambery", "albertville", "lyon"]
  },

  {
    slug: "moutiers",
    name: "Gare de Moûtiers",
    short: "Moûtiers",
    tag: "Gare des 3 Vallées",
    kind: "gare",
    duree: "30 min",
    km: "28 km",
    base: 90,
    matrix: false,
    metaTitle: "Taxi Bourg-Saint-Maurice ⇄ Gare de Moûtiers | ASM TAXI",
    metaDesc: "Taxi entre Bourg-Saint-Maurice et la gare de Moûtiers-Salins-Brides-les-Bains : correspondances TGV, liaisons vallée, 7j/7. ☎ 07 67 67 69 81",
    intro: [
      "Porte d'entrée des 3 Vallées, la <strong>gare de Moûtiers-Salins-Brides-les-Bains</strong> voit passer chaque samedi d'hiver des milliers de skieurs. À 30 minutes de Bourg-Saint-Maurice, elle offre souvent des TGV supplémentaires quand ceux de Bourg sont complets.",
      "Correspondance manquée, train dérouté, arrivée à Moûtiers plutôt qu'à Bourg : ASM TAXI assure la liaison entre les deux gares et vers toutes les stations de Haute-Tarentaise, à toute heure."
    ],
    points: [
      "Liaison gare de Moûtiers ⇄ Bourg-Saint-Maurice en 30 minutes",
      "Plan B malin quand les TGV de Bourg sont complets",
      "Curistes : dessert Brides-les-Bains et La Léchère",
      "Correspondances de nuit assurées sur réservation"
    ],
    savoir: [
      { h3: "Moûtiers, le hub ferroviaire de la Tarentaise", p: "Presque tous les trains de la ligne s'y arrêtent : Eurostar des neiges, TGV, TER. Si votre train ne monte pas jusqu'à Bourg-Saint-Maurice, nous prenons le relais à Moûtiers — réservez avec votre numéro de train, nous surveillons les retards." },
      { h3: "Autour de Moûtiers", p: "Brides-les-Bains (thermes et porte de Méribel), Salins-les-Thermes, La Léchère-les-Bains : le bassin de Moûtiers est aussi une destination bien-être. Nous y conduisons curistes et vacanciers toute l'année." }
    ],
    faq: [
      { q: "Combien coûte un taxi entre Moûtiers et Bourg-Saint-Maurice ?", a: "À partir de 90 € en journée pour 1 à 4 passagers (tarif indicatif)." },
      { q: "Mon TGV arrive à Moûtiers, pouvez-vous me monter aux Arcs ?", a: "Oui, comptez environ 55 minutes jusqu'à Arc 1800. Tarif sur devis selon la station — réservez avec votre numéro de train." },
      { q: "Assurez-vous les arrivées tardives à Moûtiers ?", a: "Oui, sur réservation, y compris pour les trains de nuit et les correspondances après 22 h." }
    ],
    proches: ["aime-la-plagne", "la-plagne", "albertville", "chambery"]
  },

  {
    slug: "albertville",
    name: "Albertville",
    short: "Albertville",
    tag: "Ville olympique",
    kind: "ville",
    duree: "50 min",
    km: "55 km",
    base: 140,
    matrix: false,
    metaTitle: "Taxi Bourg-Saint-Maurice ⇄ Albertville | ASM TAXI",
    metaDesc: "Taxi entre Bourg-Saint-Maurice et Albertville : hôpital, gare, centre-ville, zones commerciales. Courses médicales et privées 7j/7. ☎ 07 67 67 69 81",
    intro: [
      "Ville olympique et carrefour de la Tarentaise, du Beaufortain et du Val d'Arly, <strong>Albertville</strong> concentre les services du bassin : hôpital, gare, administrations, zones commerciales. ASM TAXI y descend en 50 minutes depuis Bourg-Saint-Maurice.",
      "Rendez-vous médical au centre hospitalier Albertville-Moûtiers, correspondance ferroviaire, shopping ou démarche administrative : nous organisons l'aller-retour à votre rythme, en toute ponctualité."
    ],
    points: [
      "Centre hospitalier Albertville-Moûtiers (CHAM) desservi quotidiennement",
      "Gare SNCF : correspondances TER vers Annecy et Chambéry",
      "Attente possible sur place pour vos rendez-vous (aller-retour)",
      "Halle olympique, zones commerciales et administrations"
    ],
    savoir: [
      { h3: "Vos rendez-vous médicaux", p: "Nous conduisons régulièrement des patients de Haute-Tarentaise vers le CHAM et les cabinets d'Albertville. Sur demande, votre chauffeur vous attend pendant la consultation et vous ramène — un seul devis, zéro stress." },
      { h3: "Albertville pratique", p: "À mi-chemin entre les stations et les grandes villes, Albertville est aussi une étape : gare routière, locations de matériel moins chères, hypermarchés. L'aller-retour dans la demi-journée est courant — parlez-nous de votre programme." }
    ],
    faq: [
      { q: "Combien coûte un taxi Bourg-Saint-Maurice → Albertville ?", a: "À partir de 140 € en journée pour 1 à 4 passagers (tarif indicatif)." },
      { q: "Pouvez-vous m'attendre pendant mon rendez-vous à l'hôpital ?", a: "Oui, nous proposons la mise à disposition avec attente et retour : demandez un devis aller-retour, souvent plus avantageux que deux courses séparées." },
      { q: "Desservez-vous le Beaufortain depuis Albertville ?", a: "Oui, sur demande : Beaufort, Arêches-Beaufort et le lac de Roselend font partie de nos destinations estivales." }
    ],
    proches: ["moutiers", "chambery", "annecy", "aime-la-plagne"]
  }
];
