const axios = require('axios');

async function fetchChatHistory() {
  try {
    const response = await axios.get('http://localhost:5000/api/chat/history');
    console.log('Chat history:', response.data);
  } catch (err) {
    console.error('Error fetching chat history:', err);
  }
}

fetchChatHistory();
