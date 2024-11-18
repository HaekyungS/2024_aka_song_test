// 스코어 별 멘트 정하기
export const scoreMent = (score: number) => {
  if (score === 0) {
    return `"넌 그냥 나가라"`;
  } else if (score > 5 && score < 10) {
    return `"오잉? 똑바로 안해?!"`;
  } else if (score >= 10 && score < 20) {
    return `"마이? "`;
  } else if (score >= 20 && score < 23) {
    return `"오오~ 조은데요~"`;
  } else if (score === 23) {
    return `"너 없으면 나 망해"`;
  }
};
