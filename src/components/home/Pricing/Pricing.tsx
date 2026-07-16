import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Basic Plan",
    price: "500",
    customPrice: false,
    unit: "/sqft, Starting from",
    desc: "Perfect for small residential construction projects.",
    features: [
      "Complete Structural Construction Work",
      "High-Quality Finishing Services",
      "Premium & Durable Quality Materials",
      "On-Time Project Delivery",
      "100% Guaranteed Work",
    ],
    btn: "Get Quote",
  },
  {
    name: "Stander plan",
    price: "800",
    customPrice: false,
    unit: "/sqft, Starting from",
    desc: "Ideal for full residential building construction.",
    features: [
      "Complete Structural Build",
      "Interior Finishing",
      "Electrical & Plumbing",
      "Project Management",
      "100% Guaranteed Work",
    ],
    btn: "Get Quote",
  },
  {
    name: "Premium Plan",
    price: "",
    customPrice: true,
    unit: "",
    desc: "Best for commercial & custom construction projects.",
    features: [
      "Full Project Planning",
      "Premium Materials",
      "Advanced Design & Build",
      "Dedicated Project Manager",
      "100% Guaranteed Work",
    ],
    btn: "Request Estimate",
  },
];

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Pricing plan</div>
          <AnimatedTitle
            className="sectionTitle"
            text={"We are offering the best\npricing to help you!"}
          />
        </div>

        <div className={styles.inner}>
          <div className={styles.row}>
            {plans.map((plan) => (
              <div key={plan.name} className={styles.col}>
                <div className={styles.single}>
                  <div className={styles.icon}>
                    <span className="icon-premium" />
                  </div>
                  <div className={styles.singleInner}>
                    <div className={styles.singleShape}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/images/pricing/pricing-one-single-shape-1.webp"
                        alt=""
                      />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.packName}>
                        <p>{plan.name}</p>
                      </div>
                      <h3 className={styles.priceBox}>
                        {plan.customPrice ? (
                          "Custom Pricing"
                        ) : (
                          <>
                            <span className={styles.dolar}>$</span>
                            {plan.price}
                            <span className={styles.validity}>{plan.unit}</span>
                          </>
                        )}
                      </h3>
                      <p className={styles.text}>{plan.desc}</p>
                    </div>
                    <div className={styles.pointsBox}>
                      <ul className={styles.points}>
                        {plan.features.map((f) => (
                          <li key={f}>
                            <div className={styles.pointIcon}>
                              <span className="icon-check" />
                            </div>
                            <div className={styles.pointText}>
                              <p>{f}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.btnBox}>
                      <Link href="/contact" className="thmBtn">
                        <span className="thmBtnText">{plan.btn}</span>
                        <span className="btnIcon icon-right-arrow" />
                      </Link>
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
