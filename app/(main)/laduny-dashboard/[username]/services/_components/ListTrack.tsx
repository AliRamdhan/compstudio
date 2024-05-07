import React from "react";
import { TrackProgress } from "@/laduny/commont.type";
import Link from "next/link";
import { ConversionTime } from "@/laduny/helpers/convertTime";
import { FiActivity } from "react-icons/fi";
const ListTrack = ({ tracks }: { tracks: TrackProgress[] }) => {
  return (
    <ul className="flex flex-col gap-2">
      {tracks.map((track) => (
        <li>
          <Link
            className="rounded-sm w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
            href={`/laduny-track/${track.TrackNumber}`}
          >
            <div className="col-span-12 md:col-span-1">
              <FiActivity className="text-black w-6 h-6" />
            </div>

            <div className="col-span-11 xl:-ml-5">
              <p className="text-blue-600 font-semibold">
                {track.TrackNumber} - {track.Status.StatusName}
              </p>
            </div>

            <div className="md:col-start-2 col-span-11 xl:-ml-5">
              <p className="text-sm text-gray-800 font-light">
                {track.Service.ServiceCustonmerName}
              </p>
              <p className="text-sm text-gray-800 font-light">
                {track.Service.ServiceComplaint}
              </p>
              <p className="text-sm text-gray-800 font-light">
                {ConversionTime(track.Service.ServiceDate)}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListTrack;
