import React from 'react';
import get from 'lodash/get';
import set from 'lodash/set';
import omit from 'lodash/omit';
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

  handleRating = (post, key, main, secondary) => {
    const { user: { uid } } = this.props;
    const mainPath = `${main}[${uid}]`;
    const secondaryPath = `${secondary}[${uid}]`;
    const postsRef = database.ref(`posts/${key}`)
    let resultPost = {...post};

    if(get(post, mainPath)) {
      resultPost = omit(resultPost, mainPath);
    } else if(get(post, secondaryPath)) {
      resultPost = omit(resultPost, secondaryPath);
      set(resultPost, mainPath, true);
    } else {
      set(resultPost, mainPath, true);
    }

    postsRef.set({ ...resultPost });
  }

  getRating = post => {
    if(post.upvote && post.downvote)
      return Object.keys(post.upvote).length - Object.keys(post.downvote).length;

    if(!post.upvote && post.downvote) return (- Object.keys(post.downvote).length);
    if(!post.downvote && post.upvote) return Object.keys(post.upvote).length;
    return 0;
  }

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
              onClick={() => this.handleRating(posts[key], key, 'upvote', 'downvote')}
            >
              Upvote
            </button>
            <button
              type="button"
              onClick={() => this.handleRating(posts[key], key, 'downvote', 'upvote')}
            >
              Downvote
            </button>
          </div>
        </div>
      ))
    );
  }

}
