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
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email*"
        required
      />
      <input
        className={styles.input}
        type="tel"
        name="phone"
        placeholder="Phone"
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="What are the dates and details of your project?"
        required
      />
      <button type="submit" className={styles.send}>
        <span>SEND</span>
      </button>
      {submitted && (
        <p className={styles.thanks}>Thank you! We&apos;ll be in touch.</p>
      )}
    </form>
  );
}
