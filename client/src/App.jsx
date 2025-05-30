import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatWidget from "./components/ChatWidget";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/navbar/Navbar";
import Blog from "./components/pages/Blog";
import ChatHistory from "./admin/ChatHistory";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/chat_history" element={<ChatHistory />} />
      </Routes>
      <ChatWidget />
    </Router>
  );
}

export default App;
