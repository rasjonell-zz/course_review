import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Posts from 'containers/Posts';
import AddPost from 'containers/AddPost';
import NotFoundPage from 'containers/NotFound';

class App extends React.Component {
  propTypes = {
    user: PropTypes.object.isRequired
  };

  whatToRender = Component => <Component {...this.props} />;

  render() {
    const { user } = this.props;

    return (
      <div className="App">
        <NavBar {...{ user }} />
        <Switch>
          <Route exact path="/posts" render={() => this.whatToRender(Posts)} />
          <Route exact path="/add-post" render={() => this.whatToRender(AddPost)} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
