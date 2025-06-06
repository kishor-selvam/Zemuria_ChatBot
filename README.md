# Zemuria ChatBot 🤖✨


> **Resources Used**  
> 🔗 [Frontend](https://chatgpt.com/share/683a0eef-d688-8000-aa53-f97874345aeb)  
> 🔗 [Backend](https://chatgpt.com/share/683a16ba-09fc-8000-85c7-8f0dc7868eea)  
> 🔗 [Generate Readme](https://chatgpt.com/share/683a28f3-6f18-8000-bf98-c1da8ec5efbd)

---

## Overview 🗂️

Zemuria ChatBot is a full-stack web application featuring a React frontend and a Node.js backend integrated with Langflow API for AI-driven chat functionality. The app supports multi-page routing, persistent chat history, and admin monitoring.

---

## Features 🚀

### Client 🖥️

- Responsive navigation bar with routes for:
  - 🏠 Home
  - ℹ️ About
  - 📝 Blogs
  - 📊 ChatHistory (Admin panel)
- Persistent sticky Chat Q&A widget on every page
- User chat queries are tracked and stored in the database

### Server ⚙️

- RESTful API built with Node.js and Express.js following MVC pattern
- MongoDB database for storing chat data and admin info
- Langflow API integration for AI chatbot responses
- Admin endpoints to retrieve chat histories

---

## Technologies 🛠️

| Layer    | Technology                     |
| -------- | ------------------------------|
| Frontend | React.js, React Router, Tailwind CSS |
| Backend  | Node.js, Express.js            |
| Database | MongoDB                       |
| API      | Langflow, OpenAI              |

---

## How to Run

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- MongoDB (local or cloud instance)

---

### Client Setup

```bash
cd client
npm install
npm start


### Server Setup
cd server
npm install

MONGODB_URI=<your_mongodb_connection_string>
PORT=5000

Start the server
npm start
# or
node server.js

client/
│
├── src/
│   ├── components/ 🧩
│   ├── pages/ 📄
│   ├── App.js ⚙️
│   └── index.js 🚦
│
server/
│
├── controllers/ 🎛️
├── models/ 🗃️
├── routes/ 🛣️
|── server.js 🏁
