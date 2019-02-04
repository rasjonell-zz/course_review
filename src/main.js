import React from 'react';
import { Router } from 'react-router-dom';
import history from 'config/history';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from 'containers/App';
import SignIn from 'containers/SignIn';
import { RootContext } from 'contexts/root_context';

import WithUser from 'components/WithUser';

const Main = props => (
  <>
    <CssBaseline />
    <RootContext.Consumer>
      {({ courses }) =>
        props.user ? (
          <Router history={history}>
            <App user={props.user} courses={courses} />
          </Router>
        ) : (
          <SignIn />
        )
      }
    </RootContext.Consumer>
  </>
);

export default WithUser(Main);
