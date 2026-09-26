import React from "react";
import CardImage from "@/assets/planImage.png";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const ItemDetails = async ({ params }) => {
  let param = await params;
  //   console.log(param);

  let res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
  let data = await res.json();

  let worksData = data.filter((work) => work.id === parseInt(param.workId));

  return (
    <section className="min-h-screen bg-[#0D0F13] px-4 py-6 md:px-6 lg:px-8">
      <div>
        {worksData.map((each) => (
          <div
            key={each.id}
            className="container mx-auto grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]"
          >
            {/* LEFT - IMAGE */}
            <div className="relative overflow-hidden rounded-lg ">
              <Image
                src={each.image}
                alt="Barbell Bench Press"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* RIGHT - CONTENT */}
            <div className="relative">
              {/* Title */}
              <h2 className="font-oswald font-bold text-4xl leading-10 text-primary">
                {each.name}
              </h2>
              <h3 className="font-inter text-base text-secondary leading-6">
                {each.description}
              </h3>

              {/* Badges */}

              <div className="badges flex gap-2 mt-3 mb-5">
                {each.muscleGroups.map((badge, idx) => (
                  <h2
                    key={idx}
                    className="font-inter font-bold text-[11px] text-black bg-brand py-0.5 px-2.5 rounded "
                  >
                    {badge}
                  </h2>
                ))}
              </div>

              {/* Information Box */}
              <div className="mt-4 overflow-hidden rounded-lg border border-[#20242D] bg-[#15181F]">
                {/* Equipment */}
                <div className="flex h-9 items-center justify-between border-b border-[#20242D] px-3">
                  <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-secondary">
                    Equipment
                  </span>

                  <span className="font-inter text-[14px] text-medium text-[#E5E7EB]">
                    {each.equipment}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="flex h-9 items-center justify-between border-b border-[#20242D] px-3">
                  <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-secondary">
                    Difficulty
                  </span>

                  <span className="font-inter text-[14px] text-medium text-[#E5E7EB]">
                    {each.difficulty}
                  </span>
                </div>

                {/* Sets */}
                <div className="flex h-9 items-center justify-between border-b border-[#20242D] px-3">
                  <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-secondary">
                    Sets
                  </span>

                  <span className="font-inter text-[14px] text-medium text-[#E5E7EB]">
                    {each.sets}
                  </span>
                </div>

                {/* Reps */}
                <div className="flex h-9 items-center justify-between border-b border-[#20242D] px-3">
                  <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-secondary">
                    Reps
                  </span>

                  <span className="font-inter text-[14px] text-medium text-[#E5E7EB]">
                    {each.reps}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex h-9 items-center justify-between border-b border-[#20242D] px-3">
                  <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-secondary">
                    Duration
                  </span>

                  <span className="font-inter text-[14px] text-medium text-[#E5E7EB]">
                    {each.duration} min
                  </span>
                </div>

                {/* Calories */}
                <div className="flex h-9 items-center justify-between border-b border-[#20242D] px-3">
                  <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-secondary">
                    Calories
                  </span>

                  <span className="font-inter text-[14px] text-medium text-[#E5E7EB]">
                    {each.caloriesBurned} kcal
                  </span>
                </div>

                {/* Rating */}
                <div className="flex h-9 items-center justify-between px-3">
                  <span className="font-inter text-[12px] font-bold uppercase tracking-wider text-secondary">
                    Rating
                  </span>

                  <span className="font-inter text-[14px] text-medium text-[#E5E7EB]">
                    {each.rating}
                  </span>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4">
                <h2 className="font-inter text-base font-extrabold uppercase tracking-wide text-white leading-6">
                  Instructions
                </h2>

                <ol className="mt-2 space-y-1.5">
                  {each.instructions.map((instraction, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 font-inter text-sm leading-5.5 text-[#D1D5DB]"
                    >
                      <span>{(idx += 1)}.</span>
                      <span>{instraction}</span>
                    </li>
                  ))}
                  {/*                   

                  <li className="flex gap-2 font-inter text-sm leading-5.5 text-[#D1D5DB]">
                    <span>2.</span>
                    <span>
                      Unrack with locked elbows and lower the bar to mid-chest.
                    </span>
                  </li>

                  <li className="flex gap-2 font-inter text-sm leading-5.5 text-[#D1D5DB]">
                    <span>3.</span>
                    <span>
                      Press up in a slight arc until elbows lock without
                      bouncing.
                    </span>
                  </li>

                  <li className="flex gap-2 font-inter text-sm leading-5.5 text-[#D1D5DB]">
                    <span>4.</span>
                    <span>
                      Keep shoulder blades pinched and a natural arch in the
                      back.
                    </span>
                  </li> */}
                </ol>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-2">
                <button className="flex items-center gap-1.5 rounded-md border border-brand bg-brand px-6 py-3 font-inter text-sm font-semibold text-black transition">
                  <FiCalendar size={14} />
                  Add to today's plan
                </button>

                <button className="flex px-6 py-3  ites-center gap-1.5 rounded-md border border-[#374151] font-inter text-sm text-[#E5E7EB] transition">
                  <FaRegBookmark size={14} />
                  Save for later
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemDetails;
