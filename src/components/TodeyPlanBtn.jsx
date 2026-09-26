"use client";

import { PlanContext } from "@/context/PlanProvider";
import React, { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

const TodeyPlanBtn = ({ data }) => {
  const { runningPlan, setRunningPlan } = useContext(PlanContext);

  const handleClick = () => {
    // Check if already added
    const alreadyExists = runningPlan.some((item) => item.id === data.id);

    if (alreadyExists) {
      toast.info(`${data.name} is already in today's plan`);
      return;
    }

    // Add to plan
    setRunningPlan((prev) => [...prev, data]);

    toast.success(`${data.name} is added to today's plan`);
  };

  const alreadyExists = runningPlan.some((item) => item.id === data.id);

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={alreadyExists}
      className={`
        flex
        items-center
        gap-1.5
        rounded-md
        border
        px-6
        py-3
        font-inter
        text-sm
        font-semibold
        transition

        ${
          alreadyExists
            ? "cursor-not-allowed border-[#343943] bg-[#252932] text-[#777D88]"
            : "cursor-pointer border-brand bg-brand text-black hover:bg-[#C5FF33]"
        }
      `}
    >
      <FiCalendar size={14} />

      {alreadyExists ? "Already Added" : "Add to today's plan"}
    </button>
  );
};

export default TodeyPlanBtn;
