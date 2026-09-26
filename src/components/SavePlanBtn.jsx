"use client";
import { PlanContext } from "@/context/PlanProvider";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";

const SavePlanBtn = ({ data }) => {
  let { savedPlan, setSavedPlan } = useContext(PlanContext);

  let handleClick = () => {
    console.log("Clicked");
    setSavedPlan([...savedPlan, data]);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="flex px-6 py-3  ites-center gap-1.5 rounded-md border border-[#374151] font-inter text-sm text-[#E5E7EB] transition"
      >
        <FaRegBookmark size={14} />
        Save for later
      </button>
    </div>
  );
};

export default SavePlanBtn;
