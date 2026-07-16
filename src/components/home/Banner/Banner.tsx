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
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.titleBox}>
            <div className={styles.subTitle}>
              <p>Building The Future</p>
            </div>
            <h2 className={styles.title}>
              <span className={styles.line}>Real Estate, Engineering</span>
              <span className={styles.line}>
                Services, Building Permits In
              </span>
              <span className={`${styles.line} ${styles.accent}`}>
                Greater Toronto Area &amp;
              </span>
              <span className={`${styles.line} ${styles.accent}`}>
                Engineering
              </span>
            </h2>
          </div>
          <p className={styles.text}>
            Legal Basement, Sun Rooms, New Home or Addition, Commercial Units, Drawings & Building Permits.
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
