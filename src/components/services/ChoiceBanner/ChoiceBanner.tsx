import Link from "next/link";
import styles from "./ChoiceBanner.module.css";

export default function ChoiceBanner() {
  return (
    <section className={styles.section} aria-label="Featured project highlight">
      <div className={styles.panel}>
        <div className={styles.badge}>
          <span className={styles.badgeYear}>30+</span>
          <span className={styles.badgeText}>Years Trusted</span>
        </div>
        <h2 className={styles.title}>
          Engineering Excellence.
          <br />
          Proven Results.
        </h2>
        <p className={styles.text}>
          Among our top residential, commercial, and real estate projects —
          designed, permitted, and built with precision.
        </p>
        <Link href="/architecture" className={styles.cta}>
          See our projects
        </Link>
      </div>

      <div className={styles.media}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/projects/recent-project.webp"
          alt="Featured construction project"
          className={styles.image}
        />
        <span className={styles.tagTop}>Commercial Plaza Development</span>
        <span className={styles.tagBadge} aria-hidden="true">
          <span className={styles.tagBadgeYear}>AQ</span>
          Best Build
        </span>
        <span className={styles.tagHandle}>@aqamar</span>
        <span className={styles.rating} aria-label="Client rating 5 out of 5">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </span>
      </div>
    </section>
  );
}
