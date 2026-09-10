require('dotenv').config();

const app = require('./app');
const { minioClient, bucketName } = require('./config/minio');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    const bucketExists = await minioClient.bucketExists(bucketName);

    if (!bucketExists) {
      throw new Error(`O bucket "${bucketName}" não existe no MinIO.`);
    }

    app.listen(PORT, () => {
      console.log(`API executando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`Não foi possível conectar ao MinIO: ${error.message}`);
    process.exit(1);
  }
}

startServer();
