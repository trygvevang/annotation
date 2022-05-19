export interface Observation {
  id: string;
  message: string;
}

export interface Annotation {
  id: string;
  label: Label;
}

export const LABELS = [
  "Billettkjøp",
  "Forsinkelse / Punktlighet",
  "Reiseplanlegging / Reisesøk",
  "Reiseopplevelse / Ombord på toget",
  "Billettkontroll",
  "Usikker / Annet",
  "Filtrer ut",
] as const;

export type Label = typeof LABELS[number];
