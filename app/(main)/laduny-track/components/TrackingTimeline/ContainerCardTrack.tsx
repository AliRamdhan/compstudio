import React from "react";
import CardTrack from "./CardTrack";
import { TrackStatus } from "@/laduny/commont.type";

const ContainerCardTrack = ({
  trackStatus,
}: {
  trackStatus: TrackStatus[];
}) => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-4 gap-x-8 px-8">
      {trackStatus.map((status) => (
        <React.Fragment key={status.StatusID}>
          <CardTrack {...status} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default ContainerCardTrack;
