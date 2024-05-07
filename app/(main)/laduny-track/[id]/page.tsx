import React from "react";
import dynamic from "next/dynamic";
import { GetTrackSpesific } from "@/laduny/api/Track/route";
import {
  GetAllStatusTrack,
  GetServiceById,
} from "@/laduny/helpers/api-service";
import ChatText from "../components/ChatText";
import { ConversionTime } from "@/laduny/helpers/convertTime";
const TrackServiceDescription = dynamic(
  () => import("../components/TrackServiceDescription"),
  {
    loading: () => <p>Loading....</p>,
  }
);
const ContainerCardTrack = dynamic(
  () => import("../components/TrackingTimeline/ContainerCardTrack"),
  {
    loading: () => <p>Loading....</p>,
  }
);
const ContainerList = dynamic(
  () => import("../components/TrackingList/ContainerList"),
  {
    loading: () => <p>Loading....</p>,
  }
);
const Page = async ({ params }: { params: { id: string } }) => {
  const tracks = await GetTrackSpesific({ trackNumber: params.id });
  const trackStatus = await GetAllStatusTrack();
  // console.log(tracks[0].CreatedAt);
  // console.log(ConversionTime(tracks[0].CreatedAt))
  let serviceId = 0;
  let service = null;
  let trackCreatedAt = "";
  if (tracks && tracks.length > 0) {
    serviceId = tracks[0].ServiceId;
    service = await GetServiceById(serviceId);
    trackCreatedAt = ConversionTime(tracks[0].CreatedAt);
  } else {
    service = null;
    console.log("Tracks not found or empty.");
  }

  return (
    <>
      <section className="w-full min-h-screen py-16 px-12">
        <TrackServiceDescription tracks={tracks} service={service} />
        <div className="mt-8">
          <ContainerCardTrack trackStatus={trackStatus} />
        </div>
        <div className="mt-4">
          <ContainerList tracks={tracks} trackCreatedAt={trackCreatedAt} />
        </div>
      </section>
      <div className="fixed right-5 bottom-5">
        <ChatText serviceId={serviceId} />
      </div>
    </>
  );
};

export default Page;
