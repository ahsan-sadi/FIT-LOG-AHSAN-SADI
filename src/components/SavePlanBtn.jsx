"use client";
import { PlanContext } from "@/context/PlanProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SavePlanBtn = ({ data }) => {
  let { savedPlan, setSavedPlan } = useContext(PlanContext);

  let handleClick = () => {
    console.log("Clicked");
    setSavedPlan([...savedPlan, data]);
    toast.success(`You have saved ${data.name} plan`);
  };
  return (
    <div>
      <Link href="/">
        <button
          onClick={handleClick}
          className="flex px-6 py-3 cursor-pointer  ites-center gap-1.5 rounded-md border border-[#374151] font-inter text-sm text-[#E5E7EB] transition"
        >
          <FaRegBookmark size={14} />
          Save for later
        </button>
      </Link>
    </div>
  );
};

export default SavePlanBtn;
