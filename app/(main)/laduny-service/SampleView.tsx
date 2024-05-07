import React from "react";
import { Product } from "../../commont.type";

const SampleView = ({ products }: { products: Product[] }) => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <div>{product.ProductName}</div>
        </div>
      ))}
    </div>
  );
};

export default SampleView;
