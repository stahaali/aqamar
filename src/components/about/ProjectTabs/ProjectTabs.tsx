import styles from "./ProjectTabs.module.css";

const items = [
  {
    title: "Commercial Plaza",
    text: "Full-service commercial plaza development — from site planning and permits to construction and final delivery. Our team manages every phase with precision, ensuring your project stays on schedule and within budget. We handle zoning, regulatory approvals, and construction quality control so you don't have to. Built to attract tenants, generate strong returns, and deliver long-term value for your investment.",
    image: "/assets/images/architecture/commercial-plaza.webp",
  },
  {
    title: "Commercial Unit Development",
    text: "Purpose-built commercial units designed for flexibility and growth in today's competitive market. Efficient layouts maximize usable space while quality finishes create a professional, lasting impression. Our dedicated project management ensures every phase runs smoothly, on time, and within budget. Tailored specifically to your business needs — from concept through final handover.",
    image: "/assets/images/architecture/commercial-unit-development.webp",
  },
  {
    title: "Restaurants",
    text: "Restaurant build-outs and renovations handled end-to-end, from initial concept through final walkthrough. Kitchen-ready spaces are designed to meet strict health and safety codes without compromising workflow efficiency. Every finish is selected to create the right ambiance and dining experience for your guests. We manage permits, contractors, and timelines so you can focus on opening your doors.",
    image: "/assets/images/architecture/restaurants.webp",
  },
  {
    title: "Retail Stores",
    text: "Retail store construction and fit-outs that put your brand front and center from the moment customers walk in. Smart floor plans are designed to guide customer flow naturally, encouraging exploration and boosting sales. Strong curb appeal and thoughtful storefront design make a lasting first impression on every passerby. We handle every detail — from layout to finishes — creating a space that truly represents your brand.",
    image: "/assets/images/architecture/retail-stores.webp",
  },
  {
    title: "Recreation Centers",
    text: "Recreation and community center projects delivered with durable construction built to withstand years of heavy public use. Functional space programming ensures the facility truly serves the needs of the community it's designed for. Careful attention to safety, accessibility, and code compliance is built into every phase of the project. The result is a long-lasting community asset that continues to deliver value for years to come.",
    image: "/assets/images/architecture/recreation-centers.webp",
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

        <div className={styles.list}>
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`${styles.row} ${index % 2 === 1 ? styles.reverse : ""}`}
            >
              <div className={styles.media}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
