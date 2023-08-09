export const countTotalFeedback = options => {
  return Object.values(options).reduce((acc, value) => acc + value, 0);
};

export const countPositiveFeedbackPercentage = options => {
  const { good } = options;
  const total = countTotalFeedback(options);
  return total === 0 ? 0 : Math.round((good / total) * 100);
};
