import React from "react";
import { GetAllTrackLatest } from "@/laduny/helpers/api-service";
import dynamic from "next/dynamic";

const ListTrack = dynamic(() => import("./_components/ListTracks"), {
  loading: () => <p>Loading....</p>,
});
const Page = async () => {
  const tracks = await GetAllTrackLatest();
  return (
    <section className="mt-8">
      <ListTrack tracks={tracks} />
    </section>
  );
};

export default Page;
