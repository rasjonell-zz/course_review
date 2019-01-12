import React from 'react';
import { Router } from 'react-router-dom';
import history from 'config/history';
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
          <Router history={history}>
            <App {...{ user }} />
          </Router>
        ) : (
          <SignIn />
        )
      }
    </AuthContext.Consumer>
  </>
);
