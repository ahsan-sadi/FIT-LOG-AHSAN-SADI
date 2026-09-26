import Image from "next/image";
import React from "react";
import HeroImg from "@/assets/banner.png";

const Hero = () => {
  return (
    <section
      className="
        container mx-auto
        mt-6
        flex flex-col
        gap-8
        rounded-xl
        bg-[#15171D]
        p-6

        sm:mt-8
        sm:p-8

        lg:mt-12
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:gap-10
        lg:p-14
      "
    >
      {/* ================= CONTENT ================= */}
      <div className="w-full lg:max-w-140">
        <h3
          className="
            font-inter
            text-[10px]
            font-bold
            text-brand
            sm:text-[11px]
          "
        >
          WORKOUT LIBRARY
        </h3>
        <h2
          className=" mt-3 w-fullfont-oswald text-[36px] font-extrabold leading-[1.05]  text-primary sm:mt-4 sm:text-[48px] lg:mt-5 lg:text-[60px] lg:leading-15
          "
        >
          TRAIN WITH INTENT. LOG EVERY SET.
        </h2>

        {/* Description */}
        <p
          className="  mt-4  w-full max-w-125 font-inter text-[13px] leading-5  text-secondary sm:mt-5 sm:text-sm sm:leading-6 lg:text-base
          "
        >
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>

        {/* Button */}
        <button
          type="button"
          className="
            mt-6
            rounded-lg
            border
            border-brand
            bg-brand
            px-5
            py-2.5
            font-inter
            text-[10px]
            font-bold
            text-black
            transition
            duration-200
            hover:bg-[#C5FF33]

            sm:mt-7
            sm:px-6
            sm:py-3
            sm:text-[12px]
          "
        >
          BROWSE WORKOUTS
        </button>
      </div>

      {/* ================= IMAGE ================= */}
      <div
        className="
          flex
          w-full
          justify-center

          lg:w-auto
          lg:shrink-0
        "
      >
        <Image
          src={HeroImg}
          alt="FitLog workout"
          priority
          className="
            h-auto
            w-full
            max-w-70
            object-contain
            sm:max-w-90
            lg:max-w-105
          "
        />
      </div>
    </section>
  );
};

export default Hero;
