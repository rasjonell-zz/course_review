import filter from 'lodash/filter';
import compact from 'lodash/compact';
import { getValue } from './fetch_helper';

export const getTrackCourses = async (track, level = 'all') => {
  const courses = await getValue('courses');

  const cluster = {
    art: [1, 2, 3],
    social: [4, 5, 6],
    quantative: [7, 8, 9]
  }[track];

  const levels = {
    lower: [1],
    upper: [2],
    all: [1, 2]
  }[level];

  return getTrack(compact(courses), cluster, levels);
};

export const getRequirements = userCourses => {
  const mappedCourses = userCourses.map(course => courseLevel(course));
  const lower = mappedCourses.filter(level => level !== 'upper');
  const upper = mappedCourses.filter(level => level !== 'lower');
  return getTrackReminders(lower, upper);
};

const courseLevel = ({ code }) => {
  return Number(code.split(' ')[1][0]) === 1 ? 'lower' : 'upper';
};

const getTrack = (courses, cluster, levels) => {
  return filter(courses, ({ clusters, code }) => {
    const courseCode = Number(code.split(' ')[1][0]);
    const sameTrack = intersect(cluster, clusters.map(n => Number(n)));
    return sameTrack && levels.includes(courseCode);
  });
};

const getTrackReminders = (lower, upper) => {
  if (isComplete(lower, upper)) return { lower: 0, upper: 0, any: 0 };
  if (!(lower.length || upper.length)) return { lower: 1, upper: 1, any: 1 };
  if (lower.length === 1 && upper.length === 0) return { lower: 0, upper: 1, any: 1 };
  if (lower.length === 2 && upper.length === 0) return { lower: 0, upper: 1, any: 0 };
  if (lower.length === 1 && upper.length === 1) return { lower: 0, upper: 0, any: 1 };
};

const isComplete = (lower, upper) =>
  lower.length >= 1 && upper.length >= 1 && lower.length && lower.length + upper.length >= 3;

const intersect = (a, b) => {
  const setB = new Set(b);
  return [...new Set(a)].filter(x => setB.has(x)).length > 0;
};
