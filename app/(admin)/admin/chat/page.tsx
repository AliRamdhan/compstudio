import ChatCard from "@/laduny/components/admin/ChatCard";
import { GetAllService } from "@/laduny/helpers/api-service";
import React from "react";

async function Page() {
  const services = await GetAllService();  
  return (
    <section className="w-full p-8">
      <h2 className="text-3xl font-medium text-black py-8">LIST Message</h2>
      <div className="max-w-3xl">
        <ChatCard chats={services} />
      </div>
    </section>
  );
}

export default Page;
