import { Message } from "@/laduny/commont.type";
import React from "react";

const MessageBoard = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="w-full text-black">
      {messages.map((message) => (
        <div className="w-full" key={message.MessageId}>
          <div
            className={
              message.User.roleuser === 1
                ? "flex justify-end"
                : "flex justify-start"
            }
          >
            <div
              className={
                message.User.roleuser === 1 ? "px-8 py-2 bg-gray-400 my-1" : "bg-gray-200 px-8 py-2 my-1"
              }
            >
              <p>{message.MessageContent}</p>
              <p>{message.User.username}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageBoard;
