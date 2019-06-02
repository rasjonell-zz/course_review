import React, { useContext } from 'react';
import { Router } from 'react-router-dom';
import history from 'config/history';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from 'containers/App';
import SignIn from 'containers/SignIn';
import AddButton from 'components/AddButton';
import { AuthContext } from 'contexts/auth_context';
import { ThemeContext } from 'contexts/theme_context';
import FeedbackDialog from 'components/Feedback/Dialog';

import createTheme from 'theme';

export default () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <MuiThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      {user ? (
        <Router history={history}>
          <>
            <App history={history} />
            <AddButton />
            <FeedbackDialog />
          </>
        </Router>
      ) : (
        <SignIn />
      )}
    </MuiThemeProvider>
  );
};
