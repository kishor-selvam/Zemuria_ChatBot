# Zemuria ChatBot 🤖✨

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

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React.js, React Router, Tailwind CSS |
| Backend    | Node.js, Express.js |
| Database   | MongoDB            |
| API        | Langflow, OpenAI   |

---

## Project Structure 🏗️

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
├── app.js 🏁
