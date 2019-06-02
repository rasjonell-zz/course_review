import React from 'react';
import { IceCream } from 'react-kawaii';
import Fab from '@material-ui/core/Fab';
import blue from '@material-ui/core/colors/blue';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { signIn } from 'helpers/auth_helper';
import styles from './styles';

const SignIn = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.field}>
      <IceCream size={300} mood="blissful" color={blue[500]} />
    </div>
    <div className={classes.field}>
      <Fab color="primary" variant="extended" aria-label="SignIn" onClick={signIn}>
        <Typography align="center" component="span" color="secondary">
          HEY! Sign In With Your AUA E-Mail To Continue
        </Typography>
      </Fab>
    </div>
  </div>
);

export default withStyles(styles)(SignIn);
