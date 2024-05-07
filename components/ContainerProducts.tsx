import React from "react";
import CardProduct from "./CardProduct";
import { Product } from "../commont.type";

const ContainerProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full grid grid-cols-5 gap-4">
      {products.map((product) => (
        <div key={product.ProductID}>
          <CardProduct {...product} />
        </div>
      ))}
    </div>
  );
};

export default ContainerProducts;
