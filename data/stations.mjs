// ============================================================
// ASM TAXI — Données des STATIONS & VILLAGES desservis
// Chaque entrée génère une page destinations/<slug>.html
// Prix : "à partir de", en euros, 1 à 4 passagers, tarif JOUR,
//        au départ de la gare SNCF de Bourg-Saint-Maurice.
// supplement : ajout au prix de base des aéroports/gares (hubs),
//   calculé à 3,45 €/km (station → gare BSM), arrondi aux 5 €.
//   Le trajet gare BSM → destination est à 2,35 €/km (voir hubs.mjs).
// ============================================================

export const STATIONS = [
  {
    slug: "la-rosiere",
    name: "La Rosière",
    tag: "Espace San Bernardo",
    kind: "station",
    altitude: "1 850 m",
    duree: "30 min",
    km: "22 km",
    gare14: 90,
    supplement: 75,
    metaTitle: "Taxi & VTC La Rosière ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et La Rosière (Espace San Bernardo) : transfert privé 7j/7, skis et bagages, tarifs jour/nuit. Aussi depuis Genève, Lyon, Chambéry. ☎ 07 67 67 69 81",
    intro: [
      "Vous arrivez en TGV à la gare de Bourg-Saint-Maurice et vous cherchez un <strong>taxi pour La Rosière</strong> ? ASM TAXI vous conduit en 30 minutes environ jusqu'à la station, directement devant votre chalet, votre résidence ou les remontées mécaniques.",
      "Perchée à 1 850 m d'altitude, face au Mont-Blanc, La Rosière est reliée à l'Italie par le domaine international de l'<strong>Espace San Bernardo</strong>. Sa montée en lacets depuis Séez demande une vraie habitude de la conduite en montagne : nos véhicules équipés hiver l'empruntent tous les jours de la saison."
    ],
    points: [
      "Prise en charge à votre descente du train, panneau à votre nom",
      "Dépose au pied de votre résidence, même dans les hameaux (Les Eucherts, Le Gollet)",
      "Coffre équipé pour skis, snowboards et bagages volumineux",
      "Retour station → gare garanti à l'heure pour votre TGV"
    ],
    savoir: [
      { h3: "Le trajet gare de Bourg-Saint-Maurice → La Rosière", p: "Comptez environ 30 minutes pour 22 km, par la D1090 puis la montée des lacets après Séez. Les samedis d'hiver en période de vacances scolaires, prévoyez une marge supplémentaire : nous adaptons l'horaire de prise en charge en conséquence." },
      { h3: "L'été à La Rosière", p: "La station est aussi une porte d'entrée du col du Petit-Saint-Bernard vers l'Italie. Nous assurons vos transferts estivaux : randonnées, cyclisme (montée mythique), excursions à La Thuile et Aoste." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à La Rosière ?", a: "À partir de 90 € en journée pour 1 à 4 passagers (tarif indicatif). Le tarif exact dépend de l'horaire, du nombre de passagers et de votre adresse exacte : demandez votre devis gratuit." },
      { q: "Le taxi monte-t-il jusqu'aux Eucherts ?", a: "Oui, nous vous déposons au plus près de votre logement, aux Eucherts comme dans tous les quartiers de La Rosière, y compris en soirée." },
      { q: "Peut-on réserver un taxi La Rosière → aéroport de Genève ?", a: "Bien sûr : comptez à partir de 465 € (1-4 passagers, jour et nuit). Nous suivons votre vol et adaptons l'horaire de départ à la circulation du jour." }
    ],
    proches: ["seez", "montvalezan", "sainte-foy-tarentaise", "les-arcs-1800"]
  },

  {
    slug: "les-arcs-1600",
    name: "Les Arcs 1600",
    tag: "Paradiski",
    kind: "station",
    altitude: "1 600 m",
    duree: "20 min",
    km: "12 km",
    gare14: 60,
    supplement: 40,
    metaTitle: "Taxi & VTC Les Arcs 1600 ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Les Arcs 1600 (Arc Pierre Blanche) : transfert privé 7j/7, plus souple que le funiculaire, dépose devant votre résidence. ☎ 07 67 67 69 81",
    intro: [
      "Village historique des Arcs relié à Bourg-Saint-Maurice par le funiculaire, <strong>Arc 1600</strong> se rejoint aussi très simplement en taxi : 20 minutes de route et vous êtes déposé directement devant votre résidence, avec tous vos bagages.",
      "Contrairement au funiculaire, le taxi vous emmène de porte à porte, sans horaires imposés, sans porter les valises et les skis, et dessert tous les quartiers d'Arc 1600 — pratique en famille ou chargé de matériel."
    ],
    points: [
      "20 minutes seulement depuis la gare SNCF de Bourg-Saint-Maurice",
      "Porte-à-porte : plus simple que le funiculaire avec bagages et enfants",
      "Disponible tôt le matin et tard le soir, quand le funiculaire ne circule plus",
      "Liaison directe avec Arc 1800, 1950 et 2000 pendant votre séjour"
    ],
    savoir: [
      { h3: "Taxi ou funiculaire ?", p: "Le funiculaire relie la gare à Arc 1600 en 7 minutes, mais il faut ensuite rejoindre votre résidence à pied ou en navette. En taxi, vous partez quand vous voulez et arrivez exactement à destination — le bon choix avec des bagages, du matériel ou des enfants fatigués." },
      { h3: "Paradiski au départ d'Arc 1600", p: "Arc 1600 donne accès à l'ensemble du domaine Paradiski (425 km de pistes avec Les Arcs, Peisey-Vallandry et La Plagne). Nous assurons aussi vos liaisons entre stations du domaine." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à Arc 1600 ?", a: "À partir de 60 € en journée pour 1 à 4 passagers (tarif indicatif). Devis gratuit et prix ferme à la réservation." },
      { q: "Le taxi circule-t-il quand le funiculaire est fermé ?", a: "Oui, nous roulons 7j/7, y compris tôt le matin, tard le soir et hors saison, quels que soient les horaires du funiculaire." },
      { q: "Pouvez-vous nous conduire d'Arc 1600 à l'aéroport de Genève ?", a: "Oui, à partir de 430 € (1-4 passagers, jour et nuit), avec suivi de votre vol et départ adapté à la circulation." }
    ],
    proches: ["les-arcs-1800", "les-arcs-1950", "les-arcs-2000", "villaroger"]
  },

  {
    slug: "les-arcs-1800",
    name: "Les Arcs 1800",
    tag: "Paradiski",
    kind: "station",
    altitude: "1 800 m",
    duree: "25 min",
    km: "15 km",
    gare14: 70,
    supplement: 50,
    metaTitle: "Taxi & VTC Les Arcs 1800 ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Les Arcs 1800 : transfert privé 7j/7 vers Charvet, Villards, Charmettoger, Chantel. Skis et bagages bienvenus. ☎ 07 67 67 69 81",
    intro: [
      "Cœur battant des Arcs, <strong>Arc 1800</strong> concentre commerces, résidences et départs de pistes vers l'immense domaine Paradiski. Depuis la gare TGV de Bourg-Saint-Maurice, ASM TAXI vous y conduit en 25 minutes environ.",
      "Le Charvet, Les Villards, Charmettoger, Le Chantel : nous connaissons chaque quartier et chaque résidence d'Arc 1800, et nous vous déposons au plus près de votre porte, même pendant les grosses journées de rotation du samedi."
    ],
    points: [
      "Dépose précise dans tous les quartiers : Charvet, Villards, Charmettoger, Chantel",
      "Idéal les samedis de forte affluence : vous évitez l'attente des navettes",
      "Coffre grand volume pour skis, snowboards et poussettes",
      "Trajets de nuit possibles : arrivées TGV tardives, départs matinaux"
    ],
    savoir: [
      { h3: "Le trajet gare → Arc 1800", p: "15 km de montée régulière par la route des Arcs. Comptez 25 minutes hors affluence. Les samedis d'hiver, la route peut être chargée : nous anticipons votre horaire de prise en charge pour que vous ne manquiez jamais un train ou un vol." },
      { h3: "Arc 1800, camp de base Paradiski", p: "Avec le Transarc et la liaison Vanoise Express (via Peisey-Vallandry), Arc 1800 est l'un des meilleurs points de chute pour explorer les 425 km de pistes de Paradiski. Nous assurons aussi vos transferts inter-stations." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice aux Arcs 1800 ?", a: "À partir de 70 € en journée pour 1 à 4 passagers (tarif indicatif). Le prix ferme vous est confirmé à la réservation." },
      { q: "Combien de temps faut-il pour monter à Arc 1800 ?", a: "Environ 25 minutes en conditions normales. Les samedis de vacances scolaires, nous prévoyons une marge supplémentaire." },
      { q: "Assurez-vous les transferts Arc 1800 → aéroport de Lyon ?", a: "Oui, à partir de 520 € (1-4 passagers, jour et nuit), départ de votre résidence avec suivi de vol." }
    ],
    proches: ["les-arcs-1600", "les-arcs-1950", "peisey-vallandry", "la-rosiere"]
  },

  {
    slug: "les-arcs-1950",
    name: "Les Arcs 1950",
    tag: "Paradiski",
    kind: "station",
    altitude: "1 950 m",
    duree: "30 min",
    km: "17 km",
    gare14: 80,
    supplement: 60,
    metaTitle: "Taxi & VTC Les Arcs 1950 ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Arc 1950 le Village : transfert privé haut de gamme 7j/7, dépose au plus près de votre résidence. ☎ 07 67 67 69 81",
    intro: [
      "Village piéton au charme soigné, <strong>Arc 1950</strong> mérite une arrivée à la hauteur : ASM TAXI vous dépose à l'entrée du village, bagages pris en charge, après 30 minutes de route panoramique depuis la gare de Bourg-Saint-Maurice.",
      "Résidences premium, ruelles piétonnes, skis aux pieds : Arc 1950 est pensé pour des vacances sans voiture. Le taxi est la façon la plus simple d'y arriver et d'en repartir, à n'importe quelle heure."
    ],
    points: [
      "Dépose au plus près des conciergeries et résidences du village",
      "Service soigné : véhicule confortable, aide aux bagages",
      "Liaisons directes avec les aéroports de Genève, Lyon, Chambéry et Grenoble",
      "Disponible pour vos soirées : restaurants d'altitude, Bourg-Saint-Maurice by night"
    ],
    savoir: [
      { h3: "Arriver à Arc 1950 en taxi", p: "Le village étant piéton, nous vous déposons aux accès prévus, au plus près de votre résidence — votre conciergerie prend généralement le relais pour les bagages. Précisez le nom de votre résidence à la réservation." },
      { h3: "Entre Arc 1950 et Arc 2000", p: "Les deux stations se touchent et partagent le haut du domaine des Arcs, sous l'Aiguille Rouge (3 226 m). Nous desservons les deux, hiver comme été." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à Arc 1950 ?", a: "À partir de 80 € en journée pour 1 à 4 passagers (tarif indicatif). Demandez votre devis gratuit pour un prix ferme." },
      { q: "Peut-on entrer dans Arc 1950 en voiture ?", a: "Le cœur du village est piéton : nous vous déposons à l'accès le plus proche de votre résidence, où votre conciergerie peut réceptionner les bagages." },
      { q: "Proposez-vous des transferts de nuit depuis Arc 1950 ?", a: "Oui, 7j/7 y compris la nuit — pratique pour les vols matinaux au départ de Genève ou Lyon. Le tarif de nuit s'applique de 19h à 7h." }
    ],
    proches: ["les-arcs-2000", "les-arcs-1800", "les-arcs-1600", "villaroger"]
  },

  {
    slug: "les-arcs-2000",
    name: "Les Arcs 2000",
    tag: "Paradiski",
    kind: "station",
    altitude: "2 000 m",
    duree: "35 min",
    km: "18 km",
    gare14: 85,
    supplement: 60,
    metaTitle: "Taxi & VTC Les Arcs 2000 ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Les Arcs 2000 : transfert privé 7j/7 au pied de l'Aiguille Rouge, véhicule équipé neige. ☎ 07 67 67 69 81",
    intro: [
      "Au pied de l'Aiguille Rouge et de ses 3 226 m, <strong>Arc 2000</strong> est le point culminant du domaine des Arcs. ASM TAXI relie la gare TGV de Bourg-Saint-Maurice à la station en 35 minutes environ, quelles que soient les conditions.",
      "La route d'Arc 2000 est la plus haute de la vallée : neige fréquente, virages serrés, brouillard possible. Chauffeur local, pneus hiver, chaînes à bord — vous montez sereinement pendant que d'autres hésitent sur le bas-côté."
    ],
    points: [
      "Véhicule équipé montagne : pneus neige, chaînes, conduite expérimentée",
      "Dépose devant votre résidence, du Chalet des Neiges aux pieds de pistes",
      "Idéal pour les arrivées tardives : la route est à nous, pas d'attente navette",
      "Descente garantie à l'heure pour votre TGV ou votre vol, même par chutes de neige"
    ],
    savoir: [
      { h3: "La route d'Arc 2000 en hiver", p: "C'est la montée la plus exigeante du secteur : au-dessus d'Arc 1950, la route s'élève au-dessus de 2 000 m. Nous roulons dessus quotidiennement tout l'hiver et partons toujours avec la marge nécessaire par météo difficile." },
      { h3: "L'été à Arc 2000", p: "VTT de descente, randonnées vers l'Aiguille Rouge, cols mythiques : la station vit aussi l'été. Nous assurons vos transferts estivaux depuis la gare et les aéroports." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à Arc 2000 ?", a: "À partir de 85 € en journée pour 1 à 4 passagers (tarif indicatif). Prix ferme communiqué à la réservation." },
      { q: "Montez-vous à Arc 2000 quand il neige fort ?", a: "Oui : véhicule équipé (pneus hiver, chaînes) et chauffeur habitué à la route. En cas de conditions exceptionnelles, nous anticipons le départ pour garantir votre correspondance." },
      { q: "Quel est le prix d'un transfert Arc 2000 → aéroport de Genève ?", a: "À partir de 450 € pour 1 à 4 passagers, jour et nuit, prise en charge devant votre résidence, suivi de vol inclus." }
    ],
    proches: ["les-arcs-1950", "les-arcs-1800", "villaroger", "la-rosiere"]
  },

  {
    slug: "peisey-vallandry",
    name: "Peisey-Vallandry",
    tag: "Paradiski",
    kind: "station",
    altitude: "1 600 m",
    duree: "25 min",
    km: "14 km",
    gare14: 70,
    supplement: 50,
    metaTitle: "Taxi & VTC Peisey-Vallandry ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Peisey-Vallandry (Vanoise Express) : transfert privé 7j/7 vers Plan Peisey, Vallandry, Peisey-Nancroix. ☎ 07 67 67 69 81",
    intro: [
      "Entre Les Arcs et La Plagne, au départ du spectaculaire <strong>Vanoise Express</strong>, Peisey-Vallandry combine villages authentiques et accès direct aux 425 km de pistes de Paradiski. Depuis la gare de Bourg-Saint-Maurice, comptez 25 minutes de taxi.",
      "Plan Peisey, Vallandry, Peisey-Nancroix, Moulin : les hameaux sont dispersés et les navettes rares en soirée — le taxi reste le moyen le plus simple d'arriver exactement où vous logez, à l'heure que vous choisissez."
    ],
    points: [
      "Dépose dans tous les hameaux : Plan Peisey, Vallandry, Peisey, Nancroix, Moulin",
      "Accès direct au Vanoise Express et au domaine Paradiski",
      "Parfait pour les lodges et chalets isolés, mal desservis par les navettes",
      "Transferts été : Parc national de la Vanoise, Les Lanches, Rosuel"
    ],
    savoir: [
      { h3: "Un territoire, plusieurs villages", p: "Peisey-Vallandry regroupe des hameaux étagés entre 1 300 et 1 600 m. Indiquez précisément votre hébergement à la réservation : nous vous déposons au plus près, y compris dans les hameaux hauts." },
      { h3: "Porte du Parc de la Vanoise", p: "L'été, la vallée de Rosuel est l'un des plus beaux accès au Parc national de la Vanoise. Nous déposons randonneurs et trailers au départ des sentiers." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à Peisey-Vallandry ?", a: "À partir de 70 € en journée pour 1 à 4 passagers (tarif indicatif), selon le hameau de destination." },
      { q: "Desservez-vous Peisey-Nancroix et Rosuel ?", a: "Oui, nous montons jusqu'à Nancroix et, l'été, jusqu'au refuge porte de Rosuel pour vos départs de randonnée en Vanoise." },
      { q: "Quel est le tarif Peisey-Vallandry → aéroport de Genève ?", a: "À partir de 440 € (1-4 passagers, jour et nuit), prise en charge à votre hébergement, suivi de vol inclus." }
    ],
    proches: ["les-arcs-1800", "la-plagne", "les-arcs-1600", "aime-la-plagne"]
  },

  {
    slug: "la-plagne",
    name: "La Plagne",
    tag: "Paradiski",
    kind: "station",
    altitude: "1 250 – 2 100 m",
    duree: "45 min",
    km: "32 km",
    gare14: 110,
    supplement: 110,
    metaTitle: "Taxi & VTC La Plagne ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre Bourg-Saint-Maurice et La Plagne (11 villages, Paradiski) : transfert privé 7j/7 vers Plagne Centre, Belle Plagne, Montchavin, Champagny… ☎ 07 67 67 69 81",
    intro: [
      "Avec ses <strong>11 villages</strong> étagés de 1 250 à 2 100 m, La Plagne est l'un des plus grands terrains de jeu des Alpes. ASM TAXI dessert chacun d'eux depuis la gare de Bourg-Saint-Maurice ou la gare d'Aime-la-Plagne, en 35 à 50 minutes selon le village.",
      "Plagne Centre, Belle Plagne, Plagne Bellecôte, Aime 2000, Plagne Soleil, Plagne Villages, Plagne 1800, Montalbert, Montchavin, Les Coches, Champagny-en-Vanoise : dites-nous où vous logez, nous vous y conduisons directement."
    ],
    points: [
      "Les 11 villages de La Plagne desservis, hiver comme été",
      "Prise en charge gare de Bourg-Saint-Maurice ou gare d'Aime-la-Plagne",
      "Liaison Vanoise Express : nous relions aussi Les Arcs et Peisey",
      "Groupes jusqu'à 8 passagers avec skis et bagages"
    ],
    savoir: [
      { h3: "Quelle gare pour La Plagne ?", p: "La gare d'Aime-la-Plagne est la plus proche des villages de La Plagne, mais de nombreux TGV s'arrêtent à Bourg-Saint-Maurice. Nous assurons le transfert depuis les deux gares — indiquez simplement votre train, nous optimisons le trajet." },
      { h3: "Bobsleigh, Vanoise, glacier", p: "La Plagne, c'est aussi la seule piste de bobsleigh olympique de France (La Roche), le glacier de Bellecôte et les balcons de Champagny-le-Haut en Vanoise. Nous vous y emmenons toute l'année." }
    ],
    faq: [
      { q: "Combien coûte un taxi de Bourg-Saint-Maurice à La Plagne ?", a: "À partir de 110 € en journée pour 1 à 4 passagers selon le village de destination (tarif indicatif). Depuis la gare d'Aime, le tarif est plus bas : demandez votre devis." },
      { q: "Desservez-vous Montchavin et Les Coches ?", a: "Oui, ainsi que Champagny-en-Vanoise et tous les villages du versant. Précisez votre résidence à la réservation." },
      { q: "Quel est le prix d'un transfert La Plagne → aéroport de Genève ?", a: "À partir de 500 € pour 1 à 4 passagers, jour et nuit, depuis votre village de La Plagne, suivi de vol inclus." }
    ],
    proches: ["aime-la-plagne", "peisey-vallandry", "les-arcs-1800", "moutiers"]
  },

  {
    slug: "courchevel",
    name: "Courchevel",
    tag: "Les 3 Vallées",
    kind: "station",
    altitude: "1 850 m",
    duree: "1 h 05",
    km: "50 km",
    gare14: 160,
    supplement: 170,
    metaTitle: "Taxi & VTC Courchevel ⇄ Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi et VTC entre Bourg-Saint-Maurice, la gare de Moûtiers et Courchevel (Les 3 Vallées) : transfert privé 7j/7, skis et bagages, tarifs jour/nuit. Aussi depuis Genève, Lyon, Chambéry. ☎ 07 67 67 69 81",
    intro: [
      "Station emblématique des <strong>3 Vallées</strong>, le plus grand domaine skiable du monde, Courchevel s'étage de 1 300 à 1 850 m d'altitude. ASM TAXI vous y conduit depuis la gare de Bourg-Saint-Maurice, la gare TGV de Moûtiers ou directement depuis les aéroports.",
      "Du Praz à Courchevel 1850, chaque niveau de la station a son ambiance : nous vous déposons devant votre hôtel, votre chalet ou les remontées mécaniques, quel que soit le quartier."
    ],
    points: [
      "Prise en charge à la gare de Bourg-Saint-Maurice ou de Moûtiers",
      "Dépose devant votre hôtel ou chalet, du Praz à Courchevel 1850",
      "Coffre équipé pour skis, snowboards et bagages volumineux",
      "Liaisons avec toutes les stations de Tarentaise pendant votre séjour"
    ],
    savoir: [
      { h3: "Le trajet Bourg-Saint-Maurice → Courchevel", p: "Comptez environ 1 h 05 pour 50 km : la vallée jusqu'à Moûtiers puis la montée par Saint-Bon vers les niveaux de Courchevel. Les samedis d'hiver, la circulation en vallée peut rallonger le trajet : nous partons toujours avec la marge nécessaire." },
      { h3: "Arrivée en TGV : Moûtiers ou Bourg-Saint-Maurice ?", p: "La gare de Moûtiers-Salins est la plus proche de Courchevel (25 minutes environ). Nous assurons vos transferts depuis les deux gares — indiquez simplement votre train à la réservation." }
    ],
    faq: [
      { q: "Combien coûte un taxi de Bourg-Saint-Maurice à Courchevel ?", a: "À partir de 160 € en journée hors saison d'hiver pour 1 à 4 passagers (tarif indicatif). Demandez votre devis gratuit : le prix ferme est confirmé avant le départ." },
      { q: "Desservez-vous tous les niveaux de Courchevel ?", a: "Oui : Courchevel 1850, Moriond 1650, Le Village 1550, Le Praz et La Tania. Nous vous déposons à l'adresse exacte de votre séjour." },
      { q: "Peut-on réserver un transfert Courchevel → aéroport de Genève ?", a: "Bien sûr : comptez à partir de 560 € (1-4 passagers, jour et nuit), avec suivi de votre vol et horaire de départ adapté à la circulation." }
    ],
    proches: ["la-plagne", "aime-la-plagne", "moutiers", "peisey-vallandry"]
  },

  {
    slug: "sainte-foy-tarentaise",
    name: "Sainte-Foy-Tarentaise",
    tag: "Station village",
    kind: "station",
    altitude: "1 550 m",
    duree: "30 min",
    km: "20 km",
    gare14: 85,
    supplement: 70,
    metaTitle: "Taxi & VTC Sainte-Foy-Tarentaise ⇄ Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Sainte-Foy-Tarentaise : transfert privé 7j/7 vers la station et les hameaux (Le Miroir, La Masure, Le Monal). ☎ 07 67 67 69 81",
    intro: [
      "Confidentielle et préservée, <strong>Sainte-Foy-Tarentaise</strong> cultive un ski loin des foules et des villages classés parmi les plus beaux de Savoie. ASM TAXI vous y conduit en 30 minutes depuis la gare de Bourg-Saint-Maurice.",
      "La station (1 550 m) et ses hameaux d'alpage — Le Miroir, La Masure, Le Crôt, et le célèbre Monal face au Mont Pourri — sont dispersés sur un vaste territoire où les transports collectifs sont rares : le taxi y est le complément naturel de votre séjour."
    ],
    points: [
      "Dépose station et hameaux : Le Miroir, La Masure, Le Crôt, Bonconseil",
      "Chalets isolés et lodges de charme desservis sans difficulté",
      "Freeride : dépose aux départs des itinéraires mythiques du secteur",
      "L'été : randonnées vers Le Monal, site classé face au Mont Pourri"
    ],
    savoir: [
      { h3: "Une station, des hameaux", p: "Sainte-Foy s'étire du fond de vallée (chef-lieu, 750 m) à la station (1 550 m). Précisez bien votre hébergement : le tarif et la durée varient selon que vous logez au chef-lieu, à la station ou dans un hameau d'altitude." },
      { h3: "Le paradis du ski hors-piste", p: "Sainte-Foy est réputée mondialement pour ses itinéraires freeride. Nous déposons les skieurs aux points de départ et pouvons organiser vos récupérations en fin de descente." }
    ],
    faq: [
      { q: "Combien coûte un taxi de Bourg-Saint-Maurice à Sainte-Foy station ?", a: "À partir de 85 € en journée pour 1 à 4 passagers (tarif indicatif). Le chef-lieu, plus proche, est moins cher : demandez votre devis." },
      { q: "Montez-vous jusqu'aux hameaux du Miroir ou de La Masure ?", a: "Oui, nous desservons tous les hameaux accessibles par la route, hiver comme été." },
      { q: "Quel est le tarif Sainte-Foy → aéroport de Genève ?", a: "À partir de 460 € pour 1 à 4 passagers, jour et nuit, prise en charge à votre chalet." }
    ],
    proches: ["la-rosiere", "villaroger", "val-disere", "seez"]
  },

  {
    slug: "villaroger",
    name: "Villaroger",
    tag: "Versant sauvage des Arcs",
    kind: "village",
    altitude: "1 200 m",
    duree: "20 min",
    km: "12 km",
    gare14: 60,
    supplement: 40,
    metaTitle: "Taxi & VTC Villaroger ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Villaroger : transfert privé 7j/7 vers le village et la télécabine, accès discret au domaine des Arcs. ☎ 07 67 67 69 81",
    intro: [
      "Village authentique accroché au versant sauvage du domaine des Arcs, <strong>Villaroger</strong> offre un accès discret aux pistes par sa télécabine, loin de l'agitation des grandes stations. En taxi, vous y êtes en 20 minutes depuis la gare de Bourg-Saint-Maurice.",
      "Hameaux du Pré, de La Savonne, du Planay : ASM TAXI connaît chaque recoin de la commune et vous dépose devant votre chalet, même en plein hiver."
    ],
    points: [
      "20 minutes depuis la gare TGV de Bourg-Saint-Maurice",
      "Dépose à la télécabine de Villaroger ou devant votre chalet",
      "Village épargné par les navettes bondées : le taxi est roi",
      "Accès à l'Aiguille Rouge par le versant le plus tranquille des Arcs"
    ],
    savoir: [
      { h3: "Skier aux Arcs depuis Villaroger", p: "La télécabine de Villaroger rejoint le secteur de l'Aiguille Rouge : vous skiez sur tout le domaine des Arcs en évitant la cohue des fronts de neige. Le retour ski aux pieds par la mythique piste de l'Aiguille Rouge (2 026 m de dénivelé) est un incontournable." },
      { h3: "Restaurants et soirées", p: "Villaroger compte quelques tables réputées. Nous assurons vos allers-retours en soirée depuis les Arcs, Bourg-Saint-Maurice ou Sainte-Foy — rentrez sans vous soucier de la route enneigée." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à Villaroger ?", a: "À partir de 60 € en journée pour 1 à 4 passagers (tarif indicatif)." },
      { q: "Desservez-vous les hameaux du Planay et de La Savonne ?", a: "Oui, tous les hameaux de la commune accessibles par la route sont desservis, hiver comme été." },
      { q: "Peut-on réserver un transfert Villaroger → aéroport de Genève ?", a: "Bien sûr : à partir de 430 € (1-4 passagers, jour et nuit), prise en charge devant votre hébergement." }
    ],
    proches: ["les-arcs-2000", "sainte-foy-tarentaise", "les-arcs-1600", "la-rosiere"]
  },

  {
    slug: "tignes",
    name: "Tignes",
    tag: "Domaine Tignes – Val d'Isère",
    kind: "station",
    altitude: "2 100 m",
    duree: "45 min",
    km: "30 km",
    gare14: 110,
    supplement: 105,
    metaTitle: "Taxi & VTC Tignes ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Tignes (Val Claret, Le Lac, Le Lavachet, Les Boisses, Les Brévières) : transfert privé 7j/7. ☎ 07 67 67 69 81",
    intro: [
      "Temple du ski d'altitude et du freestyle, <strong>Tignes</strong> skie d'octobre à mai sur le glacier de la Grande Motte. Depuis la gare de Bourg-Saint-Maurice — son terminus TGV le plus proche — ASM TAXI vous monte à la station en 45 minutes environ.",
      "Val Claret, Tignes le Lac, Le Lavachet, Les Boisses, Les Brévières : chaque quartier a son ambiance, et nous vous déposons exactement au bon endroit, même lors des arrivées nocturnes après la fermeture des navettes."
    ],
    points: [
      "Tous les quartiers desservis : Val Claret, Le Lac, Lavachet, Boisses, Brévières",
      "Route du barrage du Chevril maîtrisée par tous les temps",
      "Skieurs early booking : glacier ouvert dès l'automne, nous roulons déjà",
      "Groupes et matériel : van jusqu'à 8 passagers, coffre XXL"
    ],
    savoir: [
      { h3: "Le trajet Bourg-Saint-Maurice → Tignes", p: "30 km par la D902, le long du barrage du Chevril et de son mythique mur peint. Comptez 45 minutes hors affluence. Les samedis d'hiver, la route de Tignes-Val d'Isère est l'une des plus chargées des Alpes : nous partons toujours avec l'avance nécessaire." },
      { h3: "Tignes toute l'année", p: "Ski d'été sur le glacier, lac de Tignes l'été (paddle, golf), Trail, X Games : la station ne dort jamais, nous non plus — transferts 7j/7 toute l'année." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à Tignes ?", a: "À partir de 110 € en journée pour 1 à 4 passagers selon le quartier (tarif indicatif). Prix ferme à la réservation." },
      { q: "Y a-t-il des taxis à l'arrivée des TGV du samedi ?", a: "Sur réservation, nous vous attendons à quai avec un panneau à votre nom, même aux heures de pointe. Réservez dès que vous avez vos billets." },
      { q: "Quel est le prix d'un transfert Tignes → aéroport de Genève ?", a: "À partir de 495 € pour 1 à 4 passagers, jour et nuit, départ de votre résidence, suivi de vol inclus." }
    ],
    proches: ["val-disere", "sainte-foy-tarentaise", "la-rosiere", "seez"]
  },

  {
    slug: "val-disere",
    name: "Val d'Isère",
    tag: "Domaine Tignes – Val d'Isère",
    kind: "station",
    altitude: "1 850 m",
    duree: "55 min",
    km: "32 km",
    gare14: 120,
    supplement: 110,
    metaTitle: "Taxi & VTC Val d'Isère ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Val d'Isère : transfert privé haut de gamme 7j/7 vers le village, La Daille, Le Fornet. Suivi TGV et vols. ☎ 07 67 67 69 81",
    intro: [
      "Station légendaire, hôte de la Coupe du monde et berceau de champions, <strong>Val d'Isère</strong> mérite un transfert à la hauteur de sa réputation. ASM TAXI relie la gare TGV de Bourg-Saint-Maurice au village en 55 minutes environ, avec le soin d'un service privé.",
      "La Daille, le village historique, Le Joseray, Le Fornet : nous vous déposons devant votre hôtel, chalet ou résidence, et votre chauffeur vous attend à quai au retour — jusqu'au dernier TGV du soir."
    ],
    points: [
      "Service premium : ponctualité, aide aux bagages, véhicule soigné",
      "Tous les quartiers : La Daille, village, Le Joseray, Le Crêt, Le Fornet",
      "Route du col maîtrisée par toutes conditions, équipement hiver complet",
      "Partenaire de vos séjours : navettes soirée, restaurants, héliski (dépose)"
    ],
    savoir: [
      { h3: "Le trajet gare → Val d'Isère", p: "32 km par la D902 en remontant l'Isère, passage au pied du barrage du Chevril puis montée finale vers 1 850 m. Comptez 55 minutes hors affluence — davantage les samedis de vacances : nous calons votre prise en charge en conséquence." },
      { h3: "Arrivées internationales", p: "La clientèle de Val d'Isère arrive du monde entier via Genève, Lyon ou Chambéry. Nous suivons chaque vol et coordonnons les correspondances TGV + taxi pour un porte-à-porte sans couture. English spoken." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à Val d'Isère ?", a: "À partir de 120 € en journée pour 1 à 4 passagers (tarif indicatif). Le prix ferme est confirmé à la réservation selon votre quartier et l'horaire." },
      { q: "Assurez-vous les transferts Val d'Isère → aéroport de Genève ?", a: "Oui, c'est l'un de nos trajets phares : à partir de 500 € (1-4 passagers, jour et nuit), départ de votre hébergement, suivi de vol, équipement hiver." },
      { q: "Peut-on réserver pour l'arrivée du dernier TGV ?", a: "Oui, nous assurons les prises en charge tardives à la gare de Bourg-Saint-Maurice, y compris après 22h, sur réservation." }
    ],
    proches: ["tignes", "sainte-foy-tarentaise", "la-rosiere", "seez"]
  },

  {
    slug: "seez",
    name: "Séez",
    tag: "Porte de La Rosière",
    kind: "village",
    altitude: "900 m",
    duree: "10 min",
    km: "4 km",
    gare14: 25,
    supplement: 15,
    metaTitle: "Taxi & VTC Séez ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Séez : courses locales 7j/7, liaisons La Rosière, aéroports et gares. ☎ 07 67 67 69 81",
    intro: [
      "Aux portes de Bourg-Saint-Maurice, sur la route du col du Petit-Saint-Bernard, <strong>Séez</strong> est le premier village de la montée vers La Rosière. ASM TAXI y assure vos courses locales en quelques minutes depuis la gare.",
      "Résidents, vacanciers en meublé, curistes ou randonneurs : nous répondons à tous les besoins du quotidien — gare, commerces, cabinets médicaux, correspondances — ainsi qu'aux transferts vers les stations et aéroports."
    ],
    points: [
      "Course gare ⇄ Séez en moins de 10 minutes",
      "Trajets du quotidien : médecin, commerces, administrations",
      "Départ idéal vers La Rosière et le col du Petit-Saint-Bernard",
      "Transferts aéroports au départ de votre domicile"
    ],
    savoir: [
      { h3: "Le village de Séez", p: "Village-étape historique sur la voie romaine du Petit-Saint-Bernard, Séez conserve un vrai centre avec commerces et artisans. De nombreux vacanciers y logent pour rayonner vers La Rosière et Les Arcs à moindre coût — le taxi complète parfaitement ce choix malin." },
      { h3: "Transport toute l'année", p: "Nous assurons également les trajets réguliers (travail, rééducation, rendez-vous médicaux) pour les habitants de Séez et des hameaux voisins. Contactez-nous pour un tarif adapté aux trajets récurrents." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à Séez ?", a: "À partir de 25 € en journée (tarif indicatif). Un tarif minimum de prise en charge s'applique sur les petites courses." },
      { q: "Faites-vous les petites courses locales à Séez ?", a: "Oui, 7j/7 : gare, commerces, rendez-vous médicaux, liaisons entre hameaux. Appelez-nous, nous sommes basés à côté." },
      { q: "Peut-on partir de Séez vers l'aéroport de Genève ?", a: "Bien sûr : à partir de 405 € (1-4 passagers, jour et nuit) au départ de votre domicile à Séez." }
    ],
    proches: ["la-rosiere", "montvalezan", "sainte-foy-tarentaise", "villaroger"]
  },

  {
    slug: "montvalezan",
    name: "Montvalezan",
    tag: "Balcon de la Rosière",
    kind: "village",
    altitude: "1 200 m",
    duree: "20 min",
    km: "12 km",
    gare14: 65,
    supplement: 40,
    metaTitle: "Taxi & VTC Montvalezan ⇄ Gare de Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Montvalezan : transfert privé 7j/7 vers le village et ses hameaux, liaison La Rosière. ☎ 07 67 67 69 81",
    intro: [
      "Commune-balcon dominant la vallée de la Haute-Tarentaise, <strong>Montvalezan</strong> égrène ses hameaux ensoleillés sur la route de La Rosière — dont la station fait d'ailleurs partie. ASM TAXI dessert chaque hameau en 20 minutes environ depuis la gare de Bourg-Saint-Maurice.",
      "Le Châtelard, Les Frasses, La Thuile, Le Miroir d'en Haut : les meublés et chalets de Montvalezan séduisent les vacanciers en quête de calme et de vue. Sans voiture, le taxi est votre meilleur allié pour rejoindre pistes, gare et commerces."
    ],
    points: [
      "Tous les hameaux desservis jusqu'à La Rosière station",
      "Vue imprenable : le trajet est déjà une carte postale",
      "Liaisons quotidiennes possibles vers les pistes de La Rosière",
      "Transferts aéroports depuis votre chalet"
    ],
    savoir: [
      { h3: "Montvalezan et La Rosière", p: "La station de La Rosière est située sur la commune de Montvalezan : en logeant dans les hameaux, vous êtes à 10-15 minutes des pistes pour un budget hébergement plus doux. Nous assurons vos rotations quotidiennes vers le front de neige." },
      { h3: "Un balcon sur le Mont-Blanc", p: "Exposition plein sud, vue sur le massif du Mont-Blanc et la vallée : Montvalezan est un belvédère. L'été, nous déposons les randonneurs aux départs des sentiers du versant." }
    ],
    faq: [
      { q: "Combien coûte un taxi de la gare de Bourg-Saint-Maurice à Montvalezan ?", a: "À partir de 65 € en journée pour 1 à 4 passagers selon le hameau (tarif indicatif)." },
      { q: "Pouvez-vous nous monter chaque matin aux pistes de La Rosière ?", a: "Oui, nous organisons des rotations quotidiennes pendant votre séjour, à tarif adapté. Parlez-nous de vos horaires." },
      { q: "Quel est le tarif Montvalezan → aéroport de Genève ?", a: "À partir de 430 € (1-4 passagers, jour et nuit) depuis votre hameau." }
    ],
    proches: ["la-rosiere", "seez", "sainte-foy-tarentaise", "villaroger"]
  },

  {
    slug: "les-chapieux",
    name: "Les Chapieux",
    tag: "Tour du Mont-Blanc",
    kind: "village",
    altitude: "1 550 m",
    duree: "40 min",
    km: "20 km",
    gare14: 95,
    supplement: 70,
    metaTitle: "Taxi & VTC Les Chapieux ⇄ Bourg-Saint-Maurice | Tour du Mont-Blanc | ASM TAXI",
    metaDesc: "Taxi entre la gare de Bourg-Saint-Maurice et Les Chapieux (vallée des Glaciers) : dépose randonneurs Tour du Mont-Blanc, refuges, cols. Été. ☎ 07 67 67 69 81",
    intro: [
      "Étape mythique du <strong>Tour du Mont-Blanc</strong>, le hameau des Chapieux se niche au fond de la vallée des Glaciers, au pied du col de la Seigne et du Cormet de Roselend. L'été, ASM TAXI y dépose randonneurs et trailers en 40 minutes depuis la gare de Bourg-Saint-Maurice.",
      "Départ ou fin d'étape, jonction de groupe, récupération après un abandon, portage de sacs vers la Ville des Glaciers : nous connaissons les besoins des marcheurs du TMB et adaptons chaque course à votre itinéraire."
    ],
    points: [
      "Dépose au cœur du TMB : Les Chapieux, Ville des Glaciers (selon accès)",
      "Récupérations d'urgence : blessure, météo, étape écourtée",
      "Transferts bagages entre étapes pour groupes et agences",
      "Liaison Cormet de Roselend – Beaufortain sur demande"
    ],
    savoir: [
      { h3: "Accès et saison", p: "La route des Chapieux (D902 par le Cormet de Roselend) n'est ouverte que de juin à octobre environ, selon l'enneigement. La circulation au-delà des Chapieux vers la Ville des Glaciers est réglementée en été : nous vous déposons au point autorisé le plus proche de votre étape." },
      { h3: "Le TMB côté Savoie", p: "Entre le col du Bonhomme et le col de la Seigne, l'étape des Chapieux est charnière : beaucoup de marcheurs y ajustent leur programme. Gare TGV à 40 minutes, refuges, navettes : nous coordonnons votre logistique en un appel." }
    ],
    faq: [
      { q: "Combien coûte un taxi de Bourg-Saint-Maurice aux Chapieux ?", a: "À partir de 95 € en journée pour 1 à 4 passagers (tarif indicatif, été uniquement selon ouverture de la route)." },
      { q: "Pouvez-vous récupérer un randonneur blessé ou fatigué sur le TMB ?", a: "Oui, dans la limite des routes carrossables (Les Chapieux, Cormet de Roselend, Bourg-Saint-Maurice). Appelez-nous, nous faisons au plus vite." },
      { q: "Transportez-vous les sacs entre deux étapes du TMB ?", a: "Oui, nous assurons le portage de bagages entre hébergements pour les groupes et les agences de trek. Devis sur demande." }
    ],
    proches: ["seez", "la-rosiere", "sainte-foy-tarentaise", "villaroger"]
  },

  {
    slug: "aime-la-plagne",
    name: "Aime-la-Plagne",
    tag: "Gare TGV & vallée",
    kind: "village",
    altitude: "690 m",
    duree: "15 min",
    km: "13 km",
    gare14: 45,
    supplement: 45,
    metaTitle: "Taxi & VTC Aime-la-Plagne ⇄ Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi à Aime-la-Plagne : liaisons gare d'Aime, gare de Bourg-Saint-Maurice, montées vers La Plagne, transferts aéroports. 7j/7. ☎ 07 67 67 69 81",
    intro: [
      "Bourg actif de la vallée et porte d'entrée de La Plagne, <strong>Aime-la-Plagne</strong> dispose de sa propre gare TGV. ASM TAXI y assure les liaisons locales, les montées en station et les transferts aéroports, en complément de notre base de Bourg-Saint-Maurice.",
      "Correspondance manquée, TGV s'arrêtant à Aime plutôt qu'à Bourg, montée vers Montalbert ou Plagne Centre : nous répondons présent en 15 minutes."
    ],
    points: [
      "Liaison gare d'Aime ⇄ gare de Bourg-Saint-Maurice en 15 minutes",
      "Montées directes vers tous les villages de La Plagne",
      "Trajets du quotidien dans la vallée : Mâcot, Bellentre, Landry, Valezan",
      "Transferts aéroports légèrement plus courts (et moins chers) que depuis Bourg"
    ],
    savoir: [
      { h3: "La gare d'Aime-la-Plagne", p: "En saison, des TGV directs depuis Paris s'arrêtent à Aime : c'est l'accès le plus rapide vers La Plagne (Montalbert à 15 min, Plagne Centre à 30 min). Réservez votre taxi dès l'achat de vos billets pour garantir la correspondance." },
      { h3: "Position stratégique", p: "Située en aval de Bourg-Saint-Maurice, Aime raccourcit légèrement les trajets vers Moûtiers, Chambéry, Lyon et Genève : bonne nouvelle pour le budget de vos transferts aéroport." }
    ],
    faq: [
      { q: "Combien coûte un taxi entre la gare d'Aime et La Plagne ?", a: "À partir de 65 € en journée vers Montalbert et 95 € vers Plagne Centre pour 1 à 4 passagers (tarifs indicatifs)." },
      { q: "Assurez-vous la liaison entre les gares d'Aime et de Bourg-Saint-Maurice ?", a: "Oui, en 15 minutes environ — utile en cas de correspondance manquée ou de TGV ne desservant qu'une des deux gares. À partir de 45 €." },
      { q: "Quel est le tarif Aime → aéroport de Genève ?", a: "À partir de 435 € pour 1 à 4 passagers, jour et nuit, prise en charge en gare d'Aime ou à votre hébergement." }
    ],
    proches: ["la-plagne", "moutiers", "peisey-vallandry", "les-arcs-1600"]
  }
];
