import React from "react";
import styles from "../../css/events.module.css";

function Card({ image, text, type, title, learnmore, submit, register }) {
  return (
    <div className={` ${type}`}>
      <div className={` ${styles.border}`}>
        <img
          className={styles.imageBox}
          src={image}
          alt="imag"
          loading="lazy"
        />
        <h1 className="font-heading m-2 text-center text-lg md:text-2xl text-white">
          {title}
        </h1>
        <div
          className={`text-white ${styles.textBox} font-text md:font-lg font-sm`}
        >
          {text}
        </div>
        <br />
        <a
          href={learnmore}
          target="_blank"
          rel="noreferrer"
          className={`${styles.button} font-text mt-3 text-white cursor-pointer`}
        >
          LEARN MORE
        </a>
        <a
          href={register}
          target="_blank"
          rel="noreferrer"
          className={`${styles.button} font-text mt-3 text-white cursor-pointer`}
        >
          REGISTER
        </a>
        <a
          href={submit}
          target="_blank"
          rel="noreferrer"
          className={`${styles.button} font-text mt-3 text-white cursor-pointer`}
        >
          SUBMIT
        </a>
      </div>
    </div>
  );
}
export default Card;