import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../commont.type";
const CardProduct = ({
  ProductID,
  ProductName,
  ProductPrice,
  ProductImage,
}: Product) => {
  return (
    <Link
      href="https://www.tokopedia.com/3is-garage/helm-custom-cakil-simpson-m30-retro-full-face-vintage-clasic-cakil-hitam-kaca-luar-9c3fa?extParam=ivf%3Dfalse&src=topads"
      className="group block overflow-hidden"
    >
      <div className="bg-white p-2">
        <Image
          src={ProductImage}
          alt="Product Photo"
          width={100}
          height={100}
          className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
        />
      </div>
      <div className="relative bg-white py-3 px-2">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {ProductName}
        </h3>

        <p className="mt-2">
          <span className="sr-only"> Regular Price </span>

          <span className="tracking-wider text-gray-900">
            {" "}
            {ProductPrice}GBP{" "}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default CardProduct;
