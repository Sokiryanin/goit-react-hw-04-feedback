import { Notifacation } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statisticks } from './Statistics/Statistics';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // case 'good': setGood(prev => prev + 1) break;
  // case 'neutral': setNeutral(prev => prev + 1) break;
  // case 'bad': setBad(prev => prev + 1) break;

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} addFeedback={addFeedback} />
      </Section>
      <Section title={'Statisticks'}>
        {countTotalFeedback() ? (
          <Statisticks
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notifacation />
        )}
      </Section>
    </>
  );
}

export default App;
