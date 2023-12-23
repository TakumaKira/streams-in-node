import fs from "node:fs";
import logMemory from "./logMemory.js";

async function writeCsvWithStream() {
  const writeStream = fs
    .createWriteStream("myFile.csv")
    .on("error", (err) => console.error("Error writing to stream:", err))
    .on("drain", writeData);

  writeStream.write("Number,Squared\n");

  let current = 0;

  function writeData() {
    const max = 10_000_000;

    while (current < max) {
      const result = writeStream.write(`${current},${current * current}\n`);
      current++;

      if (!result) {
        break;
      }

      if (current >= max) {
        logMemory();
        writeStream.end();
        break;
      }
    }
  }

  writeData();
}

writeCsvWithStream();
