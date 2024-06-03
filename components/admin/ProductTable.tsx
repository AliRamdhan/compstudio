"use client";
import { Product } from "@/laduny/commont.type";
import Link from "next/link";
import Swal from "sweetalert2";
import AddButton from "../../app/(admin)/admin/product-list/_components/AddButton";
import Image from "next/image";
function ProductTable({ products }: { products: Product[] }) {
  const handleView = (product: Product) => {
    Swal.fire({
      title: "View Product",
      html: `
      <b>Id:</b> ${product.ProductID}<br>
      <b>Name:</b> ${product.ProductName}<br>
      <b>Price:</b> ${product.ProductPrice}<br>
      <b>Link:</b> ${product.ProductLink}<br>
      `,
      icon: "info",
      confirmButtonText: "Close",
    });
  };

  const handleEdit = (product: Product) => {
    Swal.fire({
      title: "Edit Product",
      html: `
      <b>Id:</b> ${product.ProductID}<br>
      <b>Name:</b> ${product.ProductName}<br>
      <b>Price:</b> ${product.ProductPrice}<br>
      <b>Link:</b> ${product.ProductLink}<br>
      `,
      icon: "warning",
      confirmButtonText: "Close",
    });
  };

  const handleDelete = (product: Product) => {
    Swal.fire({
      title: "Delete Product",
      text: `Are you sure you want to delete ${product.ProductName}?`,
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          `${product.ProductName} has been deleted.`,
          "success"
        );
      }
    });
  };

  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="text-center">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Id
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Price
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Link
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Image
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
        {products.map((product) => (
          <tr key={product.ProductID}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {product.ProductName}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {product.ProductID}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {product.ProductPrice}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              <Link href={product.ProductLink}>{product.ProductLink}</Link>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              <Image
                src={product.ProductImage}
                width={100}
                height={100}
                alt="Product Image"
              />
            </td>
            <td className="whitespace-nowrap px-4 py-2 flex justify-center gap-4">
              <button
                className="inline-block rounded bg-green-400 px-4 py-2 text-xs font-medium text-white"
                onClick={() => handleView(product)}
              >
                View
              </button>
              <button
                className="inline-block rounded bg-yellow-300 px-4 py-2 text-xs font-medium text-white"
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>
              <button
                className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white"
                onClick={() => handleDelete(product)}
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

export default ProductTable;
