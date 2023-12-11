"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import profilePhoto from "@/app/assets/profile.png";

import { MdDehaze } from "react-icons/md";

function SideBar() {
  const pathname = usePathname();

  return (
    <div>
      <div className="drawer md:w-full lg:drawer-open bg-gray-400">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex lg:hidden justify-between">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className=" btn-primary cursor-pointer">
            <MdDehaze className="text-4xl text-gray-800" />
          </label>

          <div>Home</div>
        </div>

        <div className="drawer-side text-center">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#F2F3F7] text-base-content flex items-center">
            {/* Sidebar content here */}

            {/* Top Section */}
            <div className="mb-10 flex flex-col items-center">
              <Image
                src={profilePhoto}
                width={250}
                height={250}
                alt="Picture of the author"
                className="rounded-full"
              />

              <h1 className="text-2xl mt-3">Muhammad Noman</h1>
              <h3 className="text-md">
                {" "}
                <span className="text-[#54AAF1]">Full-stack</span> Web Developer
              </h3>
            </div>

            {/* Nav Section */}
            <div className="flex flex-col items-center">
              <li className="text-center">
                <Link href={"/"} className={pathname == "/" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className={pathname == "/about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/skills"}
                  className={pathname == "/skills" ? "active" : ""}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href={"/education"}
                  className={pathname == "/education" ? "active" : ""}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href={"/projects"}
                  className={pathname == "/projects" ? "active" : ""}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href={"/blog"}
                  className={pathname == "/blog" ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className={pathname == "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
