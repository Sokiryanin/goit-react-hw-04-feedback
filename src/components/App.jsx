import { Notifacation } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statisticks } from './Statistics/Statistics';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = option => {
    if (option === 'good') setGood(prev => prev + 1);
    if (option === 'neutral') setNeutral(prev => prev + 1);
    if (option === 'bad') setBad(prev => prev + 1);
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

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = option => {
//     this.setState(state => ({
//       [option]: state[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const options = Object.keys(this.state);

//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions options={options} addFeedback={this.addFeedback} />
//         </Section>
//         <Section title={'Statisticks'}>
//           {this.countTotalFeedback() ? (
//             <Statisticks
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               percentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notifacation />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
