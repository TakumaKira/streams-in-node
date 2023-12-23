import fs from "node:fs";
import stream from "node:stream/promises";
import logMemory from "./logMemory.js";

async function copyFile() {
  const readStream = fs.createReadStream("myFile.csv");
  const writeStream = fs.createWriteStream("myCopiedFile.csv");

  readStream.on("data", function (chunk) {
    const result = writeStream.write(chunk);

    if (!result) {
      readStream.pause();
    }
  });

  writeStream.on("drain", () => {
    readStream.resume();
  });

  readStream.on("end", function () {
    logMemory();
    writeStream.end();
  });

  await stream.pipeline(readStream, writeStream);
}

copyFile();
