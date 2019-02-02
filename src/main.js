import React from 'react';
import { Router } from 'react-router-dom';
import history from 'config/history';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from 'containers/App';
import SignIn from 'containers/SignIn';
import { RootContext } from 'contexts/root_context';
import { AuthContext } from 'contexts/auth_context';

export default () => (
  <>
    <CssBaseline />
    <RootContext.Consumer>
      {({ courses }) => (
        <AuthContext.Consumer>
          {({ user }) =>
            user ? (
              <Router history={history}>
                <App {...{ user, courses }} />
              </Router>
            ) : (
              <SignIn />
            )
          }
        </AuthContext.Consumer>
      )}
    </RootContext.Consumer>
  </>
);
