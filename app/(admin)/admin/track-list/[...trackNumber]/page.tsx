import { GetAllTrackByTrackNumber } from "@/laduny/helpers/api-service";
import dynamic from "next/dynamic";
import React from "react";
import CreatProgressForm from "../_components/CreatProgressForm";
const Page = async ({ params }: { params: { trackNumber: string } }) => {
  // console.log("params", params.trackNumber[0]);
  // console.log("params", params.trackNumber[1]);
  const trackNumber = params.trackNumber[0];
  const serviceId = parseInt(params.trackNumber[1]);
  const tracks = await GetAllTrackByTrackNumber({
    trackNumber: trackNumber,
  });
  const ListTrack = dynamic(() => import("../_components/ListTracks"), {
    loading: () => <p>Loading....</p>,
  });
  return (
    <div className="w-full text-black mt-8">
      <ListTrack tracks={tracks} />
      <div className="px-8">
        <h2 className="mb-4 text-2xl text-black font-semibold leading-tight mt-2">
          Create Progress
        </h2>
        <div className="mt-2">
          <CreatProgressForm trackNumber={trackNumber} serviceId={serviceId} />
        </div>
      </div>
    </div>
  );
};

export default Page;

//create progress
//list all
