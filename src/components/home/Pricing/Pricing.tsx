import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Basic Plan",
    price: "$500",
    unit: "/sqft, Starting from",
    desc: "Perfect for small residential construction projects.",
    features: [
      "Complete Structural Construction Work",
      "High-Quality Finishing Services",
      "Premium & Durable Quality Materials",
      "On-Time Project Delivery",
      "100% Guaranteed Work",
    ],
    featured: false,
  },
  {
    name: "Stander plan",
    price: "$800",
    unit: "/sqft, Starting from",
    desc: "Ideal for full residential building construction.",
    features: [
      "Complete Structural Build",
      "Interior Finishing",
      "Electrical & Plumbing",
      "Project Management",
      "100% Guaranteed Work",
    ],
    featured: true,
  },
  {
    name: "Premium Plan",
    price: "Custom",
    unit: "Pricing",
    desc: "Best for commercial & custom construction projects.",
    features: [
      "Full Project Planning",
      "Premium Materials",
      "Advanced Design & Build",
      "Dedicated Project Manager",
      "100% Guaranteed Work",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Pricing plan</div>
          <AnimatedTitle
            className="sectionTitle"
            text={"We are offering the best\npricing to help you!"}
          />
        </div>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
            >
              <div className={styles.icon}>
                <span className="icon-premium" />
              </div>
              <h3>{plan.name}</h3>
              <div className={styles.price}>
                <strong>{plan.price}</strong>
                <span>{plan.unit}</span>
              </div>
              <p className={styles.desc}>{plan.desc}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="icon-check" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="thmBtn">
                Get Quote
                <span className="btnIcon icon-right-arrow" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
