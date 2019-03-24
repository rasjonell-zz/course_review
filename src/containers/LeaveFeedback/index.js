import React, { useState, useContext } from 'react';
import { database } from 'config/firebase';

import { AuthContext } from 'contexts/auth_context';
import { CourseContext } from 'contexts/course_context';

export default () => {
  const [state, setState] = useState({
    course: null,
    feedback: ''
  });

  const { courses } = useContext(CourseContext);
  const { user } = useContext(AuthContext);

  const handleChange = ({ target: { name, value } }) => setState({ ...state, [name]: value });

  const handleSubmit = (e, uid) => {
    const { course, feedback } = state;
    const postsRef = database.ref('feedbacks');

    e.preventDefault();

    postsRef.push({
      feedback,
      rating: 0,
      upvote: {},
      downvote: {},
      user_id: uid,
      course_id: course
    });

    setState({ course: null, feedback: '' });
  };

  return (
    <div>
      <h1>Select a course: </h1>
      <select name="course" id="course" onChange={handleChange}>
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
        value={state.feedback}
        onChange={handleChange}
      />
      <button type="submit" onClick={e => handleSubmit(e, user.uid)}>
        Add Post
      </button>
    </div>
  );
};
