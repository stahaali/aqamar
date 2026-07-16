import DistortHoverImage from "@/components/DistortHoverImage/DistortHoverImage";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./OurMission.module.css";

export default function OurMission() {
  return (
    <section className={styles.mission}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.media}>
            <DistortHoverImage
              src="/assets/images/about/our-mission.webp"
              alt="Luxury home with pool"
            />
          </div>

          <div className={styles.content}>
            <AnimatedTitle
              as="h2"
              className={styles.title}
              text="Our Mission"
            />
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
