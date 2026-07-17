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
    lines: ["4140 Parker Rd. Allentown,", "New Mexico 31134"],
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
            <h2 className={styles.sectionTitle}>Our Contact Information</h2>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880!2d-79.6780124!3d43.7141956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6b4e8e722ee7%3A0xdc16cc6218766088!2sAbdul%20Qamar%20Design%20Engineer%20%26%20Realtor!5e0!3m2!1sen!2sca!4v1!5m2!1sen!2sca"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
