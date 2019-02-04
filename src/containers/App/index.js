import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Courses from 'containers/Courses';
import CoursePage from 'containers/Course';
import NotFoundPage from 'containers/NotFound';
import LeaveFeedback from 'containers/LeaveFeedback';

const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Redirect exact from="/" to="/courses" />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/courses/:id" component={CoursePage} />
      <Route exact path="/review" component={LeaveFeedback} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
