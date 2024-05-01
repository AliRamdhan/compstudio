import React from "react";
import dynamic from "next/dynamic";
import { GetTrackSpesific } from "@/laduny/api/Track/route";
import { GetServiceById } from "@/laduny/helpers/api-service";

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
  // console.log(tracks);
  const serviceId = tracks ? tracks[0].ServiceId : 0;
  // console.log("asa", serviceId);
  const service = await GetServiceById(serviceId);
  return (
    <section className="w-full min-h-screen py-16 px-12">
      <TrackServiceDescription tracks={tracks} service={service} />
      <section className="mt-8">
        <ContainerCardTrack />
      </section>
      <ContainerList tracks={tracks} />
    </section>
  );
};

export default Page;
