import React from 'react';
import { database } from '../../config/firebase';

export default
class Posts extends React.Component {
  state = {
    posts: null,
    loading: true
  }

  componentWillMount() {
    const postsRef = database.ref('posts');
    postsRef.on('value', snapshot => {
      this.setState({ posts: snapshot.val(), loading: false });
    });
  }

  handleUpvote = (post, key) => {
    const postsRef = database.ref(`posts/${key}`)
  
    postsRef.set({
      ...post, ...{ upvote: post.upvote + 1 }
    })
  }

  handleDownvote = (post, key) => {
    const postsRef = database.ref(`posts/${key}`)
  
    postsRef.set({
      ...post, ...{ downvote: post.downvote + 1 }
    })
  }

  getRating = post => post.upvote - post.downvote

  render() {
    const { posts, loading } = this.state;

    if(loading) {
      return (
        <div>
          Loading ...
        </div>
      )
    }

    return (
      posts && Object.keys(posts).map(key => (
        <div key={key}>
          <h2>Title: { posts[key].title }</h2>
          <h4>Rating: { this.getRating(posts[key]) }</h4>
          <div>
            <button
              type="button"
              onClick={() => this.handleUpvote(posts[key], key)}
            >
              Upvote
            </button>
            <button
              type="button"
              onClick={() => this.handleDownvote(posts[key], key)}
            >
              Downvote
            </button>
          </div>
        </div>
      ))
    );
  }

}
