"use client";

import React, { useState, useEffect } from "react";
import LogoLaduny from "@/laduny/public/images/logo-laduny.png";
import Image from "next/image";
import Link from "next/link";
import { GetUserData } from "../helpers/api-service";
import { User } from "@/laduny/commont.type";
import { useRouter } from "next/navigation";
import { Icon } from "@chakra-ui/react";
import { FaUserShield } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [user, setUser] = useState<User>();
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.Math.round(window.scrollY));
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        // Cleanup the event listener when the component unmounts
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await GetUserData();
        setUser(user);
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
    <header
      className={`sticky top-0 z-50 ${
        scrollY >= 50
          ? "bg-gray-100 shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <div className="flex items-center">
            <span className="sr-only">Home</span>
            <Image
              src={LogoLaduny}
              width={100}
              height={100}
              alt="Logo Laduny Store"
            />
            <p className="text-lg font-bold">Laduny Computer</p>
          </div>
        </Link>

        <div className="flex flex-1 items-center justify-end">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {/* <li>
                <Link href="/" className={`transition hover:text-gray-600`}>
                  {" "}
                  Home{" "}
                </Link>
              </li> */}
              {user && (
                <li>
                  <Link
                    href="/laduny-service"
                    className={`transition hover:text-gray-600`}
                  >
                    {" "}
                    Services{" "}
                  </Link>
                </li>
              )}
              <li>
                <a
                  href="/laduny-track"
                  className={`transition hover:text-gray-600`}
                >
                  {" "}
                  Track{" "}
                </a>
              </li>

              <li>
                <Link
                  href="/laduny-products"
                  className={`transition hover:text-gray-600`}
                >
                  {" "}
                  Products{" "}
                </Link>
              </li>

              <li>
                <Link
                  href="/laduny-about"
                  className={`transition hover:text-gray-600`}
                >
                  {" "}
                  About Us{" "}
                </Link>
              </li>

              <li>
                <Link
                  href="/laduny-contact"
                  className={`transition hover:text-gray-600`}
                >
                  {" "}
                  Contact Us{" "}
                </Link>
              </li>
              {user ? (
                <>
                  <Menu>
                    <MenuButton className="border-b border-white">
                      {user.username} <ChevronDownIcon w="6" h="6" />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link
                          href={`/laduny-dashboard/${user.username}/services`}
                          className="w-full h-full text-black"
                        >
                          Your Services
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <p className="text-black">Logout</p>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <li className="px-4 py-1 border broder-white rounded">
                  <Link
                    href="/auth/signin"
                    className={`transition hover:text-gray-600`}
                  >
                    {" "}
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

// NAMA
// NO WA
// Merek laptop
// Keluhan
// Appointment

// Mobile

// <Menu>
//   <MenuButton
//     as={IconButton}
//     aria-label='Options'
//     icon={<HamburgerIcon />}
//     variant='outline'
//   />
//   <MenuList>
//     <MenuItem icon={<AddIcon />} command='⌘T'>
//       New Tab
//     </MenuItem>
//     <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
//       New Window
//     </MenuItem>
//     <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
//       Open Closed Tab
//     </MenuItem>
//     <MenuItem icon={<EditIcon />} command='⌘O'>
//       Open File...
//     </MenuItem>
//   </MenuList>
// </Menu>
