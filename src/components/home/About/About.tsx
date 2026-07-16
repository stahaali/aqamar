import { IMG } from "@/lib/images";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import DistortHoverImage from "@/components/DistortHoverImage/DistortHoverImage";
import styles from "./About.module.css";

type AboutProps = {
  /** White background (About page). Home keeps cream primary. */
  plainBg?: boolean;
};

export default function About({ plainBg = false }: AboutProps) {
  return (
    <section
      className={`${styles.about} ${plainBg ? styles.plainBg : ""}`}
      id="about"
    >
      <div className={`${styles.topShape} ${styles.floatBobY}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/about/shape.webp" alt="" />
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.imgBox}>
            <div className={styles.img}>
              <DistortHoverImage
                src="/assets/images/about/about-one-img-1.jpg"
                alt="About construction team"
              />
            </div>
            <div className={styles.shape1} />
            <div className={styles.img2}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/resources/about-one-img-2.jpg`}
                alt="Construction site"
              />
            </div>
            <div className={styles.experience}>
              <div className={styles.experienceCount}>
                <h3>30</h3>
                <span>+</span>
              </div>
              <p className={styles.experienceText}>Years Of Experience</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className="sectionTag">About Our Company</div>
          <AnimatedTitle
            className="sectionTitle"
            text="Building Strong Foundations for a Better Future"
          />
          <p className={styles.text}>
            I am Abdul Rauf Qamar a proud Professional Engineer &amp; Realtor in
            the Greater Toronto Area. I earned my Masters Degree in Civil
            Engineering and had more than 30 years of experience in the
            construction industry. I worked as a builder, inspector, designer
            and project manager. My main goal is to give back and help
            community. I found that I can do that best by helping my clients to
            acquire, develop and enjoy the fruits of their investment in real
            estate, whether that be a new home, improvements, commercial
            buildings or land for development. Our strength is our clients &amp;
            provide services which exceed their expectations. As an engineer
            safety and quality of work is always first.
          </p>
        </div>
      </div>
    </section>
  );
}
