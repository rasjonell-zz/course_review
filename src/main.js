import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from 'containers/App';
import SignIn from 'containers/SignIn';

import { AuthContext } from 'contexts/auth_context';

export default () => (
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
);
