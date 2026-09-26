"use client";

import { createContext, useState } from "react";

export const PlanContext = createContext();

export default function PlanProvider({ children }) {
  const [runningPlan, setRunningPlan] = useState([]);
  const [savedPlan, setSavedPlan] = useState([]);
  const [completedPlan, setCompletedPlan] = useState([]);

  const removeFromRunningPlan = (id) => {
    setRunningPlan((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  const markAsDone = (id) => {
    setRunningPlan((prev) => {
      const exercise = prev.find((item) => item.id === id);

      if (!exercise) return prev;

      setCompletedPlan((completed) => [...completed, exercise]);

      return prev.filter((item) => item.id !== id);
    });
  };

  const removeFromSavedPlan = (id) => {
    setSavedPlan((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  const addToRunningPlan = (exercise) => {
    setRunningPlan((prev) => {
      const alreadyExists = prev.some((item) => item.id === exercise.id);

      if (alreadyExists) {
        return prev;
      }

      return [...prev, exercise];
    });
  };

  return (
    <PlanContext.Provider
      value={{
        runningPlan,
        setRunningPlan,
        savedPlan,
        setSavedPlan,
        completedPlan,
        removeFromRunningPlan,
        markAsDone,
        removeFromSavedPlan,
        addToRunningPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}
