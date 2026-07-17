import Image from "next/image";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./Industries.module.css";

const colOne = [
  { title: "Residential", img: "/assets/images/photo/1.webp" },
  { title: "Industrial", img: "/assets/images/photo/3.webp" },
  { title: "Public Sector", img: "/assets/images/photo/5.webp" },
];

const colTwo = [
  { title: "Commercial", img: "/assets/images/photo/2.webp" },
  { title: "Civil Works", img: "/assets/images/photo/4.webp" },
  { title: "Specialized", img: "/assets/images/photo/6.webp" },
];

function IndustryItem({ title, img }: { title: string; img: string }) {
  return (
    <div className={styles.item}>
      <span className={styles.thumb}>
        <Image src={img} alt={title} width={72} height={72} />
      </span>
      <span className={styles.itemTitle}>{title}</span>
    </div>
  );
}

export default function Industries() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className="sectionTag">Industries We Serve</div>
            <AnimatedTitle
              className={`sectionTitle ${styles.title}`}
              text="Industries Shaped by Our Work"
            />
            <p className={styles.text}>
              From homes and commercial spaces to industrial and public
              projects — we deliver design, permits, and construction support
              across the GTA.
            </p>
          </div>

          <div className={styles.lists}>
            <ul className={styles.list}>
              {colOne.map((item) => (
                <li key={item.title}>
                  <IndustryItem title={item.title} img={item.img} />
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              {colTwo.map((item) => (
                <li key={item.title}>
                  <IndustryItem title={item.title} img={item.img} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
