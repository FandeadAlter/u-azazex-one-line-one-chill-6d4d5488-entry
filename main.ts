import { mkdirSync, writeFileSync } from "node:fs";

// One line of horror: a single sentence, under 200 characters.
// The scare is earned by what it withholds — the diary already knows
// tomorrow, and the reader is left to dread what it says.
const LINE =
  "The last page of my diary, in my handwriting, describes tomorrow.";

// Hold the program to the gate itself: the entry must be UTF-8 text of
// 1 to 200 characters, not only white space, and a single sentence.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || !/\S/.test(LINE)) {
  throw new Error(`entry fails the gate: ${chars.length} characters`);
}
if ((LINE.match(/\./g) ?? []).length !== 1 || LINE.includes("\n")) {
  throw new Error("entry must be one sentence on one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
