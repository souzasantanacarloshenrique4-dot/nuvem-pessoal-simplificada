require('dotenv').config();

const Minio = require('minio');

const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || 'localhost',
  port: Number(process.env.MINIO_PORT || 9000),
  useSSL: false,
  accessKey: process.env.MINIO_ROOT_USER,
  secretKey: process.env.MINIO_ROOT_PASSWORD,
});

const bucketName = process.env.MINIO_BUCKET || 'arquivos-pessoais';

module.exports = { minioClient, bucketName };
