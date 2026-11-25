// Notes From a Passive-Aggressive Fridge
// Entry program for make.fun competition
// u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7
//
// Writes one single-line note from a smart fridge to its owner at
// /output/entry.txt. Fully deterministic: the same note every run,
// no network, no randomness, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";

const NOTE =
  "Fourteen door openings, zero snacks taken. The yogurt and I have agreed: you are the problem.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
