import Link from "next/link";
import styles from "./ProjectTabs.module.css";

const items = [
  {
    title: "Commercial Plaza",
    lead: "Full-service plaza development from site planning to final delivery.",
    text: "Our team manages every phase with precision — zoning, permits, construction quality, and timelines — so your investment attracts tenants and delivers long-term value.",
    image: "/assets/images/architecture/commercial-plaza.webp",
  },
  {
    title: "Commercial Unit Development",
    lead: "Purpose-built units designed for flexibility and growth.",
    text: "Efficient layouts maximize usable space while quality finishes create a lasting impression. From concept to handover, every phase stays on time and on budget.",
    image: "/assets/images/architecture/commercial-unit-development.webp",
  },
  {
    title: "Restaurants",
    lead: "Restaurant build-outs handled end-to-end, concept to walkthrough.",
    text: "Kitchen-ready spaces meet health and safety codes without losing workflow. We manage permits, contractors, and timelines so you can focus on opening day.",
    image: "/assets/images/architecture/restaurants.webp",
  },
  {
    title: "Retail Stores",
    lead: "Retail fit-outs that put your brand front and center.",
    text: "Smart floor plans guide customer flow, while strong curb appeal makes a lasting first impression. Layout to finishes — a space that represents your brand.",
    image: "/assets/images/architecture/retail-stores.webp",
  },
  {
    title: "Recreation Centers",
    lead: "Community facilities built for years of heavy public use.",
    text: "Space programming, safety, accessibility, and code compliance are built into every phase — creating a lasting community asset that delivers ongoing value.",
    image: "/assets/images/architecture/recreation-centers.webp",
  },
  {
    title: "Interior Remodeling",
    lead: "Transform outdated spaces into modern, functional interiors.",
    text: "Complete remodeling with quality finishes tailored to your style and needs — kitchens, living areas, and commercial interiors built for lasting comfort and value.",
    image: "/assets/images/about/about3.webp",
  },
];

export default function ProjectTabs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.title}>
            Commercial <span>Developments</span>
          </h2>
          <p className={styles.lead}>
            From retail centers to office complexes and commercial plazas, we
            deliver end-to-end commercial development — expert construction,
            permits, and project management built for your business&apos;s growth.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.media}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.snippet}>{item.lead}</p>
                <p className={styles.itemText}>{item.text}</p>
                <Link href="/architecture" className={styles.link}>
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
