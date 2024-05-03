import React from "react";
import { TrackProgress, Service } from "@/laduny/commont.type";

const TrackServiceDescription = ({
  tracks,
  service,
}: {
  tracks: TrackProgress[];
  service: Service;
}) => {
    // console.log(service)
  return (
    <section className="w-full text-center flex flex-col justify-center items-center bg-gray-50 text-gray-800 py-3 rounded-lg">
      <p className="text-lg font-medium">
        Service Track{" "}
        <span className="text-xl font-semibold">
          ID : {tracks[0].TrackNumber}
        </span>{" "}
        - <span className="text-xl font-semibold">{service.ServiceCustonmerName}</span>
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
              <p> {service.ServiceLaptopName}</p>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="w-full">
              <p> Keluhan</p>
            </div>
            <div className="w-full text-right">
              <p> {service.ServiceComplaint}</p>
            </div>
          </li>
          {/* estimeasi waktu udh berapa hari */}
          <li className="flex justify-between">
            <div className="w-full">
              <p> Estimasi Waktu </p>
            </div>
            <div className="w-full text-right">
              <p> {service.ServiceEstTime}</p>
            </div>
          </li>
          {/* KLO DAH SELESAI */}
          <li className="flex justify-between">
            <div className="w-full">
              <p> Selesai </p>
            </div>
            <div className="w-full text-right">
              <p> {service.IsCompleteService}</p>
            </div>
          </li>
          {/* jika succes make muncul complete */}
        </ul>
      </nav>
    </section>
  );
};
export default TrackServiceDescription;
