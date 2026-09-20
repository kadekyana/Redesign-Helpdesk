"use client";

import { useSyncExternalStore, useCallback } from "react";

const STORAGE_KEY = "missu_issues";

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("missu_issues_updated", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("missu_issues_updated", callback);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(STORAGE_KEY) || "";
}

function getServerSnapshot() {
  return "";
}

export function useIssues(defaultIssues = []) {
  const issuesRaw = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  let issues = defaultIssues;
  if (issuesRaw) {
    try {
      const parsed = JSON.parse(issuesRaw);
      if (Array.isArray(parsed)) {
        issues = parsed;
      }
    } catch (err) {
      console.error("Failed parsing missu_issues:", err);
    }
  }

  const saveIssues = useCallback(
    (newIssuesOrFn) => {
      if (typeof window === "undefined") return;
      let nextIssues;
      if (typeof newIssuesOrFn === "function") {
        let currentIssues = defaultIssues;
        const currentRaw = localStorage.getItem(STORAGE_KEY);
        if (currentRaw) {
          try {
            currentIssues = JSON.parse(currentRaw);
          } catch {
            currentIssues = defaultIssues;
          }
        }
        nextIssues = newIssuesOrFn(currentIssues);
      } else {
        nextIssues = newIssuesOrFn;
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIssues));
      window.dispatchEvent(new Event("missu_issues_updated"));
    },
    [defaultIssues]
  );

  return [issues, saveIssues];
}
