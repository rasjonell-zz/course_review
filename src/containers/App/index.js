import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Posts from '../../containers/Posts';
import AddPost from '../../containers/AddPost';

class App extends React.Component {
propTypes = {
    user: PropTypes.object.isRequired,
  };

  whatToRender = Component => <Component {...this.props} />

  render() {
    const { user } = this.props;
    
    return (
      <div className="App">
        <NavBar {...{ user }} />
        <Switch>
          <Route path="/posts" render={() => this.whatToRender(Posts)} />
          <Route path="/add-post" render={() => this.whatToRender(AddPost)} />
        </Switch>
      </div>
    );
  }
}

export default App;
