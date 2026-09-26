"use client";

import { PlanContext } from "@/context/PlanProvider";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SavePlanBtn = ({ data }) => {
  const { savedPlan, setSavedPlan } = useContext(PlanContext);

  const alreadySaved = savedPlan.some((item) => item.id === data.id);

  const handleClick = () => {
    if (alreadySaved) {
      toast.info(`${data.name} is already saved`);
      return;
    }

    setSavedPlan((prev) => [...prev, data]);

    toast.success(`You have saved ${data.name} plan`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={alreadySaved}
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
        transition

        ${
          alreadySaved
            ? "cursor-not-allowed border-[#343943] bg-[#252932] text-[#777D88]"
            : "cursor-pointer border-[#374151] text-[#E5E7EB] hover:border-brand hover:text-brand"
        }
      `}
    >
      <FaRegBookmark size={14} />

      {alreadySaved ? "Already Saved" : "Save for later"}
    </button>
  );
};

export default SavePlanBtn;
