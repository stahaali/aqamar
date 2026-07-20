import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Real Estate", href: "/architecture" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(/assets/images/footer/site-footer-bg.webp)`,
        }}
      />
      <div className={styles.top}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.about}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/assets/images/logo-3.webp"
                alt="AQ Construction"
                width={262}
                height={200}
              />
            </Link>
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
            <h3 className={styles.title}>Contact Us</h3>
            <ul className={styles.contact}>
              <li>
                <span className={`${styles.contactIcon} icon-map`} />
                <span>2565 Steeles Avenue East Unit 11, Brampton, ON, L6T 4L6</span>
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
