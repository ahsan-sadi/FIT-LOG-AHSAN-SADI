"use client";

import React, { useContext } from "react";

import Image from "next/image";
import CardImage from "@/assets/CardImage.png";

import { IoMdTime, IoIosTimer } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

import { PlanContext } from "@/context/PlanProvider";
import Link from "next/link";

const RunningCard = () => {
  const { runningPlan, removeFromRunningPlan, markAsDone } =
    useContext(PlanContext);

  return (
    <div className="space-y-3">
      {runningPlan.map((exercise) => (
        <div
          key={exercise.id}
          className="flex w-full items-center gap-3 rounded-xl border border-[#252932] bg-[#15181F] p-4"
        >
          {/* Image */}
          <div className="relative h-15 w-25 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={exercise.image || CardImage}
              alt={exercise.name || "Exercise"}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>

          {/* Workout information */}
          <div className="min-w-0 flex-1">
            <h3 className="font-oswald text-base font-bold uppercase leading-6 text-primary">
              {exercise.name}
            </h3>

            <p className="mt-0.5 font-inter text-[12px] leading-4 text-secondary">
              {exercise.equipment || "Exercise"}
            </p>

            {/* Meta */}
            <div className="mt-1 flex items-center gap-2">
              {/* Time */}
              <div className="flex items-center gap-1">
                <IoMdTime size={12} className="text-brand" />

                <span className="font-inter text-[12px] text-[#B7BBC3]">
                  {exercise.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-1">
                <IoIosTimer size={12} className="text-brand" />

                <span className="font-inter text-[12px] text-[#B7BBC3]">
                  {exercise.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <FaRegStar size={12} className="text-brand" />

                <span className="font-inter text-[12px] text-[#B7BBC3]">
                  {exercise.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            {/* View Details */}
            <Link href={`/workouts/${exercise.id}`}>
              <button
                type="button"
                className="h-6 cursor-pointer rounded-full border border-[#343943] px-3 font-inter text-[12px] text-[#D4D7DD] transition hover:bg-[#20242C]"
              >
                View Details
              </button>
            </Link>

            {/* Mark as Done */}
            <button
              type="button"
              onClick={() => markAsDone(exercise.id)}
              className="flex cursor-pointer h-6 items-center gap-1.5 rounded-full bg-[#B8FF00] px-3 font-inter text-[12px] font-semibold text-black transition hover:bg-[#C5FF33]"
            >
              <span className="text-[12px]">✓</span>
              Mark as Done
            </button>

            {/* Remove */}
            <button
              type="button"
              onClick={() => removeFromRunningPlan(exercise.id)}
              className="ml-1 cursor-pointer p-1 text-[12px] text-[#666C77] transition hover:text-white"
              aria-label={`Remove ${exercise.name}`}
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RunningCard;
