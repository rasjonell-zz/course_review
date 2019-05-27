import React, { useContext } from 'react';
import map from 'lodash/map';
import find from 'lodash/find';
import pickBy from 'lodash/pickBy';
import Loading from 'components/Loading';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { AuthContext } from 'contexts/auth_context';
import FeedbackCard from 'components/Feedback/Card';
import { CourseContext } from 'contexts/course_context';
import { FeedbackContext } from 'contexts/feedback_context';

import styles from './user_styles';

const getUserFeedbacks = (feedbacks, uid) => pickBy(feedbacks, ({ user_id }) => user_id === uid);

const Profile = ({ classes }) => {
  const { user } = useContext(AuthContext);
  const { courses } = useContext(CourseContext);
  const { feedbacks } = useContext(FeedbackContext);
  const userFeedbacks = getUserFeedbacks(feedbacks, user.uid);

  if (!(feedbacks && courses && user)) return <Loading size={50} />;

  return (
    <Grid container justify="space-between">
      {map(userFeedbacks, (feedback, key) => (
        <Grid item key={key} xs={12} sm={6} className={classes.gridItem}>
          <FeedbackCard
            {...{
              uid: user.uid,
              more: true,
              rating: feedback.rating,
              user,
              feedback: { ...feedback, key },
              feedbackContent: feedback.feedback,
              course: find(courses, { id: feedback.course_id })
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(Profile);
