import { AddFeedbackBtn } from './FeedBackOptions.styled';

export const FeedbackOptions = ({ options, addFeedback }) => {
  return options.map(option => {
    return (
      <AddFeedbackBtn
        key={option}
        type="button"
        onClick={() => {
          addFeedback(option);
        }}
      >
        {option}
      </AddFeedbackBtn>
    );
  });
};
