import React from "react";
import { TrackProgress } from "@/laduny/commont.type";
import { ConversionTime } from "../../../../../helpers/convertTime";
import Link from "next/link";

const ListTrack = ({ tracks }: { tracks: TrackProgress[] }) => {
  return (
    <section className="w-full px-8">
      <div className="container">
        <h2 className="mb-4 text-2xl text-black font-semibold leading-tight">
          Last Track Details
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-gray-800">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="bg-gray-700 dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">No:</th>
                <th className="px-8 py-3">Services</th>
                <th className="p-3">Due</th>
                <th className="p-3">Staff</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track, index) => (
                <tr
                  className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50"
                  key={track.TrackID}
                >
                  <td className="p-3">
                    <p>0{index + 1}</p>
                  </td>
                  <td className="px-8 py-3">
                    <p>{track.TrackDescription}</p>
                  </td>
                  <td className="p-3">
                    <p className="text-gray-400 dark:text-gray-600">
                      {ConversionTime(track.CreatedAt)}
                    </p>
                  </td>
                  <td className="p-3">
                    <p>{track.TrackStaff}</p>
                  </td>
                  <td className="p-3">
                    <p className="px-3 py-1 font-semibold rounded-md bg-orange-400 dark:bg-orange-600 text-gray-900 dark:text-gray-50">
                      {track.Status.StatusName}
                    </p>
                  </td>
                  <td className="p-3 text-black">
                    <Link
                      className="rounded-sm bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
                      href={`/admin/track-list/${track.TrackNumber}/${track.ServiceId}`}
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ListTrack;
