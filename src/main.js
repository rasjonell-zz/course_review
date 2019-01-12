import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from 'containers/App';
import SignIn from 'containers/SignIn';

import { AuthContext } from 'contexts/auth_context';

export default () => (
  <>
    <CssBaseline />
    <AuthContext.Consumer>
      {({ user }) =>
        user ? (
          <BrowserRouter>
            <App {...{ user }} />
          </BrowserRouter>
        ) : (
          <SignIn />
        )
      }
    </AuthContext.Consumer>
  </>
);
