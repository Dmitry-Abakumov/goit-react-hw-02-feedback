import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from 'shared/components/Notification/Notification';

import options from 'data/options.json';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackBtnClick = ({ target }) => {
    this.setState(prevState => ({
      [target.name]: prevState[target.name] + 1,
    }));
  };

  countTotalFeedback({ good, neutral, bad }) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage({ good }) {
    const totalReviews = this.countTotalFeedback(this.state);

    if (!totalReviews) return;

    const positiveFeedbackPercentage = (good * 100) / totalReviews;

    return Number(positiveFeedbackPercentage.toFixed(2));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state);

    return (
      <Section>
        <FeedbackOptions
          options={options}
          onFeedbackBtnClick={this.onFeedbackBtnClick}
        />
        {this.countTotalFeedback(this.state) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    );
  }
}

export default Feedback;
