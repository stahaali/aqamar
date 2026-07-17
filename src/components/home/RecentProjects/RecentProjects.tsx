import Image from "next/image";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./RecentProjects.module.css";

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

export default function RecentProjects() {
  return (
    <section className={styles.section}>
      <div className={styles.bottomShape} aria-hidden="true">
        <Image
          src="/assets/images/s-about-shape1.webp"
          alt=""
          width={396}
          height={202}
        />
      </div>
      <div className="container">
        <div className={styles.top}>
          <div className="sectionTag">Our Projects</div>
          <AnimatedTitle
            className="sectionTitle"
            text="Recent Projects"
          />
        </div>
        <div className={styles.features}>
          {features.map((item) => (
            <div key={item.title} className={styles.feature}>
              <span className={`${styles.featureIcon} ${item.icon}`} />
              <h3 className={styles.featureTitle}>{item.title}</h3>
              <p className={styles.featureText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
