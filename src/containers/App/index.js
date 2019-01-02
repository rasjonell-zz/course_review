import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { database } from '../../config/firebase';

import Posts from '../../containers/Posts';
import AddPost from '../../containers/AddPost';

class App extends React.Component {
  state = {
    posts: null,
    loading: true
  };

  
  componentWillMount() {
    const postsRef = database.ref('posts');
    postsRef.on('value', snapshot => {
      this.setState({ posts: snapshot.val(), loading: false });
    });
  }

  render() {
    const { posts, loading } = this.state;

    return (
      <div className="App">
        <h1>Reddit Clone</h1>

        <Link to="/posts">Posts</Link>
        <br/>
        <Link to="/add-post">Add a Post</Link>
        
        <Switch>
          <Route path="/posts" render={() => <Posts {...{ posts, loading }} />} />
          <Route path="/add-post" component={AddPost} />
        </Switch>
      </div>
    );
  }
}

export default App;
