"use client";
import React, { useEffect, useState } from "react";
import { getAdminData } from "../../../helpers/api-service";
import { useRouter } from "next/navigation";
interface User {
  username: string;
  email: string;
  role: number;
}
const Page = () => {
  const [user, setUser] = useState<User>();
  const [message, setMessage] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdminData();
        console.log(response.data);
        setUser(response.data.user);
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchData();
  }, []);
  const handleLogout = () => {
    const response = confirm("logout?");
    if (response == true) {
      localStorage.removeItem("secretkey");
      router.push("/");
    }
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div>
        Dashboard ADMIN Page , {message} : {user?.username} : {user?.email}
      </div>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Page;
