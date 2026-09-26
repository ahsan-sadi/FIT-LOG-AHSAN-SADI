"use client";
import { PlanContext } from "@/context/PlanProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

const TodeyPlanBtn = ({ data }) => {
  let { runningPlan, setRunningPlan } = useContext(PlanContext);

  let handleClick = () => {
    console.log("Clicked", data);
    setRunningPlan([...runningPlan, data]);
    toast.success(`${data.name} is your running plan`);
  };
  return (
    <div>
      <Link href="/">
        <button
          onClick={handleClick}
          className="flex cursor-pointer items-center gap-1.5 rounded-md border border-brand bg-brand px-6 py-3 font-inter text-sm font-semibold text-black transition"
        >
          <FiCalendar size={14} />
          Add to today's plan
        </button>
      </Link>
    </div>
  );
};

export default TodeyPlanBtn;
