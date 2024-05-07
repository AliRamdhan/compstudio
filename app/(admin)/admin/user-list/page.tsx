import Title from "@/laduny/components/admin/Title";
import UserTables from "@/laduny/components/admin/UserTables";
import React from "react";
import AddButton from "./_components/AddButton";

function page() {
  const users = [
    {
      userId: 1,
      username: "alief",
      email: "alieffirmanda@gmail.com",
      address: "Cikarang",
      createdAt: new Date("2024-05-04 03:12:05"),
      updateAt: new Date("2024-05-06 03:12:05"),
    },
    {
      userId: 2,
      username: "alief",
      email: "alieffirmanda@gmail.com",
      address: "Cikarang",
      createdAt: new Date("2024-05-04 03:12:05"),
      updateAt: new Date("2024-05-06 03:12:05"),
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
                User Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Username
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Address
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Account Created At
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Account Update At
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
