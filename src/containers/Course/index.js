import React, { useState, useEffect, useContext } from 'react';
import pickBy from 'lodash/pickBy';
import isEmpty from 'lodash/isEmpty';
import { database } from 'config/firebase';
import { setRate } from 'helpers/rating_helper';
import { AuthContext } from 'contexts/auth_context';
import { FeedbackContext } from 'contexts/feedback_context';

const handleRating = (feedback, key, uid, main, secondary) => {
  const mainPath = `${main}[${uid}]`;
  const secondaryPath = `${secondary}[${uid}]`;
  const resultFeedback = setRate(feedback, mainPath, secondaryPath);
  const feedbackRef = database.ref(`feedbacks/${key}`);
  feedbackRef.set({ ...resultFeedback });
};

const getCourseFeedbacks = (feedbacks, courseId) =>
  pickBy(feedbacks, ({ course_id }) => course_id === courseId);

export default ({
  match: {
    params: { id }
  }
}) => {
  const [courseId, setCourseId] = useState(Number(id));
  const {
    user: { uid }
  } = useContext(AuthContext);
  const { feedbacks } = useContext(FeedbackContext);
  const courseFeedbacks = getCourseFeedbacks(feedbacks, Number(courseId));

  useEffect(
    () => {
      setCourseId(Number(id));
    },
    [id]
  );

  if (isEmpty(courseFeedbacks)) return <div>Nothing To Show Here</div>;

  return (
    <div>
      {Object.keys(courseFeedbacks).map(key => (
        <div key={key}>
          <h2>Feedback: {courseFeedbacks[key].feedback}</h2>
          <h4>Rating: {courseFeedbacks[key].rating}</h4>
          <div>
            <button
              type="button"
              onClick={() => handleRating(courseFeedbacks[key], key, uid, 'upvote', 'downvote')}
            >
              Upvote
            </button>
            <button
              type="button"
              onClick={() => handleRating(courseFeedbacks[key], key, uid, 'downvote', 'upvote')}
            >
              Downvote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
