import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/images";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Portfolio", href: "/#projects" },
];

const services = [
  "Architectural Design, Drawings & Engineering Services",
  "New Homes, Plazas & Retail Space Design & Permits",
  "2nd Unit, Below Grade Entrance, Sunroom, Deck",
  "Insulated Concrete Forms Design & Construction",
  "Subgrade, Structural & Geo-Technical Engineering",
  "We Provide Complete Project Design & Construction",
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
                src="/assets/images/logo.webp"
                alt="AQ Construction"
                width={140}
                height={107}
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
            <h3 className={styles.title}>Our Services</h3>
            <ul className={styles.links}>
              {services.map((item) => (
                <li key={item}>
                  <Link href="#services">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>Contact Us</h3>
            <ul className={styles.contact}>
              <li>4140 Parker Rd. Allentown, New Mexico 31134</li>
              <li>
                <a href="tel:+885747546027">+88 574 7546 027</a>
              </li>
              <li>
                <a href="mailto:Builza@gmail.com">Builza@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            Copyright© 2026 <Link href="/">Builza</Link>. All Rights Reserved.
          </p>
          <ul>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
