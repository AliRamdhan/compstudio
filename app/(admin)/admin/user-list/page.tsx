import Title from "@/laduny/components/admin/Title";
import UserTables from "@/laduny/components/admin/UserTables";
import React from "react";
import AddButton from "./_components/AddButton";
import { GetAllUser } from "@/laduny/helpers/api-service";

async function Page() {
  const users = await GetAllUser();
  return (
    <section>
      <Title title="List User" />
      <div className="divide-y divide-gray-200 text-center">
        <UserTables users={users} />
      </div>
    </section>
  );
}

export default Page;
