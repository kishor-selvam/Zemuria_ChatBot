const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/chat', chatController.sendMessage);
router.post('/chat/save', chatController.saveChat);
router.get('/chat/history', chatController.getChatHistory);

module.exports = router;
