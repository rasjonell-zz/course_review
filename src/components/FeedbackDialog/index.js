import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { database } from 'config/firebase';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CourseContext } from 'contexts/course_context';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogContentText from '@material-ui/core/DialogContentText';

const FeedbackDialog = ({ user, open, leaveFeedback, fullScreen, course_id }) => {
  const [feedback, setFeedback] = useState('');
  const { courses } = useContext(CourseContext);

  const handleChange = ({ target: { value } }) => setFeedback(value);

  const handleSubmit = e => {
    e.preventDefault();
    const feedbackRef = database.ref('feedbacks');
    const key = feedbackRef.push({
      feedback,
      rating: 0,
      upvote: {},
      downvote: {},
      user_id: user.uid,
      course_id: course_id
    }).key;
    leaveFeedback(key);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={leaveFeedback}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Your Review Matters</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let us know how you feel about {courses && courses[course_id] && courses[course_id].title}
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          id="feedback"
          type="text"
          margin="dense"
          label="Leave Feedback"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit} color="primary" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FeedbackDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(FeedbackDialog);
