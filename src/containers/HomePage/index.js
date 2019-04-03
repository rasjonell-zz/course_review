import React, { useContext } from 'react';
import map from 'lodash/map';
import find from 'lodash/find';
import Loading from 'components/Loading';
import { withStyles } from '@material-ui/core';
import { AuthContext } from 'contexts/auth_context';
import FeedbackCard from 'components/Feedback/Card';
import { UserContext } from 'contexts/user_context';
import { CourseContext } from 'contexts/course_context';
import { FeedbackContext } from 'contexts/feedback_context';

import styles from './styles';

export default withStyles(styles)(({ classes }) => {
  const {
    user: { uid }
  } = useContext(AuthContext);
  const { users } = useContext(UserContext);
  const { courses } = useContext(CourseContext);
  const { feedbacks } = useContext(FeedbackContext);

  if (!(feedbacks && courses && users)) return <Loading size={50} />;

  return (
    <div className={classes.main}>
      {map(feedbacks, (feedback, key) => (
        <FeedbackCard
          key={key}
          {...{
            uid,
            rating: feedback.rating,
            user: users[feedback.user_id],
            feedback: { ...feedback, key },
            feedbackContent: feedback.feedback,
            course: find(courses, { id: feedback.course_id })
          }}
        />
      ))}
    </div>
  );
});
