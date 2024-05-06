import axios from "axios";

export const GetUserTotal = async ({
    totalUser,
  }: {
    totalUser: number;
  }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/home/user`
      );
      return response.data.length;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };