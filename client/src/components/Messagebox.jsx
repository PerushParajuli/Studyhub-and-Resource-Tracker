import React from "react";

const MessageBox = ({ message, sender, timestamp }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md max-w-md">
      {/* Sender */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-blue-800">{sender}</span>
        <span className="text-xs text-gray-500">{timestamp}</span>
      </div>

      {/* Message Content */}
      <div className="mt-2 text-gray-700 text-sm">{message}</div>
    </div>
  );
};

export default MessageBox;
