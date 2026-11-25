import { mkdirSync, writeFileSync } from "node:fs";

// One line of horror: a single sentence, under 200 characters.
// The scare is earned by what it withholds — the diary already knows
// tomorrow, and the reader is left to dread what it says.
const LINE =
  "The last page of my diary, in my handwriting, describes tomorrow.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
