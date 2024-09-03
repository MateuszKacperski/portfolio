import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contatti</h2>
        <p>Sentit libero di contattarmi!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:kacperskimateusz95@gmail.com">kacperskimateusz95@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mateuszkacperski/">linkedin.com/in/MateuszKacperski</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/MateuszKacperski">github.com/MateuszKacperski</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/tel.png")} alt="Telefono " />
          <a>3920040571</a>
        </li>
      </ul>
    </footer>
  );
};
