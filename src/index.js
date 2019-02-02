import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import RootContextProvider from 'contexts/root_context';
import AuthContextProvider from 'contexts/auth_context';

import Main from './main';
import * as serviceWorker from 'utils/serviceWorker';
import theme from 'theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AuthContextProvider>
      <RootContextProvider>
        <Main />
      </RootContextProvider>
    </AuthContextProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
