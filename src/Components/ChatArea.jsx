import React, { useState, useRef, useEffect } from 'react';
import { FaArrowDown, FaUser, FaRobot, FaPaperPlane } from 'react-icons/fa'; // Import icons from react-icons

const ChatArea = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how can I assist you today?", sender: "bot" }
  ]);
  const [inputText, setInputText] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        setShowScrollButton(scrollTop < scrollHeight - clientHeight);
      }
    };

    chatContainerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      chatContainerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBottomOnClick = () => {
    scrollToBottom();
  };

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    const newMessage = { id: messages.length + 1, text: inputText, sender: "user" };
    setMessages([...messages, newMessage]);
    setInputText('');
    // Simulating bot response after 1 second
    setTimeout(() => {
      const botResponse = { id: messages.length + 2, text: "This is a sample response from the bot.", sender: "bot" };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className=" ml-[300px] mt-[64px] w-full   flex flex-col h-[620px] bg-gray-100 relative">
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-scroll no-scrollbar px-6 py-4"
        style={{ paddingBottom: showScrollButton ? '3rem' : '0' }} 
      >
        {messages.map(message => (
          <div key={message.id} className={`mb-4 ${message.sender === "user" ? 'flex justify-end' : 'flex justify-start'}`}>
            <div className={`max-w-md rounded-lg p-4 flex items-center ${message.sender === "user" ? 'bg-blue-200 text-blue-900 self-end' : 'bg-gray-200 text-gray-800 self-start'}`}>
              {message.sender === "user" ? <FaUser className="w-6 h-6 mr-2" /> : <FaRobot className="w-6 h-6 mr-2" />}
              <div>{message.text}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToBottomOnClick}
          className="absolute left-1/2 bottom-20 transform -translate-x-1/2 z-10 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none flex items-center justify-center"
        >
          <FaArrowDown className="w-6 h-6" /> {/* Down arrow icon */}
        </button>
      )}
      {/* Chat Input Section */}
      <div className="flex items-center justify-between bg-white border-t border-gray-200 px-4 py-2">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-transparent outline-none px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button
          onClick={sendMessage}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none flex items-center"
        >
          <FaPaperPlane className="w-6 h-6 mr-2" /> {/* Send icon */}
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
