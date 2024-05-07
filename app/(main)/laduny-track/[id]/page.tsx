"use client";

import React, { useState, useEffect } from "react";
import ContainerCardTrack from "../components/TrackingTimeline/ContainerCardTrack";
import { TrackProgress } from "@/laduny/commont.type";
import { GetTrackSpesific } from "@/laduny/api/Track/route";

import ContainerList from "../components/TrackingList/ContainerList";
const Page = ({ params }: { params: { id: string } }) => {
  const [tracks, setTracks] = useState<TrackProgress[]>([]); // Initialize with null or appropriate type
  const [loadingTrack, setLoadingTrack] = useState<boolean>(true);

  useEffect(() => {
    // console.log(params.id);
    const fetchTracksData = async () => {
      try {
        setLoadingTrack(true);
        const trackData = await GetTrackSpesific({ trackNumber: params.id });
        setTracks(trackData);
        console.log(trackData);
        setLoadingTrack(false);
      } catch (error) {
        console.error("Error fetching tracks data:", error);
        setLoadingTrack(false);
      }
    };

    fetchTracksData();
  }, [params.id]);

  return (
    <section className="w-full min-h-screen py-16 px-12">
      {loadingTrack ? (
        <p>Loading ....</p>
      ) : (
        tracks && (
          // tracks.map((track) => <p key={track.TrackID}>{track.TrackNumber}</p>)
          <>
            <section className="w-full text-center flex flex-col justify-center items-center bg-gray-50 text-gray-800 py-3 rounded-lg">
              <p className="text-lg font-medium">
                Service Track{" "}
                <span className="text-xl font-semibold">
                  ID : {tracks[0].TrackNumber}
                </span>{" "}
                - <span className="text-xl font-semibold">Nama Customer</span>
              </p>
              <nav className="w-3/5">
                <p className="text-left text-xl font-semibold pt-4 pb-2">
                  Service Details :
                </p>
                <ul className="text-left font-semibold">
                  <li className="flex justify-between">
                    <div className="w-full">
                      <p>Nama Laptop</p>
                    </div>
                    <div className="w-full text-right">
                      <p> Asus 20f4w 435</p>
                    </div>
                  </li>
                  <li className="flex justify-between">
                    <div className="w-full">
                      <p> Keluhan</p>
                    </div>
                    <div className="w-full text-right">
                      <p> Mother board rusak, ram lemot , dan lain lain</p>
                    </div>
                  </li>
                  {/* estimeasi waktu udh berapa hari */}
                  <li className="flex justify-between">
                    <div className="w-full">
                      <p> Estimasi Waktu </p>
                    </div>
                    <div className="w-full text-right">
                      <p> 2 hari process</p>
                    </div>
                  </li>
                  {/* KLO DAH SELESAI */}
                  <li className="flex justify-between">
                    <div className="w-full">
                      <p> Selesai </p>
                    </div>
                    <div className="w-full text-right">
                      <p> On progress</p>
                    </div>
                  </li>
                  {/* jika succes make muncul complete */}
                </ul>
              </nav>
            </section>
            <section className="mt-8">
              <ContainerCardTrack />
            </section>
            <ContainerList tracks={tracks} />
          </>
        )
      )}
    </section>
  );

  //   checking
  //   konsultasi
  //   service
  //   selesai
};

export default Page;
