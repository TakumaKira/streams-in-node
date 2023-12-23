import fs from "node:fs";
import logMemory from "./logMemory.js";

async function writeCsvWithStream() {
  const writeStream = fs.createWriteStream("myFile.csv");
  writeStream.write("Number,Squared\n");

  for (let i = 0; i < 10_000_000; i++) {
    writeStream.write(`${i},${i * i}\n`);
  }

  logMemory();

  writeStream.end();
}

await writeCsvWithStream();
