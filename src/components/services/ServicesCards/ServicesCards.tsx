import styles from "./ServicesCards.module.css";

const cards = [
  {
    title: "Architectural Design, Drawings & Engineering",
    count: "01",
    icon: "icon-building-plan",
    text: "Professional architectural drawings and engineering services for permits, renovations, and new builds across the GTA.",
  },
  {
    title: "New Homes, Plazas & Retail Space Permits",
    count: "02",
    icon: "icon-factory",
    text: "Complete design and permit support for new homes, plazas, and retail spaces — from concept through city approval.",
  },
  {
    title: "2nd Unit, Below Grade Entrance, Sunroom & Deck",
    count: "03",
    icon: "icon-building",
    text: "Legal second units, below-grade entrances, sunrooms, and decks designed to meet Ontario Building Code requirements.",
  },
  {
    title: "Insulated Concrete Forms Design & Construction",
    count: "04",
    icon: "icon-housing",
    text: "ICF design and construction solutions for energy-efficient, durable residential and commercial structures.",
  },
  {
    title: "Subgrade, Structural & Geo-Technical Engineering",
    count: "05",
    icon: "icon-interior-design-1",
    text: "Structural, subgrade, and geo-technical engineering reviews with detailed inspections and practical solutions.",
  },
  {
    title: "Complete Project Design & Construction",
    count: "06",
    icon: "icon-building-construction",
    text: "End-to-end project design and construction support — drawings, permits, and coordination from start to finish.",
  },
];

export default function ServicesCards() {
  return (
    <section className={styles.section}>
      <div className="container">
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
