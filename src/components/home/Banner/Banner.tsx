import Link from "next/link";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(/assets/images/homebanner/homebanner.webp)`,
        }}
      />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.line}>From Plans to Permits</span>
            <span className={`${styles.line} ${styles.accent}`}>
              We Handle It All.
            </span>
          </h2>
          <p className={styles.text}>
            Expert Engineering, Building Permits &amp; Real Estate Services in
            the Greater Toronto Area.
          </p>
          <div className={styles.btnRow}>
            <div className={styles.btnBox}>
              <Link href="/contact" className="thmBtn">
                <span className="thmBtnText">Get A Quote</span>
                <span className="btnIcon icon-right-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
