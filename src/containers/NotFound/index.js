import React from 'react';
import { Browser } from 'react-kawaii';
import { withStyles } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

export default withStyles(styles)(({ classes: { root, icon } }) => (
  <div className={root}>
    <Browser className={icon} size={320} color={blue[500]} />
    <Typography variant="h5">
      Oops... The Page You Requested Was <strong>Not Found</strong>
    </Typography>
  </div>
));
