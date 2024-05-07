import ChatCard from "@/laduny/components/admin/ChatCard";
import React from "react";

function page() {

    // const chatList = await 

  const chatData = [
    {
      chatId: "adsdasd",
      problem: "dasdas",
      username: "asdasd",
      lastChat:
        "LoremIpsum dasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    },
    {
        chatId: "adsdasd",
        problem: "dasdas",
        username: "asdasd",
        lastChat:
          "LoremIpsum dasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      },
    ];
  return (
    <section>
      <div className="max-w-2xl mx-auto flex justify-center">
        <ChatCard chats={chatData} />
      </div>
    </section>
  );
}

export default page;
