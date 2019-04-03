import React from 'react';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/MailRounded';
import { withStyles } from '@material-ui/core/styles';

import { signIn } from 'helpers/auth_helper';
import styles from './styles';

const SignIn = ({ classes }) => (
  <div className={classes.root}>
    <MailIcon color="primary" className={classes.mailIcon} />
    <div classes={classes.button}>
      <Button size="large" variant="flat" color="primary" onClick={signIn}>
        Sign In With Your AUA E-Mail
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(SignIn);
