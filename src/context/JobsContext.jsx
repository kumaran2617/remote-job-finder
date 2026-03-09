import { createContext, useContext, useMemo, useState } from "react";
import { JOBS } from "../data/jobs";

const SAVED_KEY = "remote_jobs_saved_ids";

const JobsContext = createContext(null);

function getInitialSavedIds() {
  try {
    const raw = localStorage.getItem(SAVED_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function JobsProvider({ children }) {
  const [savedIds, setSavedIds] = useState(getInitialSavedIds);

  const saveToStorage = (nextSaved) => {
    localStorage.setItem(SAVED_KEY, JSON.stringify(nextSaved));
  };

  const toggleSaved = (jobId) => {
    setSavedIds((prev) => {
      const numericId = Number(jobId);
      const exists = prev.includes(numericId);
      const nextSaved = exists
        ? prev.filter((id) => id !== numericId)
        : [...prev, numericId];
      saveToStorage(nextSaved);
      return nextSaved;
    });
  };

  const isSaved = (jobId) => savedIds.includes(Number(jobId));
  const getJobById = (jobId) => JOBS.find((job) => job.id === Number(jobId));
  const savedJobs = useMemo(() => JOBS.filter((job) => savedIds.includes(job.id)), [savedIds]);

  const value = {
    jobs: JOBS,
    savedIds,
    savedJobs,
    isSaved,
    toggleSaved,
    getJobById,
  };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
}

export function useJobs() {
  const ctx = useContext(JobsContext);
  if (!ctx) {
    throw new Error("useJobs must be used inside JobsProvider");
  }
  return ctx;
}
