"use client";

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const PlanContext = createContext();

// ================= STORAGE KEYS =================
const STORAGE_KEYS = {
  running: "fitlog:runningPlan",
  saved: "fitlog:savedPlan",
  completed: "fitlog:completedPlan",
};

// Safely read a JSON array from localStorage.
// Returns [] on the server (no `window`) or if the stored value is missing/corrupted.
function loadFromStorage(key) {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function PlanProvider({ children }) {
  const [runningPlan, setRunningPlan] = useState([]);
  const [savedPlan, setSavedPlan] = useState([]);
  const [completedPlan, setCompletedPlan] = useState([]);

  // Tracks whether we've finished the initial client-side load from
  // localStorage, so we don't immediately overwrite saved data with
  // the empty [] the state starts with.
  const [hydrated, setHydrated] = useState(false);

  // ================= LOAD ONCE ON MOUNT =================
  useEffect(() => {
    setRunningPlan(loadFromStorage(STORAGE_KEYS.running));
    setSavedPlan(loadFromStorage(STORAGE_KEYS.saved));
    setCompletedPlan(loadFromStorage(STORAGE_KEYS.completed));
    setHydrated(true);
  }, []);

  // ================= PERSIST ON CHANGE =================
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEYS.running, JSON.stringify(runningPlan));
  }, [runningPlan, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEYS.saved, JSON.stringify(savedPlan));
  }, [savedPlan, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(completedPlan));
  }, [completedPlan, hydrated]);

  // ================= ACTIONS =================
  const removeFromRunningPlan = (id) => {
    toast.success("Remove successfully");
    setRunningPlan((prev) => prev.filter((exercise) => exercise.id !== id));
  };

  const markAsDone = (id) => {
    toast.success("Great! Yove done it");
    setRunningPlan((prev) => {
      const exercise = prev.find((item) => item.id === id);

      if (!exercise) return prev;

      setCompletedPlan((completed) => [...completed, exercise]);

      return prev.filter((item) => item.id !== id);
    });
  };

  const removeFromSavedPlan = (id) => {
    toast.success("Remove successfully");
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
