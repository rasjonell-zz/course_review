import React, { useContext } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ModalContext } from 'contexts/modal_context';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const AddButton = ({ classes, variant = 'round', text }) => {
  const { setOpen } = useContext(ModalContext);

  return (
    <div className={classes.root}>
      <Fab variant={variant} color="primary" aria-label="Review" onClick={() => setOpen(true)}>
        <AddIcon />
        {text}
      </Fab>
    </div>
  );
};

export default withStyles(styles)(AddButton);
