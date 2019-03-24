import React from 'react';
import { CourseContext } from 'contexts/course_context';

export default WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <CourseContext.Consumer>
          {({ courses }) => <WrappedComponent courses={courses} {...this.props} />}
        </CourseContext.Consumer>
      );
    }
  };
