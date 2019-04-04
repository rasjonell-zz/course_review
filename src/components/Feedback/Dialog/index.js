import React, { useState, useContext } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { database } from 'config/firebase';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { AuthContext } from 'contexts/auth_context';
import { ModalContext } from 'contexts/modal_context';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CourseContext } from 'contexts/course_context';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogContentText from '@material-ui/core/DialogContentText';

import styles from './styles';

const FeedbackDialog = ({ classes, fullScreen }) => {
  const [feedback, setFeedback] = useState('');
  const { courses, currentCourse, setCurrentCourse } = useContext(CourseContext);
  const { user, setUser } = useContext(AuthContext);
  const { open, setOpen } = useContext(ModalContext);

  const handleChange = ({ target: { value } }) => setFeedback(value);

  const leaveFeedback = key => {
    const { feedbacks } = user;
    setOpen(false);
    setCurrentCourse('');
    setUser({ ...user, feedbacks: { ...feedbacks, [key]: true } });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const feedbackRef = database.ref('feedbacks');
    const key = feedbackRef.push({
      feedback,
      rating: 1,
      upvote: { [user.uid]: true },
      downvote: {},
      user_id: user.uid,
      course_id: currentCourse
    }).key;
    leaveFeedback(key);
  };

  const renderOptions = () =>
    courses &&
    courses.map(course => (
      <MenuItem key={course.id} value={course.id}>
        {course.title}
      </MenuItem>
    ));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Your Review Matters</DialogTitle>
      <DialogContent className={classes.content}>
        {currentCourse ? (
          <DialogContentText>
            Let us know how you feel about {get(courses, `${currentCourse}.title`)}
          </DialogContentText>
        ) : (
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="currentCourse">Select a course</InputLabel>
            <Select
              value={currentCourse}
              onChange={({ target: { value } }) => setCurrentCourse(value)}
              inputProps={{
                name: 'currentCourse',
                id: 'currentCourse'
              }}
            >
              {renderOptions()}
            </Select>
          </FormControl>
        )}

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
  classes: PropTypes.object.isRequired,
  fullScreen: PropTypes.bool.isRequired
};

export default withStyles(styles)(withMobileDialog()(FeedbackDialog));
