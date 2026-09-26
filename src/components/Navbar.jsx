"use client";

import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";

import Logo from "@/assets/logo.png";
import { PlanContext } from "@/context/PlanProvider";

const navItems = [
  { name: "Workouts", href: "/" },
  { name: "My Plan", href: "/myplan" },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { runningPlan, savedPlan } = useContext(PlanContext);

  const planCount = runningPlan?.length || 0;
  const savedCount = savedPlan?.length || 0;

  return (
    <nav className="border-b border-[#1C1F26] py-4 sm:py-6.5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        {/* ================= DESKTOP / MOBILE HEADER ================= */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="logo flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={Logo}
              alt="FITLOG logo"
              width={28}
              height={28}
              className="h-7 w-7"
            />

            <h2 className="font-oswald text-lg font-bold uppercase text-primary">
              FITLOG
            </h2>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center justify-center gap-4 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    font-inter text-[12px] transition-all duration-200

                    ${
                      isActive
                        ? "rounded-2xl bg-[#1A2312] px-4 py-1.5 text-brand"
                        : "font-medium text-secondary hover:text-primary"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* ================= DESKTOP COUNTS ================= */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Plan */}
            <div className="flex items-center gap-2">
              <h3 className="font-inter text-[12px] font-medium text-secondary">
                Plan
              </h3>

              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand bg-brand font-inter text-[11px] font-medium text-black">
                {planCount}
              </span>
            </div>

            {/* Saved */}
            <div className="flex items-center gap-2">
              <h3 className="font-inter text-[12px] font-medium text-secondary">
                Saved
              </h3>

              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-secondary font-inter text-[11px] font-medium text-white">
                {savedCount}
              </span>
            </div>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg
              border border-[#292E37]
              bg-[#15181F]
              text-primary
              transition
              hover:border-brand
              md:hidden
            "
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-[#1C1F26] pt-4 md:hidden">
            {/* Navigation */}
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      rounded-lg
                      px-4 py-3
                      font-inter
                      text-[12px]
                      transition-all

                      ${
                        isActive
                          ? "bg-[#1A2312] text-brand"
                          : "text-secondary hover:bg-[#15181F] hover:text-primary"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile counters */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              {/* Plan */}
              <div className="flex items-center justify-between rounded-lg border border-[#232732] bg-[#15181F] px-4 py-3">
                <span className="font-inter text-[11px] text-secondary">
                  Plan
                </span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand font-inter text-[10px] font-bold text-black">
                  {planCount}
                </span>
              </div>

              {/* Saved */}
              <div className="flex items-center justify-between rounded-lg border border-[#232732] bg-[#15181F] px-4 py-3">
                <span className="font-inter text-[11px] text-secondary">
                  Saved
                </span>

                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-secondary font-inter text-[10px] font-medium text-white">
                  {savedCount}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
