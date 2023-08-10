export const formatNumberWithCommas = (amount: number) => {
  return new Intl.NumberFormat('en-US').format(amount);
};
