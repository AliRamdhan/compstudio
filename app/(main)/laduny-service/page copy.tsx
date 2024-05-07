"use client";
import React, { useState, useEffect } from "react";
import Select, { ValueType, OptionTypeBase } from "react-select";
import axios from "axios";
import { GetAllServiceCategoryData } from "@/laduny/api/CategoryService/route";
import {
  CategoryService,
  CategoryServiceSelection,
} from "@/laduny/commont.type";

interface ServiceForm {
  ServiceLaptopName: string;
  ServiceLaptopVersion: string;
  ServiceComplaint: string;
  ServiceDate: string;
  ServiceCategory: number;
  CustomerUser: number;
}

const Page = () => {
  const [catSelection, setCatSelection] = useState<CategoryServiceSelection[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<boolean>(false);
  const [formData, setFormData] = useState<ServiceForm>({
    ServiceLaptopName: "",
    ServiceLaptopVersion: "",
    ServiceComplaint: "",
    ServiceDate: "",
    ServiceCategory: 1,
    CustomerUser: 2,
  });
  const CreateService = async ({
    ServiceLaptopName,
    ServiceLaptopVersion,
    ServiceComplaint,
    ServiceDate,
    ServiceCategory,
  }: {
    ServiceLaptopName: string;
    ServiceLaptopVersion: string;
    ServiceComplaint: string;
    ServiceDate: string;
    ServiceCategory: number;
  }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/service/create`,
        {
          serviceLaptopName: ServiceLaptopName,
          serviceLaptopVersion: ServiceLaptopVersion,
          serviceComplaint: ServiceComplaint,
          serviceDate: ServiceDate,
          ServiceCategory: ServiceCategory,
          CustomerUser: 3,
        }
      );
      return response.data; // Assuming the server responds with some data
    } catch (error) {
      console.error("Error adding service:", error);
      throw error; // Rethrow the error for the caller to handle
    }
  };
  const createTrack = async ({ ServiceId }: { ServiceId: number }) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/track/create`,
      { ServiceId: ServiceId}
    );
    return response.data;
  };
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
      ServiceCategory: selectedOptions ? (selectedOptions as any).value : 0,
    });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await CreateService(formData);
      if (response) {
        const createdServiceId = response.Service.ServiceID;
        alert("PPPP");
        // console.log(response.Service.Service.ServiceID);
        console.log("Service created:", response.Service.ServiceID);
        // console.log("Service created:", response.Server);
        const track = await createTrack({ ServiceId: createdServiceId });
        if (track) {
          alert(`track number ${track.Track.TrackNumber}`);
        }
        // Reset form after successful submission
        alert("PPPP");
        // Reset form data
        setFormData({
          ServiceLaptopName: "",
          ServiceLaptopVersion: "",
          ServiceComplaint: "",
          ServiceDate: "",
          ServiceCategory: 0,
          CustomerUser: 0,
        });
      }
    } catch (error) {
      console.error("Error creating service:", error);
    }
  };

  return (
    <section className="w-full h-full">
      <div className="mx-auto w-4/5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Laduny Computer</h1>

          <p className="mt-4 text-gray-500 text-lg">
            Isi data sehingga kami mengetahui apa saja keluhan kamu
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="w-full mx-auto mb-0 mt-8 space-y-4"
        >
          <div className="w-full flex justify-between gap-4 px-2">
            <div className="w-full">
              <div className="relative mt-1">
                <label
                  htmlFor="serviceLaptopName"
                  className="text-lg font-medium"
                >
                  Laptop Name:
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 px-4 py-2.5 text-sm shadow-sm text-black mt-1"
                  type="text"
                  id="serviceLaptopName"
                  value={formData.ServiceLaptopName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ServiceLaptopName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="relative mt-4">
                <label htmlFor="serviceDate" className="text-lg font-medium">
                  Date:
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 px-4 py-2 text-sm shadow-sm mt-1 text-black"
                  type="date"
                  id="serviceDate"
                  value={formData.ServiceDate}
                  onChange={(e) =>
                    setFormData({ ...formData, ServiceDate: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-full">
              <div className="relative mt-1">
                <label
                  htmlFor="serviceLaptopVersion"
                  className="text-lg font-medium"
                >
                  Laptop Version:
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 px-4 py-2.5 text-sm shadow-sm text-black mt-1"
                  type="text"
                  id="serviceLaptopVersion"
                  value={formData.ServiceLaptopVersion}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ServiceLaptopVersion: e.target.value,
                    })
                  }
                />
              </div>

              <div className="relative mt-4">
                <label htmlFor="serviceCategory" className="text-lg font-medium">
                  Category:
                </label>
                <Select
                  id="serviceCategory"
                  options={catSelection}
                  className="mt-1"
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
                      placeholder="Kerusakan yang terjadi"
                      cols={30}
                      rows={10}
                      id="serviceComplaint"
                      value={formData.ServiceComplaint}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ServiceComplaint: e.target.value,
                        })
                      }
                    ></textarea>
                  </>
                )}
              </div>
              <div className="flex items-center justify-end mt-8">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white"
                >
                  Service Computer
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
