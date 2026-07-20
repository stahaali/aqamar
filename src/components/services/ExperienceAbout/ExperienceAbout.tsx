import Link from "next/link";
import styles from "./ExperienceAbout.module.css";

const CIRCLE_TEXT = "engineering excellence · engineering excellence · ";

export default function ExperienceAbout() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.media}>
            <div className={styles.years}>
              <span className={styles.yearsNum}>30</span>
              <span className={styles.yearsLabel}>
                Years
                <br />
                Of Experience
              </span>
            </div>

            <div className={styles.capsule}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/architecture/1.webp"
                alt="Modern architecture project"
              />
            </div>

            <div className={styles.circle} aria-hidden="true">
              <svg viewBox="0 0 200 200">
                <defs>
                  <path
                    id="experience-circle"
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                  />
                </defs>
                <text>
                  <textPath href="#experience-circle">{CIRCLE_TEXT}</textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>
              we shape our buildings, thereafter they shape us.
            </h2>
            <p className={styles.text}>
              From concept drawings to construction-ready plans, we guide every
              project with precision engineering and practical site experience
              across the Greater Toronto Area.
            </p>
            <p className={styles.text}>
              Whether you need a new home, commercial build-out, or structural
              review, our team delivers clear communication, code-compliant
              design, and craftsmanship you can rely on for years to come.
            </p>
            <Link href="/about" className={styles.cta}>
              About Company
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
