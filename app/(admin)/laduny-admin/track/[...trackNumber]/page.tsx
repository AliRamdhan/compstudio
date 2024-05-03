import { GetAllTrackByTrackNumber } from "@/laduny/helpers/api-service";
import dynamic from "next/dynamic";
import React from "react";
import CreatProgressForm from "../../components/CreatProgressForm";
const Page = async ({ params }: { params: { trackNumber: string } }) => {
  // console.log("params", params.trackNumber[0]);
  // console.log("params", params.trackNumber[1]);
  const trackNumber = params.trackNumber[0];
  const serviceId = parseInt(params.trackNumber[1]);
  const tracks = await GetAllTrackByTrackNumber({
    trackNumber: trackNumber,
  });
  const ListTrack = dynamic(() => import("../../components/ListTracks"), {
    loading: () => <p>Loading....</p>,
  });
  return (
    <div className="w-full">
      <div className="flex justify-around">
        <div>
          <h2 className="mt-8">LIST TRACKS</h2>
          <div className="mt-2">
            <ListTrack tracks={tracks} />
          </div>
        </div>
        <div>
          <h2 className="mt-8">Create Progress</h2>
          <div className="mt-2">
            <CreatProgressForm
              trackNumber={trackNumber}
              serviceId={serviceId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

//create progress
//list all
