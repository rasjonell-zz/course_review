import get from 'lodash/get';
import set from 'lodash/set';
import omit from 'lodash/omit';

export function setRate(entity, mainPath, secondaryPath) {
  let result = { ...entity };
  if (get(entity, mainPath)) {
    result = omit(result, mainPath);
  } else if (get(entity, secondaryPath)) {
    result = omit(result, secondaryPath);
    set(result, mainPath, true);
  } else {
    set(result, mainPath, true);
  }

  return set(result, 'rating', getRating(result));
}

function getRating(entity) {
  if (entity.upvote && entity.downvote)
    return Object.keys(entity.upvote).length - Object.keys(entity.downvote).length;

  if (!entity.upvote && entity.downvote) return -Object.keys(entity.downvote).length;
  if (!entity.downvote && entity.upvote) return Object.keys(entity.upvote).length;
  return 0;
}
