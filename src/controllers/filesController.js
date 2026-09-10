const filesService = require('../services/filesService');

async function uploadFile(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: 'Nenhum arquivo foi enviado.',
      });
    }

    const file = await filesService.uploadFile(req.file);

    return res.status(201).json({
      message: 'Arquivo enviado com sucesso.',
      file,
    });
  } catch (error) {
    console.error('Erro ao enviar arquivo:', error);

    return res.status(500).json({
      message: 'Erro ao enviar arquivo.',
    });
  }
}

async function listFiles(req, res) {
  try {
    const files = await filesService.listFiles();

    return res.status(200).json(files);
  } catch (error) {
    console.error('Erro ao listar arquivos:', error);

    return res.status(500).json({
      message: 'Erro ao listar arquivos.',
    });
  }
}

async function getFile(req, res) {
  try {
    const { filename } = req.params;

    const stream = await filesService.getFile(filename);

    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${filename}"`
    );

    stream.pipe(res);
  } catch (error) {
    console.error('Erro ao obter arquivo:', error);

    return res.status(404).json({
      message: 'Arquivo não encontrado.',
    });
  }
}

module.exports = {
  uploadFile,
  listFiles,
  getFile,
};
