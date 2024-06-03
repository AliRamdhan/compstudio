import { Message } from "@/laduny/commont.type";
import React from "react";

const ChatLastCard = ({ lastMessage }: { lastMessage: Message[] }) => {
  //   console.log(lastMessage);
  return (
    <>
      {lastMessage.length == 0 ? (
        <p className="text-gray-500 text-xs">
          No conversation yet, start converstaion
        </p>
      ) : (
        lastMessage.map((message) => (
          <div key={message.MessageId}>
            <p className="text-justify text-sm text-gray-500">
              {message.MessageContent}
            </p>
          </div>
        ))
      )}
    </>
  );
};

export default ChatLastCard;
