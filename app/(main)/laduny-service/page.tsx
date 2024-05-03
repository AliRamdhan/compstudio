import React from "react";
import CreateServiceForm from "./components/CreateServiceForm";
const Page = () => {
  return (
    <section className="w-full h-full">
      <div className="mx-auto w-4/5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Laduny Computer</h1>

          <p className="mt-4 text-gray-500 text-lg">
            Isi data sehingga kami mengetahui apa saja keluhan kamu
          </p>
        </div>
        <CreateServiceForm />
      </div>
    </section>
  );
};

export default Page;
