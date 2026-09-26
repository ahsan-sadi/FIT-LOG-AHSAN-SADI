"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { IoMdTime, IoIosTimer } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { PlanContext } from "@/context/PlanProvider";
import CardImage from "@/assets/CardImage.png";
import Link from "next/link";

const SavedPlanCard = () => {
  const { savedPlan, removeFromSavedPlan, addToRunningPlan } =
    useContext(PlanContext);

  return (
    <div className="w-full space-y-3">
      {savedPlan.map((exercise) => (
        <div
          key={exercise.id}
          className="
            flex w-full flex-col gap-3
            rounded-xl border border-[#252932]
            bg-[#15181F] p-3
            sm:flex-row sm:items-center sm:p-4
          "
        >
          {/* Top section / Image + Information */}
          <div className="flex min-w-0 flex-1 items-center gap-3">
            {/* Image */}
            <div
              className="
                relative h-16 w-24
                shrink-0 overflow-hidden rounded-lg
                sm:h-15 sm:w-25
              "
            >
              <Image
                src={exercise.image}
                alt={exercise.name}
                fill
                sizes="(max-width: 640px) 96px, 100px"
                className="object-cover"
              />
            </div>

            {/* Workout information */}
            <div className="min-w-0 flex-1">
              <h3
                className="
                  truncate
                  font-oswald text-base font-bold
                  uppercase leading-6 text-primary
                  sm:text-lg
                "
              >
                {exercise.name}
              </h3>

              <p
                className="
                  mt-0.5 truncate
                  font-inter text-[11px]
                  leading-4 text-secondary
                  sm:text-[12px]
                "
              >
                {exercise.equipment || "Exercise"}
              </p>

              {/* Meta */}
              <div
                className="
                  mt-1.5 flex flex-wrap
                  items-center gap-x-3 gap-y-1
                "
              >
                {/* Duration */}
                <div className="flex items-center gap-1">
                  <IoMdTime size={12} className="shrink-0 text-brand" />

                  <span className="font-inter text-[11px] text-[#B7BBC3]">
                    {exercise.duration || 0} min
                  </span>
                </div>

                {/* Calories */}
                <div className="flex items-center gap-1">
                  <IoIosTimer size={12} className="shrink-0 text-brand" />

                  <span className="font-inter text-[11px] text-[#B7BBC3]">
                    {exercise.caloriesBurned || 0} kcal
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <FaRegStar size={12} className="shrink-0 text-brand" />

                  <span className="font-inter text-[11px] text-[#B7BBC3]">
                    {exercise.rating || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div
            className="
              flex w-full items-center justify-end
              gap-2
              border-t border-[#252932]
              pt-3
              sm:w-auto
              sm:border-t-0
              sm:pt-0
            "
          >
            {/* View Details */}
            <Link href={`/workouts/${exercise.id}`}>
              <button
                type="button"
                className="
                h-7 cursor-pointer rounded-full border border-[#343943] px-3
                font-inter text-[10px]
                text-[#D4D7DD]
                transition
                hover:bg-[#20242C]
                sm:h-6 sm:text-[12px]
              "
              >
                View Details
              </button>
            </Link>

            {/* Remove */}
            <button
              type="button"
              onClick={() => removeFromSavedPlan(exercise.id)}
              className="
                ml-1 shrink-0
                cursor-pointer
                p-1
                text-[14px]
                leading-none
                text-[#666C77]
                transition
                hover:text-white
              "
              aria-label={`Remove ${exercise.name} from saved plans`}
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedPlanCard;
