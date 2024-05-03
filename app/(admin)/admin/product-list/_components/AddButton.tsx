"use client";
import React from "react";
import Swal from "sweetalert2";

function AddButton() {
  const handleAddProduct = () => {
    Swal.fire({
      title: "Add Product",
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
            <label for="productLink" class="block text-gray-700 text-sm font-bold mb-2">Product Link:</label>
            <input type="text" id="productLink" name="productLink" class="border rounded-md px-3 py-2 w-full" required>
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
        const productLinkInput = document.getElementById(
          "productLink"
        ) as HTMLInputElement | null;

        if (!productNameInput || !productPriceInput || !productLinkInput) {
          Swal.showValidationMessage("Please fill in all fields");
          return false;
        }

        const productName = productNameInput.value;
        const productPrice = productPriceInput.value;
        const productLink = productLinkInput.value;

        // Replace the following alert with your logic for adding the product
        Swal.fire({
          title: "Product Added!",
          html: `
            <div>
              <p><b>Product Name:</b> ${productName}</p>
              <p><b>Product Price:</b> ${productPrice}</p>
              <p><b>Product Link:</b> ${productLink}</p>
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
      Add Products
    </button>
  );
}

export default AddButton;
