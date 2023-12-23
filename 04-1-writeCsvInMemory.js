import fs from "node:fs/promises";
import logMemory from "./logMemory.js";

async function writeCsvInMemory() {
  const rows = [];
  rows.push("Number,Squared\n");

  for (let i = 0; i < 10_000_000; i++) {
    rows.push(`${i},${i * i}\n`);
  }

  logMemory();

  await fs.writeFile("myFile2.csv", rows.join(""));
}

await writeCsvInMemory();
