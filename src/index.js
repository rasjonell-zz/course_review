import React from 'react';
import ReactDOM from 'react-dom';

import UserContextProvider from 'contexts/user_context';
import AuthContextProvider from 'contexts/auth_context';
import ModalContextProvider from 'contexts/modal_context';
import ThemeContextProvider from 'contexts/theme_context';
import CourseContextProvider from 'contexts/course_context';
import FeedbackContextProvider from 'contexts/feedback_context';

import Main from './main';
import * as serviceWorker from 'utils/serviceWorker';

ReactDOM.render(
  <AuthContextProvider>
    <UserContextProvider>
      <CourseContextProvider>
        <FeedbackContextProvider>
          <ModalContextProvider>
            <ThemeContextProvider>
              <Main />
            </ThemeContextProvider>
          </ModalContextProvider>
        </FeedbackContextProvider>
      </CourseContextProvider>
    </UserContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);

serviceWorker.register();
