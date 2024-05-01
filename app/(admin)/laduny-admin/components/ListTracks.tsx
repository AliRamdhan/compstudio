import React from "react";
import { TrackProgress } from "@/laduny/commont.type";
import Link from "next/link";

const ListTracks = ({ tracks }: { tracks: TrackProgress[] }) => {
  return (
    <section>
      <div> ListTracks</div>
      <div>
        {tracks.map((track, index) => (
          <div key={index}>
            <p>{track.TrackNumber}</p>
            <p>{track.TrackDescription} </p>
            <p>{track.TrackStaff}</p>
            <Link href={`/laduny-admin/track/${track.TrackNumber}`}>Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListTracks;
