const express = require('express');
const multer = require('multer');

const filesController = require('../controllers/filesController');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('file'), filesController.uploadFile);

router.get('/', filesController.listFiles);

router.get('/:filename', filesController.getFile);

module.exports = router;
