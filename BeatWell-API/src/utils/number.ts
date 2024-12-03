export const randNum = (maxNum: number) => {
  return Math.floor(Math.random() * (maxNum - 1 + 1)) + 1;
};