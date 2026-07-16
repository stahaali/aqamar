import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/images";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/#projects" },
  { label: "Portfolio", href: "/#projects" },
];

const hours = [
  "Monday: 8AM - 5AM",
  "Tuesday: 8AM - 5AM",
  "Wednesday: 8AM - 5AM",
  "Thursday: 8AM - 5AM",
  "Friday: 8AM - 5AM",
  "Saturday: 12PM - 4AM",
  "Sunday: 12AM - 4AM",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${IMG}/backgrounds/site-footer-bg.jpg)`,
        }}
      />
      <div className={styles.top}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.about}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/assets/images/footer-logo.webp"
                alt="AQ Construction"
                width={262}
                height={200}
              />
            </Link>
            <p>
              Believe that great food starts with great farming. For 40 years,
              our farm has been committed to sustainable, eco-friendly and full
              of goodness.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Pinterest">
                p
              </a>
              <a href="#" aria-label="Instagram">
                ig
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.title}>Quick links</h3>
            <ul className={styles.links}>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Hours</h3>
            <ul className={styles.hours}>
              {hours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Contact Us</h3>
            <ul className={styles.contact}>
              <li>
                <span className={`${styles.contactIcon} icon-map`} />
                <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
              </li>
              <li>
                <span className={`${styles.contactIcon} icon-call`} />
                <a href="tel:+16478029008">647-802-9008</a>
              </li>
              <li>
                <span className={`${styles.contactIcon} icon-email`} />
                <a href="mailto:abdul9008@gmail.com">abdul9008@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            Copyright© 2018 Aqamar, All Rights Reserved.
          </p>
          <p className={styles.powered}>
            Powered by{" "}
            <a
              href="https://dezyonstudio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dezon Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
