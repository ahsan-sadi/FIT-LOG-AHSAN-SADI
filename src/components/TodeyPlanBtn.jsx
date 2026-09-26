"use client";
import { PlanContext } from "@/context/PlanProvider";
import React, { useContext } from "react";
import { FiCalendar } from "react-icons/fi";

const TodeyPlanBtn = ({ data }) => {
  let { runningPlan, setRunningPlan } = useContext(PlanContext);

  let handleClick = () => {
    console.log("Clicked", data);
    setRunningPlan([...runningPlan, data]);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="flex items-center gap-1.5 rounded-md border border-brand bg-brand px-6 py-3 font-inter text-sm font-semibold text-black transition"
      >
        <FiCalendar size={14} />
        Add to today's plan
      </button>
    </div>
  );
};

export default TodeyPlanBtn;
