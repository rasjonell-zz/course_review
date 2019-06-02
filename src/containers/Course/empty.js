import React, { useContext } from 'react';
import { Backpack } from 'react-kawaii';
import Fab from '@material-ui/core/Fab';
import { ModalContext } from 'contexts/modal_context';
import Typography from '@material-ui/core/Typography';
import { CourseContext } from 'contexts/course_context';
import blue from '@material-ui/core/colors/blue';

const EmptyCourse = ({ classes: { emptyMain, feedbackButton, field }, course: { title, id } }) => {
  const { setOpen } = useContext(ModalContext);
  const { setCurrentCourse } = useContext(CourseContext);

  const handleOnClick = () => {
    setCurrentCourse(Number(id));
    setOpen(true);
  };

  return (
    <div className={emptyMain}>
      <div className={field}>
        <Backpack size={240} mood="sad" color={blue[500]} />
      </div>
      <div className={field}>
        <Typography align="center" variant="headline">
          {title} Has No Feedbacks Yet
        </Typography>
        <Typography align="center" variant="subheading">
          Help other students by leaving feedback
        </Typography>
      </div>
      <div className={field}>
        <Fab
          className={feedbackButton}
          color="inherit"
          variant="extended"
          aria-label="Review"
          onClick={handleOnClick}
        >
          <Typography align="center" component="span" color="secondary">
            Leave Feedback
          </Typography>
        </Fab>
      </div>
    </div>
  );
};

export default EmptyCourse;
