import React, { useContext } from 'react';
import NavBar from 'components/NavBar';
import TrackPage from 'containers/Track';
import CoursePage from 'containers/Course';
import HomePage from 'containers/HomePage';
import ProfilePage from 'containers/Profile';
import { isValid } from 'helpers/user_helper';
import NotFoundPage from 'containers/NotFound';
import ClustersPage from 'containers/Clusters';
import { Switch, Route } from 'react-router-dom';
import FirstSignIn from 'containers/FirstSignIn';
import { AuthContext } from 'contexts/auth_context';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const App = props => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavBar {...props} />
      <div className={props.classes.main}>
        {!isValid(user) ? (
          <FirstSignIn />
        ) : (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/courses/:id" component={CoursePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/clusters" component={ClustersPage} />
            <Route exact path="/clusters/:track" component={TrackPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        )}
      </div>
    </>
  );
};

export default withStyles(styles)(App);
