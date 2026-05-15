export const colors = {
  void: "#120802",
  deep: "#1d0f06",
  mid: "#2a180c",
  soft: "#3a2414",
  elev: "#4a311e",
  cream: "#f5dcb3",
  amber: "#e89a4b",
  ember: "#c8662a",
  roast: "#7a3d18",
  sage: "#8db09e",
} as const;

// Atmospheric stages — subtle temperature drifts through the chocolate.
// The "journey": morning brew → midday espresso → afternoon mocha → evening roast.
type Stage = { at: number; center: string; outer: string };

export const ambientStages: Stage[] = [
  { at: 0.0, center: "#2a180c", outer: "#120802" },
  { at: 0.2, center: "#3a2414", outer: "#1a0e06" },
  { at: 0.4, center: "#1d0f06", outer: "#0a0500" },
  { at: 0.55, center: "#2e1a0e", outer: "#150a04" },
  { at: 0.7, center: "#3a2414", outer: "#1a0e06" },
  { at: 0.85, center: "#1d0f06", outer: "#0e0602" },
  { at: 1.0, center: "#2a180c", outer: "#120802" },
];

export const easing = [0.32, 0.72, 0, 1] as const;
