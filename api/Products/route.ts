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

export const CreateProduct = async () =>{
  try{
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/products/create`)
    return response.data.Product;
  }catch(error){
    console.error("Error fetching data:", error);
    return [];
  }
}

export const UpdateProduct = async ({productId}: {productId : number}) => {
  try{
    const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/products/update/:${productId}`)
    return response.data.Product;
  }catch(error){
    console.error("Error fetching data:", error);
    return [];
  }
}

export const DeleteProduct = async ({productId}: {productId : number}) => {
  try{
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/products/delete/:${productId}`)
    return response.data.Product;
  }catch(error){
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getServerSideProps({ req, res }: { req: any; res: any }) {
  const products = await GetAllProductData();

  return {
    props: {
      products,
    },
  };
}
