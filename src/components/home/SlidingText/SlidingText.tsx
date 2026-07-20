import styles from "./SlidingText.module.css";

const items = [
  "Fast and Reliable services",
  "Crafted with Precision",
  "24/7 Customer Service",
  "100% Satisfied Customer",
  "We Build Your Vision",
];

export default function SlidingText() {
  const row = [...items, ...items];

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.track}>
          {row.map((text, i) => (
            <div key={`${text}-${i}`} className={styles.item}>
              <div className={styles.icon}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/shapes/sliding-text-icon-1.webp"
                  alt=""
                />
              </div>
              <p className={styles.text} data-hover={text}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
