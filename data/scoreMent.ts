// 스코어 별 멘트 정하기
export const scoreMent = (score: number) => {
  if (score === 0) {
    return `"넌 그냥 나가라"`;
  } else if (score > 1 && score < 8) {
    return `"와 이것밖에 모른다고?`;
  } else if (score >= 8 && score < 17) {
    return `"오잉? 똑바로 안해?!"`;
  } else if (score >= 17 && score < 23) {
    return `"오오~ 조은데요~"`;
  } else if (score === 23) {
    return `"너 없으면 나 망해"`;
  }
};
