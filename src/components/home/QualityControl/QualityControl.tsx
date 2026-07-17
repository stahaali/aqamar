import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./QualityControl.module.css";

const items = ["Building Inspections", "Sub-Grade Inspections"];

export default function QualityControl() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <div className="sectionTag">Our Services</div>
          <AnimatedTitle
            className="sectionTitle"
            text="Quality Control Inspections"
          />
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
