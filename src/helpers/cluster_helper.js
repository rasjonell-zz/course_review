import compact from 'lodash/compact';
import filter from 'lodash/filter';

/*
  clusters(allCourses, {
    art: { lower: [13], upper: [] },
    social: { lower: [93], upper: [] },
    quantative: { lower: [94, 95], upper: [] }
  });
*/
const clusters = (
  courses,
  {
    art: { lower: userArtLower, upper: userArtUpper },
    social: { lower: userSocialLower, upper: userSocialUpper },
    quantative: { lower: userQuantativeLower, upper: userQuantativeUpper }
  }
) => {
  const artLower = getTrack(compact(courses), [1, 2, 3], 1);
  const artUpper = getTrack(compact(courses), [1, 2, 3], 2);
  const socialLower = getTrack(compact(courses), [4, 5, 6], 1);
  const socialUpper = getTrack(compact(courses), [4, 5, 6], 2);
  const quantativeLower = getTrack(compact(courses), [7, 8, 9], 1);
  const quantativeUpper = getTrack(compact(courses), [7, 8, 9], 2);

  console.log('You need to take the following courses: ');
  console.table(
    getReminders(
      userArtLower,
      userArtUpper,
      userSocialLower,
      userSocialUpper,
      userQuantativeLower,
      userQuantativeUpper
    )
  );
};

const getTrack = (courses, cluster, level) => {
  return filter(courses, ({ clusters, code }) => {
    const courseCode = Number(code.split(' ')[1][0]);
    const sameTrack = intersect(cluster, clusters.map(n => Number(n)));
    return sameTrack && courseCode === level;
  });
};

const getReminders = (
  artLower,
  artUpper,
  socialLower,
  socialUpper,
  quantativeLower,
  quantativeUpper
) => ({
  art: getTrackReminders(artLower, artUpper),
  social: getTrackReminders(socialLower, socialUpper),
  quantative: getTrackReminders(quantativeLower, quantativeUpper)
});

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

export default clusters;
