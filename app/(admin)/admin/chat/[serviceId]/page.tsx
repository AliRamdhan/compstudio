import React from "react";
import {
  CreateMessage,
  GetAllChatsByServiceId,
} from "@/laduny/helpers/chat-service";
import { Message, MessageForm } from "@/laduny/commont.type";
import MessageBoard from "../_components/MessageBoard";
import MessageForms from "../_components/MessageForms";
async function page({ params }: { params: { serviceId: string } }) {
  //console.log(params.serviceId);
  const serviceIdStr = params.serviceId;
  const serviceId = parseInt(serviceIdStr);
  const messages = await GetAllChatsByServiceId(serviceId);

  return (
    <section>
      <p className="text-xl text-black font-medium">Messages</p>
      <div className="w-full overflow-y-auto h-96">
        <MessageBoard messages={messages} />
      </div>
      <div>
        <MessageForms serviceId={serviceId} />
      </div>
    </section>
  );
}

export default page;
