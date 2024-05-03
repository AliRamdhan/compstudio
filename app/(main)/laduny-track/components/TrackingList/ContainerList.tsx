import React from "react";
import { TrackProgress } from "../../../../commont.type";

const ContainerList = ({ tracks }: { tracks: TrackProgress[] }) => {
  return (
    <section className="w-full">
      <div className="container text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Service Details
        </h2>
        <p>Date: 14 Jan 2024 </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-gray-800">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-700 dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">No:</th>
                <th className="p-3">Services</th>
                <th className="p-3">Issued</th>
                <th className="p-3">Due</th>
                <th className="p-3">Staff</th>
                {/* status : on progress , succes */}
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track) => (
                <tr
                  className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50"
                  key={track.TrackID}
                >
                  <td className="p-3">
                    <p>01</p>
                  </td>
                  <td className="p-3">
                    <p>Ganti BOS</p>
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
                    <p>{track.TrackStaff}</p>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-3 py-1 font-semibold rounded-md bg-orange-400 dark:bg-orange-600 text-gray-900 dark:text-gray-50">
                      <span>{track.TrackStatusRefer}</span>
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
