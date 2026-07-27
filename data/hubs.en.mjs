// ============================================================
// ASM TAXI — AIRPORTS, TRAIN STATIONS & CITIES data (English)
// Mirrors hubs.mjs: same entries, same order, same keys —
// customer-facing text translated for UK ski holidaymakers.
// slug, kind, km, base, matrix, proches and prices unchanged.
// ============================================================

export const HUBS_EN = [
  {
    slug: "geneve",
    name: "Geneva Airport",
    short: "Geneva",
    tag: "Our No.1 transfer",
    kind: "aeroport",
    duree: "2 hrs 30",
    km: "165 km",
    base: 390,
    matrix: true,
    metaTitle: "Taxi & Private Transfers Bourg-Saint-Maurice ⇄ Geneva Airport | ASM TAXI",
    metaDesc: "Private taxi transfers between Bourg-Saint-Maurice, the Tarentaise ski resorts and Geneva Airport (GVA): direct, door-to-door, flight tracking, 7 days a week. Day/night fares for all resorts. ☎ 07 67 67 69 81",
    intro: [
      "The main international gateway to the Tarentaise ski resorts, <strong>Geneva-Cointrin Airport</strong> (GVA) is our most requested destination. ASM TAXI links Bourg-Saint-Maurice and all the surrounding resorts to the terminal in one direct journey — no stops, no changes.",
      "Flight delayed? We track it in real time and adjust your pick-up accordingly. On arrival, your driver will be waiting in the arrivals hall with a name board, ready to take you straight to your chalet — even at midnight, even in the snow."
    ],
    points: [
      "Direct terminal ⇄ resort journey, around 2 hrs 30 from Bourg-Saint-Maurice",
      "Real-time flight tracking: delays and early arrivals covered at no extra cost",
      "Personal meet and greet in the arrivals hall with a name board",
      "Border crossing made easy: documents, queues and the smartest routes"
    ],
    savoir: [
      { h3: "How long before my flight?", p: "We time your departure to drop you off 2 hrs before a European flight and 3 hrs before a long-haul one, factoring in the day's traffic (on winter Saturdays, the A41 motorway and the Bardonnex border crossing can get busy)." },
      { h3: "Geneva: the practical side", p: "The airport sits on the Swiss side but has a French sector. Depending on your airline and terminal, we drop you as close as possible to the right hall — just give us your flight number when you book." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to Geneva Airport?", a: "From €390 for 1 to 4 passengers, day or night (indicative fare), calculated fairly on distance. The table above shows fares from each resort; ask for your free quote for a fixed price." },
      { q: "What happens if my flight is delayed?", a: "We track your flight live: your pick-up time adjusts automatically, at no extra charge. You never pay for waiting caused by the plane." },
      { q: "Is the border crossing a problem?", a: "Not at all: simply carry a valid passport or ID. Your driver knows the border posts and picks the smoothest crossing depending on traffic." }
    ],
    proches: ["lyon", "chambery", "annecy", "grenoble"]
  },

  {
    slug: "lyon",
    name: "Lyon Saint-Exupéry Airport",
    short: "Lyon",
    tag: "Airport & TGV station",
    kind: "aeroport",
    duree: "2 hrs 15",
    km: "200 km",
    base: 470,
    matrix: true,
    metaTitle: "Taxi & Private Transfers Bourg-Saint-Maurice ⇄ Lyon Airport | ASM TAXI",
    metaDesc: "Private taxi transfers between Bourg-Saint-Maurice, the Tarentaise ski resorts and Lyon Saint-Exupéry Airport (LYS) + TGV station: direct, flight tracking, 7 days a week. ☎ 07 67 67 69 81",
    intro: [
      "The second-busiest hub for Tarentaise holidaymakers, <strong>Lyon Saint-Exupéry Airport</strong> (LYS) and its adjoining TGV station are around 2 hrs 15 from Bourg-Saint-Maurice via a direct motorway route.",
      "ASM TAXI picks you up at your accommodation — from Val d'Isère to Les Arcs — and drops you right outside the correct terminal. On the way back, your driver will be waiting in the arrivals hall, whatever time you land."
    ],
    points: [
      "Direct motorway: the smoothest run to a major airport",
      "Terminal 1, Terminal 2 or the TGV station: dropped off as close as possible",
      "Real-time tracking of flights and TGV trains",
      "Very early departures covered for the first flights (from 3 am)"
    ],
    savoir: [
      { h3: "Airport + TGV in one place", p: "Lyon Saint-Exupéry combines an international airport with a TGV station (Paris in 2 hrs): a handy connection when the direct ski trains are fully booked. We serve both drop-off points equally." },
      { h3: "Getting the timing right", p: "Allow 2 hrs 15 outside peak times. On winter Saturdays, the Albertville–Chambéry stretch can get congested: we leave early and know the relief routes through the Chartreuse and the Bauges." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to Lyon Airport?", a: "From €470 for 1 to 4 passengers, day or night (indicative fare), calculated fairly on distance. See the fare table for each resort and ask for your quote." },
      { q: "Can you drop us at the Lyon Saint-Exupéry TGV station?", a: "Yes — the station is part of the airport: same journey, same fare. Just give us your train details when you book." },
      { q: "Do you do departures for 6 am flights?", a: "Yes: we leave the resort as early as needed, including in the middle of the night — with no night surcharge on airport transfers: the fare is the same as in the daytime." }
    ],
    proches: ["geneve", "chambery", "grenoble", "annecy"]
  },

  {
    slug: "chambery",
    name: "Chambéry (station & airport)",
    short: "Chambéry",
    tag: "The closest hub",
    kind: "aeroport",
    duree: "1 hr 30",
    km: "105 km",
    base: 245,
    matrix: true,
    metaTitle: "Taxi & Private Transfers Bourg-Saint-Maurice ⇄ Chambéry | ASM TAXI",
    metaDesc: "Private taxi transfers between Bourg-Saint-Maurice, the Tarentaise ski resorts and Chambéry: railway station, Chambéry-Savoie Airport (CMF), town centre. 7 days a week. ☎ 07 67 67 69 81",
    intro: [
      "Capital of the Savoie and a major rail junction, <strong>Chambéry</strong> is the nearest large town to the Haute-Tarentaise: around 1 hr 30 by road from Bourg-Saint-Maurice. ASM TAXI serves its railway station, Chambéry-Savoie-Mont-Blanc Airport (CMF) and the town centre.",
      "TGV connections, seasonal flights from the UK, medical appointments at the Métropole Savoie hospital, admin errands: the Bourg ⇄ Chambéry run is part of our daily routine."
    ],
    points: [
      "The shortest airport/station transfer — and the most economical",
      "Railway station, CMF airport and hospital all served",
      "Tight connections covered thanks to live train tracking",
      "Half-day return trips possible for your appointments"
    ],
    savoir: [
      { h3: "Chambéry Airport", p: "CMF is the quintessential 'snow' airport: its seasonal flights (particularly from the UK) land just 1 hr 30 from the slopes. Note that activity is concentrated on winter Saturdays — book your transfer early." },
      { h3: "Chambéry railway station", p: "When the direct TGV trains to Bourg-Saint-Maurice are fully booked or out of season, going via Chambéry is the best alternative: frequent trains from Paris and Lyon, then a 1 hr 30 taxi ride to your resort." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to Chambéry?", a: "From €245 for 1 to 4 passengers, day or night (indicative fare), station or airport — the best price on the market. See the table for departures from the resorts." },
      { q: "Do you do transfers to Chambéry hospital?", a: "Yes, we cover journeys to the Métropole Savoie hospital and the local clinics, both there and back." },
      { q: "Chambéry or Geneva: which airport should I choose?", a: "Chambéry is closer (1 hr 30 versus 2 hrs 30) but offers fewer flights. Geneva has more frequencies and destinations. Journey for journey, Chambéry is the more economical by taxi." }
    ],
    proches: ["annecy", "geneve", "grenoble", "albertville"]
  },

  {
    slug: "grenoble",
    name: "Grenoble Airport",
    short: "Grenoble",
    tag: "Airport & city",
    kind: "aeroport",
    duree: "2 hrs 15",
    km: "190 km",
    base: 445,
    matrix: true,
    metaTitle: "Taxi & Private Transfers Bourg-Saint-Maurice ⇄ Grenoble | ASM TAXI",
    metaDesc: "Private taxi transfers between Bourg-Saint-Maurice, the Tarentaise ski resorts and Grenoble: Grenoble-Alpes-Isère Airport (GNB), railway station, city centre. 7 days a week. ☎ 07 67 67 69 81",
    intro: [
      "Every winter, <strong>Grenoble-Alpes-Isère Airport</strong> (GNB) welcomes dozens of charter and low-cost flights from the UK and Northern Europe. ASM TAXI links it to Bourg-Saint-Maurice and the Tarentaise resorts in around 2 hrs 15.",
      "We also serve Grenoble railway station and the city centre — handy for students, business meetings in the city or onward rail connections."
    ],
    points: [
      "Winter flights from the UK & Northern Europe: we know the Saturday peaks",
      "GNB airport, railway station and city centre all served",
      "Real-time flight tracking, name-board welcome in the arrivals hall",
      "Direct motorway route via the Combe de Savoie"
    ],
    savoir: [
      { h3: "A very British airport", p: "GNB operates mainly in winter, with a largely British clientele heading for the resorts. Transfers are concentrated on Saturdays: book several weeks ahead for the February holidays. English spoken!" },
      { h3: "Grenoble city", p: "Capital of the Alps, 2 hrs from the Tarentaise, Grenoble is home to a university hospital, university and major employers. We cover medical, business and student journeys from anywhere in the valley." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to Grenoble Airport?", a: "From €445 for 1 to 4 passengers, day or night (indicative fare), calculated fairly on distance. The table details the fares from each resort." },
      { q: "My flight lands at GNB on a Saturday in February — should I book well in advance?", a: "Yes, winter Saturdays are in very high demand. Book as soon as you buy your tickets — we then guarantee your slot, with your flight tracked in real time." },
      { q: "Do you serve Grenoble university hospital?", a: "Yes, we cover journeys to the Grenoble-Alpes university hospital and the clinics around the city." }
    ],
    proches: ["chambery", "lyon", "geneve", "albertville"]
  },

  {
    slug: "annecy",
    name: "Annecy",
    short: "Annecy",
    tag: "Lake & mountains",
    kind: "ville",
    duree: "2 hrs 00",
    km: "130 km",
    base: 305,
    matrix: true,
    metaTitle: "Taxi & Private Transfers Bourg-Saint-Maurice ⇄ Annecy | ASM TAXI",
    metaDesc: "Private taxi transfers between Bourg-Saint-Maurice, the Tarentaise ski resorts and Annecy: railway station, old town, lake, Annecy Mont-Blanc airport. 7 days a week. ☎ 07 67 67 69 81",
    intro: [
      "The 'Venice of the Alps' and its turquoise lake are around 2 hours from Bourg-Saint-Maurice. ASM TAXI links the Tarentaise to <strong>Annecy</strong>: railway station, old town, lakeside and Annecy Mont-Blanc airport.",
      "A romantic getaway, a rail connection, a business meeting or a shuttle to a lakeside conference: we organise your journey door to door, both there and back."
    ],
    points: [
      "Day trips from the resorts: the lake, the old town, the markets",
      "Annecy station: TER/TGV connections to Geneva and Paris",
      "Lakeside conferences and events: group shuttles for up to 8",
      "Scenic route through the Bauges massif, or the motorway"
    ],
    savoir: [
      { h3: "Annecy from the resorts", p: "Allow 2 hrs from Bourg-Saint-Maurice, 2 hrs 30 from Val d'Isère or Tignes. A day trip is entirely doable: we drop you by the lake in the morning and collect you at the end of the day." },
      { h3: "Annecy airport", p: "Annecy Mont-Blanc (NCY) handles business aviation and a few seasonal routes. We provide private-jet transfers to all the Tarentaise resorts, with a planeside welcome where the operator allows it." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to Annecy?", a: "From €305 for 1 to 4 passengers, day or night (indicative fare)." },
      { q: "Do you offer day trips to Annecy?", a: "Yes: drop-off in the morning, pick-up in the evening, at a time to suit you. Preferential return fare — ask for your quote." },
      { q: "Do you do transfers from Annecy's business aviation airport?", a: "Yes, we collect business-aviation passengers (NCY) and take them to Val d'Isère, Courchevel, Les Arcs and anywhere in the Tarentaise." }
    ],
    proches: ["geneve", "chambery", "albertville", "lyon"]
  },

  {
    slug: "moutiers",
    name: "Moûtiers train station",
    short: "Moûtiers",
    tag: "Gateway to the 3 Valleys",
    kind: "gare",
    duree: "30 min",
    km: "28 km",
    base: 65,
    matrix: false,
    metaTitle: "Taxi & Private Transfers Bourg-Saint-Maurice ⇄ Moûtiers Station | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice and Moûtiers-Salins-Brides-les-Bains station: TGV connections, valley links, 7 days a week. ☎ 07 67 67 69 81",
    intro: [
      "Gateway to the 3 Valleys, <strong>Moûtiers-Salins-Brides-les-Bains station</strong> sees thousands of skiers pass through every winter Saturday. Just 30 minutes from Bourg-Saint-Maurice, it often has extra TGV services when the Bourg trains are fully booked.",
      "Missed connection, diverted train, arriving into Moûtiers rather than Bourg: ASM TAXI runs the link between the two stations and to all the Haute-Tarentaise resorts, at any hour."
    ],
    points: [
      "Moûtiers station ⇄ Bourg-Saint-Maurice in 30 minutes",
      "A smart plan B when the Bourg TGV trains are fully booked",
      "Spa visitors: Brides-les-Bains and La Léchère served",
      "Late-night connections covered by advance booking"
    ],
    savoir: [
      { h3: "Moûtiers, the Tarentaise rail hub", p: "Almost every train on the line stops here: the ski Eurostar, TGV and local TER services. If your train doesn't go all the way up to Bourg-Saint-Maurice, we take over at Moûtiers — book with your train number and we'll keep an eye on delays." },
      { h3: "Around Moûtiers", p: "Brides-les-Bains (thermal spa and gateway to Méribel), Salins-les-Thermes, La Léchère-les-Bains: the Moûtiers basin is also a wellness destination. We drive spa guests and holidaymakers there all year round." }
    ],
    faq: [
      { q: "How much is a taxi between Moûtiers and Bourg-Saint-Maurice?", a: "From €65 in the daytime for 1 to 4 passengers (indicative fare)." },
      { q: "My TGV arrives at Moûtiers — can you take me up to Les Arcs?", a: "Yes, allow around 55 minutes to Arc 1800. Fare on quotation depending on the resort — book with your train number." },
      { q: "Do you cover late arrivals at Moûtiers?", a: "Yes, by advance booking, including night trains and connections after 10 pm." }
    ],
    proches: ["aime-la-plagne", "la-plagne", "albertville", "chambery"]
  },

  {
    slug: "albertville",
    name: "Albertville",
    short: "Albertville",
    tag: "Olympic town",
    kind: "ville",
    duree: "50 min",
    km: "55 km",
    base: 130,
    matrix: false,
    metaTitle: "Taxi & Private Transfers Bourg-Saint-Maurice ⇄ Albertville | ASM TAXI",
    metaDesc: "Taxi between Bourg-Saint-Maurice and Albertville: hospital, railway station, town centre, retail parks. Medical and private journeys 7 days a week. ☎ 07 67 67 69 81",
    intro: [
      "Olympic town and crossroads of the Tarentaise, the Beaufortain and the Val d'Arly, <strong>Albertville</strong> brings together the area's key services: hospital, railway station, public offices and retail parks. ASM TAXI gets you there in 50 minutes from Bourg-Saint-Maurice.",
      "A medical appointment at the Albertville-Moûtiers hospital, a rail connection, shopping or admin errands: we organise the return trip at your own pace, always on time."
    ],
    points: [
      "Albertville-Moûtiers hospital (CHAM) served daily",
      "Railway station: TER connections to Annecy and Chambéry",
      "We can wait on site during your appointments (return trip)",
      "Olympic Hall, retail parks and public offices"
    ],
    savoir: [
      { h3: "Your medical appointments", p: "We regularly drive patients from the Haute-Tarentaise to the CHAM and to Albertville's medical practices. On request, your driver waits during your consultation and brings you home — one quote, zero stress." },
      { h3: "Albertville: the practical side", p: "Halfway between the resorts and the larger cities, Albertville is also a handy stopover: coach station, cheaper equipment hire, hypermarkets. A half-day return trip is common — tell us about your plans." }
    ],
    faq: [
      { q: "How much is a taxi from Bourg-Saint-Maurice to Albertville?", a: "From €130 for 1 to 4 passengers, day or night (indicative fare)." },
      { q: "Can you wait for me during my hospital appointment?", a: "Yes, we offer wait-and-return service: ask for a return-trip quote, often better value than two separate journeys." },
      { q: "Do you serve the Beaufortain from Albertville?", a: "Yes, on request: Beaufort, Arêches-Beaufort and Lake Roselend are among our summer destinations." }
    ],
    proches: ["moutiers", "chambery", "annecy", "aime-la-plagne"]
  }
];
