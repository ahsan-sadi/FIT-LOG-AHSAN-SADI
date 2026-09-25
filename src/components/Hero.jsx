import Image from "next/image";
import React from "react";
import HeroImg from "@/assets/banner.png";

const Hero = () => {
  return (
    <>
      <section className="container mx-auto bg-[#15171D] rounded-xl p-14 flex justify-between mt-12">
        <div>
          <h3 className="font-inter font-bold text-[11px] text-brand">
            WORKOUT LIBRARY
          </h3>
          <h2 className="font-oswald font-extrabold text-[60px] text-primary w-139.5 leading-15 mt-5 ">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h2>
          <p className="font-inter text-base text-secondary leading-6 w-120 mt-5">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="font-inter font-bold text-[12px] text-black bg-brand py-3 px-6 rounded-lg border border-solid border-brand mt-7 cursor-pointer">
            BROWSE WORKOUTS
          </button>
        </div>
        <div>
          <Image src={HeroImg} alt="hero.png"></Image>
        </div>
      </section>
    </>
  );
};

export default Hero;
