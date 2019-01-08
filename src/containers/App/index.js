import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';

import { auth } from '../../config/firebase';
import Posts from '../../containers/Posts';
import AddPost from '../../containers/AddPost';

class App extends React.Component {
propTypes = {
    user: PropTypes.object
  };

  whatToRender = (Component, props={}) => <Component {...this.state} {...props} />

  render() {
    const { user } = this.props;
    
    return (
      <div className="App">
        <h1>Reddit Clone</h1>
        <div>
        <p>user: {user.displayName}, email: {user.email}</p>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <br/>
        <Link to="/add-post">Add a Post</Link>
        <br/>
        <button onClick={() => auth.signOut()}>LogOut</button>

        <Switch>
          <Route path="/posts" render={() => this.whatToRender(Posts)} />
          <Route path="/add-post" render={() => this.whatToRender(AddPost)} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
