import fs from "node:fs/promises";

async function copyFile() {
  const data = await fs.readFile("myFile.txt");
  await fs.writeFile("myCopiedFile.txt", data);
}

copyFile();
