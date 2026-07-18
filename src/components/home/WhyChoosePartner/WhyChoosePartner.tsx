import Image from "next/image";
import styles from "./WhyChoosePartner.module.css";

const features = [
  {
    title: "Quality Excellence",
    text: "ISO certified processes ensuring the highest standards in every project we deliver.",
    icon: "icon-trophy",
  },
  {
    title: "Safety First",
    text: "Comprehensive safety protocols and OSHA compliance on all construction sites.",
    icon: "icon-vetted",
  },
  {
    title: "Expert Team",
    text: "Highly skilled engineers and technicians with decades of combined experience.",
    icon: "icon-professional",
  },
  {
    title: "Global Standards",
    text: "International best practices and cutting-edge technology in all our solutions.",
    icon: "icon-assets",
  },
];

export default function WhyChoosePartner() {
  return (
    <>
      <section className={styles.banner}>
        <div className={`container ${styles.bannerInner}`}>
          <div className={styles.bannerLeft}>
            <p className={styles.eyebrow}>— Why Choose AQ Engineering Services</p>
            <h2 className={styles.bannerTitle}>
              Your Trusted Engineering Partner
            </h2>
          </div>
          <p className={styles.bannerText}>
            Delivering reliable, efficient, and future-ready engineering
            solutions every time.
          </p>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={`container ${styles.featuresInner}`}>
          <div className={styles.media}>
            <Image
              src="/assets/images/003.webp"
              alt="Engineering planning and blueprints"
              width={620}
              height={500}
              className={styles.image}
            />
          </div>
          <div className={styles.features}>
            {features.map((item) => (
              <div key={item.title} className={styles.feature}>
                <span className={`${styles.icon} ${item.icon}`} />
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
