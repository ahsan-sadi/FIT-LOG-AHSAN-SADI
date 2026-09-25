import Image from "next/image";
import React from "react";
import FooterSVG from "@/assets/SVG.png";
import FooterText from "@/assets/Container.png";

const Footer = () => {
  return (
    <>
      <footer className="py-10 border-t border-t-[#1C1F26] border-t-solid">
        <div className="container mx-auto flex justify-between items-center">
          <div className="footer-logo flex items-center gap-2">
            <Image src={FooterSVG} alt="Footer Logo"></Image>
            <Image src={FooterText} alt="Footer Logo"></Image>
          </div>
          <div className="caption">
            <h2 className="font-inter text-secondary text-[12px] text-right">
              © 2026 FitLog — Workout Library. Train hard, log honest.
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
