import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us || AQ Construction",
  description:
    "Get in touch for engineering, building permits, and real estate services in the Greater Toronto Area.",
};

const infos = [
  {
    icon: "icon-map",
    title: "Our Address",
    lines: ["2565 Steeles Ave East Unit 11,", "Brampton, ON, L6T 4L6, Canada"],
  },
  {
    icon: "icon-call",
    title: "Contact Number",
    lines: [
      { text: "647-802-9008", href: "tel:+16478029008" },
      { text: "abdul9008@gmail.com", href: "mailto:abdul9008@gmail.com" },
    ],
  },
  {
    icon: "icon-business",
    title: "Hours Of Operation",
    lines: ["Mon – Fri: 8:00 AM – 5:00 PM", "Sat: 12:00 PM – 4:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <img
            className={styles.pageHeaderImg}
            src="/assets/images/contact/contact-banner.webp"
            alt=""
          />
          <div className="container">
            <div className={styles.pageHeaderInner}>
              <h3>Contact Us</h3>
              <ul className={styles.breadcrumb}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="fas fa-angle-right" />
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.info}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Our Contact <span>Information</span>
            </h2>
            <div className={styles.infoGrid}>
              {infos.map((item) => (
                <div key={item.title} className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <span className={item.icon} />
                  </div>
                  <div className={styles.infoBody}>
                    <h3>{item.title}</h3>
                    {item.lines.map((line) => {
                      if (typeof line === "string") {
                        return <p key={line}>{line}</p>;
                      }
                      return (
                        <p key={line.text}>
                          <a href={line.href}>{line.text}</a>
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.touch}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <div className={styles.touchGrid}>
              <div className={styles.mapCol}>
                <iframe
                  title="Office location map"
                  className={styles.map}
                  src="https://www.google.com/maps?q=2565+Steeles+Avenue+East+Unit+11,+Brampton,+ON+L6T+4L6&z=15&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className={styles.mapCard}>
                  <div className={styles.mapCardTop}>
                    <div>
                      <h3 className={styles.mapCardTitle}>
                        Abdul Qamar Design Engineer &amp; Realtor
                      </h3>
                      <p className={styles.mapCardAddress}>
                        2565 Steeles Ave East Unit 11, Brampton, ON, L6T 4L6,
                        Canada
                      </p>
                    </div>
                    <div className={styles.mapCardActions}>
                      <a
                        className={styles.mapCardBtn}
                        href="https://maps.google.com/?q=2565+Steeles+Avenue+East+Unit+11,+Brampton,+ON+L6T+4L6"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open in Google Maps"
                      >
                        <span className="fas fa-external-link-alt" />
                      </a>
                      <a
                        className={styles.mapCardBtn}
                        href="https://www.google.com/maps/dir/?api=1&destination=2565+Steeles+Avenue+East+Unit+11,+Brampton,+ON+L6T+4L6"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get directions"
                      >
                        <span className="fas fa-directions" />
                      </a>
                    </div>
                  </div>
                  <p className={styles.mapCardRating}>
                    <span>5.0</span>
                    <span className={styles.mapCardStar}>★</span>
                    <a
                      href="https://maps.google.com/?q=Abdul+Qamar+Design+Engineer+%26+Realtor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (10)
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.formWrap}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
