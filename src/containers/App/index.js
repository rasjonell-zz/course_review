import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { provider, auth } from '../../config/firebase';

import Posts from '../../containers/Posts';
import AddPost from '../../containers/AddPost';

class App extends React.Component {
  state = {
    user: null
  };

  whatToRender = (Component, props={}) => <Component {...this.state} {...props} />

  login = async () => {
    const result = await auth.signInWithPopup(provider);
    const user = await result.user;
    this.setState({ user });
  }

  logout = async () => {
    await auth.signOut();
    this.setState({ user: null });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <h1>Reddit Clone</h1>
        {user
        ? <div>
          <button onClick={this.logout}>Log Out</button>
          <br/>
          <Link to="/posts">Posts</Link>
          <br/>
          <Link to="/add-post">Add a Post</Link>

          <Switch>
            <Route path="/posts" render={() => this.whatToRender(Posts)} />
            <Route path="/add-post" render={() => this.whatToRender(AddPost)} />
          </Switch>
        </div>
        : <button onClick={this.login}>Log In</button>}
      </div>
    );
  }
}

export default App;
