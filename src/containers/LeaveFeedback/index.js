import React from 'react';
import { database } from 'config/firebase';
import WithCourses from 'components/WithCourses';

class LeaveFeedback extends React.Component {
  state = {
    course: null,
    feedback: '',
    submitted: false
  };

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = e => {
    const { feedback, course } = this.state;
    const postsRef = database.ref(`feedbacks/${course}`);

    e.preventDefault();

    postsRef.push({
      feedback,
      upvote: {},
      downvote: {},
      rating: 0
    });

    this.setState({ course: null, feedback: '', submitted: true });

    setTimeout(() => {
      this.setState({ submitted: false });
    }, 2000);
  };

  render() {
    const { courses } = this.props;
    const { feedback, submitted } = this.state;

    return (
      <div>
        <h1>Select a course: </h1>
        <select name="course" id="course" onChange={this.handleChange}>
          {courses &&
            courses.map(course => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
        </select>
        <input
          name="feedback"
          type="text"
          placeholder="Write the course feedback"
          value={feedback}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Add Post
        </button>
        {submitted && <h1>Post has been submitted</h1>}
      </div>
    );
  }
}

export default WithCourses(LeaveFeedback);
