import { useEffect, useState } from "react";
import Youtube from "react-youtube";
import styles from "../styles/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

interface problems {
  number: String;
  problem: String;
  ex: Array<String>;
  videoid: string;
}

export const ExPlay = (problem: problems, answer) => {
  const [load, setLoad] = useState(false);
  const [exNum, setExNum] = useState([]);
  const [check, setCheck] = useState([
    { color: "black" },
    { color: "black" },
    { color: "black" },
    { color: "black" },
  ]);
  const [play, setPlay] = useState(false);
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    const exNumA = [];

    for (let i = 0; i < problem.ex.length; i++) {
      const random = Math.floor(Math.random() * problem.ex.length);

      if (exNumA.includes(random)) {
        i--;
      } else {
        exNumA.push(random);
      }
    }
    setExNum(exNumA);
    setLoad(true);
    setCheck([{ color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }]);
    // console.log("useEffect 안 랜덤숫자", exNum);
  }, [problem]);

  const handlePlayerReady = (event: any) => {
    setPlayer(event.target); // player 인스턴스를 설정
  };

  const playYoutube = () => {
    if (player) {
      if (play) {
        player.pauseVideo(); // 비디오가 재생 중이면 멈춤
      } else {
        player.playVideo(); // 비디오가 멈춰 있으면 재생
      }
      setPlay(!play); // 상태 토글
    }
  };

  // console.log("useEffect 밖 랜덤숫자", exNum);
  return (
    <>
      <div className={styles.examNumber}>{problem.number} 문제</div>
      <div className={`${styles.examTitle} ${styles.flexColumnCenter}`}>
        <div className={styles.youtubeBox} onClick={playYoutube}>
          <FontAwesomeIcon icon={faYoutube} className={styles.iconyoutube} />
          <Youtube
            videoId={problem.videoid}
            opts={{
              width: "10px",
              height: "10px",
              playerVars: { autoplay: 0, rel: 0, modestbranding: 0 },
            }}
            onReady={handlePlayerReady}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
            className={`${styles.youtube}`}
          />
        </div>
        <div className={styles.youtubeTitle}>{problem.problem}</div>
      </div>
      <ol className={`${styles.exams} ${styles.flexColumnCenter}`}>
        {load &&
          exNum.map((e, index) => {
            return (
              <li
                className={`${styles.examLi}`}
                style={check[index]}
                key={index}
                onClick={() => {
                  const reCheck = check.map((e) => {
                    if (e.color === "red") {
                      return { color: "black" };
                    } else {
                      return { color: "black" };
                    }
                  });

                  const update = [...reCheck];
                  update[index] = { color: "red" };
                  setCheck(update);
                  answer(problem.ex[e]);
                }}
              >
                {problem.ex[e]}
              </li>
            );
          })}
      </ol>
    </>
  );
};