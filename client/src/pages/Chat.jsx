import React, { useEffect, useState } from "react";
import { CurrentUser } from "../components/CurrentUser";
import { ChatList } from "../components/ChatList";
import MessageBox from "../components/Messagebox";

const Chat = () => {
  const [activeButton, setActiveButton] = useState("Chats");
  const [messages, setMessages] = useState([
    {
      sender: "John Doe",
      senderProfile: "",
      message: "Hello! How are you?",
      timestamp: "10:30 AM",
    },
    {
      sender: "Jane Smith",
      senderProfile: "",
      message: "I'm good, thank you! How about you?",
      timestamp: "10:32 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState();

  const clickHandler = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { sender: "You", message: newMessage, timestamp: "Now" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex-1 h-full">
      <div className="h-full flex items-center gap-x-4 bg-gray-100">
        {/* Chat Options */}
        {/* Outer Container */}
        <div className=" w-5/12 flex items-center justify-center p-4">
          {/* Inner Container */}
          <div className="flex flex-col gap-y-4">
            {/* Active Status */}
            <div>
              <CurrentUser />
            </div>
            {/* Chat Navigation */}
            <div>
              <ul className="flex items-center gap-x-2 gap-y-2 flex-wrap">
                <li>
                  <button
                    onClick={() => clickHandler("Chats")}
                    className={`cursor-pointer ${
                      activeButton === "Chats"
                        ? "bg-blue-800 text-white"
                        : "bg-white  shadow-sm"
                    } text-sm font-semibold px-10 py-2 rounded-md`}
                  >
                    Chats
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => clickHandler("Groups")}
                    className={`cursor-pointer ${
                      activeButton === "Groups"
                        ? "bg-blue-800 text-white"
                        : "bg-white  shadow-sm"
                    } text-sm font-semibold px-10 py-2 rounded-md`}
                  >
                    Groups
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => clickHandler("Teachers")}
                    className={`cursor-pointer ${
                      activeButton === "Teachers"
                        ? "bg-blue-800 text-white"
                        : "bg-white  shadow-sm"
                    } text-sm font-semibold px-10 py-2 rounded-md`}
                  >
                    Teachers
                  </button>
                </li>
              </ul>
            </div>
            {/* Chatlist */}
            <div className="mt-2">
              <ChatList />
            </div>
          </div>
        </div>

        {/* Chat Box */}
        <div className="w-7/12 h-full bg-white p-4">
          <div className="flex flex-col justify-between h-full overflow-hidden">
            {/* Taking to */}
            <div className="w-full py-4 px-2 border-b-2">
              <h6>Some Random Guy</h6>
            </div>

            {/* Render Messages */}
            <div className="flex-1 flex flex-col gap-y-4 overflow-y-auto py-2 px-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`w-fit p-2 flex flex-col ${
                    msg.sender === "You"
                      ? "self-end bg-blue-500 text-white rounded-tr-lg rounded-br-none rounded-tl-lg rounded-bl-lg"
                      : "bg-gray-100 self-start text-black rounded-tr-lg rounded-br-lg rounded-tl-lg"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      msg.sender === "You"
                        ? "self-end"
                        : "self-start text-purple-400 font-semibold"
                    }`}
                  >
                    {msg.sender}
                  </span>
                  <span className="h-auto max-w-96 break-words text-left">
                    {msg.message}
                  </span>
                </div>
              ))}
            </div>
            {/* Input for New Message */}
            <div className="border-t-2">
              <div className="flex items-center gap-x-6 px-4 py-2 ">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Type a message..."
                  className="flex-1 border rounded-xl outline-none bg-blue-gray-50 px-4 py-2 placeholder:text-sm placeholder:text-gray-500"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-800 text-white px-4 py-2 rounded-md"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
