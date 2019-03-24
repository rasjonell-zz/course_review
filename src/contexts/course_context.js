import React from 'react';
import { onFetch } from 'helpers/fetch_helper';

const defaultCourseState = {
  courses: null
};

export const CourseContext = React.createContext(defaultCourseState);

export default class CourseContextProvider extends React.Component {
  state = defaultCourseState;

  componentDidMount() {
    onFetch('courses', courses => this.setState({ courses }));
  }

  render() {
    const { children } = this.props;
    const { courses } = this.state;

    return <CourseContext.Provider value={{ courses }}>{children}</CourseContext.Provider>;
  }
}
