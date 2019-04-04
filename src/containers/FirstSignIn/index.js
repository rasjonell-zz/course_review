import React, { useState, useContext } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ModalContext } from 'contexts/modal_context';
import { CourseContext } from 'contexts/course_context';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import styles from './styles';

const FirstSignIn = ({ classes }) => {
  const [state, setState] = useState({
    bestCourse: '',
    worstCourse: ''
  });
  const { setOpen } = useContext(ModalContext);
  const { courses, setCurrentCourse } = useContext(CourseContext);

  const handleChange = ({ target: { name, value } }) => {
    setCurrentCourse(value);
    setState({ ...state, [name]: value });
    setOpen(true);
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
          <InputLabel htmlFor="bestCourse">Best Course</InputLabel>
          <Select
            value={state.bestCourse}
            onChange={handleChange}
            inputProps={{
              name: 'bestCourse',
              id: 'bestCourse'
            }}
          >
            {renderOptions()}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="worstCourse">Worst Course</InputLabel>
          <Select
            value={state.worstCourse}
            onChange={handleChange}
            inputProps={{
              name: 'worstCourse',
              id: 'worstCourse'
            }}
          >
            {renderOptions()}
          </Select>
        </FormControl>
      </form>
    </>
  );
};

export default withStyles(styles)(FirstSignIn);
