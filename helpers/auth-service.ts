import axios from "axios";
import authHeader from "./auth-header";

const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getAdminData = () => {
  return axios.get(`${apiBaseUrl}/home/admin`, {
    headers: {
      Authorization: authHeader(),
    },
  });
};

export const getUserData = () => {
  return axios.get(`${apiBaseUrl}/home/user`, {
    headers: {
      Authorization: authHeader(),
    },
  });
};

export const GetAllServiceCategoryData = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/service-category/all`
    );
    return response.data.ServiceCategory;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
