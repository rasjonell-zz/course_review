import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import RootContextProvider from 'contexts/root_context';
import AuthContextProvider from 'contexts/auth_context';
import FeedbackContextProvider from 'contexts/feedback_context';

import Main from './main';
import * as serviceWorker from 'utils/serviceWorker';
import theme from 'theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AuthContextProvider>
      <RootContextProvider>
        <FeedbackContextProvider>
          <Main />
        </FeedbackContextProvider>
      </RootContextProvider>
    </AuthContextProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
