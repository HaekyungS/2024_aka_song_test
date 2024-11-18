interface problems {
  number: String;
  problem: String;
  ex: Array<String>;
  videoid?: String;
}

export const problems: Array<problems> = [
  {
    //https://www.youtube.com/watch?v=OrcIZU20KBs
    number: "첫번째",
    problem: "재생된 곡의 제목은?",
    ex: ["Queen", "King", "엔비 베이비", "취한 줄도 모르고"],
    videoid: "OrcIZU20KBs",
  },
  {
    // https://www.youtube.com/watch?v=z_wOAjxjelA
    number: "두번째",
    problem: "재생된 곡의 제목은?",
    ex: [
      "身体は正直だって言ってんの (몸은 솔직하다고 말하는 거야)",
      "ド屑 (개쓰레기)",
      "いかないで (가지마)",
      "白金ディスコ (백금디스코)",
    ],
    videoid: "z_wOAjxjelA",
  },
  {
    // https://www.youtube.com/watch?v=tRO1wsDn488
    number: "세번째",
    problem: "재생된 곡의 제목은?",
    ex: [
      "酔いどれ知らず (취한줄도 모르고)",
      "死神 (사신)",
      "ねむるまち (잠이 드는 거리)",
      "寄り酔い (취기)",
    ],
    videoid: "tRO1wsDn488",
  },
  {
    //https://www.youtube.com/watch?v=rROoaC8y-Gw
    number: "네번째",
    problem: "다음 재생된 곡과 관련된 것으로 틀린 것은?",
    ex: [
      "해당 곡은 21년도 커버곡이다.",
      "원곡은 팝송이다.",
      "해당 영상에서 류님은 욕조 안에 있다.",
      "해당 영상에서 류님은 한번도 눈을 감지 않는다.",
    ],
    videoid: "rROoaC8y-Gw",
  },
  {
    //https://www.youtube.com/watch?v=fJbz5CV6aLU
    // C.Look
    number: "다섯번째",
    problem: "24년 8월 2일 진행된 류님의 커버곡 티어표에서 지금 재생된 노래가 받은 등급은?",
    ex: ["B", "S", "A", "D"],
    videoid: "fJbz5CV6aLU",
  },
  {
    // https://www.youtube.com/watch?v=mcJreu1BsBo
    // 내꺼하는법
    number: "여섯번째",
    problem: "재생된 곡 속 류님의 니트에 있는 과일은?",
    ex: ["딸기", "방울토마토", "체리", "앵두"],
    videoid: "mcJreu1BsBo",
  },
  {
    // https://www.youtube.com/watch?v=d1eahPr-Dj0
    // 11:11
    number: "일곱번째",
    problem: "재생된 곡과 관련한 정보로 틀린 것은?",
    ex: [
      "커버곡 재생목록에 없는 이유는 류님이 까먹고 안 넣었는데 다시 넣기 귀찮아서이다.",
      "빼빼로데이를 기념하여 나온 곡이다.",
      "커버곡 티어표 진행 시, 해당 곡을 내리고싶은 곡으로 뽑았다.",
      "원곡의 발매일이 류님의 생일인 11월 1일이다.",
    ],
    videoid: "d1eahPr-Dj0",
  },
  {
    // https://www.youtube.com/watch?v=0qM7RNlZ4o0
    // Can't Slow Me down
    number: "여덟번째",
    problem: "재생된 노래와 관련한 게임에서 류님이 사용하거나 사용했던 닉네임이 아닌 것은?",
    ex: ["핑크곤듀아카용", "멋진김치만두임", "XxIL", "Hitscan"],
    videoid: "0qM7RNlZ4o0",
  },

  {
    // https://www.youtube.com/watch?v=UnwOL_xVbtM
    number: "아홉번째",
    problem: "재생된 곡은 「지코, 페노메코 - 걘 아니야 Part1, 2」 입니다. 다음 중 어떤 버전일까요?",
    ex: ["아카펠라 버전", "어쿠스틱 버전", "좌우음성 버전", "좌우음성 No MR 버전"],
    videoid: "UnwOL_xVbtM",
  },
  {
    number: "열번째",
    problem: "다음 중 1절만 커버된 곡은?",
    ex: ["恋愛サーキュレーション(연애서큘레이션)", "Ch4nge", "Queen", "Drugs"],
  },
  {
    number: "열한번째",
    problem: "류님이 유튜브에 가장 처음 올린 커버곡은?",
    ex: [
      "디핵, PATEKO - OHAYO MY NIGHT",
      "애쉬 아일랜드 - 악몽",
      "아카이로 류 - 혼자 걷는 거리",
      "빈첸 - 바코드",
    ],
  },
  {
    number: "열두번째",
    problem: "다음 중 류님이 한국어 개사로 부르지 않은 곡은?",
    ex: ["overdose", "MAFIA", "酔いどれ知らず (취한줄도 모르고)", "7%"],
  },
  {
    number: "열세번째",
    problem: "류님의 J-POP 채널 이름이 바뀐 후, 처음 올라온 곡은?",
    ex: ["Ignore", "Overdose", "サムライハート(사무라이 하트)", "好きだから｡(좋아하니까)"],
  },
  {
    number: "열네번째",
    problem: "다음 중 유튜브에 올라온 류님 오리지널 곡이 아닌 곡은?",
    ex: ["과대피해망상", "무채색", "혼자 걷는 거리", "피해망상"],
  },
  {
    number: "열다섯번째",
    problem: "다음 중 류님이 커버한 곡이 아닌 곡은?",
    ex: ["빅나티 - 벤쿠버", "줍에이 - 주르륵", "(여자)아이들 - 톰보이", "양승호 - 지구멸망"],
  },
  {
    number: "열여섯번째",
    problem: "다음 중 류님이 듀엣으로 부른 곡이 아닌 곡은?",
    ex: [
      "미란이, 릴보이 - Can't Slow Me Down",
      "양승호 - 지구멸망",
      "XMASwu - 7%",
      "줍에이 - 주르륵",
    ],
  },
  {
    number: "열일곱번째",
    problem:
      "리레볼루션 노래컨텐츠 중 류님이 독감으로 인해 대사 녹음을 못한 컨텐츠가 있습니다. 다음 중 해당 곡은?",
    ex: ["エンヴィーベイビー (엔비 베이비)", "Show", "고민중독", " 混沌ブギ  (혼돈부기)"],
  },
  {
    number: "열여덟번째",
    problem:
      "다음 중 리레볼루션 컨텐츠 중 「못 죽는 기사와 비단요람」에서 류님이 부른 파트가 아닌 것은? ",
    ex: [
      "가지마 나와 네 약속처럼",
      "괜찮으면 같은 밤을 걸어가자",
      "내 사랑아 내 파도여",
      "너없는 세상을 걸어",
    ],
  },
  {
    number: "열아홉번째",
    problem: "다음 중 류님이 노래 컨텐츠 속에서 한 대사가 아닌 것은?",
    ex: ["꼬부기, 꼬북꼬북!", "삼천세카이!!", "좋았어, 오늘 저녁은 잔치국수", "띵★"],
  },
  {
    number: "스무번째",
    problem:
      "류님은 트위치 한국 섭종으로 포인트 털이 중 포인트 목표를 통해 성공 시 「걘 아니야」를 커버하겠다고 하였습니다. 이 때, 목표 포인트는?",
    ex: ["1,500,000개", "1,000,000개", "2,000,000개", "1,300,000개"],
  },
  {
    number: "스물한번째",
    problem: "다음 중 류님이 직접 작사 혹은 개사를 한 곡이 아닌 것은?",
    ex: ["지구멸망", "혼자 걷는 거리", "踊 (춤)", "極楽浄土 (극락정토)"],
  },
  {
    number: "스물두번째",
    problem: "다음 중 류님의 커버곡 「7%」와 관련한 정보로 잘못된 것은?",
    ex: [
      "원곡은 일본곡이다.",
      "노래 개사를 류님이 직접하였다.",
      "노래 중 'My Baby' 라는 가사가 11번 나온다.",
      "윤단님이랑 듀엣으로 불렀다.",
    ],
  },
  {
    number: "스물세번째",
    problem: "다음 중 류님 유튜브 재생목록 중 간단한 작업곡 에 포함되어있지 않은 곡은?",
    ex: ["무채색", "피해망상", "태극즈 사이퍼", "혼자걷는거리"],
  },
];

export const warningMessage: Array<String> = [
  "2024년 연말 기념 아카이로 류 노래 모의고사를 준비하였습니다.",
  "문제는 총 23개로, 1~9번까지는 듣기평가로 이뤄져 있습니다.",
  "모든 문제는 류님의 나무위키, 생방송, 유튜브 를 기반으로 출제하였습니다.",
  "본 사이트는 PC 기준으로 제작되었기에 PC로 진행하시길 권장드립니다.",
  "모든 문제는 이전 문제로의 이동을 지원하지 않습니다. 뒤로가기를 할 경우, 홈으로 이동됨을 유의하여 주시길 바랍니다.",
  "사이트 버그 등에 대한 문제는 X(전 트위터)의 푸슝을 통해 문의하여 주시길 바랍니다.",
  "좋은 결과가 나오길 기원합니다! 재밌게 즐겨주세요!🤗",
];

export const number = [2, 0, 0, 2, "-", 1, 1, 0, 1];
