import axios from "axios";

export const GetAllProductData = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/all`
    );
    return response.data.Product;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export async function getServerSideProps({ req, res }: { req: any; res: any }) {
  const products = await GetAllProductData();

  return {
    props: {
      products,
    },
  };
}
