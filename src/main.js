import React, { useContext } from 'react';
import { Router } from 'react-router-dom';
import history from 'config/history';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from 'containers/App';
import SignIn from 'containers/SignIn';
import AddButton from 'components/AddButton';

import { AuthContext } from 'contexts/auth_context';

export default () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <CssBaseline />
      {user ? (
        <Router history={history}>
          <>
            <App history={history} />
            <AddButton />
          </>
        </Router>
      ) : (
        <SignIn />
      )}
    </>
  );
};
