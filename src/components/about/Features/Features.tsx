import DistortHoverImage from "@/components/DistortHoverImage/DistortHoverImage";
import styles from "./Features.module.css";

const items = [
  {
    title: "New Custom Home Design",
    text: "Custom home design tailored to your lifestyle — blending modern architecture, quality craftsmanship, and personalized layouts to bring your dream home to life.",
    icon: "icon-house",
  },
  {
    title: "Home Additions & Alterations",
    text: "Expert home additions and alterations to expand your space and boost property value — expert craftsmanship for room extensions, remodels, and structural upgrades.",
    icon: "icon-home",
  },
  {
    title: "Additional Living Units",
    text: "Expand your property with additional living units — expertly built for extra family space, rental income, or long-term flexibility.",
    icon: "icon-housing",
  },
  {
    title: "Sun Rooms",
    text: "Bright, energy-efficient sun rooms designed to bring natural light and extra living space to your home — perfect for relaxation year round.",
    icon: "icon-building",
  },
  {
    title: "ADU Construction",
    text: "Professional ADU construction to add functional living space, increase property value, and create rental-ready units on your existing lot",
    icon: "icon-assets",
  },
  {
    title: "Interior Remodeling",
    text: "Complete interior remodeling to transform outdated spaces into modern, functional living areas — quality finishes tailored to your style and needs.",
    icon: "icon-best-price",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.bottomShape} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/shape.webp" alt="" />
      </div>
      <div className="container">
        <div className={styles.head}>
          <h2 className={`sectionTitle ${styles.heading}`}>
            End-to-End <span>Solutions</span>
          </h2>
        </div>

        <div className={styles.inner}>
          <div className={styles.media}>
            <div className={styles.image}>
              <DistortHoverImage
                src="/assets/images/1.webp"
                alt="98 Shepherd Drive, Barrie Ontario"
                fill
              />
            </div>
            <div className={styles.experienceBadge} aria-hidden="true" />
            <div className={styles.mediaCard}>
              <div className={styles.mediaEyebrow}>Hello</div>
              <h3 className={styles.mediaTitle}>
                Welcome 98 Shepherd Drive, Barrie Ontario
              </h3>
              <p className={styles.mediaText}>
                Home with 4 Bedroom 2 Story home fully built in 2024,
                Easy access from Mapleview Drive East to Hwy 400 and Simco Lake
                front
              </p>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.grid}>
              {items.map((item) => (
                <article key={item.title} className={styles.card}>
                  <div className={styles.icon}>
                    <span className={item.icon} />
                  </div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
