# TimeTravel Agency

> Webapp interactive pour une agence de voyage temporel fictive proposant 3 destinations : **Paris 1889**, le **Cretace** et **Florence 1504**.

## Apercu

TimeTravel Agency est une maquette de webapp moderne construite avec **Next.js 16**, **Tailwind CSS v4** et le **Vercel AI SDK 6**. Elle met en scene une agence de tourisme temporel premium a travers une interface immersive, des visuels generes par IA et un chatbot conversationnel propulse par Mistral AI.

---

## Fonctionnalites

### Page d'accueil

- **Hero section plein ecran** avec image de fond cosmique et animation de particules dorees en canvas HTML5
- Badge anime "Voyages temporels disponibles" avec indicateur pulse
- Titres en gradient or (Playfair Display) + CTA vers les destinations
- **Marquee ticker** defilant en continu entre les sections

### Galerie des destinations

- **3 cartes interactives** (Paris 1889, Cretace, Florence 1504) avec visuels generes par IA
- Notes, tags de points forts et metadonnees (duree, groupe)
- **Modal detaille** au clic : description complete, informations pratiques (duree, groupe, securite), points forts, inclusions et avertissements

### Agent conversationnel

- **Chatbot IA integre** (bulle flottante en bas a droite)
- Propulse par **Mistral AI** (`mistral-small-latest`) via le Vercel AI SDK 6
- Questions rapides pre-definies pour debuter la conversation
- Streaming des reponses en temps reel
- Conseils personnalises sur les 3 destinations
- FAQ automatisee avec system prompt detaille

---

## Stack technique

| Categorie     | Technologie                               |
| ------------- | ----------------------------------------- |
| Framework     | Next.js 16 (App Router)                   |
| Langage       | TypeScript                                |
| Styling       | Tailwind CSS v4 + design tokens           |
| UI Components | shadcn/ui, Lucide Icons                   |
| Typographie   | Playfair Display (titres) + Inter (corps) |
| IA / Chatbot  | Vercel AI SDK 6 + Mistral AI              |
| Modele IA     | `mistral-small-latest` (gratuit)          |
| Deploiement   | Vercel                                    |

---

## Architecture du projet

```
app/
  layout.tsx          # Layout racine (fonts, metadata, viewport)
  page.tsx            # Page principale, assemble tous les composants
  globals.css         # Theme sombre/or, animations custom, design tokens
  api/
    chat/
      route.ts        # API Route pour le chatbot (streaming Mistral AI)

components/
  navbar.tsx          # Navigation responsive avec effet de scroll
  hero-section.tsx    # Hero avec particules canvas + parallaxe
  marquee-ticker.tsx  # Bandeau defilant
  destination-cards.tsx  # Galerie + modal detaillee des destinations
  about-section.tsx   # Presentation de l'agence + chiffres cles
  chatbot.tsx         # Agent conversationnel IA (client component)
  footer.tsx          # Footer avec liens et credits

public/images/
  hero-bg.jpg         # Fond cosmique du hero (genere par IA)
  paris-1889.jpg      # Visuel Paris 1889 (genere par IA)
  cretaceous.jpg      # Visuel Cretace (genere par IA)
  florence-1504.jpg   # Visuel Florence 1504 (genere par IA)
```

---

## Installation et lancement

### Prerequis

- **Node.js** 18+ (recommande : 20+)
- **pnpm** (ou npm/yarn)
- Une **cle API Mistral** gratuite : [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys)

### Etapes

```bash
# 1. Cloner ou extraire le projet
git clone https://github.com/Lxckyluck/TravelAgency-webapp.git && cd TravelAgency-webapp

# 2. Installer les dependances
pnpm install

# 3. Configurer la variable d'environnement
cp .env.example .env.local
# Editer .env.local et ajouter votre cle :
# MISTRAL_API_KEY=votre_cle_ici

# 4. Lancer le serveur de dev
pnpm dev
```

L'app est accessible sur **http://localhost:3000**.

> **Note :** Toute l'app fonctionne sans cle API. Seul le chatbot necessite `MISTRAL_API_KEY`.

### Variables d'environnement

| Variable          | Requis          | Description                                |
| ----------------- | --------------- | ------------------------------------------ |
| `MISTRAL_API_KEY` | Pour le chatbot | Cle API gratuite depuis console.mistral.ai |

---

## Prompts documentes

### Prompt de generation du projet (v0)

Le projet a ete genere via [v0.dev](https://v0.dev) avec le prompt initial suivant :

> _"Fait moi une maquette d'une webapp moderne et interactive qui met en scene l'agence et ses 3 destinations (Paris 1889, Cretace, Florence 1504) avec ces fonctionalites : Page d'accueil (Hero section avec video / animation de fond, Presentation de l'agence, CTA vers les destinations), Galerie des destinations (Cards interactives pour les 3 epoques, Visuels generes, Informations detaillees par destination), Agent conversationnel (Chatbot IA integre, Conseils personnalises sur les destinations, FAQ automatisee)"_

### Prompt du design brief (GenerateDesignInspiration)

v0 a genere un brief de design interne avec les parametres :

- **Goal** : Webapp premium pour agence de voyage temporel avec hero immersif, cartes interactives pour 3 epoques, chatbot IA integre
- **Context** : Interface francaise, theme sombre luxueux, noir + or, typographie cinematique, animations fluides

### Prompts de generation des images

Les 4 visuels du site ont ete generes par IA (GenerateImage) avec les prompts suivants :

1. **hero-bg.jpg** : _"Abstract cinematic dark background for a time travel agency website, swirling cosmic vortex with golden light trails and dark navy blue space, particles of light forming a clock-like spiral pattern, mysterious and luxurious feeling, deep blacks with golden amber accents, subtle star field"_

2. **paris-1889.jpg** : _"Cinematic wide shot of Paris 1889 during the Exposition Universelle, the Eiffel Tower newly built and illuminated with warm golden lights at dusk, Belle Epoque architecture, crowds in Victorian-era clothing, dramatic sky with purple and gold clouds, painterly photorealistic style"_

3. **cretaceous.jpg** : _"Cinematic wide shot of the Cretaceous period, a lush prehistoric jungle with massive ferns and towering conifers, a T-Rex in the distance near a misty river, dramatic volcanic mountains in the background, warm golden sunlight filtering through dense vegetation, hyper-realistic painterly style"_

4. **florence-1504.jpg** : _"Cinematic wide shot of Florence Italy in 1504 during the Renaissance, the Duomo cathedral dominating the skyline, terracotta rooftops, cobblestone streets with artists and merchants, Leonardo da Vinci era, warm sunset light bathing the city in golden orange, painterly photorealistic style"_

### System prompt du chatbot

Le chatbot utilise un system prompt detaille en francais qui definit :

- Le role : assistant virtuel de TimeTravel Agency
- Les 3 destinations avec tous leurs details (duree, prix, securite, inclus, avertissements)
- Les regles de comportement : reponses en francais, ton enthousiaste et professionnel, conseils personnalises, redirection polie si hors sujet, reponses concises (3-5 phrases)

Le prompt complet est visible dans `app/api/chat/route.ts`.

---

## Choix techniques et reflexion sur le processus

### Approche de design

Le design suit une esthetique **"luxe sombre"** inspiree des sites de voyage haut de gamme :

- **Palette** : Noir profond (`#0a0a0f`) + Or (`#c9a84c`) + Beige clair (`#f0ead6`) -- 3 couleurs seulement pour la coherence
- **Typographie** : Playfair Display (serif, pour le prestige historique des titres) + Inter (sans-serif, pour la lisibilite du corps)
- **Animations** : Particules canvas, shimmer, pulse-glow, marquee -- toutes en CSS/JS natif pour la performance

### Pourquoi Mistral AI ?

Le choix de Mistral a ete fait pour :

- **Gratuit pour debuter** : le modele `mistral-small-latest` est inclus dans le free tier
- **Modele open source** : transparence et ethique
- **Excellente maitrise du francais** : Mistral etant un modele francais, il excelle dans les interactions en langue francaise
- **Performance** : reponses rapides et de qualite pour un chatbot conversationnel

### Processus de creation avec v0

1. **Prompt initial** : description des fonctionnalites souhaitees en langage naturel
2. **Generation du design** : v0 a cree un brief de design automatique (palette, typographie, layout)
3. **Generation des visuels** : 4 images generees par IA pour illustrer les destinations et le hero
4. **Scaffolding complet** : v0 a genere tous les composants, le theming, l'API route et le chatbot en une seule passe
5. **Iteration** : adaptation du modele IA (passage d'OpenAI a Mistral) via un prompt de modification
6. **Documentation** : ce README, genere par v0 a la demande

Le processus illustre comment un outil d'IA generative peut accelerer considerablement le prototypage d'une webapp complete, tout en laissant au developpeur le controle sur les choix techniques (modele IA, provider, architecture).

### Limites et ameliorations possibles

- **Persistance** : actuellement sans base de donnees. Un systeme de reservation necessiterait Supabase ou equivalent
- **Authentification** : pas de systeme de comptes utilisateurs
- **i18n** : interface en francais uniquement, pourrait etre internationalisee
- **Tests** : pas de tests unitaires ou E2E (Vitest, Playwright a ajouter)
- **Accessibilite** : les bases sont la (ARIA labels, semantique HTML) mais un audit WCAG serait necessaire
- **SEO** : metadata en place, mais le contenu pourrait etre enrichi avec des donnees structurees (JSON-LD)

---

## Credits et transparence

| Element               | Source / Outil                                                              |
| --------------------- | --------------------------------------------------------------------------- |
| Generation du code    | [v0.dev](https://v0.dev) (Vercel)                                           |
| Framework             | [Next.js](https://nextjs.org) 16                                            |
| Composants UI         | [shadcn/ui](https://ui.shadcn.com)                                          |
| Icones                | [Lucide](https://lucide.dev)                                                |
| Chatbot IA            | [Vercel AI SDK 6](https://sdk.vercel.ai) + [Mistral AI](https://mistral.ai) |
| Modele de langage     | `mistral-small-latest` (Mistral AI, open source)                            |
| Generation des images | IA generative via v0 (GenerateImage)                                        |
| Polices               | Google Fonts (Playfair Display, Inter)                                      |
| Animations            | CSS custom + Canvas API (particules)                                        |

**Ce projet est une maquette fictive a but educatif.** TimeTravel Agency n'est pas une vraie agence et les voyages temporels ne sont (malheureusement) pas encore disponibles.

---

## Licence

Projet realisé dans un cadre educatif avec :

- Yohann DEBREUX
- Nakib BOINAHERI
- Stephane YAGIR
- Cédric SIMPORE
- Lucas DENIS
