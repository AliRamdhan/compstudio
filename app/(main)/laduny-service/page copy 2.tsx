import React from "react";
import dynamic from "next/dynamic";
import { GetAllProductData } from "@/laduny/helpers/api-service";

const ServerExampleView = dynamic(() => import("./SampleView"), {
  loading: () => <p>Loading....</p>,
});
const Page = async () => {
  const products = await GetAllProductData();

  return (
    <div>
      <ServerExampleView products={products} />
    </div>
  );
};

export default Page;
