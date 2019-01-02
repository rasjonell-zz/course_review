import React from 'react';
import { database } from '../../config/firebase';

export default props => {
  const { posts, loading } = props;

  const handleUpvote = (post, key) => {
    const postsRef = database.ref(`posts/${key}`)

    postsRef.set({
      ...post, ...{ upvote: post.upvote + 1 }
    })
  }

  const handleDownvote = (post, key) => {
    const postsRef = database.ref(`posts/${key}`)

    postsRef.set({
      ...post, ...{ downvote: post.downvote + 1 }
    })
  }

  const getRating = post => post.upvote - post.downvote

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
        <h4>Rating: { getRating(posts[key]) }</h4>
        <div>
          <button
            type="button"
            onClick={() => handleUpvote(posts[key], key)}
          >
            Upvote
          </button>
          <button
            type="button"
            onClick={() => handleDownvote(posts[key], key)}
          >
            Downvote
          </button>
        </div>
      </div>
    ))
  );
}