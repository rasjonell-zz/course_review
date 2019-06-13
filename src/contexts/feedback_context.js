import React, { useState, useEffect } from 'react';
import { asArray } from 'helpers/fetch_helper';

export const FeedbackContext = React.createContext(null);

export default ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(null);

  useEffect(() => {
    asArray('feedbacks', setFeedbacks);
  }, []);

  return <FeedbackContext.Provider value={{ feedbacks }}>{children}</FeedbackContext.Provider>;
};
