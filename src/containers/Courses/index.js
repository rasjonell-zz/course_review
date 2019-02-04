import React from 'react';
import Link from 'react-router-dom/Link';
import Loading from 'components/Loading';
import WithCourses from 'components/WithCourses';

const Courses = ({ courses }) =>
  courses ? (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <Link to={`/courses/${course.id}`}>
            <h1>{course.title}</h1>
          </Link>
          <div>
            {course.clusters.map(n => (
              <p key={n}>{n}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Loading size={50} />
  );

export default WithCourses(Courses);
