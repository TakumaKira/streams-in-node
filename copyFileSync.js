import fs from "node:fs";

function copyFile() {
  const data = fs.readFileSync("myFile.txt");
  fs.writeFileSync("myCopiedFile.txt", data);
}

copyFile();
