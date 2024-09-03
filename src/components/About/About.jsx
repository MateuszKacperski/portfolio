import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Su di me</h2>
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
                Sono un  frontend developer con esperienza in sviluppo di siti web responsive
                e ottimizzati
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server.png")} alt="Server" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Ho esperienza nello sviluppo backend
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/libro.png")} alt="Libro" />
            <div className={styles.aboutItemText}>
              <h3>Studio</h3>
              <p>
                Attualmente sto studiando React
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
