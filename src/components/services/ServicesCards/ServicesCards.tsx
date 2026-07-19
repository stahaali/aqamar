import styles from "./ServicesCards.module.css";

const cards = [
  {
    title: "Architectural / Structural Design & Drawings",
    count: "01",
    icon: "icon-building-plan",
    text: "Detailed architectural and structural design drawings that turn your vision into a solid, buildable plan — accurate, code-compliant, and construction-ready.",
  },
  {
    title: "New Homes, Additions & Alterations",
    count: "02",
    icon: "icon-factory",
    text: "Whether you're building a brand-new home or expanding your existing space, our team delivers quality construction from ground-up builds to seamless additions and alterations.",
  },
  {
    title: "2nd & 3rd Units, Below Grade Entrance, Sunrooms & Deck",
    count: "03",
    icon: "icon-building",
    text: "From additional dwelling units to below grade entrances, sunrooms, and decks — we help you unlock extra living space and boost your property's value",
  },
  {
    title: "Retail, Restaurants & Commercial Permits",
    count: "04",
    icon: "icon-housing",
    text: "From retail spaces to restaurants and commercial plazas, we handle permits and construction end-to-end — getting your business open, compliant, and ready to serve.",
  },
  {
    title: "Subgrade, Structural & Geo-Technical Engineering",
    count: "05",
    icon: "icon-interior-design-1",
    text: "Structural, subgrade, and geo-technical engineering reviews with detailed inspections and practical solutions.",
  },
  {
    title: "Uncompromising Quality Control",
    count: "06",
    icon: "icon-building-construction",
    text: "Every project undergoes strict quality checks at every stage — from materials to final finishing — ensuring safety, durability, and lasting craftsmanship you can rely on.",
  },
];

export default function ServicesCards() {
  return (
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
                <span className={`${styles.icon} ${item.icon}`} />
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
  );
}
