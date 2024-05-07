"use client";
import React from "react";
import Swal from "sweetalert2";

function AddButton() {
  const handleAddProduct = () => {
    Swal.fire({
      title: "Add Service",
      html: `
        <form id="addProductForm">
          <div class="mb-4">
            <label for="productName" class="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
            <input type="text" id="productName" name="productName" class="border rounded-md px-3 py-2 w-full" required>
          </div>
          <div class="mb-4">
            <label for="productPrice" class="block text-gray-700 text-sm font-bold mb-2">Product Price:</label>
            <input type="number" id="productPrice" name="productPrice" class="border rounded-md px-3 py-2 w-full" required>
          </div>
          <div class="mb-4">
            <label for="productProblem" class="block text-gray-700 text-sm font-bold mb-2">Product Problem:</label>
            <input type="text" id="productProblem" name="productProblem" class="border rounded-md px-3 py-2 w-full" required>
          </div>
        </form>
      `,
      showCancelButton: true,
      confirmButtonText: "Add Product",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const productNameInput = document.getElementById(
          "productName"
        ) as HTMLInputElement | null;
        const productPriceInput = document.getElementById(
          "productPrice"
        ) as HTMLInputElement | null;
        const productProblemInput = document.getElementById(
          "productProblem"
        ) as HTMLInputElement | null;

        if (!productNameInput || !productPriceInput || !productProblemInput) {
          Swal.showValidationMessage("Please fill in all fields");
          return false;
        }

        const productName = productNameInput.value;
        const productPrice = productPriceInput.value;
        const productProblem = productProblemInput.value;

        // Replace the following alert with your logic for adding the product
        Swal.fire({
          title: "Product Added!",
          html: `
            <div>
              <p><b>Product Name:</b> ${productName}</p>
              <p><b>Product Price:</b> ${productPrice}</p>
              <p><b>Product Problem:</b> ${productProblem}</p>
            </div>
          `,
          icon: "success",
        });
      },
    });
  };

  return (
    <button
      className="inline-block rounded bg-emerald-600 px-4 py-2 text-md font-medium text-white"
      onClick={handleAddProduct}
    >
      Add Service
    </button>
  );
}

export default AddButton;
