"use client";
import Link from "next/link";
import Swal from "sweetalert2";

interface ProductTableProps {
  id: number;
  name: string;
  price: number;
  link: string;
}

function ProductTable({ id, name, price, link }: ProductTableProps) {
  const handleView = () => {
    Swal.fire({
      title: "View Product",
      html: `
      <b>Id:</b> ${id}<br>
      <b>Name:</b> ${name}<br>
        <b>Price:</b> ${price}<br>
        <b>Link:</b> ${link}<br>
      `,
      icon: "info",
      confirmButtonText: "Close",
    });
  };

  const handleEdit = () => {
    // Put your edit logic here
    Swal.fire({
      title: "Edit Product",
      html: `
      <b>Id:</b> ${id}<br>
      <b>Name:</b> ${name}<br>
        <b>Price:</b> ${price}<br>
        <b>Link:</b> ${link}<br>
      `,
      icon: "warning",
      confirmButtonText: "Close",
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Delete Product",
      text: `Are you sure you want to delete ${name}?`,
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
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
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{id}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{price}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <Link href={link}>{link}</Link></td>
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

export default ProductTable;
