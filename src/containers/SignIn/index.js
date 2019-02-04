import React from 'react';
import AUALogo from 'images/aua_logo.png';
import Button from '@material-ui/core/Button';

import { signIn } from 'helpers/auth_helper';

import './sign_in.css';

export default () => (
  <div className="login">
    <img src={AUALogo} alt="" />
    <Button size="large" variant="contained" color="primary" onClick={signIn}>
      Sign In
    </Button>
  </div>
);
