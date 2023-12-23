import fs from "node:fs";
import stream from "node:stream/promises";

async function copyFile() {
  const readStream = fs.createReadStream("myFile.txt");
  const writeStream = fs.createWriteStream("myCopiedFile.txt");

  await stream.pipeline(readStream, writeStream);
}

copyFile();
