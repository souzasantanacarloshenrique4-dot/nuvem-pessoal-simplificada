async function uploadFile(req, res) {
  return res.status(501).json({ message: 'Upload de arquivo ainda não implementado.' });
}

async function listFiles(req, res) {
  return res.status(501).json({ message: 'Listagem de arquivos ainda não implementada.' });
}

async function getFile(req, res) {
  return res.status(501).json({ message: 'Consulta de arquivo ainda não implementada.' });
}

module.exports = { uploadFile, listFiles, getFile };
