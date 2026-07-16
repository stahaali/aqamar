import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import { IMG } from "@/lib/images";
import styles from "./Process.module.css";

const steps = [
  {
    title: "Planning",
    text: "Understanding project requirements and creating a clear plan.",
    icon: "icon-plan",
    count: "01",
  },
  {
    title: "Design",
    text: "Understanding project requirements and creating a clear plan.",
    icon: "icon-building-plan",
    count: "02",
  },
  {
    title: "Construction",
    text: "Understanding project requirements and creating a clear plan.",
    icon: "icon-construction-method",
    count: "03",
  },
  {
    title: "Delivery",
    text: "Understanding project requirements and creating a clear plan.",
    icon: "icon-property-1",
    count: "04",
  },
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div
        className={styles.bgShape}
        style={{
          backgroundImage: `url(${IMG}/shapes/process-one-bg-shape.png)`,
        }}
      />
      <div className={styles.bigText}>Process</div>
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Our Process</div>
          <AnimatedTitle className="sectionTitle" text="How We Work" />
        </div>
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.title} className={styles.card}>
              <div className={styles.icon}>
                <span className={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <div className={styles.count}>
                <span>{step.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
