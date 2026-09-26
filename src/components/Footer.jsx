import Image from "next/image";
import React from "react";
import FooterSVG from "@/assets/SVG.png";
import FooterText from "@/assets/Container.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="py-10 border-t border-t-[#1C1F26] border-t-solid">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:gap-2 sm:px-6 sm:text-left lg:px-8">
          <Link href="/">
            <div className="footer-logo flex items-center gap-2">
              <Image src={FooterSVG} alt="Footer Logo"></Image>
              <Image src={FooterText} alt="Footer Logo"></Image>
            </div>
          </Link>
          <div className="caption">
            <h2 className="font-inter text-secondary text-[12px] text-center sm:text-right">
              © 2026 FitLog — Workout Library. Train hard, log honest.
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
