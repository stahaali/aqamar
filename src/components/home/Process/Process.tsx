import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./Process.module.css";

const steps = [
  {
    title: "Planning",
    text: "Understanding project requirements and creating a clear plan.",
    icon: "icon-plan",
  },
  {
    title: "Design",
    text: "Understanding project requirements and creating a clear plan.",
    icon: "icon-building-plan",
  },
  {
    title: "Quality Control",
    text: "Understanding project requirements and creating a clear plan.",
    icon: "icon-construction-method",
  },
  {
    title: "Delivery",
    text: "Understanding project requirements and creating a clear plan.",
    icon: "icon-property-1",
  },
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.bgShape}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/process/process-one-bg-shape.webp"
          alt=""
        />
      </div>
      <div className={styles.bigText}>
        <h2>Process</h2>
      </div>
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Our Process</div>
          <AnimatedTitle className="sectionTitle" text="How We Work" />
        </div>
        <div className={styles.inner}>
          <div className={styles.row}>
            {steps.map((step) => (
              <div key={step.title} className={styles.col}>
                <div className={styles.singleInner}>
                  <div className={styles.shape1} />
                  <div className={styles.single}>
                    <div className={styles.icon}>
                      <span className={step.icon} />
                    </div>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.text}>{step.text}</p>
                  </div>
                  <div className={styles.countInner} />
                  <div className={styles.count}>
                    <div className={styles.countShape1}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/images/process/process-one-count-shape-1.webp"
                        alt=""
                      />
                    </div>
                    <div className={styles.countShape2}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/images/process/process-one-count-shape-2.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
