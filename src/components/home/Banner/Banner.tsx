import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/images";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${IMG}/backgrounds/banner-one-bg.jpg)`,
        }}
      />

      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.titleBox}>
            <div className={styles.subTitle}>
              <p>Building The Future</p>
            </div>
            <h2 className={styles.title}>
              Strong Foundations,
              <br />
              Quality <span>Construction</span>
              <br />
              <span>&amp; Engineering</span>
            </h2>
          </div>
          <p className={styles.text}>
            We deliver reliable construction solutions with modern technology,
            skilled professionals, and a commitment to quality that ensures every
            project is built to last.
          </p>
          <div className={styles.btnRow}>
            <div className={styles.btnBox}>
              <Link href="#about" className="thmBtn">
                <span className="thmBtnText">Get A Quote</span>
                <span className="btnIcon icon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — exact Builza structure */}
        <div className={styles.right}>
          <div className={styles.imgBox}>
            <div className={styles.img}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/homebanner/1.webp"
                alt="Construction professional"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
