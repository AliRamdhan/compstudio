"use client";
import React, { useEffect, useState } from "react";
import { getUserData } from "@/laduny/helpers/api-service";
import { useRouter } from "next/navigation";
import {User} from "@/laduny/commont.type";
const Page = () => {
  const [user, setUser] = useState<User>();
  const [message, setMessage] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserData();
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
    <div className="w-full min-h-screen flex justify-center items-center">
      Dashboard Page , {message} : {user?.username} : {user?.email}
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Page;
