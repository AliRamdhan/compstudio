import React, { useRef, useState } from "react";
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

const ContainerHighlightProduct = ({
  products,
  loading,
  setLoading,
}: {
  products: Product[];
  loading: Boolean;
  setLoading: (loading: boolean) => void;
}) => {
  return (
    <div className="text-black">
      <Swiper
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-black"
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <SwiperSlide key={product.ProductID}>
              <CardProduct {...product} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default ContainerHighlightProduct;
