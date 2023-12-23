import fs from "node:fs";
import csv from "csv-parser";

async function readCsv() {
  const keys = new Set();
  const rows = [];

  return fs
    .createReadStream("myLargeFile.csv")
    .pipe(csv())
    .on("data", (data) => {
      const { count, year } = data;
      const key = `${count}-${year}`;

      if (!keys.has(key)) {
        keys.add(key);
        rows.push(data);
      }
    })
    .on("end", () => {
      processRows(rows);
    });
  }

readCsv();
