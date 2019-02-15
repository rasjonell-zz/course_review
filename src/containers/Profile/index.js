import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { AuthContext } from 'contexts/auth_context';
import { FeedbackContext } from 'contexts/feedback_context';

export default () => {
  const { feedbacks } = useContext(FeedbackContext);
  const { user } = useContext(AuthContext);

  const renderFeedbacks = () =>
    feedbacks &&
    Object.keys(user.feedbacks).map(key => (
      <div key={key}>
        <h2>Feedback: {feedbacks[key].feedback}</h2>
        <h4>Rating: {feedbacks[key].rating}</h4>
      </div>
    ));

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Paper>
            <h1>Your feedbacks</h1>
            {renderFeedbacks()}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
