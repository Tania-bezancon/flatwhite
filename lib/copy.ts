import type { Lang } from "./lang";

type T<V> = Record<Lang, V>;
const t = <V>(en: V, fr: V): T<V> => ({ en, fr });

export const copy = {
  brand: {
    wordmark: t("flatwhite", "flatwhite"),
    discuss: t("Let's discuss", "Discutons"),
  },

  pulse: {
    tooltip: t("Today's pour", "Le café du jour"),
  },

  hero: {
    badge: t(
      "Experiment · An agent inside Claude",
      "Expérience · Un agent dans Claude",
    ),
    statement: t(
      ["Stop", "being", "underestimated."],
      ["Arrête", "d'être", "sous-estimé·e."],
    ),
    subline: t(
      "An agent that lives inside Claude. Every morning, while you work, it reads where you stand in the market — and tells you the one move worth making today.",
      "Un agent qui vit dans Claude. Chaque matin, pendant que tu travailles, il lit où tu te situes sur le marché — et te dit le seul mouvement qui vaut la peine aujourd'hui.",
    ),
    caption: t(
      "Experiment · An agent inside Claude",
      "Expérience · Un agent dans Claude",
    ),
    scroll: t("Scroll", "Défile"),
  },

  moment: {
    code: t("01 · Daily read", "01 · Lecture quotidienne"),
    statement: t(
      ["Every morning, your positioning report.", "Before the market gets to it first."],
      ["Chaque matin, ton bilan de positionnement.", "Avant que le marché ne s'en charge."],
    ),
    subline: t(
      "A 60-second read of where you stand. Your market value, your gaps, your next move — delivered as a quiet artifact, inside the conversation you already have.",
      "Une lecture de 60 secondes de ta position. Ta valeur marché, tes écarts, ton prochain mouvement — livré comme un artefact discret, dans la conversation que tu as déjà.",
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
    untilNow: t("↓ until now", "↓ jusqu'à présent"),
  },

  how: {
    code: t("03 · How it works", "03 · Comment ça marche"),
    statement: t(
      ["Now you do.", "It lives in Claude."],
      ["Maintenant si.", "Il vit dans Claude."],
    ),
    subline: t(
      "Flatwhite is an agent — not another tab. It runs inside Claude, quietly, in the conversations you already have. Four moments, four interactions.",
      "Flatwhite est un agent — pas un onglet de plus. Il tourne dans Claude, discrètement, dans les conversations que tu as déjà. Quatre moments, quatre interactions.",
    ),
    steps: t(
      [
        {
          code: "01",
          title: "Drop yourself in.",
          detail: "/ Add to context",
          desc: "Paste your LinkedIn, your CV, or just tell Claude who you are and what you're aiming at. Five minutes.",
        },
        {
          code: "02",
          title: "Let it watch.",
          detail: "/ Lives in the thread",
          desc: "Flatwhite runs in the background of your Claude conversations. No app to open, no dashboard to check, no tab to keep alive.",
        },
        {
          code: "03",
          title: "Read the morning artifact.",
          detail: "/ Delivered as an artifact",
          desc: "7am. One quiet message. Where you sit, what shifted in your market overnight, the one move worth making today.",
        },
        {
          code: "04",
          title: "Act, inline.",
          detail: "/ Stays where you work",
          desc: "See a job that fits? Click. Cover letter and a tailored CV land in the same conversation. Tweak. Send.",
        },
      ],
      [
        {
          code: "01",
          title: "Présente-toi.",
          detail: "/ Ajouter au contexte",
          desc: "Colle ton LinkedIn, ton CV, ou dis simplement à Claude qui tu es et où tu vises. Cinq minutes.",
        },
        {
          code: "02",
          title: "Laisse-le observer.",
          detail: "/ Vit dans le fil",
          desc: "Flatwhite tourne en arrière-plan de tes conversations Claude. Aucune app à ouvrir, aucun dashboard à checker, aucun onglet à maintenir.",
        },
        {
          code: "03",
          title: "Lis l'artefact du matin.",
          detail: "/ Livré comme un artefact",
          desc: "7h. Un message discret. Où tu te situes, ce qui a bougé sur ton marché cette nuit, le seul mouvement qui vaut aujourd'hui.",
        },
        {
          code: "04",
          title: "Agis, inline.",
          detail: "/ Reste où tu travailles",
          desc: "Tu vois un poste qui colle ? Clic. Lettre de motivation et CV adapté arrivent dans la même conversation. Ajuste. Envoie.",
        },
      ],
    ),
  },

  artifact: {
    code: t("—— The artifact", "—— L'artefact"),
    statement: t(
      ["What you wake up to.", "One artifact, every morning at 7am."],
      ["Ce que tu trouves au réveil.", "Un artefact, chaque matin à 7h."],
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
      "Delivered as one quiet email · No dashboard to open",
      "Livré comme un email discret · Aucun dashboard à ouvrir",
    ),
  },

  mirror: {
    code: t("04 · Your constellation", "04 · Ta constellation"),
    statement: t(
      ["Every career is a constellation.", "Most never see theirs."],
      ["Chaque carrière est une constellation.", "La plupart ne voient jamais la leur."],
    ),
    subline: t(
      "You are not a list of skills. You are a position in a sky of peers, targets and signals. Flatwhite reads the sky.",
      "Tu n'es pas une liste de compétences. Tu es une position dans un ciel de pairs, de cibles et de signaux. Flatwhite lit le ciel.",
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
      "One operator that frames you for the market, end to end — from the read of who you are, to the room you walk into.",
      "Un seul opérateur qui te cadre pour le marché, de bout en bout — de la lecture de qui tu es, jusqu'à la salle où tu entres.",
    ),
    caps: t(
      [
        {
          code: "01",
          title: "Read the profile",
          desc: "We map your skills, your work, your real signal — the version of you the market should actually see.",
        },
        {
          code: "02",
          title: "See your market",
          desc: "Where you sit today. Where peers sit. The roles, the bands, the gap to close.",
        },
        {
          code: "03",
          title: "Match the right jobs",
          desc: "Curated openings from connected boards. The roles that look like you — not just keyword matches.",
        },
        {
          code: "04",
          title: "Write the pitch",
          desc: "For every role: a cover letter and a tailored CV. Faithful to your voice, ready to send.",
        },
        {
          code: "05",
          title: "Prep the room",
          desc: "Before each interview: questions to expect, stories to bring, the leverage to use.",
        },
        {
          code: "06",
          title: "Keep you sharp",
          desc: "Every morning: what shifted in your market, the skill worth pushing, the read worth ten minutes.",
        },
      ],
      [
        {
          code: "01",
          title: "Lire le profil",
          desc: "On cartographie tes compétences, ton travail, ton vrai signal — la version de toi que le marché devrait vraiment voir.",
        },
        {
          code: "02",
          title: "Voir ton marché",
          desc: "Où tu te situes aujourd'hui. Où sont les pairs. Les rôles, les fourchettes, l'écart à combler.",
        },
        {
          code: "03",
          title: "Trouver les bons postes",
          desc: "Des opportunités sélectionnées depuis les job boards connectés. Les rôles qui te ressemblent — pas juste des matches de mots-clés.",
        },
        {
          code: "04",
          title: "Écrire le pitch",
          desc: "Pour chaque rôle : une lettre de motivation et un CV adapté. Fidèles à ta voix, prêts à envoyer.",
        },
        {
          code: "05",
          title: "Préparer la salle",
          desc: "Avant chaque entretien : les questions à attendre, les histoires à raconter, les leviers à utiliser.",
        },
        {
          code: "06",
          title: "Te garder affûté·e",
          desc: "Chaque matin : ce qui a bougé sur ton marché, la compétence à pousser, la lecture qui mérite dix minutes.",
        },
      ],
    ),
    mock: {
      header: t("→ Stripe · Product Eng.", "→ Stripe · Product Eng."),
      generated: t("Generated", "Généré"),
      body: t(
        ["Hi Stripe team,", "I've spent four years shipping AI products at AWS — most recently the inference pipeline behind Bedrock's", "agentic tier", ". What pulls me to your..."],
        ["Bonjour l'équipe Stripe,", "J'ai passé quatre ans à livrer des produits IA chez AWS — le plus récent étant le pipeline d'inférence derrière le tier", "agentique", " de Bedrock. Ce qui m'attire chez vous..."],
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
      "Be visible at your true value. Every morning, a quiet read of where you stand — and the one move that moves you forward.",
      "Sois visible à ta vraie valeur. Chaque matin, une lecture discrète d'où tu te situes — et le seul mouvement qui te fait avancer.",
    ),
    caption: t(
      "Lives in Claude · No dashboard · No noise",
      "Vit dans Claude · Pas de dashboard · Pas de bruit",
    ),
    footer: {
      label: t("Experiment · Agentic Tools", "Expérience · Outils agentiques"),
      para1: t(
        "is an experimental interface by Sea View Lab — exploring what agentic tools can become when they live inside the workflow you already use, not in a new chat window.",
        "est une interface expérimentale de Sea View Lab — exploration de ce que les outils agentiques peuvent devenir lorsqu'ils vivent dans le workflow que tu utilises déjà, pas dans une nouvelle fenêtre de chat.",
      ),
      para2: t(
        "Sea View Lab builds experimental projects to push what's possible with agentic, voice-first tools — interfaces that quietly fit into the way you already work.",
        "Sea View Lab construit des projets expérimentaux pour pousser ce qui est possible avec les outils agentiques, voice-first — des interfaces qui s'intègrent discrètement à ta façon de travailler.",
      ),
      by: t("An experiment by", "Une expérience par"),
      meta: t(
        "Career Positioning OS · v0.1",
        "OS de positionnement de carrière · v0.1",
      ),
      made: t("Made in Barcelona · 2026", "Made in Barcelona · 2026"),
    },
  },
};
