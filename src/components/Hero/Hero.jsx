import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lalsingh</h1>
        <p className={styles.description}>
        I Know Development
        Build Scalable & Performant Web Applications,
        My enthusiasm and curiosity for the field drive me to seek out new opportunities 
        to challenge myself and grow as a web developer.
        "I love designing websites and am looking for more opportunities to work in coding on a different website and user an experiances".
        </p>
        <a href="mailto:myemail@email..com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
