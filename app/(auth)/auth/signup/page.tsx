"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AtSignIcon, ViewIcon } from "@chakra-ui/icons";
const Page = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const register = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
        {
          username: username,
          email: email,
          password: password,
        }
      );
      if (register) {
        alert("Registration successful");
        router.push("/laduny-auth/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg py-4 shadow shadow-white">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          onSubmit={handleRegister}
          className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign up to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Username
            </label>

            <div className="relative">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                placeholder="Enter username"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <AtSignIcon />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <ViewIcon />
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-right text-sm text-gray-500">
            Have an account?
            <Link className="pl-1 underline" href="signin">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
