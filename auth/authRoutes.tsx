"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { findUser } from "@/laduny/helpers/api-service";
const authRoute = (Component: any) => {
  return (props: any) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
      const checkToken = async () => {
        const token = localStorage.getItem("secretkey");

        if (!token) {
          alert("authentication first");
          router.replace("/");
        } else {
          const response: any = await findUser(JSON.parse(token));
          if (!response.ok) {
            localStorage.removeItem("secretkey");
            router.replace("/");
          } else {
            const userData = await response.json();
            if (!userData.currentUser) {
              router.replace("/");
              localStorage.removeItem("secretkey");
            } else {
              setUser(userData.currentUser);
              setAuthenticated(true);
            }
          }
        }
      };
      checkToken();
    }, [router]);

    if (authenticated) {
      return <Component {...props} user={user} />;
    } else {
      return null;
    }
  };
};
export default authRoute;
