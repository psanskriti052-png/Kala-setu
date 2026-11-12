/** Levels, badges and daily quest rules for the learning loop. */

export const LEVELS = [
  { name: 'Seeker', min: 0 },
  { name: 'Apprentice', min: 120 },
  { name: 'Storyteller', min: 300 },
  { name: 'Heritage Keeper', min: 600 },
];

export function levelForPoints(points) {
  let index = 0;
  LEVELS.forEach((level, i) => {
    if (points >= level.min) index = i;
  });
  const current = LEVELS[index];
  const next = LEVELS[index + 1] || null;
  const span = next ? next.min - current.min : 1;
  const progress = next ? Math.min(1, (points - current.min) / span) : 1;
  return {
    index,
    level: index + 1,
    name: current.name,
    nextName: next ? next.name : 'Highest level',
    pointsToNext: next ? Math.max(0, next.min - points) : 0,
    progress,
  };
}

export const BADGES = [
  {
    id: 'first_scan',
    name: 'First Discovery',
    description: 'Scan your first artwork',
    icon: 'sparkles',
  },
  {
    id: 'all_forms',
    name: 'Tradition Keeper',
    description: 'Discover all four art forms',
    icon: 'compass',
  },
  {
    id: 'quiz_five',
    name: 'Curious Mind',
    description: 'Answer five quiz questions correctly',
    icon: 'brain',
  },
  {
    id: 'streak_three',
    name: 'Three-Day Streak',
    description: 'Open Kala Setu three days in a row',
    icon: 'flame',
  },
  {
    id: 'ar_explorer',
    name: 'AR Explorer',
    description: 'Open a painting in AR Explore',
    icon: 'scan',
  },
];

export const DAILY_QUEST = {
  title: 'Daily quest',
  description: 'Answer 3 quiz questions today',
  target: 3,
  reward: 30,
};

export const POINTS = {
  correctAnswer: 20,
  wrongAnswer: 5,
  scan: 15,
  hotspot: 5,
};
