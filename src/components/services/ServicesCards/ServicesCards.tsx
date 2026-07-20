import ExperienceAbout from "@/components/services/ExperienceAbout/ExperienceAbout";
import styles from "./ServicesCards.module.css";

type Card = {
  title: string;
  count: string;
  text: string;
  icon?: string;
  iconClass?: string;
};

const cards: Card[] = [
  {
    title: "Architectural / Structural Design & Drawings",
    count: "01",
    icon: "/assets/images/services/icons/icon-design.svg",
    text: "Detailed architectural and structural design drawings that turn your vision into a solid, buildable plan — accurate, code-compliant, and construction-ready.",
  },
  {
    title: "New Homes, Additions & Alterations",
    count: "02",
    icon: "/assets/images/services/icons/icon-home.svg",
    text: "Whether you're building a brand-new home or expanding your existing space, our team delivers quality construction from ground-up builds to seamless additions and alterations.",
  },
  {
    title: "2nd & 3rd Units, Below Grade Entrance, Sunrooms & Deck",
    count: "03",
    icon: "/assets/images/services/icons/icon-units.svg",
    text: "From additional dwelling units to below grade entrances, sunrooms, and decks — we help you unlock extra living space and boost your property's value",
  },
  {
    title: "Retail, Restaurants & Commercial Permits",
    count: "04",
    icon: "/assets/images/services/icons/icon-commercial.svg",
    text: "From retail spaces to restaurants and commercial plazas, we handle permits and construction end-to-end — getting your business open, compliant, and ready to serve.",
  },
  {
    title: "Subgrade, Structural & Geo-Technical Engineering",
    count: "05",
    icon: "/assets/images/services/icons/icon-engineering.svg",
    text: "Structural, subgrade, and geo-technical engineering reviews with detailed inspections and practical solutions.",
  },
  {
    title: "Uncompromising Quality Control",
    count: "06",
    icon: "/assets/images/services/icons/icon-quality.svg",
    text: "Every project undergoes strict quality checks at every stage — from materials to final finishing — ensuring safety, durability, and lasting craftsmanship you can rely on.",
  },
];

export default function ServicesCards() {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.head}>
            <h2 className={`sectionTitle ${styles.heading}`}>
              Our Experience is <span>ready for you</span>
            </h2>
          </div>
          <div className={styles.grid}>
            {cards.map((item) => (
              <article key={item.count} className={styles.card}>
                <div className={styles.top}>
                  {item.iconClass ? (
                    <span className={`${styles.icon} ${item.iconClass}`} />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.icon}
                      alt=""
                      className={styles.iconImg}
                    />
                  )}
                  <span className={styles.count}>{item.count}</span>
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
                <div className={styles.shape}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/images/services/shape-2.webp"
                    alt=""
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ExperienceAbout />
    </>
  );
}
