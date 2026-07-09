# ASM TAXI — Site vitrine

Site statique (HTML/CSS/JS) optimisé pour le référencement local.
**ASM TAXI** — Taxi à Bourg-Saint-Maurice (Gare SNCF) : transferts aéroports
(Genève, Lyon, Chambéry, Grenoble) et navettes vers les stations de Haute-Tarentaise.

## 📞 Coordonnées intégrées au site

- **Nom** : ASM TAXI
- **Base** : Gare SNCF, Bourg-Saint-Maurice (73700)
- **Téléphone** : 07 67 67 69 81 (`+33767676981` dans les liens tel/WhatsApp)
- **Email** : asm.taxi73@gmail.com

## 📁 Structure

```
taxi/
├── index.html              → page d'accueil (design noir & or « Alpine Premium »)
├── stations.html           → hub : toutes les destinations & tarifs (GÉNÉRÉ)
├── destinations/*.html     → 22 pages trajets (GÉNÉRÉES — ne pas éditer à la main)
├── data/stations.mjs       → fiches des 15 stations/villages (contenu + tarifs)
├── data/hubs.mjs           → fiches des 7 aéroports/gares/villes
├── generate.mjs            → générateur : node generate.mjs
├── css/styles.css          → design (thème noir & or)
├── js/main.js              → menu, FAQ, formulaire de devis
├── robots.txt / sitemap.xml→ SEO (sitemap GÉNÉRÉ par generate.mjs)
└── .claude/serve.mjs       → serveur d'aperçu local (node .claude/serve.mjs)
```

### ✨ Modifier ou ajouter une destination

1. Éditer la fiche dans `data/stations.mjs` (ou `data/hubs.mjs`) — textes,
   tarifs (`gare14`, `supplement`), FAQ…
2. Lancer `node generate.mjs` : les 22 pages + stations.html + sitemap.xml
   sont refabriqués automatiquement, cohérents entre eux.
3. Commit + push : Vercel redéploie tout seul.

Règles tarifaires (modifiables dans generate.mjs) : 5-8 passagers = +15 €
(local) ou +30 € (longue distance) ; nuit/dimanche/férié = +15 % arrondi à 5 €.

## ⚠️ Encore à faire avant la mise en ligne

1. **Nom de domaine** : le site utilise le domaine **provisoire** `www.asm-taxi.fr`
   (déjà pris !). Domaines vérifiés disponibles au 2026-07-07 :
   - `asmtaxi.fr` ✅ (à acheter chez OVH/Gandi/Ionos, ~8 €/an)
   - `taxi-bourgsaintmaurice.fr` ✅ (idem)
   - `asm-taxi.com` ✅ (11,25 $/an, achetable directement via Vercel)
   Une fois choisi → rechercher/remplacer `www.asm-taxi.fr` dans tous les
   fichiers (`index.html`, `destinations/*.html`, `robots.txt`, `sitemap.xml`).
2. **Tarifs** : les prix des tableaux sont **indicatifs**, à remplacer par les vrais.
3. **Avis clients** : ceux de la page d'accueil sont des exemples → remplacer
   par de vrais avis (ou supprimer la section en attendant).

## 🏗️ Hébergement retenu : Vercel (Supabase = plus tard)

- **Vercel** héberge le site (gratuit pour un site vitrine, HTTPS automatique,
  très rapide). Déploiement : importer le dossier ou `npx vercel` à la racine.
- **Supabase** n'est **pas nécessaire pour l'instant** : c'est une base de
  données/backend, utile seulement si un jour on ajoute la réservation en ligne
  avec suivi des courses, historique client, etc. (phase 2).

## 📨 Recevoir les demandes de devis par email

Par défaut, le formulaire ouvre la messagerie du visiteur avec un email pré-rempli
vers asm.taxi73@gmail.com. Pour recevoir les demandes **automatiquement** :

**Option Formspree (gratuit, 2 min) :**
1. Créer un compte sur https://formspree.io avec asm.taxi73@gmail.com, créer un formulaire.
2. Dans `index.html`, sur la balise `<form id="devis-form">`, remplacer
   `action="#"` par `action="https://formspree.io/f/TON_ID"` et ajouter `method="POST"`.
3. Chaque demande arrive alors directement dans la boîte Gmail.

**Option Vercel serverless** : une fonction `/api/devis` + un service d'envoi
d'email (Resend, gratuit jusqu'à 3 000 emails/mois). Plus propre, à faire au
moment du déploiement Vercel si souhaité.

## 🚀 Après la mise en ligne — pour viser la 1re place Google

1. **Google Business Profile** — LE levier n°1 pour un taxi local. Fiche gratuite
   sur https://business.google.com, catégorie « Service de taxi », adresse
   Gare SNCF Bourg-Saint-Maurice, tél 07 67 67 69 81, lien vers le site, photos.
   C'est ça qui fait apparaître dans Google Maps et l'encadré local.
2. **Google Search Console** — https://search.google.com/search-console :
   ajouter le site, soumettre `sitemap.xml`.
3. **Avis Google** — demander un avis à chaque client satisfait (nombre et
   fraîcheur des avis = critère majeur du classement local).
4. **Annuaires** — PagesJaunes, offices de tourisme (Bourg-Saint-Maurice,
   Les Arcs, La Rosière…), avec nom/adresse/téléphone identiques partout.
5. **Contenu** — ajouter des pages ciblées : Annecy, Albertville, Moûtiers,
   une page par station (Les Arcs, Val d'Isère, Tignes…).

## 🔧 Développement local

Aperçu local : `node .claude/serve.mjs` puis ouvrir http://localhost:4321.
Les couleurs se changent en haut de `css/styles.css` (section `:root`).
