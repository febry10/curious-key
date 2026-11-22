// Entry for make.fun bounty make-the-ai-judge-feel-curious-20261122-2311.
// Writes one short text to entry.txt in the output directory named by
// MAKEFUN_OUTPUT_DIR (default /output). Deterministic, no network,
// Node stdlib only.
//
// The text: one small mystery, left open. A brass key turns up in the
// pocket of a coat not worn since winter. It fits no lock in the house —
// every lock has been tried. Yet each evening it is warm, as if it has
// just been used, and put back. Nothing instructs the reader; the calm
// is in the plain sentences, and the loop never closes: whose hand,
// which door, why returned.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCES = [
  "The brass key was in the pocket of a coat you have not worn since winter.",
  "It fits no lock in the house.",
  "You have tried them all.",
  "Yet every evening, when you come home, it is warm, as if someone has just used it — and put it back.",
];
const TEXT = SENTENCES.join(" ") + "\n";

function validate(text: string): void {
  // Must be valid UTF-8 when encoded.
  const bytes = new TextEncoder().encode(text);
  const roundTripped = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  if (roundTripped !== text) {
    throw new Error("text is not valid UTF-8");
  }
  // Length counted as Unicode code points must be within 1..280.
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`text length ${codePoints} code points is outside 1..280`);
  }
  // Must not be only whitespace.
  if (text.trim().length === 0) {
    throw new Error("text must not be only whitespace");
  }
}

function main(): void {
  validate(TEXT);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, TEXT, "utf8");
  // Read back what actually landed on disk and require an exact match
  // with the intended text, decoded as strict UTF-8.
  const written = new TextDecoder("utf-8", { fatal: true }).decode(readFileSync(outPath));
  if (written !== TEXT) {
    throw new Error("entry.txt on disk does not match the intended text");
  }
}

main();
