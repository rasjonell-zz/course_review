import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import AuthContextProvider from 'contexts/auth_context';
import ModalContextProvider from 'contexts/modal_context';
import CourseContextProvider from 'contexts/course_context';
import FeedbackContextProvider from 'contexts/feedback_context';

import Main from './main';
import * as serviceWorker from 'utils/serviceWorker';
import theme from 'theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AuthContextProvider>
      <CourseContextProvider>
        <FeedbackContextProvider>
          <ModalContextProvider>
            <Main />
          </ModalContextProvider>
        </FeedbackContextProvider>
      </CourseContextProvider>
    </AuthContextProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
