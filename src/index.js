import React from 'react';
import ReactDOM from 'react-dom';
import AuthContextProvider from 'contexts/auth_context';

import Main from './main';
import * as serviceWorker from 'utils/serviceWorker';

ReactDOM.render(
  <AuthContextProvider>
    <Main />
  </AuthContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
