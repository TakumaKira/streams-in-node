import fs from "node:fs";

function copyFile() {
  const writeStream = fs.createWriteStream("myCopiedFile.txt");
  const readStream = fs.createReadStream("myFile.txt").pipe(writeStream);

  readStream.on("finish", () => {
    writeStream.end();
  });
}

copyFile();
