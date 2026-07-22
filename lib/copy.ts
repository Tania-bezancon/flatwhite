import type { Lang } from "./lang";

type T<V> = Record<Lang, V>;
const t = <V>(en: V, fr: V): T<V> => ({ en, fr });

export const copy = {
  brand: {
    wordmark: t("flatwhite", "flatwhite"),
    discuss: t("Let's discuss", "Discutons"),
  },

  // Illustrative disclosures reused across sections
  illustrative: {
    experiment: t(
      "A Sea View Lab experiment · independent concept",
      "Une expérimentation Sea View Lab · concept indépendant",
    ),
    data: t(
      "Illustrative prototype data · Fictional persona",
      "Données illustratives · Persona fictif",
    ),
    interface: t(
      "Illustrative prototype interface",
      "Interface prototype · illustrative",
    ),
    journey: t(
      "Illustrative journey · Fictional scenario",
      "Parcours illustratif · Scénario fictif",
    ),
  },

  pulse: {
    tooltip: t("Your morning read", "Ta lecture du matin"),
  },

  hero: {
    badge: t(
      "A Sea View Lab experiment · independent concept",
      "Une expérimentation Sea View Lab · concept indépendant",
    ),
    statement: t(
      ["Stop", "being", "underestimated."],
      ["Arrête", "d'être", "sous-estimé·e."],
    ),
    subline: t(
      "An experimental interface that imagines what a career-positioning agent could feel like inside Claude — envisioned to read where you stand in the market each morning, and surface the one move worth making today.",
      "Une interface expérimentale qui imagine ce que pourrait être un agent de positionnement de carrière dans Claude — pensée pour lire où tu te situes sur le marché chaque matin, et faire émerger le seul mouvement qui vaut la peine aujourd'hui.",
    ),
    caption: t(
      "Independent concept · Work in progress",
      "Concept indépendant · Work in progress",
    ),
    scroll: t("Scroll", "Défile"),
  },

  moment: {
    code: t("01 · Daily read", "01 · Lecture quotidienne"),
    statement: t(
      [
        "Every morning, imagined as your positioning report.",
        "Before the market gets to it first.",
      ],
      [
        "Chaque matin, imaginé comme ton bilan de positionnement.",
        "Avant que le marché ne s'en charge.",
      ],
    ),
    subline: t(
      "A 60-second read of where you stand — envisioned as a quiet artifact, delivered inside the conversation you already have.",
      "Une lecture de 60 secondes de ta position — imaginée comme un artefact discret, livré dans la conversation que tu as déjà.",
    ),
    discLabel: t("60s", "60s"),
  },

  manifesto: {
    code: t("02 · The asymmetry", "02 · L'asymétrie"),
    statement: t(
      ["Recruiters have AI.", "You don't."],
      ["Les recruteurs ont l'IA.", "Pas toi."],
    ),
    subline: t(
      "Algorithms scan, score and price you in milliseconds. You've been on the wrong side of that math.",
      "Les algorithmes te scannent, te notent et te valorisent en millisecondes. Tu étais du mauvais côté de cette équation.",
    ),
    framing: t("This is what they see.", "Voici ce qu'ils voient."),
    scanLabel: t("Scanning candidate", "Analyse du candidat"),
    scanRef: t("REF · 4471 · Illustrative", "RÉF · 4471 · Illustratif"),
    verdicts: t(
      [
        { k: "FIT", v: "62%" },
        { k: "BAND", v: "Senior tier" },
        { k: "FLAG", v: "Overqualified" },
        { k: "PRICE", v: "−18K vs. market" },
      ],
      [
        { k: "FIT", v: "62%" },
        { k: "NIVEAU", v: "Senior" },
        { k: "ALERTE", v: "Surqualifié" },
        { k: "PRIX", v: "−18K vs. marché" },
      ],
    ),
    untilNow: t("↓ until now", "↓ jusqu'à présent"),
  },

  how: {
    code: t("03 · How it works", "03 · Comment ça marche"),
    statement: t(
      ["Now imagine one.", "Envisioned inside Claude."],
      ["Maintenant, imagine-en un.", "Imaginé dans Claude."],
    ),
    subline: t(
      "Flatwhite is an experimental interface — imagined as an agent, not another tab. It's designed to live inside Claude, quietly, in the conversations you already have. Four moments, four interactions.",
      "Flatwhite est une interface expérimentale — imaginée comme un agent, pas un onglet de plus. Pensée pour vivre dans Claude, discrètement, dans les conversations que tu as déjà. Quatre moments, quatre interactions.",
    ),
    steps: t(
      [
        {
          code: "01",
          title: "Drop yourself in.",
          detail: "/ Envisioned onboarding",
          desc: "In the concept: paste your LinkedIn, your CV, or just tell Claude who you are and what you're aiming at. Five minutes.",
        },
        {
          code: "02",
          title: "Let it watch.",
          detail: "/ Designed to live in the thread",
          desc: "Envisioned to run in the background of your Claude conversations — no app to open, no dashboard to check, no tab to keep alive.",
        },
        {
          code: "03",
          title: "Read the morning artifact.",
          detail: "/ Imagined as an artifact",
          desc: "7am, in the envisioned flow. One quiet message: where you sit, what shifted in your market overnight, the move worth making today.",
        },
        {
          code: "04",
          title: "Act, inline.",
          detail: "/ Designed to stay where you work",
          desc: "See a job that fits? Click — and, in the prototype, a cover letter and tailored CV would land in the same conversation. Tweak. Send.",
        },
      ],
      [
        {
          code: "01",
          title: "Présente-toi.",
          detail: "/ Onboarding imaginé",
          desc: "Dans le concept : colle ton LinkedIn, ton CV, ou dis simplement à Claude qui tu es et où tu vises. Cinq minutes.",
        },
        {
          code: "02",
          title: "Laisse-le observer.",
          detail: "/ Pensé pour vivre dans le fil",
          desc: "Envisagé pour tourner en arrière-plan de tes conversations Claude — aucune app, aucun dashboard, aucun onglet à maintenir.",
        },
        {
          code: "03",
          title: "Lis l'artefact du matin.",
          detail: "/ Imaginé comme un artefact",
          desc: "7h, dans le flow imaginé. Un message discret : où tu te situes, ce qui a bougé sur ton marché cette nuit, le mouvement qui vaut aujourd'hui.",
        },
        {
          code: "04",
          title: "Agis, inline.",
          detail: "/ Pensé pour rester où tu travailles",
          desc: "Tu vois un poste qui colle ? Clic — et, dans le prototype, une lettre de motivation et un CV adapté arriveraient dans la même conversation. Ajuste. Envoie.",
        },
      ],
    ),
  },

  artifact: {
    code: t("—— The artifact", "—— L'artefact"),
    statement: t(
      [
        "What you would wake up to.",
        "One artifact, envisioned in a daily 7am flow.",
      ],
      [
        "Ce que tu trouverais au réveil.",
        "Un artefact, imaginé dans un flow quotidien à 7h.",
      ],
    ),
    card1: {
      label: t("Daily read", "Lecture du jour"),
      date: t("MAY · 13", "MAI · 13"),
      delta: t("↑ 4", "↑ 4"),
      title: t("Senior tier", "Niveau senior"),
      sub: t(
        "You crossed the threshold last week.",
        "Tu as franchi le seuil la semaine dernière.",
      ),
    },
    card2: {
      label: t("The gap", "L'écart"),
      delta: t("MARKET DELTA", "ÉCART MARCHÉ"),
      vs: t("vs. peers", "vs. pairs"),
      title: t("−18K", "−18K"),
      sub: t(
        "You're underpriced for your level.",
        "Tu es sous-valorisé·e pour ton niveau.",
      ),
      rangeYou: t("Your range", "Ta fourchette"),
      rangeMarket: t("Market range", "Fourchette marché"),
    },
    card3: {
      label: t("Today's move", "Action du jour"),
      priority: t("PRIORITY · 01", "PRIORITÉ · 01"),
      today: t("Today", "Aujourd'hui"),
      title: t("Reframe your title.", "Repositionne ton titre."),
      sub1: t("Pitch yourself as ", "Présente-toi comme "),
      role: t("Product Engineer · AI", "Product Engineer · AI"),
      sub2: t(
        " — your work matches the market term.",
        " — ton travail correspond au terme du marché.",
      ),
      mockLabel: t("/ suggested headline", "/ titre suggéré"),
      mockText: t(
        "Product Engineer building AI at scale",
        "Product Engineer building AI at scale",
      ),
    },
    caption: t(
      "Envisioned as one quiet email · No dashboard to open",
      "Imaginé comme un email discret · Aucun dashboard à ouvrir",
    ),
  },

  mirror: {
    code: t("04 · Your constellation", "04 · Ta constellation"),
    statement: t(
      ["Every career is a constellation.", "Most never see theirs."],
      [
        "Chaque carrière est une constellation.",
        "La plupart ne voient jamais la leur.",
      ],
    ),
    subline: t(
      "You are not a list of skills. You are a position in a sky of peers, targets and signals. Flatwhite is designed to read the sky.",
      "Tu n'es pas une liste de compétences. Tu es une position dans un ciel de pairs, de cibles et de signaux. Flatwhite est pensé pour lire le ciel.",
    ),
    labels: {
      target: t(
        { code: "TARGET", value: "Product Engineer · AI" },
        { code: "CIBLE", value: "Product Engineer · AI" },
      ),
      you: t(
        { code: "YOU · TODAY", value: "Senior tier · 4 yrs" },
        { code: "TOI · AUJOURD'HUI", value: "Niveau senior · 4 ans" },
      ),
      roast: t(
        { code: "ROAST", value: "Medium-dark" },
        { code: "INTENSITÉ", value: "Moyen-foncé" },
      ),
      delta: t(
        { code: "DELTA", value: "−18K vs. peers" },
        { code: "ÉCART", value: "−18K vs. pairs" },
      ),
      signal: t(
        { code: "SIGNAL", value: "Strong · rising" },
        { code: "SIGNAL", value: "Fort · en hausse" },
      ),
      domain: t(
        { code: "DOMAIN", value: "Product · AI · Hybrid" },
        { code: "DOMAINE", value: "Product · IA · Hybride" },
      ),
    },
  },

  circle: {
    code: t("05 · The 360", "05 · Le 360"),
    statement: t(
      ["Know yourself.", "Sell yourself."],
      ["Connais-toi.", "Vends-toi."],
    ),
    subline: t(
      "One operator envisioned to frame you for the market, end to end — from the read of who you are, to the room you would walk into.",
      "Un opérateur imaginé pour te cadrer sur le marché, de bout en bout — de la lecture de qui tu es, jusqu'à la salle où tu entrerais.",
    ),
    caps: t(
      [
        {
          code: "01",
          title: "Read the profile",
          desc: "Envisioned to map your skills, your work, your real signal — the version of you the market should actually see.",
        },
        {
          code: "02",
          title: "See your market",
          desc: "Designed to show where you sit today, where peers sit — the roles, the bands, the gap to close.",
        },
        {
          code: "03",
          title: "Match the right jobs",
          desc: "Envisioned integration with job boards — designed to surface roles that look like you, not just keyword matches.",
        },
        {
          code: "04",
          title: "Write the pitch",
          desc: "For every role: an envisioned cover letter and tailored CV — imagined to be faithful to your voice, ready to send.",
        },
        {
          code: "05",
          title: "Prep the room",
          desc: "Before each interview: envisioned questions to expect, stories to bring, the leverage to use.",
        },
        {
          code: "06",
          title: "Keep you sharp",
          desc: "Every morning, envisioned: what shifted in your market, the skill worth pushing, the read worth ten minutes.",
        },
      ],
      [
        {
          code: "01",
          title: "Lire le profil",
          desc: "Imaginé pour cartographier tes compétences, ton travail, ton vrai signal — la version de toi que le marché devrait vraiment voir.",
        },
        {
          code: "02",
          title: "Voir ton marché",
          desc: "Pensé pour montrer où tu te situes aujourd'hui, où sont les pairs — les rôles, les fourchettes, l'écart à combler.",
        },
        {
          code: "03",
          title: "Trouver les bons postes",
          desc: "Intégration envisagée avec les job boards — imaginée pour faire émerger des rôles qui te ressemblent, pas juste des matches de mots-clés.",
        },
        {
          code: "04",
          title: "Écrire le pitch",
          desc: "Pour chaque rôle : une lettre de motivation et un CV imaginés — pensés pour rester fidèles à ta voix, prêts à envoyer.",
        },
        {
          code: "05",
          title: "Préparer la salle",
          desc: "Avant chaque entretien : questions imaginées à attendre, histoires à raconter, leviers à utiliser.",
        },
        {
          code: "06",
          title: "Te garder affûté·e",
          desc: "Chaque matin, imaginé : ce qui a bougé sur ton marché, la compétence à pousser, la lecture qui mérite dix minutes.",
        },
      ],
    ),
    mock: {
      header: t(
        "→ Illustrative role · Product Eng.",
        "→ Poste illustratif · Product Eng.",
      ),
      generated: t("Prototype interaction", "Interaction prototype"),
      body: t(
        [
          "Hi hiring team,",
          "In this envisioned flow, an interface like flatwhite would draft a letter faithful to your voice — for example, four years shipping AI products, an inference pipeline behind an",
          "agentic tier",
          ". What pulls me to your...",
        ],
        [
          "Bonjour l'équipe de recrutement,",
          "Dans ce flow imaginé, une interface comme flatwhite rédigerait une lettre fidèle à ta voix — par exemple, quatre ans à livrer des produits IA, un pipeline d'inférence derrière un",
          "tier agentique",
          ". Ce qui m'attire chez vous...",
        ],
      ),
      cv: t("+ CV · 1 page", "+ CV · 1 page"),
      send: t("Send →", "Envoyer →"),
    },
    timeline: {
      code: t("—— Your first month", "—— Ton premier mois"),
      statement: t(
        ["From hello", "to hired."],
        ["De bonjour", "à embauché·e."],
      ),
      steps: t(
        [
          { day: "DAY 01", label: "Profile read", desc: "Skills mapped, story drafted." },
          { day: "DAY 04", label: "3 matches in", desc: "Roles that fit who you are." },
          { day: "DAY 05", label: "Pitch sent", desc: "Tailored CV + cover letter." },
          { day: "DAY 12", label: "Room prepped", desc: "Questions, stories, leverage." },
          { day: "DAY 21", label: "Offer in", desc: "Priced where you belong." },
        ],
        [
          { day: "JOUR 01", label: "Profil lu", desc: "Compétences cartographiées, histoire écrite." },
          { day: "JOUR 04", label: "3 matches", desc: "Des rôles qui te ressemblent." },
          { day: "JOUR 05", label: "Pitch envoyé", desc: "CV adapté + lettre." },
          { day: "JOUR 12", label: "Salle préparée", desc: "Questions, histoires, leviers." },
          { day: "JOUR 21", label: "Offre reçue", desc: "Valorisé·e à ta juste place." },
        ],
      ),
    },
  },

  final: {
    code: t("The promise", "La promesse"),
    statement: t(
      ["Sell yourself", "at the right price."],
      ["Vends-toi", "au juste prix."],
    ),
    subline: t(
      "An interface exploring what visibility at your true value could feel like. Every morning, a quiet read of where you stand — and the one move that would move you forward.",
      "Une interface qui explore ce que pourrait être la visibilité à ta vraie valeur. Chaque matin, une lecture discrète d'où tu te situes — et le seul mouvement qui te ferait avancer.",
    ),
    caption: t(
      "Designed to live in Claude · No dashboard · No noise",
      "Pensé pour vivre dans Claude · Pas de dashboard · Pas de bruit",
    ),
    footer: {
      label: t("Experiment · Agentic Tools", "Expérience · Outils agentiques"),
      para1: t(
        "is an experimental interface by Sea View Lab — exploring what agentic tools could become when they'd live inside the workflow you already use, not in a new chat window.",
        "est une interface expérimentale de Sea View Lab — exploration de ce que les outils agentiques pourraient devenir s'ils vivaient dans le workflow que tu utilises déjà, pas dans une nouvelle fenêtre de chat.",
      ),
      para2: t(
        "Sea View Lab builds experimental projects to push what's possible with agentic, voice-first tools — interfaces that quietly fit into the way you already work.",
        "Sea View Lab construit des projets expérimentaux pour pousser ce qui est possible avec les outils agentiques, voice-first — des interfaces qui s'intègrent discrètement à ta façon de travailler.",
      ),
      by: t("An experiment by", "Une expérience par"),
      meta: t(
        "Career Positioning concept · v0.1",
        "Concept de positionnement de carrière · v0.1",
      ),
      made: t("Made in Barcelona · 2026", "Made in Barcelona · 2026"),
      disclaimer: t(
        "Independent experimental prototype by Sea View Lab. Some scenarios, interfaces and data may be illustrative. No commercial service is currently offered unless explicitly stated.",
        "Prototype expérimental indépendant par Sea View Lab. Certains scénarios, interfaces et données peuvent être illustratifs. Aucun service commercial n'est actuellement proposé sauf mention explicite.",
      ),
      trademark: t(
        "Third-party product names and trademarks belong to their respective owners. No affiliation or endorsement is implied.",
        "Les noms de produits et marques tierces appartiennent à leurs détenteurs respectifs. Aucune affiliation ni approbation n'est sous-entendue.",
      ),
      domainInquiry: t(
        "Domain acquisition inquiries → Contact Sea View Lab",
        "Demandes d'acquisition du domaine → Contacter Sea View Lab",
      ),
    },
  },
};
