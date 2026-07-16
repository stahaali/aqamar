import { IMG } from "@/lib/images";
import styles from "./WhyChoose.module.css";

const items = [
  {
    count: "01",
    title: "Qualified Planning",
    text: "These properties are used for business purposes, such as office buildings, retail spaces, warehouses,",
    icon: "icon-planning",
  },
  {
    count: "02",
    title: "Construction Quality",
    text: "These properties are used for business purposes, such as office buildings, retail spaces, warehouses,",
    icon: "icon-factory",
  },
  {
    count: "03",
    title: "Professional Design",
    text: "These properties are used for business purposes, such as office buildings, retail spaces, warehouses,",
    icon: "icon-plan",
  },
  {
    count: "04",
    title: "Expert Worker",
    text: "These properties are used for business purposes, such as office buildings, retail spaces, warehouses,",
    icon: "icon-vetted",
  },
];

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${IMG}/backgrounds/why-choose-one-bg.jpg)`,
        }}
      />
      <div className={styles.bigText}>Why Choose Us</div>
      <div className="container">
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.count}>{item.count}</span>
              <div className={styles.icon}>
                <span className={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
