"use client";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import { useEffect, useState } from "react";
import { number, problems } from "../../data/data";
import { getCookies } from "cookies-next";
import { scoreMent } from "../../data/scoreMent";
import { grade } from "../../data/grade";
import { screenDownload } from "../../component/screenDownload";

export default function Page() {
  const [name, setName] = useState("");
  const [respon, setRespon] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const user = decodeURIComponent(getCookies()["user"]);
    const userRespon = decodeURIComponent(getCookies()["answer"]);

    if (user === "undefined" || userRespon === "undefined") {
      console.log(typeof user, userRespon);

      window.alert("잘못된 접근입니다.");
      window.location.href = "/";
    } else {
      setName(user);

      const userResponRe = [];

      userRespon.split(`"`).map((e, index) => {
        if (index !== 0 && index % 2 === 1) {
          userResponRe.push(e);
        }
      });

      setRespon(userResponRe);

      userResponRe.map((e, index) => {
        if (e === problems[index].ex[0]) {
          setScore((score) => score + 1);
        }
      });
    }
  }, [getCookies()["user"], getCookies()["answer"]]);

  return (
    <div>
      {/* 상단 고정부분 */}
      <div className={`${styles.topBox} ${styles.flexColumnCenter}`}>
        <div className={`${styles.topTitle} ${styles.flexRowCenter}`}>
          <div className={styles.title}>2024년도 아카이로 류 노래 모의고사</div>
          <div className={styles.type}>아카용</div>
        </div>
        <div className={`${styles.topName} ${styles.flexRowCenter}`}>
          <div className={styles.name}>성 명</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.name}>수험번호</div>
          <div className={`${styles.numberbox} ${styles.name} ${styles.flexRowCenter}`}>
            {number.map((n, index) => {
              return (
                <div key={index} className={styles.numberEA}>
                  {n}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 결과 */}
      <div id="download" className={`${styles.result} ${styles.flexColumnCenter}`}>
        <div className={`${styles.scoreMent}`}>{scoreMent(score)}</div>
        <div className={`${styles.ment}`}>{name}님의 모의고사 성적은</div>
        <div className={`${styles.ment}`}>{grade(score)}점 입니다.</div>
        <div className={`${styles.buttonMent} ${styles.flexRowCenter}`}>
          <Link className={`${styles.link} ${styles.resultLink}`} href="/">
            다시 하기
          </Link>
          <Link
            className={`${styles.link} ${styles.resultLink}`}
            href="https://www.youtube.com/@ryuch.821"
            target="_blank"
          >
            공부 하러가기
          </Link>
          <div onClick={screenDownload} className={`${styles.link} ${styles.resultLink}`}>
            저장하기
          </div>
        </div>
      </div>
    </div>
  );
}
