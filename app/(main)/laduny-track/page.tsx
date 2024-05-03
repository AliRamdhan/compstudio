"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import TrackPicture from "@/laduny/public/images/track-pict.png";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
const Page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const handleSearch = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      // Perform search action with the inputValue
      router.push(`laduny-track/${inputValue}`);
      alert(inputValue);
    } else {
      console.log("Input value is null or undefined");
    }
  };
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="Track Logo"
              width={100}
              height={100}
              src={TrackPicture}
              className="absolute inset-0 h-full w-full object-fit"
            />
          </div>

          <div className="w-full lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-100">
              Want to see track of process?
            </h2>

            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>
            <div className="w-full flex justify-center items-center gap-2 mt-8">
              <input
                type="text"
                ref={inputRef}
                className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Please enter with your passenger ID number"
              />
              <button
                className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSearch}
              >
                <Search2Icon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
