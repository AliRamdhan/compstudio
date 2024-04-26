import React from "react";
import CardProduct from "./CardProduct";
import { Product } from "../commont.type";

const ContainerProducts = ({
  products,
  loading,
}: {
  products: Product[];
  loading: Boolean;
}) => {
  return (
    <div className="w-full grid grid-cols-5 gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.ProductID}>
            <CardProduct {...product} />
          </div>
        ))
      )}
    </div>
  );
};

export default ContainerProducts;
