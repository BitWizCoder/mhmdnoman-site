"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {/* Top Section */}
            <div>
              <h1 className="text-2xl">Muhammad Noman</h1>
            </div>

            {/* Nav Section */}
            <li>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
