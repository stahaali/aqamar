"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import styles from "./AnimatedTitle.module.css";

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
};

export default function AnimatedTitle({
  text,
  className = "",
  as: Tag = "h2",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const lines = text.split("\n");
  let charIndex = 0;

  return (
    <Tag
      ref={ref}
      aria-label={text.replace(/\n/g, " ")}
      className={`${className} ${styles.title} ${active ? styles.active : ""}`}
    >
      {lines.map((line, li) => (
        <span key={li} className={styles.line} aria-hidden="true">
          {line.split(" ").map((word, wi) => (
            <span key={wi} className={styles.word}>
              {word.split("").map((ch, ci) => {
                const delay = charIndex * 0.028;
                charIndex += 1;
                return (
                  <span
                    key={ci}
                    className={styles.char}
                    style={{ transitionDelay: `${delay}s` }}
                  >
                    {ch}
                  </span>
                );
              })}
              {wi < line.split(" ").length - 1 ? (
                <span className={styles.space}>&nbsp;</span>
              ) : null}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
