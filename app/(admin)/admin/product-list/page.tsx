import Title from "@/laduny/components/admin/Title";
import React from "react";
import ProductTable from "@/laduny/components/admin/ProductTable";
import { GetAllProductData } from "@/laduny/api/Products/route";

async function Page() {
  const products = await GetAllProductData();
  // const products = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     price: 10,
  //     link: "https://tokopedia.link/Mm3K1r1bjJb",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: 20,
  //     link: "https://example.com/product2",
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     price: 30,
  //     link: "https://example.com/product3",
  //   },
  // ];
  return (
    <section>
      <Title title="Product List" />

      <div className="divide-y divide-gray-200 text-center">
        <ProductTable products={products} />
      </div>
    </section>
  );
}

export default Page;
