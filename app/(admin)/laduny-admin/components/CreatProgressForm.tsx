"use client";
import { CreateTrackProgressService } from "@/laduny/helpers/api-service";
import React, { FormEvent, useState } from "react";
import { TrackProgressForm } from "@/laduny/commont.type";

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await CreateTrackProgressService(trackNumber, formData);
      if (response) {
        alert("success create progress");
        // Clear the form data after successful submission if needed
        setFormData({
          TrackStatusRefer: 0,
          ServiceId: 0,
          TrackDescription: "",
          TrackStaff: "",
        });
      }
    } catch (error) {
      console.log(error);
      setError("Failed to create progress"); // Set error message if submission fails
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Ensure that TrackStatusRefer is parsed as a number
    const parsedValue = name === "TrackStatusRefer" ? parseInt(value) : value;
    setFormData({ ...formData, [name]: parsedValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div>
        <label>
          Track Status Refer:
          <input
            type="number"
            name="TrackStatusRefer"
            className="text-black"
            value={formData.TrackStatusRefer}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Track Description:
          <textarea
            name="TrackDescription"
            value={formData.TrackDescription}
            className="text-black"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Track Staff:
          <input
            type="text"
            name="TrackStaff"
            className="text-black"
            value={formData.TrackStaff}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatProgressForm;
