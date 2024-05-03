"use client";

import React from "react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
const page = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      <div className="h-[80vh] flex justify-around items-center px-16">
        <div className="w-full">
          <p className="font-bold text-3xl text-blue-500 dark:text-blue-400">
            Contact us
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-gray-800 md:text-4xl dark:text-white">
            We’d love to hear from you
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400 text-xl font-medium">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 ">
          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <EmailIcon />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Chat to sales
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Speak to our friendly team.
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              hello@merakiui.com
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <PhoneIcon />
            </span>

            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Call us
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Mon-Fri from 8am to 5pm.
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              +1 (555) 000-0000
            </p>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.352450352395!2d107.1705463!3d-6.2850003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984caf54df305%3A0xb7156354ad963e4d!2sPresident%20University%20-%20Kampus%2C%20Kuliah%20di%20Cikarang!5e0!3m2!1sid!2sid!4v1683478592189!5m2!1sid!2sid"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-80"
      ></iframe>
    </section>
  );
};

export default page;
