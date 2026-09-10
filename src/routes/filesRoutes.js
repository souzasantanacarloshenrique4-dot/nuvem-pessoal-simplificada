const express = require('express');
const filesController = require('../controllers/filesController');

const router = express.Router();

router.post('/upload', filesController.uploadFile);
router.get('/files', filesController.listFiles);
router.get('/files/:filename', filesController.getFile);

module.exports = router;
