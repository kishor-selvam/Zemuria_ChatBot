import { useState, useCallback } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const sendMessage = useCallback(async () => {
    const trimmedInput = userInput.trim();
    if (!trimmedInput || loading) return;

    const userMessage = { sender: "user", text: trimmedInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:7860/api/v1/run/cc2101a9-fb0e-4084-964e-dd26a287f454",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ inputs: { text: trimmedInput } }),
        }
      );
      const data = await res.json();

      const botMessage = {
        sender: "bot",
        text: data.reply || "Sorry, I didn't get a response.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error communicating with the server." },
      ]);
    } finally {
      setLoading(false);
    }
  }, [userInput, loading]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white w-14 h-14 rounded-full shadow-md text-xl"
          aria-label="Open chat widget"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col mt-3 overflow-hidden border border-gray-300">
          {/* Header with title and close button */}
          <div className="bg-blue-600 text-white flex justify-between items-center p-3 font-semibold">
            <span>AI Assistant</span>
            <button
              onClick={toggleChat}
              aria-label="Close chat widget"
              className="text-white hover:text-gray-200 text-2xl font-bold leading-none"
            >
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end ml-auto text-right"
                    : "bg-gray-200 self-start mr-auto text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t border-gray-300 flex gap-2">
            <input
              className="flex-1 px-3 py-1 border rounded focus:outline-none"
              type="text"
              value={userInput}
              placeholder="Type your message..."
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
            />
            <button
              className="bg-blue-600 text-white px-3 rounded disabled:opacity-50"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
