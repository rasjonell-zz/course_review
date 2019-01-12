import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Posts from 'containers/Posts';
import AddPost from 'containers/AddPost';
import NotFoundPage from 'containers/NotFound';

class App extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const { user } = this.props;

    return (
      <div className="App">
        <NavBar {...{ user }} />
        <Switch>
          <Route exact path="/" render={() => <Posts user={user} />} />
          <Route exact path="/add-post" render={() => <AddPost user={user} />} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
