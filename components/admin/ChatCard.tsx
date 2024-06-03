import React from "react";
import { ConversionTime } from "@/laduny/helpers/convertTime";
import { GetLastMessagebyService } from "@/laduny/helpers/chat-service";
import { Service } from "@/laduny/commont.type";
import ChatLastCard from "./ChatLastCard";
import { Divider } from "@chakra-ui/react";
import Link from "next/link";

async function ChatCard({ chats }: { chats: Service[] }) {
  const lastMessages = await Promise.all(
    chats.map(async (chat) => {
      const lastMessage = await GetLastMessagebyService(chat.ServiceID);
      return { ...chat, lastMessage };
    })
  );

  return (
    <div className="grid grid-cols-1 gap-2">
      {lastMessages.map((chat) => (
        <div
          key={chat.ServiceID}
          className="border p-2 rounded-xl hover:scale-105 transition-all duration-300"
        >
          <Link href={`chat/${chat.ServiceID}`}>
            <div className="w-[450px] sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  <span className="text-sm"> Customer service : </span>
                  {chat.ServiceCustonmerName}
                  <span className="text-sm">
                    {" "}
                    {ConversionTime(chat.ServiceDate)}
                  </span>
                </h3>
                <p className="mt-1 text-md font-medium text-gray-600">
                  by {chat.User.username}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <ChatLastCard lastMessage={chat.lastMessage} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ChatCard;
