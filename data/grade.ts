export const grade = (score: number) => {
  if (score === 23) {
    return 100;
  } else {
    const userGrade = Math.floor(score * (100 / 23));
    return userGrade;
  }
};
