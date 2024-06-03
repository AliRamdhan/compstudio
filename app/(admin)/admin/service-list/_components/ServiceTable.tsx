import { Service } from "@/laduny/commont.type";
import React from "react";

const ServiceTable = ({ services }: { services: Service[] }) => {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="text-center">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Service ID
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Laptop Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Laptop Version
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Customer Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Service Date
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Estimated Time
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Complaint
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Is Completed?
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Customer User ID
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Customer Username
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Customer Email
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Service Category ID
          </th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service.ServiceID}>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.ServiceID}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.ServiceLaptopName}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.ServiceLaptopVersion}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.ServiceCustonmerName}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.ServiceDate}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.ServiceEstTime}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.ServiceComplaint}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.IsCompleteService}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.CustomerUser}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.User.username}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.User.email}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {service.ServiceCategory}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;
