import React, { useState, useContext, forwardRef } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { database } from 'config/firebase';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { AuthContext } from 'contexts/auth_context';
import IconButton from '@material-ui/core/IconButton';
import { ModalContext } from 'contexts/modal_context';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CourseContext } from 'contexts/course_context';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogContentText from '@material-ui/core/DialogContentText';

import styles from './styles';

const Transition = forwardRef((props, ref) => <Zoom ref={ref} {...props} />);

const FeedbackDialog = ({ classes, fullScreen }) => {
  const [feedback, setFeedback] = useState('');
  const { courses, currentCourse, setCurrentCourse } = useContext(CourseContext);
  const { user, setUser } = useContext(AuthContext);
  const { open, setOpen, snackOpen, setSnackOpen } = useContext(ModalContext);

  const handleChange = ({ target: { value } }) => setFeedback(value);

  const leaveFeedback = key => {
    const { feedbacks } = user;
    setOpen(false);
    setCurrentCourse('');
    setUser({ ...user, feedbacks: { ...feedbacks, [key]: true } });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!currentCourse && !feedback) return setSnackOpen(true);

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
      TransitionComponent={Transition}
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
            <InputLabel htmlFor="currentCourse">Select A Course</InputLabel>
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
          multiline
          rows="5"
          type="text"
          id="feedback"
          margin="normal"
          variant="outlined"
          label="Leave Your Feedback Here"
          onChange={handleChange}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={snackOpen}
          autoHideDuration={6000}
          onClose={() => setSnackOpen(false)}
        >
          <SnackbarContent
            className={classes.danger}
            aria-describedby="message-id"
            message={
              <Typography variant="subheading" color="secondary" id="message-id">
                Both Fields Are Required
              </Typography>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => setSnackOpen(false)}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        </Snackbar>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={() => setOpen(false)} color="primary">
          Close
        </Button>
        <Button variant="text" onClick={handleSubmit} color="primary" autoFocus>
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
