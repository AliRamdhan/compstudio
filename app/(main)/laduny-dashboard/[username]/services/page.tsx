"use client";
import React, { useState, useEffect } from "react";
import { GetUserData } from "@/laduny/helpers/api-service";
import { Service, TrackProgress, User } from "@/laduny/commont.type";
import ListTrack from "./_components/ListTrack";
import {
  GetServiceByUserId,
  GetTrackByServiceId,
} from "../../../../../helpers/api-service";

const Page = () => {
  const [user, setUser] = useState<User>();
  const [tracks, setTracks] = useState<TrackProgress[]>([]); // Changed to an array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await GetUserData();
        setUser(user); // Set user state
        const serviceUser = await GetServiceByUserId(user.user_id);
        // Use Promise.all to wait for all asynchronous operations to complete
        const trackPromises = serviceUser.map(async (service: Service) => {
          const trackService = await GetTrackByServiceId(service.ServiceID);
          return trackService;
        });
        const resolvedTracks = await Promise.all(trackPromises);
        setTracks(resolvedTracks.flat()); // Flatten and set tracks state
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-full p-8">
      <h2 className="text-2xl font-medium mb-2">List Your Service + Tracks</h2>
      <div>
        <ListTrack tracks={tracks} />
      </div>
    </section>
  );
};

export default Page;

// <li key={track.id}>
//   {/* Render track information here */}
//   {/* <ListTrack track={track} /> */}
// </li>
// <div>{track.TrackNumber}</div>
