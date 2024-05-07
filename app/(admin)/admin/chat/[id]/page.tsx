import { GetAllChatsByServiceId } from '@/laduny/helpers/chat-service';
import { redirect } from 'next/navigation';
import React from 'react'

interface ChatPageProps{
    params: {id : string};
}

function page({params} : ChatPageProps) {
    if (params.id || params.id.length < 1){
        return redirect("404")
    } 

    // const chat = await GetAllChatsByServiceId()

  return (
    <section>
        page
    </section>
  )
}

export default page