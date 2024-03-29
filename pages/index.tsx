import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const nextYear = new Date().getFullYear() + 1;
  const startTimer = () => {
    const endDate = new Date(`Jan 01, ${nextYear} 00:00:00`).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const t = endDate - now;
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((t % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return timer;
  };

  useEffect(() => {
    const timer: any = startTimer();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>New year countdown</title>
        <meta name="description" content="Remaining time in the current year" />
        <link rel="icon" href="/icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anil_dev31" />
        <meta name="twitter:creator" content="@anil_dev31" />
        <meta name="twitter:title" content="New year countdown" />
        <meta
          name="twitter:description"
          content="Check out the remaining time for the next new year"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/jsgiant/Assets/master/timer.png"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Remaining time in <span className={styles.year}>{nextYear - 1}</span>
        </h1>

        <div className={styles.grid}>
          <div className={styles.cardContainer}>
            <h2 className={styles.days}>Days</h2>
            <div className={styles.card}>
              <p>{days}</p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <h2 className={styles.hours}>Hours</h2>
            <div className={styles.card}>
              <p>{hours}</p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <h2 className={styles.minutes}>Minutes</h2>
            <div className={styles.card}>
              <p>{minutes}</p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <h2 className={styles.seconds}>Seconds</h2>
            <div className={styles.card}>
              <p>{seconds}</p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span> Made with ❤️ by</span> &nbsp;
        <a
          href="https://github.com/jsgiant"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anil Peddireddy
        </a>
      </footer>
    </div>
  );
};

export default Home;
