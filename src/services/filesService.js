const { minioClient, bucketName } = require('../config/minio');

async function uploadFile(file) {
  await minioClient.putObject(
    bucketName,
    file.originalname,
    file.buffer,
    file.size
  );

  return {
    filename: file.originalname,
  };
}

async function listFiles() {
  const files = [];

  const stream = minioClient.listObjects(bucketName, true);

  return new Promise((resolve, reject) => {
    stream.on('data', (file) => {
      files.push(file);
    });

    stream.on('error', reject);

    stream.on('end', () => {
      resolve(files);
    });
  });
}

async function getFile(filename) {
  return minioClient.getObject(bucketName, filename);
}

module.exports = {
  uploadFile,
  listFiles,
  getFile,
};
