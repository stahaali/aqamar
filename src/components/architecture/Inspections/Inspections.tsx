import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./Inspections.module.css";

const inspections = [
  {
    title: "Building Inspection",
    category: "Structural",
    step: "01",
    text: "Comprehensive on-site inspections to verify structural integrity, code compliance, and construction quality at every stage of your project.",
    image: "/assets/images/architecture/1.webp",
  },
  {
    title: "Sub-Grade Inspection",
    category: "Site Work",
    step: "02",
    text: "Detailed inspection of excavation, soil preparation, compaction, and underground utilities before foundation work begins.",
    image: "/assets/images/photo/15.webp",
  },
  {
    title: "Concrete Inspection",
    category: "Concrete",
    step: "03",
    text: "Professional monitoring of concrete placement, reinforcement, formwork, and curing to ensure strength and durability.",
    image: "/assets/images/photo/3.webp",
  },
  {
    title: "Framing Inspection",
    category: "Framing",
    step: "04",
    text: "Thorough evaluation of wood and steel framing, load-bearing components, and structural connections before finishes.",
    image: "/assets/images/photo/5.webp",
  },
  {
    title: "Foundation Inspection",
    category: "Foundation",
    step: "05",
    text: "Inspection of footings, foundation walls, reinforcement, waterproofing, and drainage systems during construction.",
    image: "/assets/images/photo/12.webp",
  },
  {
    title: "Final Inspection",
    category: "Handover",
    step: "06",
    text: "A complete final assessment to confirm compliance with approved drawings, regulations, and quality standards.",
    image: "/assets/images/about/feature-sheet-1.webp",
  },
];

export default function Inspections() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Inspection Services</div>
          <AnimatedTitle
            className="sectionTitle"
            text="Site Inspections That Protect Your Build"
          />
          <p className={styles.lead}>
            From groundwork to final handover, our inspection team verifies
            quality, safety, and code compliance at every critical stage.
          </p>
        </div>

        <div className={styles.list}>
          {inspections.map((item) => (
            <article key={item.title} className={styles.row}>
              <div className={styles.left}>
                <div className={styles.media}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.date}>
                  <span className={styles.dateShape} aria-hidden="true" />
                  <strong>{item.step}</strong>
                </div>
              </div>

              <div className={styles.content}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
