"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Product } from "../commont.type";
import CardProduct from "./CardProduct";

const ContainerHighlightProduct = ({ products }: { products: Product[] }) => {
  return (
    <div className="text-black">
      <Swiper
        navigation={true}
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-black"
      >
        {products.map((product) => (
          <SwiperSlide key={product.ProductID}>
            <CardProduct {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContainerHighlightProduct;
