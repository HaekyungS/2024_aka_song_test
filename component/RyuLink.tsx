import Link from "next/link";
import styles from "../styles/page.module.css";

export const RyuLink = () => {
  return (
    <li className={styles.message}>
      모든 문제는 류님의
      <Link
        className={styles.link}
        href="https://namu.wiki/w/%EC%95%84%EC%B9%B4%EC%9D%B4%EB%A1%9C%20%EB%A5%98"
        target="_blank"
      >
        {" "}
        나무위키,
      </Link>
      <Link
        className={styles.link}
        href="https://chzzk.naver.com/f67b66f4051fd2744ba9366571565771"
        target="_blank"
      >
        {" "}
        생방송,{" "}
      </Link>
      <Link className={styles.link} href="https://www.youtube.com/@ryuch.821" target="_blank">
        유튜브
      </Link>
      를 기반으로 출제하였습니다.
    </li>
  );
};
