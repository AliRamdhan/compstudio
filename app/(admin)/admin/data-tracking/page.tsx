import Title from "@/laduny/components/admin/Title";
import TrackTable from "@/laduny/components/admin/TrackTable";
import React from "react";
import AddButton from "./_components/AddButton";

function page() {
  const dummyData = [
    {
      trackId: 1,
      trackNumber: "TN001",
      trackStatus: 1,
      trackDescription: "Description 1",
      serviceId: 1,
      serviceCustomerName: "Customer 1",
      serviceLaptopName: "Laptop 1",
      userPhoneNumber: 1234567890,
      trackStaff: "Staff 1",
      createdAt: new Date(),
      updateAt: new Date()
    },
    {
      trackId: 2,
      trackNumber: "TN002",
      trackStatus: 2,
      trackDescription: "Description 2",
      serviceId: 2,
      serviceCustomerName: "Customer 2",
      serviceLaptopName: "Laptop 2",
      userPhoneNumber: 124213231,
      trackStaff: "Staff 2",
      createdAt: new Date(),
      updateAt: new Date()
    },
  ];
  return (
    <section>
      <Title title="Tracking Page" />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-center">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Track ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Track Number
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Track Status
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Track Description
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Service ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Service Customer Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <AddButton />
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {dummyData.map((track , index) => (
              <TrackTable key={index} {...track} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default page;
