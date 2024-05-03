"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Select, { ValueType, OptionTypeBase } from "react-select";
import axios from "axios";
import {
  CategoryService,
  CategoryServiceSelection,
  CreateServiceRequest,
  CreateServiceResponse,
  ErrorResponse,
} from "@/laduny/commont.type";
import { GetAllServiceCategoryData } from "@/laduny/helpers/api-service";
const CreateServiceForm = () => {
  const [catSelection, setCatSelection] = useState<CategoryServiceSelection[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<boolean>(false);
  const [formData, setFormData] = useState<CreateServiceRequest>({
    serviceLaptopName: "",
    serviceLaptopVersion: "",
    serviceComplaint: "",
    customerUser: 2, // Set the appropriate default value
    serviceCategory: 0, // Set the appropriate default value
  });
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await GetAllServiceCategoryData();
        // Map CategoryService data to CategoryServiceSelection
        const mappedCategories = response.map((category: CategoryService) => ({
          value: category.CatID,
          label: category.CatName,
        }));
        setCatSelection(mappedCategories);
      } catch (error) {
        console.error("Error category data:", error);
      }
    };
    fetchProductsData();
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event handlers
  const handleCategoryChange = (selectedOptions: ValueType<OptionTypeBase>) => {
    setSelectedCategory(
      !!selectedOptions && (selectedOptions as any).length !== 0
    );
    if (selectedCategory) {
      alert("ppp");
    }
    // Update formData
    setFormData({
      ...formData,
      serviceCategory: selectedOptions ? (selectedOptions as any).value : 0,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<CreateServiceResponse>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/service/create`,
        formData
      );
      if (response) {
        alert("Success create data");
      }
      console.log(response.data);
      setError(null);
    } catch (error) {
      // console.error("Error creating service:", error.response?.data);
      setError("Failed to create service");
    }
  };

  return (
    <div className="w-full">
      {error && <p>{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto mb-0 mt-8 space-y-4"
      >
        <div className="w-full flex justify-between gap-4 px-2">
          <div className="w-full">
            <div className="relative">
              <label
                htmlFor="serviceLaptopName"
                className="text-lg font-medium"
              >
                Laptop Name:
              </label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 px-4 py-2.5 text-sm shadow-sm text-black mt-1"
                name="serviceLaptopName"
                value={formData.serviceLaptopName}
                onChange={handleChange}
              />
            </div>
            <div className="relative mt-4">
              <label className="text-lg font-medium">Laptop Version:</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 px-4 py-2.5 text-sm shadow-sm text-black mt-1"
                name="serviceLaptopVersion"
                value={formData.serviceLaptopVersion}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative">
              <label htmlFor="serviceCategory" className="text-lg font-medium">
                Category:
              </label>
              <Select
                id="serviceCategory"
                options={catSelection}
                className="mt-1 text-black"
                onChange={(selectedOptions) => {
                  handleCategoryChange(selectedOptions);
                }}
              />

              {selectedCategory && ( // Only render the complaint input if a category is selected
                <>
                  <label
                    htmlFor="serviceComplaint"
                    className="text-lg font-medium"
                  >
                    Complaint:
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 px-4 py-3 text-sm shadow-sm text-black mt-4"
                    name="serviceComplaint"
                    placeholder="Kerusakan yang terjadi"
                    cols={30}
                    rows={10}
                    id="serviceComplaint"
                    value={formData.serviceComplaint}
                    onChange={handleChange}
                  ></textarea>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-8">
          <button
            type="submit"
            className="w-56 inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateServiceForm;
