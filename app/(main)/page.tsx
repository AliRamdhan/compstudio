import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import HeroPict from "@/laduny/public/images/hero-pict.png";
import TypeAnimations from "@/laduny/components/TypeAnimation";
import { GetAllProductData } from "@/laduny/api/Products/route";

const ContainerProducts = dynamic(
  () => import("@/laduny/components/ContainerProducts"),
  {
    loading: () => <p>Loading....</p>,
  }
);

const ContainerHighlightProduct = dynamic(
  () => import("@/laduny/components/ContainerHiglightProduct"),
  {
    loading: () => <p>Loading....</p>,
  }
);

const Home = async () => {
  const products = await GetAllProductData();
  return (
    <>
      <section className="w-full h-full px-16">
        {/* Hero */}
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-extrabold text-white lg:text-3xl">
                  Best place to choose
                </h1>
                <div className="flex items-center gap-2 text-2xl font-extrabold text-white lg:text-3xl mt-2">
                  <p>your</p>
                  <div className="px-0.5">
                    <TypeAnimations />
                  </div>
                  <p>computer</p>
                </div>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>
                <div className="w-full flex justify-center items-center gap-4 mt-8 px-8 text-white">
                  <Link href={`/laduny-service`} className="w-full">
                    <button className="group w-full px-5 py-2 bg-gray-200 border border-white rounded-lg text-gray-800 font-bold flex justify-center gap-2 items-center transition-all duration-300 hover:scale-110">
                      Create Service
                    </button>
                  </Link>
                  <Link href={`/laduny-track`} className="w-full">
                    <button className="group w-full px-5 py-2 border border-white font-bold rounded-lg flex justify-center gap-2 items-center transition-all duration-300 hover:scale-110">
                      Tracking Service
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <Image
                width={100}
                height={100}
                className="w-[380px] h-[380px]"
                src={HeroPict}
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-100 sm:text-5xl">
              Product Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>
          <section className="w-full mt-8">
            <div className="flex mb-2 pb-2">
              <p className="text-3xl font-semibold pb-1.5 border-b">
                Product March Top
              </p>
            </div>
            <div className="px-8">
              <ContainerHighlightProduct products={products} />
            </div>
            <div className="w-full mt-8">
              <div className="flex mb-2 pb-2">
                <p className="text-3xl font-semibold pb-1.5 border-b">
                  Product&apos;s
                </p>
              </div>
              <div className="px-8">
                <ContainerProducts products={products} />
                <div className="text-right">
                  <Link
                    href={`/laduny-products`}
                    className="cursor-pointer hover:text-gray-500 hover:scale-110 duration-300 transition"
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
