import React from 'react';
import Link from 'react-router-dom/Link';
import Loading from 'components/Loading';

export default class Courses extends React.Component {
  static defaultProps = {
    courses: null
  };

  render() {
    const { courses } = this.props;

    if (!courses) {
      return <Loading size={50} />;
    }

    return (
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
    );
  }
}
