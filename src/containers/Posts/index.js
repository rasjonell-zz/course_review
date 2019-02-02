import React from 'react';
import Loading from 'components/Loading';
import { database } from 'config/firebase';
import { onFetch } from 'helpers/fetch_helper';
import { setRate } from 'helpers/rating_helper';

export default class Posts extends React.Component {
  state = {
    posts: null,
    loading: true
  };

  componentWillMount() {
    onFetch('posts', posts => this.setState({ posts, loading: false }));
  }

  handleRating = (post, key, main, secondary) => {
    const {
      user: { uid }
    } = this.props;
    const mainPath = `${main}[${uid}]`;
    const secondaryPath = `${secondary}[${uid}]`;
    const resultPost = setRate(post, mainPath, secondaryPath);
    const postsRef = database.ref(`posts/${key}`);
    postsRef.set({ ...resultPost });
  };

  render() {
    const { posts, loading } = this.state;

    if (loading) {
      return <Loading size={50} />;
    }

    return (
      <div>
        {posts &&
          Object.keys(posts).map(key => (
            <div key={key}>
              <h2>Title: {posts[key].title}</h2>
              <h4>Rating: {posts[key].rating}</h4>
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
          ))}
      </div>
    );
  }
}
