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
                src="/assets/images/services/experience-about.webp"
                alt="Engineer on construction site"
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
              Building <span>Everything,</span> Everywhere
            </h2>
            <p className={styles.text}>
              From new home construction to full builds, sunrooms, and interior
              remodeling, we deliver complete residential construction solutions
              designed to expand your living space and boost property value. On
              the commercial side, we handle everything from full-service
              commercial plaza development and purpose-built commercial units to
              restaurant build-outs, retail store fit-outs, and recreation and
              community center projects — each delivered with efficient layouts,
              code compliance, and quality finishes built for long-term success.
              Backing every project is our expertise in architectural and
              structural design, turning your vision into accurate, buildable
              plans, along with rigorous engineering inspections and quality
              control that ensure safety, compliance, and lasting structural
              integrity from start to finish.
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
