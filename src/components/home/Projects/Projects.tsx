import Image from "next/image";
import styles from "./Projects.module.css";

const rowOne = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => ({
  src: `/assets/images/projects/${n}.webp`,
  alt: `Completed project ${n - 4}`,
}));

const rowTwo = Array.from({ length: 19 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/assets/images/photo/${n}.webp`,
    alt: `AQ Construction project ${n}`,
  };
});

function MarqueeRow({
  items,
  direction,
}: {
  items: { src: string; alt: string }[];
  direction: "ltr" | "rtl";
}) {
  const loop = [...items, ...items];

  return (
    <div className={styles.row}>
      <div
        className={`${styles.track} ${
          direction === "ltr" ? styles.ltr : styles.rtl
        }`}
      >
        {loop.map((item, i) => (
          <div key={`${item.src}-${i}`} className={styles.card}>
            <Image
              src={item.src}
              alt={item.alt}
              width={320}
              height={420}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <div className={styles.top}>
          <div className="sectionTag">Our Projects</div>
          <h2 className={`sectionTitle ${styles.title}`}>
            Completed Construction <span>Projects</span>
          </h2>
        </div>
      </div>

      <div className={styles.marquee}>
        <MarqueeRow items={rowOne} direction="ltr" />
        <MarqueeRow items={rowTwo} direction="rtl" />
      </div>
    </section>
  );
}
