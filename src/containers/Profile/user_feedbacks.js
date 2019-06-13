import React, { useContext } from 'react';
import map from 'lodash/map';
import find from 'lodash/find';
import take from 'lodash/take';
import Loading from 'components/Loading';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { AuthContext } from 'contexts/auth_context';
import FeedbackCard from 'components/Feedback/Card';
import { CourseContext } from 'contexts/course_context';
import { FeedbackContext } from 'contexts/feedback_context';

import styles from './user_styles';

const Profile = ({ classes }) => {
  const { user } = useContext(AuthContext);
  const { courses } = useContext(CourseContext);
  const { feedbacks } = useContext(FeedbackContext);

  if (!(feedbacks && courses && user)) return <Loading size={50} />;

  const userFeedbacks = take(
    feedbacks
      .filter(({ user_id }) => user_id === user.uid)
      .sort(({ rating: b }, { rating: a }) => a - b),
    4
  );

  return (
    <Grid container justify="space-between">
      {map(userFeedbacks, feedback => (
        <Grid item key={feedback.key} xs={12} sm={6} className={classes.gridItem}>
          <FeedbackCard
            {...{
              user,
              feedback,
              more: true,
              uid: user.uid,
              rating: feedback.rating,
              feedbackContent: feedback.feedback,
              course: find(courses, { id: Number(feedback.course_id) })
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(Profile);
