import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/images";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./About.module.css";

const features = [
  {
    title: "property management",
    text: "Leveraging cutting-edge technology to enhance efficiency",
    icon: "icon-plan",
  },
  {
    title: "Interior design and staging",
    text: "Leveraging cutting-edge technology to enhance efficiency",
    icon: "icon-interior-design-1",
  },
];

const checks = [
  "Experienced & Certified Team",
  "Quality Materials & Modern Tools",
  "On-Time Project Delivery",
  "Safety & Customer Satisfaction",
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.imgBox}>
            <div className={styles.img}>
              <Image
                src={`${IMG}/resources/about-one-img-1.jpg`}
                alt="About Builza"
                width={470}
                height={560}
              />
            </div>
            <div className={styles.shape1} />
            <div className={styles.img2}>
              <Image
                src={`${IMG}/resources/about-one-img-2.jpg`}
                alt="Construction site"
                width={230}
                height={300}
              />
            </div>
            <div className={styles.experience}>
              <div className={styles.experienceCount}>
                <h3>35</h3>
                <span>+</span>
              </div>
              <p className={styles.experienceText}>Years Of Experience</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className="sectionTag">About Our Company</div>
          <AnimatedTitle
            className="sectionTitle"
            text="Building Strong Foundations for a Better Future"
          />
          <p className={styles.text}>
            We are a professional construction company delivering high-quality
            residential and commercial projects. With years of experience,
            skilled professionals, and on-time construction solutions.
          </p>

          <div className={styles.features}>
            {features.map((item) => (
              <div key={item.title} className={styles.feature}>
                <div className={styles.featureIcon}>
                  <span className={item.icon} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.checkRow}>
            <ul className={styles.checks}>
              {checks.map((item) => (
                <li key={item}>
                  <span className="icon-check" />
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.clients}>
              <div className={styles.clientImgs}>
                {[1, 2, 3, 4].map((n) => (
                  <Image
                    key={n}
                    src={`${IMG}/resources/about-one-review-img-1-${n}.jpg`}
                    alt=""
                    width={44}
                    height={44}
                  />
                ))}
              </div>
              <div>
                <div className={styles.stars}>★★★★★</div>
                <p>Clients 4.8 (3,567 Reviews)</p>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <Link href="#contact" className="thmBtn">
              Read More
              <span className="btnIcon icon-right-arrow" />
            </Link>
            <div className={styles.author}>
              <Image
                src={`${IMG}/resources/about-one-author-img-1.jpg`}
                alt="Dainel Brain"
                width={60}
                height={60}
              />
              <div>
                <h5>Dainel Brain</h5>
                <Image
                  src={`${IMG}/resources/about-one-author-sign.png`}
                  alt="signature"
                  width={90}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
