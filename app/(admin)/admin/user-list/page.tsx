import Title from "@/laduny/components/admin/Title";
import UserTables from "@/laduny/components/admin/UserTables";
import React from "react";
import AddButton from "./_components/AddButton";

function page() {
  const users = [
    {
      name: "John Doe",
      dob: "24/05/1995",
      role: "Web Developer",
      salary: "$120,000",
    },
    {
      name: "Jane Doe",
      dob: "04/11/1980",
      role: "Web Designer",
      salary: "$100,000",
    },
    {
      name: "Gary Barlow",
      dob: "24/05/1995",
      role: "Singer",
      salary: "$20,000",
    },
  ];

  return (
    <section>
      <Title title="List User" />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-center">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date of Birth
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Salary
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
            {users.map((user, index) => (
              <UserTables key={index} {...user} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default page;
