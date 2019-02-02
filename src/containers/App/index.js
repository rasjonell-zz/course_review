import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Posts from 'containers/Posts';
import NavBar from 'components/NavBar';
import AddPost from 'containers/AddPost';
import Courses from 'containers/Courses';
import CoursePage from 'containers/Course';
import NotFoundPage from 'containers/NotFound';

class App extends React.Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object.isRequired
  };

  whatToRender = (Component, props) => <Component {...props} {...this.props} />;

  render() {
    const { user } = this.props;

    return (
      <div className="App">
        <NavBar {...{ user }} />
        <Switch>
          <Route exact path="/" render={props => this.whatToRender(Posts, props)} />
          <Route exact path="/courses" render={props => this.whatToRender(Courses, props)} />
          <Route exact path="/courses/:id" render={props => this.whatToRender(CoursePage, props)} />
          <Route exact path="/review" render={props => this.whatToRender(AddPost, props)} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
