import React from 'react';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs mx-2 my-1 p-2 rounded-lg ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default Message;
