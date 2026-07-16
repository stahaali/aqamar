import DistortHoverImage from "@/components/DistortHoverImage/DistortHoverImage";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./Features.module.css";

const items = [
  {
    title: "NEW HOME",
    text: "Built in 2024, on a corner lot with a covered area of 3230 Sft",
    icon: "icon-house",
  },
  {
    title: "MAIN FLOOR",
    text: "Separate Family and Living rooms, with open concept Kitchen, with Quartz counter top. A huge DEN can be converted to a bedroom on main floor",
    icon: "icon-home",
  },
  {
    title: "SECOND FLOOR",
    text: "4 Bedrooms with 3 Full bathrooms, potential for a 5th bedroom, currently a LOFT",
    icon: "icon-housing",
  },
  {
    title: "BASEMENT",
    text: "Full height basement, with rough in for washroom can serve as in-law suite",
    icon: "icon-building",
  },
  {
    title: "Appliances Included",
    text: "Stainless Steel Fridge, Stove, Built in Dishwasher and Washer and Dryer",
    icon: "icon-assets",
  },
  {
    title: "RENTAL ITEMS",
    text: "Water heater only",
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
          <AnimatedTitle
            className={`sectionTitle ${styles.heading}`}
            text="Complete Home Features"
          />
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
                3230 Sft home with 4 Bedroom 2 Story home fully built in 2024,
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
