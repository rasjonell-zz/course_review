import React, { useContext } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ModalContext } from 'contexts/modal_context';
import Typography from '@material-ui/core/Typography';

const EmptyCourse = ({ classes: { main, button } }) => {
  const { setOpen } = useContext(ModalContext);
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
        onClick={() => setOpen(true)}
      >
        <AddIcon />
        Leave Feedback
      </Fab>
    </div>
  );
};

export default EmptyCourse;
