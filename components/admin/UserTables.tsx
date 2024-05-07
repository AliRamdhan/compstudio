"use client"
import Swal from 'sweetalert2';

interface UserTablesProps {
  userId: number;
  username: string;
  email: string;
  address: string;
  createdAt: Date;
  updateAt: Date;
}

function UserTables({ userId, username, email, address,createdAt,updateAt }: UserTablesProps) {
  const handleView = () => {
    Swal.fire({
      title: "View User",
      html: `
        <b>user ID: </b> ${userId}<br>
        <b>User Name: </b> ${username}<br>
        <b>Email: </b> ${email}<br>
        <b>Address: </b> ${address}<br>
        <b>Created At: </b> ${createdAt}<br>
        <b>Update At: </b> ${updateAt}<br>
      `,
      icon: 'info',
      confirmButtonText: 'Close'
    });
  };

  const handleEdit = () => {
    // Put your edit logic here
    Swal.fire({
      title: "Edit User",
      html: `
      <b>user ID: </b> ${userId}<br>
      <b>User Name: </b> ${username}<br>
      <b>Email: </b> ${email}<br>
      <b>Address: </b> ${address}<br>
      `,
      icon: 'warning',
      confirmButtonText: 'Close'
    });
  };

  const handleDelete = () => {
    // Put your delete logic here
    Swal.fire({
      title: "Delete User",
      text: `Are you sure you want to delete ${username}?`,
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `${username} has been deleted.`, "success");
      }
    });
  };

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {userId}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{username}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{address}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{createdAt.toLocaleDateString()}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{updateAt.toLocaleDateString()}</td>
      <td className="whitespace-nowrap px-4 py-2 flex justify-center gap-4">
        <button
          className="inline-block rounded bg-green-400 px-4 py-2 text-xs font-medium text-white"
          onClick={handleView}
        >
          View
        </button>
        <button
          className="inline-block rounded bg-yellow-300 px-4 py-2 text-xs font-medium text-white"
          onClick={handleEdit}
        >
          Edit
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

export default UserTables;
