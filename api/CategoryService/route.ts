import axios from "axios";
import { ServiceForm } from "@/laduny/commont.type";
// Function to fetch all service categories
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
// Server-side function
export async function getServerSideProps({ req, res }: { req: any; res: any }) {
  try {
    // Fetch all service categories
    const products = await GetAllServiceCategoryData();

    // Return the fetched data as props
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
