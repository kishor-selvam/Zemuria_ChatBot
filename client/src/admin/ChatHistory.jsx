
import React, { useState, useEffect } from 'react';

const dummyChatHistory = [
  {
    _id: '1',
    userMessage: 'Hello, how are you?',
    aiResponse: 'I am fine, thank you! How can I assist you today?',
    timestamp: '2025-05-31T10:00:00Z',
  },
  {
    _id: '2',
    userMessage: 'Can you explain React hooks?',
    aiResponse: 'Sure! React hooks let you use state and other React features without writing a class.',
    timestamp: '2025-05-31T10:05:00Z',
  },
  {
    _id: '3',
    userMessage: 'What is the best way to handle errors in React?',
    aiResponse: 'You can use error boundaries or handle errors in your components using try/catch or state.',
    timestamp: '2025-05-31T10:10:00Z',
  },
];

const Navbar = () => (
  <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-4 font-semibold text-lg">
    <div>MyApp</div>
    <div className="flex space-x-6">
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">Chat</a>
      <a href="#" className="hover:underline">Admin Panel</a>
      <a href="#" className="hover:underline">Profile</a>
    </div>
  </nav>
);

const AlertBanner = ({ onClose }) => (
  <div className="bg-yellow-400 text-yellow-900 px-6 py-3 text-center font-medium flex justify-center items-center space-x-4">
    <span>⚠️ Current system does not have authentication; navbar is shown to all users.</span>
    <button
      onClick={onClose}
      aria-label="Close alert"
      className="text-yellow-900 font-bold text-xl hover:text-yellow-800 focus:outline-none"
    >
      &times;
    </button>
  </div>
);

const ChatHistory = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChatHistory(dummyChatHistory);
      setLoading(false);
    }, 1000);


    return () => clearTimeout(timer);
  }, []);

  //   useEffect(() => {
//     axios.get('/api/chat/history')
//       .then(res => {
//         setChatHistory(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to load chat history');
//         setLoading(false);
//       });
//   }, []);

  if (loading) return <p className="text-center text-gray-500 mt-20 text-lg">Loading chat history...</p>;

  return (
    <>
      {showAlert && <AlertBanner onClose={() => setShowAlert(false)} />}
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md font-sans">
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-600 pb-2 text-gray-800">Chat History</h2>
        <ul className="space-y-6 list-none p-0">
          {chatHistory.map((chat) => (
            <li
              key={chat._id}
              className="bg-white p-5 rounded-md shadow-sm"
            >
              <p className="font-semibold text-gray-900 mb-2">
                <span className="text-blue-700">User:</span> {chat.userMessage}
              </p>
              <p className="italic text-blue-600 mb-2">
                <span className="font-semibold">AI:</span> {chat.aiResponse}
              </p>
              <small className="text-gray-500 text-sm">
                {new Date(chat.timestamp).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChatHistory;
