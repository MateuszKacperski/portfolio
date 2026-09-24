import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/programmazione.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/penello.png")} alt="Penello" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I`m a frontend developer with experience in developing responsive
                and optimized websites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server.png")} alt="Server" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I`m a backend developer with experience in developing robust
                and scalable server-side applications
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/libro.png")} alt="Libro" />
            <div className={styles.aboutItemText}>
              <h3>Study</h3>
              <p>
                I`m currently studying React
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
