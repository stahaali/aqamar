import styles from "./Acquisition.module.css";

const items = [
  {
    title: "Residential Homes & Condos",
    text: "Expert guidance for buying, selling, and developing residential homes and condominiums — from first viewing to closing, with clear advice on value, condition, and long-term potential.",
    image: "/assets/images/architecture/residential-homes-condos.webp",
  },
  {
    title: "Farm Houses",
    text: "Specialized support for farm house acquisitions and improvements — assessing property potential, rural regulations, and development opportunities tailored to country living.",
    image: "/assets/images/architecture/farm-houses.webp",
  },
  {
    title: "Farm Buildings",
    text: "Acquisition and development of farm buildings and agricultural structures — practical planning for barns, storage, and working facilities that support productive land use.",
    image: "/assets/images/architecture/farm-buildings.webp",
  },
  {
    title: "Commercial Properties",
    text: "End-to-end support for commercial property deals — retail, office, and mixed-use opportunities evaluated for location, returns, zoning, and long-term business growth.",
    image: "/assets/images/architecture/commercial-properties.webp",
  },
  {
    title: "Feasibility Studies",
    text: "In-depth feasibility studies that analyze site conditions, market demand, regulations, and risk — so you can invest with clarity and confidence before committing capital.",
    image: "/assets/images/architecture/feasibility-studies.webp",
  },
  {
    title: "Real Estate Development Projects",
    text: "Full-cycle real estate development — from land acquisition and concept through permits, construction coordination, and delivery of projects built for lasting value.",
    image: "/assets/images/architecture/real-estate-development-projects.webp",
  },
];

export default function Acquisition() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Real Estate</div>
          <h2 className={styles.title}>
            Real Estate Acquisition and <span>Development</span>
          </h2>
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
