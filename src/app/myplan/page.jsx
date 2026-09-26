"use client";

import { useContext, useState } from "react";

import RunningCard from "@/components/RunningCard";
import SavedPlanCard from "@/components/SavedPlanCard";
import { PlanContext } from "@/context/PlanProvider";

export default function MyPlan() {
  const { runningPlan, savedPlan } = useContext(PlanContext);

  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  let sortData = (plan) => {
    let sortedPlan = [...plan];

    if (sortBy === "duration") {
      sortedPlan.sort((a, b) => Number(a.duration) - Number(b.duration));
    } else if (sortBy === "calories") {
      sortedPlan.sort(
        (a, b) => Number(b.caloriesBurned) - Number(a.caloriesBurned),
      );
    } else if (sortBy === "rating") {
      sortedPlan.sort((a, b) => Number(b.rating) - Number(a.rating));
    }
    return sortedPlan;
  };

  let activePlanData = sortData(runningPlan);
  let savedPlanData = sortData(savedPlan);

  // ================= ACTIVE PLAN =================
  const activePlan = activeTab === "today" ? runningPlan : savedPlan;

  // ================= STATISTICS =================
  const totalExercises = activePlan.length;

  const totalMinutes = activePlan.reduce(
    (total, exercise) => total + Number(exercise.duration || 0),
    0,
  );

  const totalCalories = activePlan.reduce(
    (total, exercise) => total + Number(exercise.caloriesBurned || 0),
    0,
  );

  return (
    <section className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}
        <div>
          <h2
            className="
              font-oswald
              text-2xl font-bold leading-8
              text-primary
              sm:text-3xl sm:leading-9
            "
          >
            MY PLAN
          </h2>

          <h3
            className="
              mt-1
              max-w-xl
              font-inter
              text-[11px]
              leading-5
              text-[#8A92A0]
              sm:text-sm
            "
          >
            Cap of five lifts for today. Finish them, then load more.
          </h3>
        </div>

        {/* ================= STATISTICS ================= */}
        <div
          className="
            mt-5
            grid
            grid-cols-1
            overflow-hidden
            rounded-lg
            border border-[#232732]
            bg-[#13161D]
            xs:grid-cols-3
            sm:grid-cols-3
          "
        >
          {/* Exercises */}
          <div
            className="
              px-5 py-4
              sm:border-r sm:border-[#232732]
              sm:px-6 sm:py-6
            "
          >
            <h3
              className="
                font-inter
                text-[11px]
                text-[#8A92A0]
                sm:text-[12px]
              "
            >
              Exercises
            </h3>

            <span
              className="
                font-oswald
                text-3xl font-bold
                leading-9
                text-brand
                sm:text-4xl sm:leading-10
              "
            >
              {totalExercises}
            </span>
          </div>

          {/* Minutes */}
          <div
            className="
              border-t border-[#232732]
              px-5 py-4
              sm:border-t-0
              sm:border-r
              sm:border-[#232732]
              sm:px-6 sm:py-6
            "
          >
            <h3
              className="
                font-inter
                text-[11px]
                text-[#8A92A0]
                sm:text-[12px]
              "
            >
              Minutes
            </h3>

            <span
              className="
                font-oswald
                text-3xl font-bold
                leading-9
                text-primary
                sm:text-4xl sm:leading-10
              "
            >
              {totalMinutes}
            </span>
          </div>

          {/* Calories */}
          <div
            className="
              border-t border-[#232732]
              px-5 py-4
              sm:border-t-0
              sm:px-6 sm:py-6
            "
          >
            <h3
              className="
                font-inter
                text-[11px]
                text-[#8A92A0]
                sm:text-[12px]
              "
            >
              Calories
            </h3>

            <span
              className="
                font-oswald
                text-3xl font-bold
                leading-9
                text-primary
                sm:text-4xl sm:leading-10
              "
            >
              {totalCalories}
            </span>
          </div>
        </div>

        {/* ================= PLAN CONTENT ================= */}
        <div className="w-full py-5">
          {/* ================= CONTROLS ================= */}
          <div
            className="
              mb-4
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* ================= TABS ================= */}
            <div
              className="
                flex
                h-9
                w-full
                items-center
                rounded-lg
                border border-[#252932]
                bg-[#15181F]
                p-1
                sm:w-fit
              "
            >
              <button
                type="button"
                onClick={() => setActiveTab("today")}
                className={`
                  flex-1
                  whitespace-nowrap
                  rounded-md
                  px-2
                  py-1.5
                  font-inter
                  text-[10px]
                  transition-all
                  duration-200
                  sm:flex-none
                  sm:px-4
                  ${
                    activeTab === "today"
                      ? "bg-[#252A34] text-white shadow-sm"
                      : "text-[#777D88] hover:text-white"
                  }
                `}
              >
                Today's Plan
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("saved")}
                className={`
                  flex-1
                  whitespace-nowrap
                  rounded-md
                  px-2
                  py-1.5
                  font-inter
                  text-[10px]
                  transition-all
                  duration-200
                  sm:flex-none
                  sm:px-4
                  ${
                    activeTab === "saved"
                      ? "bg-[#252A34] text-white shadow-sm"
                      : "text-[#777D88] hover:text-white"
                  }
                `}
              >
                Saved
              </button>
            </div>

            {/* ================= SORT ================= */}
            <div className="flex items-center justify-between gap-2 sm:justify-end">
              <span className="font-inter text-[9px] text-gray-500 whitespace-nowrap">
                Sort by
              </span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="
                  h-8
                  min-h-0
                  w-full
                  min-w-0
                  rounded-md
                  border border-[#292e38]
                  bg-[#15181e]
                  px-2
                  font-inter
                  text-[9px]
                  text-gray-300
                  outline-none
                  sm:h-7
                  sm:w-24
                "
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* ================= TODAY ================= */}
          {activeTab === "today" && (
            <>
              {runningPlan.length > 0 ? (
                <div className="w-full">
                  <RunningCard exercises={activePlanData} />
                </div>
              ) : (
                <div
                  className="
                    flex
                    min-h-64
                    w-full
                    flex-col
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-dashed
                    border-[#252a32]
                    bg-[#0e1014]
                    px-4
                    py-10
                    text-center
                    sm:min-h-80
                    sm:py-16
                  "
                >
                  <h2
                    className="
                      font-oswald
                      text-lg
                      font-bold
                      text-primary
                      sm:text-xl
                    "
                  >
                    NOTHING HERE YET
                  </h2>

                  <h3
                    className="
                      mt-1
                      max-w-sm
                      font-inter
                      text-[11px]
                      leading-5
                      text-[#8A92A0]
                      sm:text-[12px]
                    "
                  >
                    Browse the library and add a lift to get today moving.
                  </h3>

                  <button
                    type="button"
                    className="
                      mt-4
                      w-full
                      rounded-lg
                      border border-brand
                      bg-brand
                      px-5 py-2.5
                      font-inter
                      text-[10px]
                      font-bold
                      text-black
                      transition
                      hover:bg-[#C5FF33]
                      xs:w-auto
                      sm:px-6
                      sm:text-[12px]
                    "
                  >
                    GO TO WORKOUTS
                  </button>
                </div>
              )}
            </>
          )}

          {/* ================= SAVED ================= */}
          {activeTab === "saved" && (
            <>
              {savedPlan.length > 0 ? (
                <div className="w-full">
                  <SavedPlanCard exercises={savedPlanData} />
                </div>
              ) : (
                <div
                  className="
                    flex
                    min-h-64
                    w-full
                    flex-col
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-dashed
                    border-[#252a32]
                    bg-[#0e1014]
                    px-4
                    py-10
                    text-center
                    sm:min-h-80
                    sm:py-16
                  "
                >
                  <h2
                    className="
                      font-oswald
                      text-lg
                      font-bold
                      text-primary
                      sm:text-xl
                    "
                  >
                    NOTHING HERE YET
                  </h2>

                  <h3
                    className="
                      mt-1
                      max-w-sm
                      font-inter
                      text-[11px]
                      leading-5
                      text-[#8A92A0]
                      sm:text-[12px]
                    "
                  >
                    Browse the library and save exercises to see them here.
                  </h3>

                  <button
                    type="button"
                    className="
                      mt-4
                      w-full
                      rounded-lg
                      border border-brand
                      bg-brand
                      px-5 py-2.5
                      font-inter
                      text-[10px]
                      font-bold
                      text-black
                      transition
                      hover:bg-[#C5FF33]
                      xs:w-auto
                      sm:px-6
                      sm:text-[12px]
                    "
                  >
                    GO TO WORKOUTS
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
