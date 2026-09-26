"use client";
import React, { createContext, useState } from "react";

export let PlanContext = createContext({});

const PlanProvider = ({ children }) => {
  let [runningPlan, setRunningPlan] = useState([]);
  let [savedPlan, setSavedPlan] = useState([]);

  let states = {
    runningPlan,
    setRunningPlan,
    savedPlan,
    setSavedPlan,
  };

  return <PlanContext.Provider value={states}>{children}</PlanContext.Provider>;
};

export default PlanProvider;
