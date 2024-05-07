import axios from "axios";
import authHeader from "./auth-header";
import { NextApiRequest, NextApiResponse } from "next";
import {
  Service,
  ServiceForm,
  ErrorResponse,
  TrackProgressForm,
  CreateServiceRequest,
  CreateServiceResponse,
} from "@/laduny/commont.type";
const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getAdminData = () => {
  return axios.get(`${apiBaseUrl}/home/admin`, {
    headers: {
      Authorization: authHeader(),
    },
  });
};

export const GetUserData = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/home/user`, {
      headers: {
        Authorization: authHeader(),
      },
    });
    return response.data.user;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllProductData = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/products/all`);
    return response.data.Product;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// CATEGORY SERVICE
export const GetAllServiceCategoryData = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/service-category/all`);
    return response.data.ServiceCategory;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// SERVICE
export const CreateService = async (serviceForm: ServiceForm) => {
  try {
    const response = await axios.post(
      `${apiBaseUrl}/service/create`,
      serviceForm
    );
    return response.data; // Assuming the server responds with some data
  } catch (error) {
    console.error("Error adding service:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export const GetServiceById = async (serviceId: number) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/service/${serviceId}`);
    return response.data.Service;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const GetServiceByUserId = async (userId: number) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/service/user/${userId}`);
    return response.data.Service;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

//Track
export const GetAllTrack = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/track/all`);
    return response.data.Tracks;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export const CreateTrackService = async (serviceId: number) => {
  const response = await axios.post(`${apiBaseUrl}/track/create`, serviceId);
  return response.data;
};

export const CreateTrackProgressService = async (
  trackNumber: string,
  formdata: TrackProgressForm
) => {
  const response = await axios.post(
    `${apiBaseUrl}/track/create/${trackNumber}`,
    formdata
  );
  return response.data;
};

export const GetAllTrackByTrackNumber = async ({
  trackNumber,
}: {
  trackNumber: string;
}) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/track/${trackNumber}`
    );
    return response.data.Track;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const GetTrackByServiceId = async (serviceId: number) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/track/service/${serviceId}`
    );
    return response.data.Track;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
// pages/api/service/create.ts

//TRACK STATUS

export const GetAllStatusTrack = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/track-status/all`);
    return response.data.TrackStatus;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateServiceResponse | ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const requestData: CreateServiceRequest = req.body;

  try {
    // Call your Go backend to create the service
    const response = await axios.post<Service>(
      `${apiBaseUrl}/service/create`,
      requestData
    );

    res.status(201).json({
      message: "Service created successfully",
      service: response.data,
    });
  } catch (error) {
    // console.error('Error creating service:', error.response?.data);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
