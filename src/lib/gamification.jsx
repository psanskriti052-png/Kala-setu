import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { BADGES, DAILY_QUEST, POINTS } from '@/data/gamification';

/**
 * Local demo progress store: points, streak, badges, scan history and the
 * daily quest. Persisted in localStorage so the demo survives a refresh.
 */

const STORAGE_KEY = 'kala-setu-progress-v1';
const GamificationContext = createContext(null);

const dayKey = (date = new Date()) => date.toISOString().slice(0, 10);

function dayBefore(key) {
  const date = new Date(`${key}T12:00:00`);
  date.setDate(date.getDate() - 1);
  return dayKey(date);
}

const INITIAL = {
  points: 0,
  streak: 1,
  lastVisit: null,
  badges: [],
  scans: [],
  correctAnswers: 0,
  quizzesToday: 0,
  questDate: null,
  questClaimed: false,
};

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...INITIAL, ...JSON.parse(raw) } : { ...INITIAL };
  } catch {
    return { ...INITIAL };
  }
}

export function GamificationProvider({ children }) {
  const [state, setState] = useState(readStored);

  // Daily housekeeping: roll the streak forward and reset the quest counter.
  useEffect(() => {
    setState((prev) => {
      const today = dayKey();
      if (prev.lastVisit === today && prev.questDate === today) return prev;

      const next = { ...prev, lastVisit: today, questDate: today, quizzesToday: 0, questClaimed: false };

      if (prev.lastVisit !== today) {
        next.streak = prev.lastVisit === dayBefore(today) ? prev.streak + 1 : 1;
      }

      if (next.streak >= 3 && !next.badges.includes('streak_three')) {
        next.badges = [...next.badges, 'streak_three'];
      }

      return next;
    });
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage full or blocked — the demo keeps working in memory */
    }
  }, [state]);

  const recordScan = useCallback(({ artFormId, confidence }) => {
    setState((prev) => {
      const scans = [
        { id: `${Date.now()}`, artFormId, confidence, date: new Date().toISOString() },
        ...prev.scans,
      ].slice(0, 20);

      const uniqueForms = new Set(scans.map((scan) => scan.artFormId));
      const badges = [...prev.badges];

      if (!badges.includes('first_scan')) badges.push('first_scan');
      if (uniqueForms.size >= 4 && !badges.includes('all_forms')) badges.push('all_forms');

      return { ...prev, scans, badges, points: prev.points + POINTS.scan };
    });
  }, []);

  const recordAnswer = useCallback((correct) => {
    setState((prev) => {
      const today = dayKey();
      const quizzesToday = (prev.questDate === today ? prev.quizzesToday : 0) + 1;
      const questDate = today;
      const correctAnswers = prev.correctAnswers + (correct ? 1 : 0);

      const badges = [...prev.badges];
      if (correctAnswers >= 5 && !badges.includes('quiz_five')) badges.push('quiz_five');

      let points = prev.points + (correct ? POINTS.correctAnswer : POINTS.wrongAnswer);
      let questClaimed = prev.questDate === today ? prev.questClaimed : false;

      if (!questClaimed && quizzesToday >= DAILY_QUEST.target) {
        points += DAILY_QUEST.reward;
        questClaimed = true;
      }

      return { ...prev, points, quizzesToday, questDate, correctAnswers, badges, questClaimed };
    });
  }, []);

  const recordExplore = useCallback(() => {
    setState((prev) =>
      prev.badges.includes('ar_explorer')
        ? prev
        : { ...prev, badges: [...prev.badges, 'ar_explorer'], points: prev.points + POINTS.hotspot }
    );
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      quest: {
        ...DAILY_QUEST,
        progress: Math.min(state.quizzesToday, DAILY_QUEST.target),
        complete: state.quizzesToday >= DAILY_QUEST.target,
      },
      allBadges: BADGES.map((badge) => ({ ...badge, earned: state.badges.includes(badge.id) })),
      recordScan,
      recordAnswer,
      recordExplore,
    }),
    [state, recordScan, recordAnswer, recordExplore]
  );

  return <GamificationContext.Provider value={value}>{children}</GamificationContext.Provider>;
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (!context) throw new Error('useGamification must be used inside GamificationProvider');
  return context;
}
