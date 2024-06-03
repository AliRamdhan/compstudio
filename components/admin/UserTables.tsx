"use client";
import Swal from "sweetalert2";
import { Users } from "@/laduny/commont.type";

function UserTables({ users }: { users: Users[] }) {
  const handleView = (user: Users) => {
    Swal.fire({
      title: "View User",
      html: `
        <b>User ID: </b> ${user.UserID}<br>
        <b>Username: </b> ${user.username}<br>
        <b>Email: </b> ${user.email}<br>
        <b>Role ID: </b> ${user.Role.Name}<br>
      `,
      icon: "info",
      confirmButtonText: "Close",
    });
  };

  const handleDelete = (user: Users) => {
    Swal.fire({
      title: "Delete User",
      text: `Are you sure you want to delete ${user.username}?`,
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `${user.username} has been deleted.`, "success");
      }
    });
  };

  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="text-center">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            User ID
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Username
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Email
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Role ID
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.UserID}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {index}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {user.username}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {user.email}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {user.Role.Name}
            </td>
            <td className="whitespace-nowrap px-4 py-2 flex justify-center gap-4">
              <button
                className="inline-block rounded bg-green-400 px-4 py-2 text-xs font-medium text-white"
                onClick={() => handleView(user)}
              >
                View
              </button>
              <button
                className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white"
                onClick={() => handleDelete(user)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTables;
