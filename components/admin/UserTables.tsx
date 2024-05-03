"use client"
import Swal from 'sweetalert2';

interface UserTablesProps {
  dob: string;
  name: string;
  role: string;
  salary: string;
}

function UserTables({ dob, name, role, salary }: UserTablesProps) {
  const handleView = () => {
    Swal.fire({
      title: "View User",
      html: `
        <b>Name:</b> ${name}<br>
        <b>Date of Birth:</b> ${dob}<br>
        <b>Role:</b> ${role}<br>
        <b>Salary:</b> ${salary}<br>
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
        <b>Name:</b> ${name}<br>
        <b>Date of Birth:</b> ${dob}<br>
        <b>Role:</b> ${role}<br>
        <b>Salary:</b> ${salary}<br>
      `,
      icon: 'warning',
      confirmButtonText: 'Close'
    });
  };

  const handleDelete = () => {
    // Put your delete logic here
    Swal.fire({
      title: "Delete User",
      text: `Are you sure you want to delete ${name}?`,
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `${name} has been deleted.`, "success");
      }
    });
  };

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {name}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{dob}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{role}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{salary}</td>
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
