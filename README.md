# Zemuria ChatBot

## Overview

This project consists of two main parts: **Client** and **Server**.

- The **Client** is a React-based web application fulfilling all requirements with multi-page routing and a persistent chat Q&A section.
- The **Server** is built with Node.js and Express.js using the MVC pattern and MongoDB for data storage. It manages API routing, data tracking, and admin functionalities.

---

## Client

### Features

- Navigation bar with pages:
  - Home
  - About
  - Blogs
  - ChatHistory (Admin)
- Each menu item routes to multiple pages using React Router.
- Sticky Chat Q&A section available on every page.
- Tracks user queries sent to the chatbot and stores them in the database.

### Technologies

- React.js
- React Router
- Axios / Fetch API
- Tailwind CSS

---

## Server

### Architecture

- Node.js + Express.js backend following MVC pattern.
- MongoDB as the database.
- RESTful APIs to:
  - Receive and store user chat queries.
  - Provide chat history to admin.
  - Call Langflow API for chatbot functionality.

### Structure

- **Models:** MongoDB schemas for chat and admin data.
- **Controllers:** Business logic for chat tracking, Langflow API integration, admin data.
- **Routes:** API endpoint definitions.

---

## Project Structure
client/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
│
server/
│
├── controllers/
├── models/
├── routes/
├── app.js
