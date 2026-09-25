"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const navItems = [
  { name: "Workouts", href: "/" },
  { name: "My Plan", href: "/myplan" },
];

const Navbar = () => {
  const pathname = usePathname();
  let items = (
    <>
      <Link href="/" className=" ">
        My Plan
      </Link>
    </>
  );

  return (
    <>
      <nav className="py-6.5 border-b border-b-[#1C1F26] border-b-solid">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo flex items-center gap-2">
            <Image src={Logo} alt="logo.png"></Image>
            <h2 className="font-oswald text-lg uppercase text-primary font-bold">
              FITLOG
            </h2>
          </div>
          <div className="items flex justify-center items-center gap-4">
            {navItems.map((item, idx) => {
              let isActive = pathname === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`${isActive ? "font-inter text-[12px] text-brand py-1.5 px-4 bg-[#1A2312] rounded-2xl" : "font-inter font-medium text-[12px] text-secondary"} `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="icons flex items-center gap-4">
            <div className="content flex items-center gap-2">
              <h3 className=" font-inter font-medium text-[12px] text-secondary">
                Plan
              </h3>
              <h3 className=" font-inter font-medium text-[11px] text-black flex justify-center items-center bg-brand w-5  h-5 rounded-full border border-solid border-brand">
                0
              </h3>
            </div>
            <div className="content flex items-center gap-2">
              <h3 className=" font-inter font-medium text-[12px] text-secondary">
                Saved
              </h3>
              <h3 className=" font-inter font-medium text-[11px] text-white flex justify-center items-center border border-solid border-secondary w-5  h-5 rounded-full">
                0
              </h3>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
