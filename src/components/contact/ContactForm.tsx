"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const payload = {
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        message: data.get("message"),
      };

      // Prefer Next API in `next dev`; fall back to PHP for static `out` hosting
      let res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 404 || res.status === 405) {
        res = await fetch("/api/contact.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
      window.setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        required
        disabled={loading}
      />
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email*"
        required
        disabled={loading}
      />
      <input
        className={styles.input}
        type="tel"
        name="phone"
        placeholder="Phone"
        disabled={loading}
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="What are the dates and details of your project?"
        required
        disabled={loading}
      />
      <button type="submit" className={styles.send} disabled={loading}>
        <span>{loading ? "SENDING..." : "SEND"}</span>
      </button>
      {submitted && (
        <p className={styles.thanks}>Thank you! We&apos;ll be in touch.</p>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}
