import axios from "axios";

export const GetChat = async () => {
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