import React from 'react';
import AUALogo from 'images/aua_logo.png';
import Button from '@material-ui/core/Button';

import { auth, provider } from 'config/firebase';

import './sign_in.css';

export default () => (
  <div className="login">
    <img src={AUALogo} alt="" />
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={() => auth.signInWithRedirect(provider)}>
      Sign In
    </Button>
  </div>
);
