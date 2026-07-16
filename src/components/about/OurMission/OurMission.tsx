import Image from "next/image";
import styles from "./OurMission.module.css";

export default function OurMission() {
  return (
    <section className={styles.mission}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.media}>
            <Image
              src="/assets/images/about/our-mission.webp"
              alt="Luxury home with pool"
              fill
              sizes="(max-width: 991px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <div className={styles.tag}>About Our Company</div>
            <h2 className={styles.title}>Our Mission</h2>
            <p className={styles.text}>
              Real estate is our passion from selecting the right property as
              per your needs, to designing and building as per today&apos;s
              standards. We plan, design, develop &amp; build all residential
              and commercial real estate projects. No project is too big or too
              small, we work with our clients and provide service which exceeds
              their satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
