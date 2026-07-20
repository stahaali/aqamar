import DistortHoverImage from "@/components/DistortHoverImage/DistortHoverImage";
import styles from "./About.module.css";

type AboutProps = {
  /** White background (About page). Home keeps cream primary. */
  plainBg?: boolean;
};

export default function About({ plainBg = false }: AboutProps) {
  const tag = plainBg ? "About Us" : "About Our Company";

  return (
    <section
      className={`${styles.about} ${plainBg ? styles.plainBg : ""}`}
      id="about"
    >
      {!plainBg && (
        <div className={`${styles.topShape} ${styles.floatBobY}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/images/about/shape.webp" alt="" />
        </div>
      )}
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          {plainBg ? (
            <div className={styles.verticalPair}>
              <div className={styles.verticalImg}>
                <DistortHoverImage
                  src="/assets/images/about/about3.webp"
                  alt="Engineering design workspace"
                  fill
                />
              </div>
              <div className={styles.verticalImg}>
                <DistortHoverImage
                  src="/assets/images/about/2.jpg"
                  alt="Construction site worker"
                  fill
                />
              </div>
            </div>
          ) : (
            <div className={styles.heroMedia}>
              <div className={styles.heroImage}>
                <DistortHoverImage
                  src="/assets/images/about/about-one-img-1.webp"
                  alt="Architectural construction model"
                  fill
                />
              </div>
              <div className={styles.cornerBadge} aria-hidden="true" />
            </div>
          )}
        </div>

        <div className={styles.right}>
          <div className="sectionTag">{tag}</div>
          {plainBg ? (
            <h2 className={`sectionTitle ${styles.title}`}>
              Building Excellence, <span>Delivering Trust</span>
            </h2>
          ) : (
            <h2 className={`sectionTitle ${styles.title}`}>
              <span>Engineering Excellence</span> for Every Project.
            </h2>
          )}
          <p className={styles.text}>
            At Abdul Qamar Engineer &amp; Realtor, we specialize in civil
            engineering, construction, and real estate solutions with a
            commitment to quality, innovation, and client satisfaction. Our
            experienced team delivers reliable engineering services, modern
            construction projects, and professional property consultancy
            tailored to residential, commercial, and industrial needs. From
            planning and design to execution and project management, we ensure
            every project is completed with precision, transparency, and the
            highest industry standards. Our goal is to build lasting
            relationships by delivering exceptional results that exceed
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
