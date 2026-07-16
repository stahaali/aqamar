import { IMG } from "@/lib/images";
import styles from "./Counter.module.css";

const stats = [
  {
    value: "2",
    suffix: "K",
    label: "Project Completd",
    icon: "icon-property-1",
  },
  {
    value: "75",
    suffix: "+",
    label: "Trained Professionals",
    icon: "icon-professional",
  },
  {
    value: "100",
    suffix: "%",
    label: "Happy Customers",
    icon: "icon-costumer",
  },
  { value: "500", suffix: "K+", label: "Awards Win", icon: "icon-trophy" },
];

export default function Counter() {
  return (
    <section className={styles.section}>
      <div
        className={styles.shape}
        style={{
          backgroundImage: `url(${IMG}/shapes/counter-one-shape-1.png)`,
        }}
      />
      <div className={`container ${styles.grid}`}>
        {stats.map((item) => (
          <div key={item.label} className={styles.item}>
            <div className={styles.icon}>
              <span className={item.icon} />
            </div>
            <div>
              <h3>
                {item.value}
                <span>{item.suffix}</span>
              </h3>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
