import React from "react";
import { TrackProgress } from "@/laduny/commont.type";
import { ConversionTime } from "../../../../../helpers/convertTime";

const ContainerList = ({
  tracks,
  trackCreatedAt,
}: {
  tracks: TrackProgress[];
  trackCreatedAt: string;
}) => {
  return (
    <section className="w-full">
      <div className="container text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Service Details
        </h2>
        <p>Date: {trackCreatedAt}</p>
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
                    <span className="px-3 py-1 font-semibold rounded-md bg-orange-400 dark:bg-orange-600 text-gray-900 dark:text-gray-50">
                      <span>{track.Status.StatusName}</span>
                    </span>
                  </td>
                </tr>
              ))}
              {/* <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                <td className="p-3">
                  <p>02</p>
                </td>
                <td className="p-3">
                  <p>Ganti RAM</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="text-gray-400 dark:text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="text-gray-400 dark:text-gray-600">Tuesday</p>
                </td>
                <td className="p-3">
                  <p>Yanuar</p>
                </td>
                <td className="p-3 text-center">
                  <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                <td className="p-3">
                  <p>03</p>
                </td>
                <td className="p-3">
                  <p>Ganti Board</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="text-gray-400 dark:text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="text-gray-400 dark:text-gray-600">Tuesday</p>
                </td>
                <td className="p-3">
                  <p>Ilham</p>
                </td>
                <td className="p-3 text-center">
                  <span className="px-3 py-1 font-semibold rounded-md bg-green-400 dark:bg-green-600 text-gray-900 dark:text-gray-50">
                    <span>Success</span>
                  </span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ContainerList;
