import Image from "next/image";
import { IMG } from "@/lib/images";
import styles from "./WhoWeServe.module.css";

const categories = [
  { title: "Residential", img: "who-we-serve-single-img-1-1.jpg" },
  { title: "Commercial", img: "who-we-serve-single-img-1-2.jpg" },
  { title: "Industrial", img: "who-we-serve-single-img-1-3.jpg" },
  { title: "Renovation", img: "who-we-serve-single-img-1-4.jpg" },
  { title: "Architecture", img: "who-we-serve-single-img-1-5.jpg" },
  { title: "Interior", img: "who-we-serve-single-img-1-6.jpg" },
  { title: "Maintenance", img: "who-we-serve-single-img-1-7.jpg" },
  { title: "Consulting", img: "who-we-serve-single-img-1-8.jpg" },
];

export default function WhoWeServe() {
  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Image
            src={`${IMG}/resources/who-we-serve-img-1.jpg`}
            alt="Share your ideas"
            width={480}
            height={560}
            className={styles.sideImg}
          />
          <div className={styles.formCard}>
            <h2>
              Share
              <br />
              Your Ideas
              <br />
              With Us
            </h2>
            <form className={styles.form}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
              <select defaultValue="">
                <option value="" disabled>
                  Type Of Service
                </option>
                <option>Type Of Service 01</option>
                <option>Type Of Service 02</option>
                <option>Type Of Service 03</option>
                <option>Type Of Service 04</option>
                <option>Type Of Service 05</option>
              </select>
              <textarea placeholder="Write a Message" rows={4} />
              <button type="submit" className="thmBtn">
                <span>Send Message</span>
                  <span className="btnIcon icon-right-arrow" />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.right}>
          {categories.map((item) => (
            <div key={item.title} className={styles.cat}>
              <div className={styles.catImg}>
                <Image
                  src={`${IMG}/resources/${item.img}`}
                  alt={item.title}
                  width={180}
                  height={140}
                />
              </div>
              <div className={styles.catTitle}>
                <span>◆</span>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
