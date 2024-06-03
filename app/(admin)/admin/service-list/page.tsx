import React from "react";
import { GetAllService } from "@/laduny/helpers/api-service";
import Title from "@/laduny/components/admin/Title";
import ServiceTable from "./_components/ServiceTable";

async function Page() {
  const service = await GetAllService();
  return (
    <section className="w-full">
      <Title title="Service List" />

      <div
        className="divide-y divide-gray-200 text-center overflow-hidden overflow-x-auto"
        style={{ width: "85vw" }}
      >
        <ServiceTable services={service} />
      </div>
    </section>
  );
}

export default Page;
