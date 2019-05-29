import React, { useState, useEffect, useContext } from 'react';
import Empty from './empty';
import map from 'lodash/map';
import find from 'lodash/find';
import pickBy from 'lodash/pickBy';
import isEmpty from 'lodash/isEmpty';
import Loading from 'components/Loading';
import { withStyles } from '@material-ui/core';
import { AuthContext } from 'contexts/auth_context';
import FeedbackCard from 'components/Feedback/Card';
import { UserContext } from 'contexts/user_context';
import { CourseContext } from 'contexts/course_context';
import { FeedbackContext } from 'contexts/feedback_context';

import styles from './styles';

const getCourseFeedbacks = (feedbacks, courseId) =>
  pickBy(feedbacks, ({ course_id }) => Number(course_id) === Number(courseId));

export default withStyles(styles)(({ classes, match: { params: { id } } }) => {
  const [courseId, setCourseId] = useState(Number(id));
  const {
    user: { uid }
  } = useContext(AuthContext);
  const { users } = useContext(UserContext);
  const { courses } = useContext(CourseContext);
  const { feedbacks } = useContext(FeedbackContext);
  const courseFeedbacks = getCourseFeedbacks(feedbacks, courseId);

  useEffect(
    () => {
      setCourseId(Number(id));
    },
    [id]
  );

  if (!(feedbacks && courses && users)) return <Loading size={50} />;
  if (isEmpty(courseFeedbacks))
    return <Empty courseId={id} classes={{ main: classes.main, button: classes.feedbackButton }} />;

  return (
    <div className={classes.main}>
      {map(courseFeedbacks, (feedback, key) => (
        <FeedbackCard
          key={key}
          {...{
            uid,
            rating: feedback.rating,
            user: users[feedback.user_id],
            feedback: { ...feedback, key },
            feedbackContent: feedback.feedback,
            course: find(courses, { id: Number(id) })
          }}
        />
      ))}
    </div>
  );
});
