import React from 'react';
import { onFetch } from 'helpers/fetch_helper';

const defaultFeedbackState = {
  feedbacks: null
};

export const FeedbackContext = React.createContext(defaultFeedbackState);

export default class FeedbackContextProvider extends React.Component {
  state = defaultFeedbackState;

  componentDidMount() {
    onFetch('feedbacks', feedbacks => this.setState({ feedbacks }));
  }

  render() {
    const { children } = this.props;
    const { feedbacks } = this.state;

    return <FeedbackContext.Provider value={{ feedbacks }}>{children}</FeedbackContext.Provider>;
  }
}
