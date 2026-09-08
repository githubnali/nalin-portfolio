import { useSyncExternalStore } from 'react';

export interface TopicProgress {
  visited: boolean;
  quizCompleted: boolean;
  quizScore: number;
  quizTotal: number;
}

type ProgressState = Record<string, TopicProgress>;

const STORAGE_KEY = 'html-course-progress';

function readState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressState) : {};
  } catch {
    return {};
  }
}

let state: ProgressState = readState();
const listeners = new Set<() => void>();

function persistAndEmit() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private mode, quota) - progress just won't persist
  }
  listeners.forEach((listener) => listener());
}

export function markVisited(slug: string) {
  if (state[slug]?.visited) return;
  state = {
    ...state,
    [slug]: { quizCompleted: false, quizScore: 0, quizTotal: 0, ...state[slug], visited: true },
  };
  persistAndEmit();
}

export function setQuizResult(slug: string, score: number, total: number) {
  state = {
    ...state,
    [slug]: { ...state[slug], visited: true, quizCompleted: true, quizScore: score, quizTotal: total },
  };
  persistAndEmit();
}

/** Resets only progress for keys under the given course prefix (e.g. 'html:'), leaving other courses untouched. */
export function resetProgress(coursePrefix: string) {
  state = Object.fromEntries(Object.entries(state).filter(([key]) => !key.startsWith(coursePrefix)));
  persistAndEmit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

export function useProgress() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
