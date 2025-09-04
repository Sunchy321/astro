export const games = ['magic'] as const;

export type Game = (typeof games)[number];
