import React, { useContext } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ModalContext } from 'contexts/modal_context';
import Typography from '@material-ui/core/Typography';
import { CourseContext } from 'contexts/course_context';

const EmptyCourse = ({ classes: { main, button }, courseId }) => {
  const { setOpen } = useContext(ModalContext);
  const { setCurrentCourse } = useContext(CourseContext);

  const handleOnClick = () => {
    setCurrentCourse(Number(courseId));
    setOpen(true);
  };

  return (
    <div className={main}>
      <Typography align="center" variant="headline">
        This Course Has No Feedbacks Yet
      </Typography>
      <Typography align="center" variant="subheading">
        Help other students by leaving feedback
      </Typography>
      <Fab
        className={button}
        variant="extended"
        color="primary"
        aria-label="Review"
        onClick={handleOnClick}
      >
        <AddIcon />
        Leave Feedback
      </Fab>
    </div>
  );
};

export default EmptyCourse;
