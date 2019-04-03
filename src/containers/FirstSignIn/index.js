import React, { useState, useContext } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { AuthContext } from 'contexts/auth_context';
import { CourseContext } from 'contexts/course_context';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import FeedbackDialog from 'components/Feedback/Dialog';
import FormControl from '@material-ui/core/FormControl';

import styles from './styles';

const FirstSignIn = ({ classes }) => {
  const [state, setState] = useState({
    best_course: '',
    worst_course: '',
    current_course: ''
  });
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const { courses } = useContext(CourseContext);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value, current_course: value });
    setOpen(true);
  };

  const leaveFeedback = key => {
    const { feedbacks } = user;
    setOpen(false);
    setUser({ ...user, feedbacks: { ...feedbacks, [key]: true } });
  };

  const renderOptions = () =>
    courses &&
    courses.map(course => (
      <MenuItem key={course.id} value={course.id}>
        {course.title}
      </MenuItem>
    ));

  return (
    <>
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="best_course">Best Course</InputLabel>
          <Select
            value={state.best_course}
            onChange={handleChange}
            inputProps={{
              name: 'best_course',
              id: 'best_course'
            }}
          >
            {renderOptions()}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="worst_course">Worst Course</InputLabel>
          <Select
            value={state.worst_course}
            onChange={handleChange}
            inputProps={{
              name: 'worst_course',
              id: 'worst_course'
            }}
          >
            {renderOptions()}
          </Select>
        </FormControl>
      </form>
      <FeedbackDialog
        {...{
          user,
          open,
          leaveFeedback,
          course_id: state.current_course
        }}
      />
    </>
  );
};

export default withStyles(styles)(FirstSignIn);
