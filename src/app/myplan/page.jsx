import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

import CardImage from "@/assets/planImage.png";
import Link from "next/link";

export default function MyPlan() {
  return (
    <section className="container mx-auto">
      <div className="head">
        <h2 className="font-oswald font-bold text-3xl leading-9 text-primary">
          MY PLAN
        </h2>
        <h3 className="font-inter text-sm text-[#8A92A0] leading-5">
          Cap of five lifts for today. Finish them, then load more.
        </h3>
      </div>
      <div className="details flex justify-between items-center gap-8 py-8 px-6 border border-[#232732] bg-[#13161D] rounded-lg mt-6 ">
        <div className="exercise w-full border-r border-r-[#232732]">
          <h3 className="font-inter font-[12px] text-[#8A92A0]">Exercises</h3>
          <span className="font-oswald font-bold text-brand text-4xl leading-10">
            2
          </span>
        </div>
        <div className="Minute w-full border-r border-r-[#232732]">
          <h3 className="font-inter font-[12px] text-[#8A92A0]">Minutes</h3>
          <span className="font-oswald font-bold text-primary text-4xl leading-10">
            23
          </span>
        </div>
        <div className="Calorie w-full">
          <h3 className="font-inter font-[12px] text-[#8A92A0]">Calories</h3>
          <span className="font-oswald font-bold text-primary text-4xl leading-10">
            190
          </span>
        </div>
      </div>

      <div className="w-full px-2 py-5 text-white">
        {/* Top Controls */}
        <div className="mb-4 flex items-center justify-between">
          {/* Tabs */}
          <div className="tabs tabs-boxed h-7 rounded-md border border-[#242832] bg-[#15181e] p-0.5">
            <button className="tab h-6 min-h-0 px-3 text-[9px] text-gray-500">
              Today's Plan
            </button>

            <button className="tab tab-active h-6 min-h-0 rounded bg-[#20242c] px-4 text-[9px] text-white">
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-gray-500">Sort by</span>

            <select
              className="select select-sm h-7 min-h-0 w-14 rounded-md border border-[#292e38] bg-[#15181e] px-2 text-[9px] text-gray-300 outline-none"
              defaultValue="duration"
            >
              <option value="duration">Duration</option>
              <option value="difficulty">Difficulty</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex py-24 flex-col items-center justify-center rounded-lg border border-dashed border-[#252a32] bg-[#0e1014]">
          <h2 className="font-oswald font-bold text-xl text-primary">
            NOTHING HERE YET
          </h2>
          <h3 className="font-inter text-[12px] text-[#8A92A0]">
            Browse the library and add a lift to get today moving.
          </h3>

          <button className="font-inter font-bold text-[12px] text-black bg-brand py-2.5 px-6 rounded-lg border border-solid border-brand mt-2.5 cursor-pointer">
            GO TO WORKOUTS
          </button>
        </div>
      </div>
    </section>
  );
}
