import { ChatCardProps } from "@/laduny/commont.type";
import { Divider } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function ChatCard({ chats }: { chats: ChatCardProps[] }) {
  const truncateChat = (lastChat: string, maxLength: number) => {
    if (lastChat.length <= maxLength) {
      return lastChat;
    }
    return lastChat.substring(0, maxLength) + "...";
  };
  return (
    <div className="grid grid-cols-1 gap-2">
      {chats.map((chat) => (
        <Link href={`chat/${chat.chatId}`} className="border p-2 rounded-xl">
          <div className="w-[450px] sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                {chat.problem}
              </h3>
              <p className="mt-1 text-md font-medium text-gray-600">
                {chat.username}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-justify text-sm text-gray-500">
              {truncateChat(chat.lastChat, 50)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ChatCard;
