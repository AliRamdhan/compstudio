"use client";
import {
  CreateTrackProgressService,
  GetAllStatusTrack,
} from "@/laduny/helpers/api-service";
import React, { FormEvent, ChangeEvent, useState, useEffect } from "react";
import { TrackProgressForm } from "@/laduny/commont.type";
import { TrackStatus } from "../../../../../commont.type";

const CreatProgressForm = ({
  trackNumber,
  serviceId,
}: {
  trackNumber: string;
  serviceId: number;
}) => {
  const [formData, setFormData] = useState<TrackProgressForm>({
    TrackStatusRefer: 0,
    ServiceId: serviceId,
    TrackDescription: "",
    TrackStaff: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<TrackStatus[]>([]);
  const fetchData = async () => {
    try {
      const trackStatus = await GetAllStatusTrack();
      setStatuses(trackStatus);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await CreateTrackProgressService(trackNumber, formData);
      if (response) {
        alert("success create progress");
        // Clear the form data after successful submission if needed
        setFormData({
          TrackStatusRefer: 0,
          ServiceId: serviceId,
          TrackDescription: "",
          TrackStaff: "",
        });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setError("Failed to create progress"); // Set error message if submission fails
    }
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // Ensure that TrackStatusRefer is parsed as a number
    const parsedValue = name === "TrackStatusRefer" ? parseInt(value) : value;
    setFormData({ ...formData, [name]: parsedValue });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div className="relative">
        <div>
          <label className="text-lg font-medium">Staff Name :</label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-600 px-4 py-2.5 text-sm shadow-sm text-black mt-1"
            name="TrackStaff"
            placeholder="Staff Name"
            value={formData.TrackStaff}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label className="text-lg font-medium">Track Status Refer:</label>
        <select
          className="w-full text-black border border-black rounded-md px-4 py-2.5 text-sm shadow-sm text-black mt-1"
          name="TrackStatusRefer"
          id="TrackStatusRefer"
          onChange={handleChange}
        >
          {statuses.map((status) => (
            <option value={status.StatusID}>{status.StatusName}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="TrackDescription" className="text-lg font-medium">
          Complaint:
        </label>
        <textarea
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm shadow-sm text-black mt-4"
          name="TrackDescription"
          placeholder="Create Progress"
          cols={30}
          rows={5}
          id="TrackDescription"
          value={formData.TrackDescription}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex items-center justify-end mb-8 mt-4">
        <button
          type="submit"
          className="w-56 inline-block rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreatProgressForm;
