export const Statisticks = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedbacks: {percentage}%</li>
    </ul>
  );
};
