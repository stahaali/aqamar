import Image from "next/image";
import { IMG } from "@/lib/images";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  return (
    <section className={styles.section}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${IMG}/shapes/subscribe-one-shape-1.png)`,
        }}
      />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </p>
          <form className={styles.form}>
            <input type="email" placeholder="Email Address" required />
            <button type="submit" className="thmBtn">
              <span>Subscribe Now</span>
              <span className="btnIcon icon-right-arrow" />
            </button>
          </form>
        </div>
        <div className={styles.image}>
          <Image
            src={`${IMG}/resources/subscribe-one-img-1.png`}
            alt="Newsletter"
            width={420}
            height={380}
          />
        </div>
      </div>
    </section>
  );
}
