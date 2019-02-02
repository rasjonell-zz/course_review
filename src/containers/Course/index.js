import React from 'react';
import Loading from 'components/Loading';
import { database } from 'config/firebase';
import { onFetch } from 'helpers/fetch_helper';
import { setRate } from 'helpers/rating_helper';

export default class CoursePage extends React.Component {
  state = {
    feedbacks: null,
    loading: true
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    onFetch(`feedbacks/${id}`, feedbacks => this.setState({ feedbacks, loading: false }));
  }

  componentDidUpdate(props) {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    if (props.match.params.id !== id)
      onFetch(`feedbacks/${id}`, feedbacks => this.setState({ feedbacks, loading: false }));
  }

  handleRating = (feedback, key, main, secondary) => {
    const {
      user: { uid },
      match: {
        params: { id }
      }
    } = this.props;
    const mainPath = `${main}[${uid}]`;
    const secondaryPath = `${secondary}[${uid}]`;
    const resultFeedback = setRate(feedback, mainPath, secondaryPath);
    const feedbackRef = database.ref(`feedbacks/${id}/${key}`);
    feedbackRef.set({ ...resultFeedback });
  };

  render() {
    const { feedbacks, loading } = this.state;

    if (loading) {
      return <Loading size={50} />;
    }

    return (
      <div>
        {feedbacks ? (
          Object.keys(feedbacks).map(key => (
            <div key={key}>
              <h2>Feedback: {feedbacks[key].feedback}</h2>
              <h4>Rating: {feedbacks[key].rating}</h4>
              <div>
                <button
                  type="button"
                  onClick={() => this.handleRating(feedbacks[key], key, 'upvote', 'downvote')}
                >
                  Upvote
                </button>
                <button
                  type="button"
                  onClick={() => this.handleRating(feedbacks[key], key, 'downvote', 'upvote')}
                >
                  Downvote
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>Nothing to Show</div>
        )}
      </div>
    );
  }
}
