import React from 'react';
import { database } from 'config/firebase';

export default
class AddPost extends React.Component {
  state = { title: '', submitted: false }

  handleChange = e => (
    this.setState({ title: e.target.value })
  )

  handleSubmit = e => {
    const postsRef = database.ref('posts');
    const { title } = this.state;

    e.preventDefault();

    postsRef.push({
      title,
      upvote: {},
      downvote: {},
      rating: 0
    });
    
    this.setState({ title: '', submitted: true });
    
    setTimeout(() => {
      this.setState({ submitted: false })
    }, 2000);
  }

  render() {
    const { title, submitted } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Write the post title"
          value={title}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          onClick={this.handleSubmit}
        >
          Add Post
        </button>
        {submitted && <h1>Post has been submitted</h1>}
      </div>
    )
  }
}
