require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api', chatRoutes);
app.set('view engine', 'ejs'); // or pug, handlebars

app.get('/admin/chat-history', async (req, res) => {
  try {
    const chats = await Chat.find().sort({ timestamp: 1 });
    res.render('chatHistory', { chats });
  } catch (error) {
    res.status(500).send('Error loading chat history');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
