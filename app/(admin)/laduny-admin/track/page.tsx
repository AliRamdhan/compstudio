import React from "react";
import { GetAllTrack } from "@/laduny/helpers/api-service";
import dynamic from "next/dynamic";

const ListTrack = dynamic(() => import("../components/ListTracks"), {
  loading: () => <p>Loading....</p>,
});
const Page = async () => {
  const tracks = await GetAllTrack();
  return (
    <section>
      <div>LIST TRACKS</div>
      <div className="mt-8">
        <ListTrack tracks={tracks} />
      </div>
    </section>
  );
};

export default Page;
