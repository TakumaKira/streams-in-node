import fs from "node:fs";
import { S3 } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import logMemory from "./logMemory.js";

const config = {
  bucketName: ''
}

async function uploadFile() {
  const readStream = fs.createReadStream("myFile.txt");
  const client = new S3(config);

  const upload = new Upload({
    client,
    params: {
      Bucket: config.bucketName,
      Key: "myFile.txt",
      Body: readStream,
    },
  });

  upload.on("httpUploadProgress", (progress) => {
    logMemory();
    console.log(`Upload progress: ${progress.loaded} / ${progress.total}`);
  });

  await upload.done();
}

uploadFile();
