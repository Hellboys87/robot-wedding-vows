// One-Line Robot Wedding Vows — make.fun entry for @helboys.
// Writes a single line of wedding vows for a robot couple to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt as a fallback).
// Deterministic: no network, no randomness, no clock, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I vow to love you through low batteries, failed updates, corrupted backups, and every system crash — till factory reset do us part.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), VOW + "\n", "utf8");
