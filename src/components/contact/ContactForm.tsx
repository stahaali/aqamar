"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <div className={styles.box}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className={styles.box}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className={styles.box}>
          <input
            className={styles.input}
            type="text"
            name="phone"
            placeholder="Mobile"
          />
        </div>
        <div className={styles.box}>
          <input
            className={styles.input}
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className={`${styles.box} ${styles.full}`}>
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Message"
          />
        </div>
      </div>

      <div className={styles.btnBox}>
        <button type="submit" className="thmBtn">
          <span className="thmBtnText">Send Message</span>
          <span className="btnIcon icon-right-arrow" />
        </button>
        {submitted && (
          <span className={styles.thanks}>Thank you! We&apos;ll be in touch.</span>
        )}
      </div>
    </form>
  );
}
