// ============================================================
// ASM TAXI — English mirror of stations.mjs (STATIONS_EN)
// Same entries, same order and same keys as data/stations.mjs,
// with all customer-facing text translated into British English.
// Prices: "from", in euros, 1 to 4 passengers, DAY rate,
//         departing from Bourg-Saint-Maurice railway station.
// supplement: added to the base airport/station (hub) price,
//   at €3.45/km (resort → BSM station), rounded to the nearest €5.
//   The BSM station → destination leg is €2.35/km (see hubs.mjs).
// ============================================================

export const STATIONS_EN = [
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
    metaTitle: "Taxi & Private Transfers La Rosière ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and La Rosière (Espace San Bernardo): private transfers 7 days a week, skis and luggage welcome, day/night rates. Also from Geneva, Lyon, Chambéry. ☎ 07 67 67 69 81",
    intro: [
      "Arriving by train at Bourg-Saint-Maurice station and looking for a <strong>taxi to La Rosière</strong>? ASM TAXI will have you at the resort in around 30 minutes, dropped right outside your chalet, your residence or the ski lifts.",
      "Perched at 1,850 m facing Mont Blanc, La Rosière links into Italy through the international <strong>Espace San Bernardo</strong> ski area. The hairpin climb up from Séez calls for genuine mountain-driving experience: our winter-equipped vehicles make the journey every single day of the season."
    ],
    points: [
      "Met on the platform as you step off the train, name board in hand",
      "Drop-off at the foot of your residence, hamlets included (Les Eucherts, Le Gollet)",
      "Boot fitted out for skis, snowboards and bulky luggage",
      "Resort-to-station return guaranteed on time for your train"
    ],
    savoir: [
      { h3: "The journey from Bourg-Saint-Maurice station to La Rosière", p: "Allow around 30 minutes for the 22 km, along the D1090 and then up the hairpins beyond Séez. On winter Saturdays during the school holidays, build in a little extra time: we adjust your pick-up time accordingly." },
      { h3: "La Rosière in summer", p: "The resort is also a gateway to the Petit-Saint-Bernard pass into Italy. We handle your summer transfers too: hiking, cycling (a legendary climb), and day trips to La Thuile and Aosta." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to La Rosière?", a: "From €90 in the daytime for 1 to 4 passengers (indicative rate). The exact fare depends on the time, the number of passengers and your exact address: ask for your free quote." },
      { q: "Does the taxi go all the way up to Les Eucherts?", a: "Yes, we drop you as close as possible to your accommodation, in Les Eucherts and every other part of La Rosière, evenings included." },
      { q: "Can I book a taxi from La Rosière to Geneva Airport?", a: "Of course: allow from €465 (1-4 passengers, day and night). We track your flight and adjust the departure time to the day's traffic." }
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
    metaTitle: "Taxi & Private Transfers Les Arcs 1600 ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Les Arcs 1600 (Arc Pierre Blanche): private transfers 7 days a week, more flexible than the funicular, drop-off right outside your residence. ☎ 07 67 67 69 81",
    intro: [
      "The original Les Arcs village, linked to Bourg-Saint-Maurice by funicular, <strong>Arc 1600</strong> is also wonderfully easy to reach by taxi: 20 minutes on the road and you are dropped right outside your residence, with all your luggage.",
      "Unlike the funicular, a taxi takes you door to door — no fixed timetable, no hauling suitcases and skis — and serves every part of Arc 1600. A real blessing with a family in tow or a full load of kit."
    ],
    points: [
      "Just 20 minutes from Bourg-Saint-Maurice railway station",
      "Door to door: far simpler than the funicular with luggage and children",
      "Available early morning and late evening, when the funicular has stopped running",
      "Direct link to Arc 1800, 1950 and 2000 throughout your stay"
    ],
    savoir: [
      { h3: "Taxi or funicular?", p: "The funicular links the station to Arc 1600 in 7 minutes, but you then have to reach your residence on foot or by shuttle. By taxi, you leave whenever you like and arrive exactly where you are staying — the right choice with luggage, ski kit or tired children." },
      { h3: "Paradiski from Arc 1600", p: "Arc 1600 opens up the whole of the Paradiski area (425 km of pistes across Les Arcs, Peisey-Vallandry and La Plagne). We also handle your transfers between resorts within the area." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Arc 1600?", a: "From €60 in the daytime for 1 to 4 passengers (indicative rate). Free quote and a firm price when you book." },
      { q: "Do taxis run when the funicular is closed?", a: "Yes, we operate 7 days a week — early mornings, late evenings and off-season alike, whatever the funicular timetable." },
      { q: "Can you take us from Arc 1600 to Geneva Airport?", a: "Yes, from €430 (1-4 passengers, day and night), with flight tracking and a departure time adjusted to the traffic." }
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
    metaTitle: "Taxi & Private Transfers Les Arcs 1800 ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Les Arcs 1800: private transfers 7 days a week to Charvet, Villards, Charmettoger and Chantel. Skis and luggage welcome. ☎ 07 67 67 69 81",
    intro: [
      "The beating heart of Les Arcs, <strong>Arc 1800</strong> brings together shops, residences and piste access to the vast Paradiski area. From Bourg-Saint-Maurice TGV station, ASM TAXI gets you there in around 25 minutes.",
      "Le Charvet, Les Villards, Charmettoger, Le Chantel: we know every quarter and every residence in Arc 1800, and we drop you as close to your door as possible — even on the busiest Saturday changeover days."
    ],
    points: [
      "Precise drop-off in every quarter: Charvet, Villards, Charmettoger, Chantel",
      "Ideal on busy Saturdays: skip the queues for the shuttle buses",
      "Extra-large boot for skis, snowboards and pushchairs",
      "Night journeys available: late TGV arrivals, early-morning departures"
    ],
    savoir: [
      { h3: "The journey from the station to Arc 1800", p: "A steady 15 km climb up the Les Arcs road. Allow 25 minutes outside peak periods. On winter Saturdays the road can be busy: we plan your pick-up time so you never miss a train or a flight." },
      { h3: "Arc 1800, Paradiski base camp", p: "With the Transarc and the Vanoise Express link (via Peisey-Vallandry), Arc 1800 is one of the best bases for exploring Paradiski's 425 km of pistes. We also provide transfers between resorts." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Les Arcs 1800?", a: "From €70 in the daytime for 1 to 4 passengers (indicative rate). Your firm price is confirmed when you book." },
      { q: "How long does it take to get up to Arc 1800?", a: "Around 25 minutes in normal conditions. On school-holiday Saturdays we allow extra time." },
      { q: "Do you run transfers from Arc 1800 to Lyon Airport?", a: "Yes, from €520 (1-4 passengers, day and night), departing from your residence with flight tracking." }
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
    metaTitle: "Taxi & Private Transfers Les Arcs 1950 ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Arc 1950 le Village: premium private transfers 7 days a week, drop-off as close as possible to your residence. ☎ 07 67 67 69 81",
    intro: [
      "A beautifully crafted pedestrian village, <strong>Arc 1950</strong> deserves an arrival to match: ASM TAXI drops you at the entrance to the village, luggage taken care of, after a 30-minute panoramic drive from Bourg-Saint-Maurice station.",
      "Premium residences, pedestrian lanes, ski-in ski-out: Arc 1950 is designed for a car-free holiday. A taxi is quite simply the easiest way to get there and back, at any hour."
    ],
    points: [
      "Drop-off as close as possible to the village concierge desks and residences",
      "Attentive service: comfortable vehicle, help with your luggage",
      "Direct connections to Geneva, Lyon, Chambéry and Grenoble airports",
      "Available for your evenings out: mountain restaurants, Bourg-Saint-Maurice by night"
    ],
    savoir: [
      { h3: "Arriving at Arc 1950 by taxi", p: "As the village is pedestrianised, we drop you at the designated access points, as close as possible to your residence — your concierge usually takes over with the luggage. Let us know the name of your residence when you book." },
      { h3: "Between Arc 1950 and Arc 2000", p: "The two resorts sit side by side and share the upper Les Arcs ski area, beneath the Aiguille Rouge (3,226 m). We serve both, winter and summer alike." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Arc 1950?", a: "From €80 in the daytime for 1 to 4 passengers (indicative rate). Ask for your free quote for a firm price." },
      { q: "Can you drive into Arc 1950?", a: "The heart of the village is pedestrianised: we drop you at the access point nearest your residence, where your concierge can take delivery of the luggage." },
      { q: "Do you offer night transfers from Arc 1950?", a: "Yes, 7 days a week including overnight — handy for early flights out of Geneva or Lyon. The night rate applies from 7 pm to 7 am." }
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
    metaTitle: "Taxi & Private Transfers Les Arcs 2000 ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Les Arcs 2000: private transfers 7 days a week to the foot of the Aiguille Rouge, snow-equipped vehicle. ☎ 07 67 67 69 81",
    intro: [
      "At the foot of the Aiguille Rouge and its 3,226 m summit, <strong>Arc 2000</strong> is the highest point of the Les Arcs ski area. ASM TAXI links Bourg-Saint-Maurice TGV station to the resort in around 35 minutes, whatever the conditions.",
      "The Arc 2000 road is the highest in the valley: frequent snow, tight hairpins, the odd patch of fog. A local driver, winter tyres and snow chains on board — you climb with complete peace of mind while others dither on the hard shoulder."
    ],
    points: [
      "Mountain-equipped vehicle: snow tyres, chains, experienced driving",
      "Drop-off outside your residence, from the Chalet des Neiges to the slope-side buildings",
      "Ideal for late arrivals: the road is all ours, no waiting for a shuttle",
      "Guaranteed on-time descent for your TGV or flight, even in heavy snowfall"
    ],
    savoir: [
      { h3: "The Arc 2000 road in winter", p: "It is the most demanding climb in the area: above Arc 1950, the road rises beyond 2,000 m. We drive it every day all winter long and always set off with the necessary margin in difficult weather." },
      { h3: "Summer at Arc 2000", p: "Downhill mountain biking, hikes towards the Aiguille Rouge, legendary passes: the resort comes alive in summer too. We provide your summer transfers from the station and the airports." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Arc 2000?", a: "From €85 in the daytime for 1 to 4 passengers (indicative rate). Firm price confirmed when you book." },
      { q: "Do you drive up to Arc 2000 in heavy snow?", a: "Yes: a fully equipped vehicle (winter tyres, chains) and a driver who knows the road inside out. In exceptional conditions, we set off earlier to guarantee your connection." },
      { q: "How much is a transfer from Arc 2000 to Geneva Airport?", a: "From €450 for 1 to 4 passengers, day and night, picked up outside your residence, flight tracking included." }
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
    metaTitle: "Taxi & Private Transfers Peisey-Vallandry ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Peisey-Vallandry (Vanoise Express): private transfers 7 days a week to Plan Peisey, Vallandry, Peisey-Nancroix. ☎ 07 67 67 69 81",
    intro: [
      "Between Les Arcs and La Plagne, at the departure point of the spectacular <strong>Vanoise Express</strong>, Peisey-Vallandry combines authentic villages with direct access to Paradiski's 425 km of pistes. From Bourg-Saint-Maurice station, allow 25 minutes by taxi.",
      "Plan Peisey, Vallandry, Peisey-Nancroix, Moulin: the hamlets are scattered and shuttle buses are few and far between in the evening — a taxi remains the simplest way to arrive exactly where you are staying, at a time of your choosing."
    ],
    points: [
      "Drop-off in every hamlet: Plan Peisey, Vallandry, Peisey, Nancroix, Moulin",
      "Direct access to the Vanoise Express and the Paradiski area",
      "Perfect for out-of-the-way lodges and chalets poorly served by the shuttles",
      "Summer transfers: Vanoise National Park, Les Lanches, Rosuel"
    ],
    savoir: [
      { h3: "One area, several villages", p: "Peisey-Vallandry is a cluster of hamlets tiered between 1,300 and 1,600 m. Give us your exact accommodation when you book: we drop you as close as possible, including in the upper hamlets." },
      { h3: "Gateway to the Vanoise National Park", p: "In summer, the Rosuel valley is one of the most beautiful ways into the Vanoise National Park. We drop walkers and trail runners right at the trailheads." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Peisey-Vallandry?", a: "From €70 in the daytime for 1 to 4 passengers (indicative rate), depending on the destination hamlet." },
      { q: "Do you serve Peisey-Nancroix and Rosuel?", a: "Yes, we go up to Nancroix and, in summer, all the way to the Rosuel gateway refuge for your walking departures into the Vanoise." },
      { q: "What does Peisey-Vallandry to Geneva Airport cost?", a: "From €440 (1-4 passengers, day and night), picked up at your accommodation, flight tracking included." }
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
    metaTitle: "Taxi & Private Transfers La Plagne ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice and La Plagne (11 villages, Paradiski): private transfers 7 days a week to Plagne Centre, Belle Plagne, Montchavin, Champagny… ☎ 07 67 67 69 81",
    intro: [
      "With its <strong>11 villages</strong> tiered from 1,250 to 2,100 m, La Plagne is one of the biggest playgrounds in the Alps. ASM TAXI serves every one of them from Bourg-Saint-Maurice station or Aime-la-Plagne station, in 35 to 50 minutes depending on the village.",
      "Plagne Centre, Belle Plagne, Plagne Bellecôte, Aime 2000, Plagne Soleil, Plagne Villages, Plagne 1800, Montalbert, Montchavin, Les Coches, Champagny-en-Vanoise: tell us where you are staying and we will take you straight there."
    ],
    points: [
      "All 11 La Plagne villages served, winter and summer alike",
      "Pick-up at Bourg-Saint-Maurice station or Aime-la-Plagne station",
      "Vanoise Express link: we also connect Les Arcs and Peisey",
      "Groups of up to 8 passengers with skis and luggage"
    ],
    savoir: [
      { h3: "Which station for La Plagne?", p: "Aime-la-Plagne station is the closest to the La Plagne villages, but plenty of TGVs stop at Bourg-Saint-Maurice. We provide transfers from both stations — simply tell us your train and we will plan the best route." },
      { h3: "Bobsleigh, Vanoise, glacier", p: "La Plagne is also home to France's only Olympic bobsleigh track (La Roche), the Bellecôte glacier and the high balconies of Champagny-le-Haut in the Vanoise. We will take you there all year round." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to La Plagne?", a: "From €110 in the daytime for 1 to 4 passengers depending on the destination village (indicative rate). From Aime station the fare is lower: ask for your quote." },
      { q: "Do you serve Montchavin and Les Coches?", a: "Yes, along with Champagny-en-Vanoise and every village on that side of the mountain. Just give us your residence name when you book." },
      { q: "How much is a transfer from La Plagne to Geneva Airport?", a: "From €500 for 1 to 4 passengers, day and night, from your La Plagne village, flight tracking included." }
    ],
    proches: ["aime-la-plagne", "peisey-vallandry", "les-arcs-1800", "moutiers"]
  },

  {
    slug: "courchevel",
    name: "Courchevel",
    tag: "The 3 Valleys",
    kind: "station",
    altitude: "1 850 m",
    duree: "1 hr 05",
    km: "50 km",
    gare14: 160,
    supplement: 170,
    metaTitle: "Taxi & Private Transfers Courchevel ⇄ Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi and private transfers between Bourg-Saint-Maurice, Moûtiers train station and Courchevel (The 3 Valleys): 7 days a week, skis and luggage, day/night rates. Also from Geneva, Lyon, Chambéry. ☎ 07 67 67 69 81",
    intro: [
      "The flagship resort of <strong>The 3 Valleys</strong>, the largest ski area in the world, Courchevel is tiered from 1,300 to 1,850 m. ASM TAXI takes you there from Bourg-Saint-Maurice station, Moûtiers TGV station or straight from the airports.",
      "From Le Praz up to Courchevel 1850, each level of the resort has its own atmosphere: we drop you at your hotel, your chalet or the ski lifts, whichever part you are staying in."
    ],
    points: [
      "Pick-up at Bourg-Saint-Maurice or Moûtiers station",
      "Drop-off at your hotel or chalet, from Le Praz to Courchevel 1850",
      "Boot fitted out for skis, snowboards and bulky luggage",
      "Connections to every Tarentaise resort throughout your stay"
    ],
    savoir: [
      { h3: "The journey from Bourg-Saint-Maurice to Courchevel", p: "Allow around 1 hr 05 for the 50 km: down the valley to Moûtiers, then the climb through Saint-Bon up to the Courchevel levels. On winter Saturdays, valley traffic can lengthen the journey: we always set off with the necessary margin." },
      { h3: "Arriving by TGV: Moûtiers or Bourg-Saint-Maurice?", p: "Moûtiers-Salins station is the closest to Courchevel (around 25 minutes away). We provide transfers from both stations — simply tell us your train when you book." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to Courchevel?", a: "From €160 in the daytime outside the winter season for 1 to 4 passengers (indicative rate). Ask for your free quote: the firm price is confirmed before departure." },
      { q: "Do you serve every level of Courchevel?", a: "Yes: Courchevel 1850, Moriond 1650, Le Village 1550, Le Praz and La Tania. We drop you at the exact address of your stay." },
      { q: "Can I book a transfer from Courchevel to Geneva Airport?", a: "Of course: allow from €560 (1-4 passengers, day and night), with flight tracking and a departure time adjusted to the traffic." }
    ],
    proches: ["la-plagne", "aime-la-plagne", "moutiers", "peisey-vallandry"]
  },

  {
    slug: "sainte-foy-tarentaise",
    name: "Sainte-Foy-Tarentaise",
    tag: "Village resort",
    kind: "station",
    altitude: "1 550 m",
    duree: "30 min",
    km: "20 km",
    gare14: 85,
    supplement: 70,
    metaTitle: "Taxi & Private Transfers Sainte-Foy-Tarentaise ⇄ Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Sainte-Foy-Tarentaise: private transfers 7 days a week to the resort and hamlets (Le Miroir, La Masure, Le Monal). ☎ 07 67 67 69 81",
    intro: [
      "A hidden gem, beautifully preserved, <strong>Sainte-Foy-Tarentaise</strong> offers skiing far from the crowds and villages ranked among the loveliest in Savoie. ASM TAXI takes you there in 30 minutes from Bourg-Saint-Maurice station.",
      "The resort (1,550 m) and its alpine hamlets — Le Miroir, La Masure, Le Crôt, and the famous Le Monal facing Mont Pourri — are scattered across a vast area where public transport is scarce: a taxi is the natural companion to your stay."
    ],
    points: [
      "Drop-off at the resort and hamlets: Le Miroir, La Masure, Le Crôt, Bonconseil",
      "Remote chalets and boutique lodges reached without any trouble",
      "Freeride: drop-off at the start of the area's legendary off-piste routes",
      "In summer: walks to Le Monal, a listed heritage site facing Mont Pourri"
    ],
    savoir: [
      { h3: "One resort, many hamlets", p: "Sainte-Foy stretches from the valley floor (the main village, at 750 m) up to the resort (1,550 m). Be precise about your accommodation: the fare and journey time vary depending on whether you are staying in the main village, at the resort or in a high-altitude hamlet." },
      { h3: "An off-piste paradise", p: "Sainte-Foy is world-renowned for its freeride routes. We drop skiers at the starting points and can arrange to collect you at the bottom of your descent." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to Sainte-Foy resort?", a: "From €85 in the daytime for 1 to 4 passengers (indicative rate). The main village, being closer, costs less: ask for your quote." },
      { q: "Do you go up to the hamlets of Le Miroir or La Masure?", a: "Yes, we serve every hamlet reachable by road, winter and summer alike." },
      { q: "What does Sainte-Foy to Geneva Airport cost?", a: "From €460 for 1 to 4 passengers, day and night, picked up at your chalet." }
    ],
    proches: ["la-rosiere", "villaroger", "val-disere", "seez"]
  },

  {
    slug: "villaroger",
    name: "Villaroger",
    tag: "The quiet side of Les Arcs",
    kind: "village",
    altitude: "1 200 m",
    duree: "20 min",
    km: "12 km",
    gare14: 60,
    supplement: 40,
    metaTitle: "Taxi & Private Transfers Villaroger ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Villaroger: private transfers 7 days a week to the village and its gondola, a quiet way into the Les Arcs ski area. ☎ 07 67 67 69 81",
    intro: [
      "An authentic village clinging to the wild side of the Les Arcs ski area, <strong>Villaroger</strong> offers discreet access to the pistes via its gondola, far from the bustle of the big resorts. By taxi, you are there in 20 minutes from Bourg-Saint-Maurice station.",
      "The hamlets of Le Pré, La Savonne and Le Planay: ASM TAXI knows every corner of the commune and drops you right outside your chalet, even in the depths of winter."
    ],
    points: [
      "20 minutes from Bourg-Saint-Maurice TGV station",
      "Drop-off at the Villaroger gondola or outside your chalet",
      "A village spared the crowded shuttle buses: the taxi reigns supreme",
      "Access to the Aiguille Rouge from the quietest side of Les Arcs"
    ],
    savoir: [
      { h3: "Skiing Les Arcs from Villaroger", p: "The Villaroger gondola links up with the Aiguille Rouge sector: you ski the whole Les Arcs area while avoiding the crush at the main snow fronts. The ski-to-door return down the legendary Aiguille Rouge run (2,026 m of vertical) is not to be missed." },
      { h3: "Restaurants and evenings out", p: "Villaroger has a handful of well-regarded restaurants. We handle your evening trips to and from Les Arcs, Bourg-Saint-Maurice or Sainte-Foy — head home without a thought for the snowy road." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Villaroger?", a: "From €60 in the daytime for 1 to 4 passengers (indicative rate)." },
      { q: "Do you serve the hamlets of Le Planay and La Savonne?", a: "Yes, every hamlet in the commune reachable by road is served, winter and summer alike." },
      { q: "Can I book a transfer from Villaroger to Geneva Airport?", a: "Of course: from €430 (1-4 passengers, day and night), picked up outside your accommodation." }
    ],
    proches: ["les-arcs-2000", "sainte-foy-tarentaise", "les-arcs-1600", "la-rosiere"]
  },

  {
    slug: "tignes",
    name: "Tignes",
    tag: "Tignes – Val d'Isère ski area",
    kind: "station",
    altitude: "2 100 m",
    duree: "45 min",
    km: "30 km",
    gare14: 110,
    supplement: 105,
    metaTitle: "Taxi & Private Transfers Tignes ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Tignes (Val Claret, Le Lac, Le Lavachet, Les Boisses, Les Brévières): private transfers 7 days a week. ☎ 07 67 67 69 81",
    intro: [
      "A temple of high-altitude skiing and freestyle, <strong>Tignes</strong> skis from October to May on the Grande Motte glacier. From Bourg-Saint-Maurice station — its nearest TGV terminus — ASM TAXI takes you up to the resort in around 45 minutes.",
      "Val Claret, Tignes le Lac, Le Lavachet, Les Boisses, Les Brévières: each quarter has its own feel, and we drop you in exactly the right spot, even on late-night arrivals after the shuttle buses have stopped."
    ],
    points: [
      "Every quarter served: Val Claret, Le Lac, Lavachet, Boisses, Brévières",
      "The Chevril dam road handled in all weathers",
      "Early-season skiers: the glacier opens in autumn and we are already on the road",
      "Groups and kit: van for up to 8 passengers, extra-large boot"
    ],
    savoir: [
      { h3: "The journey from Bourg-Saint-Maurice to Tignes", p: "30 km along the D902, past the Chevril dam and its famous painted wall. Allow 45 minutes outside peak periods. On winter Saturdays, the Tignes-Val d'Isère road is one of the busiest in the Alps: we always leave with plenty of time in hand." },
      { h3: "Tignes all year round", p: "Summer skiing on the glacier, the Tignes lake in summer (paddleboarding, golf), trail running, X Games: the resort never sleeps — and neither do we, with transfers 7 days a week all year round." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Tignes?", a: "From €110 in the daytime for 1 to 4 passengers depending on the quarter (indicative rate). Firm price when you book." },
      { q: "Are taxis available when the Saturday TGVs arrive?", a: "With a booking, we will be waiting on the platform with a name board, even at peak times. Book as soon as you have your tickets." },
      { q: "How much is a transfer from Tignes to Geneva Airport?", a: "From €495 for 1 to 4 passengers, day and night, departing from your residence, flight tracking included." }
    ],
    proches: ["val-disere", "sainte-foy-tarentaise", "la-rosiere", "seez"]
  },

  {
    slug: "val-disere",
    name: "Val d'Isère",
    tag: "Tignes – Val d'Isère ski area",
    kind: "station",
    altitude: "1 850 m",
    duree: "55 min",
    km: "32 km",
    gare14: 120,
    supplement: 110,
    metaTitle: "Taxi & Private Transfers Val d'Isère ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Val d'Isère: premium private transfers 7 days a week to the village, La Daille and Le Fornet. Train and flight tracking. ☎ 07 67 67 69 81",
    intro: [
      "A legendary resort, World Cup host and cradle of champions, <strong>Val d'Isère</strong> deserves a transfer worthy of its reputation. ASM TAXI links Bourg-Saint-Maurice TGV station to the village in around 55 minutes, with all the care of a private service.",
      "La Daille, the historic village, Le Joseray, Le Fornet: we drop you at your hotel, chalet or residence, and your driver is waiting on the platform for your return — right up to the last evening TGV."
    ],
    points: [
      "Premium service: punctuality, help with luggage, immaculate vehicle",
      "Every quarter: La Daille, the village, Le Joseray, Le Crêt, Le Fornet",
      "The high road mastered in all conditions, full winter equipment",
      "Your partner throughout your stay: evening runs, restaurants, heliski drop-offs"
    ],
    savoir: [
      { h3: "The journey from the station to Val d'Isère", p: "32 km along the D902 following the Isère upstream, past the foot of the Chevril dam and then the final climb to 1,850 m. Allow 55 minutes outside peak periods — longer on holiday Saturdays: we time your pick-up accordingly." },
      { h3: "International arrivals", p: "Val d'Isère's guests arrive from all over the world via Geneva, Lyon or Chambéry. We track every flight and coordinate TGV + taxi connections for seamless door-to-door travel. English spoken." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Val d'Isère?", a: "From €120 in the daytime for 1 to 4 passengers (indicative rate). The firm price is confirmed when you book, depending on your quarter and the time." },
      { q: "Do you run transfers from Val d'Isère to Geneva Airport?", a: "Yes, it is one of our flagship routes: from €500 (1-4 passengers, day and night), departing from your accommodation, with flight tracking and full winter equipment." },
      { q: "Can I book for the arrival of the last TGV?", a: "Yes, we handle late pick-ups at Bourg-Saint-Maurice station, including after 10 pm, with advance booking." }
    ],
    proches: ["tignes", "sainte-foy-tarentaise", "la-rosiere", "seez"]
  },

  {
    slug: "seez",
    name: "Séez",
    tag: "Gateway to La Rosière",
    kind: "village",
    altitude: "900 m",
    duree: "10 min",
    km: "4 km",
    gare14: 25,
    supplement: 15,
    metaTitle: "Taxi & Private Transfers Séez ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Séez: local journeys 7 days a week, links to La Rosière, airports and railway stations. ☎ 07 67 67 69 81",
    intro: [
      "On the doorstep of Bourg-Saint-Maurice, on the road to the Petit-Saint-Bernard pass, <strong>Séez</strong> is the first village on the climb up to La Rosière. ASM TAXI covers your local journeys there within minutes of the station.",
      "Residents, self-catering holidaymakers, spa visitors or walkers: we cover every everyday need — station, shops, medical appointments, connections — as well as transfers to the resorts and airports."
    ],
    points: [
      "Station ⇄ Séez in under 10 minutes",
      "Everyday journeys: doctor, shops, local services",
      "The ideal starting point for La Rosière and the Petit-Saint-Bernard pass",
      "Airport transfers from your front door"
    ],
    savoir: [
      { h3: "The village of Séez", p: "A historic staging post on the Roman road over the Petit-Saint-Bernard, Séez still has a proper village centre with shops and craftsmen. Many holidaymakers stay here to explore La Rosière and Les Arcs on a smaller budget — and a taxi is the perfect complement to that smart choice." },
      { h3: "Transport all year round", p: "We also provide regular journeys (work, physiotherapy, medical appointments) for residents of Séez and the neighbouring hamlets. Contact us for a rate tailored to recurring journeys." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Séez?", a: "From €25 in the daytime (indicative rate). A minimum fare applies to short journeys." },
      { q: "Do you do short local runs in Séez?", a: "Yes, 7 days a week: station, shops, medical appointments, trips between hamlets. Give us a call — we are based right next door." },
      { q: "Can I travel from Séez to Geneva Airport?", a: "Of course: from €405 (1-4 passengers, day and night) from your home in Séez." }
    ],
    proches: ["la-rosiere", "montvalezan", "sainte-foy-tarentaise", "villaroger"]
  },

  {
    slug: "montvalezan",
    name: "Montvalezan",
    tag: "La Rosière's balcony",
    kind: "village",
    altitude: "1 200 m",
    duree: "20 min",
    km: "12 km",
    gare14: 65,
    supplement: 40,
    metaTitle: "Taxi & Private Transfers Montvalezan ⇄ Bourg-Saint-Maurice Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Montvalezan: private transfers 7 days a week to the village and its hamlets, with links to La Rosière. ☎ 07 67 67 69 81",
    intro: [
      "A balcony commune overlooking the Haute-Tarentaise valley, <strong>Montvalezan</strong> strings its sun-soaked hamlets along the road to La Rosière — a resort that actually lies within the commune. ASM TAXI serves every hamlet in around 20 minutes from Bourg-Saint-Maurice station.",
      "Le Châtelard, Les Frasses, La Thuile, Le Miroir d'en Haut: Montvalezan's chalets and holiday lets attract visitors in search of peace, quiet and views. Without a car, a taxi is your best ally for reaching the pistes, the station and the shops."
    ],
    points: [
      "Every hamlet served, right up to La Rosière resort",
      "Breathtaking views: the journey itself is a postcard",
      "Daily runs to the La Rosière pistes available",
      "Airport transfers from your chalet"
    ],
    savoir: [
      { h3: "Montvalezan and La Rosière", p: "La Rosière resort sits within the commune of Montvalezan: stay in the hamlets and you are 10-15 minutes from the pistes on a gentler accommodation budget. We handle your daily runs to the snow front." },
      { h3: "A balcony facing Mont Blanc", p: "South-facing, with views over the Mont Blanc massif and the valley: Montvalezan is a natural belvedere. In summer, we drop walkers at the trailheads on this side of the valley." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice station to Montvalezan?", a: "From €65 in the daytime for 1 to 4 passengers depending on the hamlet (indicative rate)." },
      { q: "Can you take us up to the La Rosière pistes each morning?", a: "Yes, we arrange daily runs for the length of your stay, at a tailored rate. Tell us your timings." },
      { q: "What does Montvalezan to Geneva Airport cost?", a: "From €430 (1-4 passengers, day and night) from your hamlet." }
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
    metaTitle: "Taxi Les Chapieux ⇄ Bourg-Saint-Maurice | Tour du Mont-Blanc | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice train station and Les Chapieux (Vallée des Glaciers): drop-offs for Tour du Mont Blanc walkers, refuges and passes. Summer. ☎ 07 67 67 69 81",
    intro: [
      "A legendary stage on the <strong>Tour du Mont Blanc</strong>, the hamlet of Les Chapieux nestles at the head of the Vallée des Glaciers, at the foot of the Col de la Seigne and the Cormet de Roselend. In summer, ASM TAXI drops walkers and trail runners there in 40 minutes from Bourg-Saint-Maurice station.",
      "Starting or finishing a stage, meeting up with your group, being collected after pulling out, bags carried on to the Ville des Glaciers: we know what TMB walkers need and tailor every journey to your itinerary."
    ],
    points: [
      "Drop-off at the heart of the TMB: Les Chapieux, Ville des Glaciers (access permitting)",
      "Emergency pick-ups: injury, bad weather, a stage cut short",
      "Luggage transfers between stages for groups and agencies",
      "Cormet de Roselend – Beaufortain link on request"
    ],
    savoir: [
      { h3: "Access and season", p: "The road to Les Chapieux (D902 over the Cormet de Roselend) is only open from roughly June to October, depending on snow cover. Traffic beyond Les Chapieux towards the Ville des Glaciers is restricted in summer: we drop you at the closest authorised point to your stage." },
      { h3: "The TMB on the Savoie side", p: "Between the Col du Bonhomme and the Col de la Seigne, the Les Chapieux stage is a pivotal one: many walkers fine-tune their plans here. TGV station 40 minutes away, refuges, shuttles: we coordinate your logistics in a single phone call." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to Les Chapieux?", a: "From €95 in the daytime for 1 to 4 passengers (indicative rate, summer only, subject to the road being open)." },
      { q: "Can you collect an injured or exhausted walker on the TMB?", a: "Yes, wherever the road allows (Les Chapieux, Cormet de Roselend, Bourg-Saint-Maurice). Call us and we will get there as quickly as we can." },
      { q: "Do you carry bags between two TMB stages?", a: "Yes, we transfer luggage between accommodations for groups and trekking agencies. Quote on request." }
    ],
    proches: ["seez", "la-rosiere", "sainte-foy-tarentaise", "villaroger"]
  },

  {
    slug: "aime-la-plagne",
    name: "Aime-la-Plagne",
    tag: "TGV station & valley",
    kind: "village",
    altitude: "690 m",
    duree: "15 min",
    km: "13 km",
    gare14: 45,
    supplement: 45,
    metaTitle: "Taxi & Private Transfers Aime-la-Plagne ⇄ Bourg-Saint-Maurice | ASM TAXI",
    metaDesc: "Taxi in Aime-la-Plagne: links to Aime station and Bourg-Saint-Maurice station, journeys up to La Plagne, airport transfers. 7 days a week. ☎ 07 67 67 69 81",
    intro: [
      "A lively valley town and gateway to La Plagne, <strong>Aime-la-Plagne</strong> has its own TGV station. ASM TAXI provides local journeys, trips up to the resorts and airport transfers here, alongside our Bourg-Saint-Maurice base.",
      "A missed connection, a TGV calling at Aime rather than Bourg, a lift up to Montalbert or Plagne Centre: we are there within 15 minutes."
    ],
    points: [
      "Aime station ⇄ Bourg-Saint-Maurice station in 15 minutes",
      "Direct journeys up to every La Plagne village",
      "Everyday valley journeys: Mâcot, Bellentre, Landry, Valezan",
      "Airport transfers slightly shorter (and cheaper) than from Bourg"
    ],
    savoir: [
      { h3: "Aime-la-Plagne station", p: "In season, direct TGVs from Paris stop at Aime: it is the fastest way into La Plagne (Montalbert 15 minutes away, Plagne Centre 30 minutes). Book your taxi as soon as you buy your tickets to guarantee the connection." },
      { h3: "A strategic position", p: "Sitting down the valley from Bourg-Saint-Maurice, Aime slightly shortens journeys to Moûtiers, Chambéry, Lyon and Geneva: good news for your airport transfer budget." }
    ],
    faq: [
      { q: "How much is a taxi between Aime station and La Plagne?", a: "From €65 in the daytime to Montalbert and €95 to Plagne Centre for 1 to 4 passengers (indicative rates)." },
      { q: "Do you run between the Aime and Bourg-Saint-Maurice stations?", a: "Yes, in around 15 minutes — useful after a missed connection or when a TGV only calls at one of the two stations. From €45." },
      { q: "What does Aime to Geneva Airport cost?", a: "From €435 for 1 to 4 passengers, day and night, picked up at Aime station or your accommodation." }
    ],
    proches: ["la-plagne", "moutiers", "peisey-vallandry", "les-arcs-1600"]
  }
];
