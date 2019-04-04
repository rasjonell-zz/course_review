import React from 'react';
import { onFetch } from 'helpers/fetch_helper';

const defaultCourseState = {
  courses: null,
  currentCourse: ''
};

export const CourseContext = React.createContext(defaultCourseState);

export default class CourseContextProvider extends React.Component {
  state = defaultCourseState;

  componentDidMount() {
    onFetch('courses', courses => this.setState({ courses }));
  }

  setCurrentCourse = currentCourse => this.setState({ currentCourse });

  render() {
    const { children } = this.props;
    const { courses, currentCourse } = this.state;

    return (
      <CourseContext.Provider
        value={{ courses, currentCourse, setCurrentCourse: this.setCurrentCourse }}
      >
        {children}
      </CourseContext.Provider>
    );
  }
}
