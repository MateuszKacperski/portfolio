import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ciao sono, I'm Mateusz</h1>
        <p className={styles.description}>
          Sono un full-stack developer con 1 un anno di esperienza di Vue e
          Laravel. Attualmente studio React !
        </p>
        <a href="mailto:kacperskimateusz95@gmail.com" className={styles.contactBtn}>
          Contattami
        </a>
      </div>
      <img
        src={getImageUrl("hero/port.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
