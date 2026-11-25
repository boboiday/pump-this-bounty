import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You, 3 a.m., refreshing the leaderboard while the $2 pot waits \u2014 click enter once for the money, twice for the glory, and the third time you're the one writing this line.";

if (entry.length === 0 || entry.length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
process.stdout.write(entry + "\n");
