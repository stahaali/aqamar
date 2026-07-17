import Image from "next/image";
import styles from "./RealEstate.module.css";

const blocks = [
  {
    title: "Acquisition, Purchase & Sale of Real Estate",
    icon: "icon-property-1",
    text: "I helped hundreds of clients to look for there ideal property. Commercial and residential to meet their long term and short term goals. I worked with a new immigrant family moving from UAE to Canada. Working together for almost one and a half year we acquired this College street, downtown Toronto property. It is a commercial/residential mix use property and serving my clients needs since then. I helped many many clients buy their dream homes and enjoy their life styles in different municipalities in Ontario including the Greater Toronto Area.",
  },
  {
    title: "Design Build & Sold Properties",
    icon: "icon-building-construction",
    text: "We work with a team of professionals, Architects, Structural Engineers, Geo-technical and Civil Engineers, to design, get required approvals, and build any project with the highest quality control standards as per OPSS and Canadian Standards",
  },
];

export default function RealEstate() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.media}>
            <Image
              src="/assets/images/13.webp"
              alt="College Street commercial property in downtown Toronto"
              width={840}
              height={900}
              className={styles.image}
            />
          </div>
          <div className={styles.cards}>
            {blocks.map((block) => (
              <article key={block.title} className={styles.card}>
                <div className={styles.top}>
                  <span className={`${styles.icon} ${block.icon}`} />
                </div>
                <h3 className={styles.title}>{block.title}</h3>
                <p className={styles.text}>{block.text}</p>
                <div className={styles.shape}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/images/services/shape-2.webp"
                    alt=""
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
