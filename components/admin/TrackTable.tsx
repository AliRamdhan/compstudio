"use client";
import Swal from "sweetalert2";

interface TrackTableProps {
  trackId: number;
  trackNumber: string;
  trackStatus: number;
  trackDescription: string;
  serviceId: number;
  serviceCustomerName: string;
  serviceLaptopName: string;
  userPhoneNumber: number;
  trackStaff: string;
  createdAt: Date;
  updateAt: Date;
}

function TrackTable({
  trackId,
  trackNumber,
  trackStatus,
  trackDescription,
  serviceId,
  serviceCustomerName,
  serviceLaptopName,
  userPhoneNumber,
  trackStaff,
  createdAt,
  updateAt
}: TrackTableProps) {
  const handleView = () => {
    Swal.fire({
      title: "View Detail",
      html: `
        <b>Service Laptop Name: </b> ${serviceLaptopName}<br>
        <b>User Phone Number: </b> ${userPhoneNumber}<br>
        <b>Track Staff: </b> ${trackStaff}<br>
        <b>Created At: </b> ${createdAt.toLocaleTimeString()} ${updateAt.toLocaleDateString()}<br>
        <b>Update At: </b> ${updateAt.toLocaleTimeString()} ${updateAt.toLocaleDateString()}<br>
      `,
      icon: "info",
      confirmButtonText: "Close",
    });
  };

  const handleDelete = () => {
    // Put your delete logic here
    Swal.fire({
      title: "Delete Service",
      text: `Are you sure you want to delete ${serviceLaptopName}?`,
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `${serviceLaptopName} has been deleted.`, "success");
      }
    });
  };

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {trackId}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{trackNumber}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{trackStatus}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{trackDescription}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {serviceId}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {serviceCustomerName}
      </td>
      <td className="whitespace-nowrap px-4 py-2 flex justify-center gap-4">
        <button
          className="inline-block rounded bg-green-400 px-4 py-2 text-xs font-medium text-white"
          onClick={handleView}
        >
          More
        </button>
        <button
          className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TrackTable;
