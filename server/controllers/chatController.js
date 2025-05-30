const axios = require('axios');
const Chat = require('../models/Chat');

exports.sendMessage = async (req, res) => {
  try {
    const userMessage = req.body.inputs.text;

    const langflowResponse = await axios.post(
      process.env.LANGFLOW_API_URL,
      { inputs: { text: userMessage } },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const aiResponse = langflowResponse.data.output || langflowResponse.data;

    const chatEntry = new Chat({ userMessage, aiResponse });
    await chatEntry.save();

    res.json({ output: aiResponse });

  } catch (error) {
    console.error('Error in sendMessage:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.saveChat = async (req, res) => {
  try {
    const { userMessage, aiResponse } = req.body;
    if (!userMessage || !aiResponse) {
      return res.status(400).json({ error: 'Missing userMessage or aiResponse' });
    }

    const chatEntry = new Chat({ userMessage, aiResponse });
    await chatEntry.save();

    res.status(201).json({ message: 'Chat saved successfully' });
  } catch (error) {
    console.error('Error saving chat:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getChatHistory = async (req, res) => {
  try {
    const chats = await Chat.find().sort({ timestamp: 1 });
    res.json(chats);
  } catch (error) {
    console.error('Error in getChatHistory:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};
