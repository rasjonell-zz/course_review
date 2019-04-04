import React, { useContext } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { ModalContext } from 'contexts/modal_context';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const AddButton = ({ classes }) => {
  const { setOpen } = useContext(ModalContext);

  return (
    <div className={classes.root}>
      <Tooltip title="Review a Course" placement="left-start" aria-label="Review">
        <Fab color="primary" aria-label="Review" onClick={() => setOpen(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default withStyles(styles)(AddButton);
