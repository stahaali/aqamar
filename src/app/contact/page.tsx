import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { IMG } from "@/lib/images";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact || Builza || Construction Template",
  description:
    "Get in touch with Builza — reach us for construction and building project enquiries.",
};

const infos = [
  {
    icon: "icon-call",
    label: "Contact Us",
    value: "647-802-9008",
    href: "tel:+16478029008",
  },
  {
    icon: "icon-email",
    label: "Mail Us",
    value: "abdul9008@gmail.com",
    href: "mailto:abdul9008@gmail.com",
  },
  {
    icon: "icon-map",
    label: "Our Office Location",
    value: "12 Green Road 05 New Yark",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <div
            className={styles.pageHeaderBg}
            style={{
              backgroundImage: `url(${IMG}/backgrounds/page-header-bg.jpg)`,
            }}
          />
          <div className="container">
            <div className={styles.pageHeaderInner}>
              <h3>Contact</h3>
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
            <div className={styles.infoGrid}>
              {infos.map((item) => (
                <div key={item.label} className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <span className={item.icon} />
                  </div>
                  <p>{item.label}</p>
                  <h3>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div className="container">
            <div className={styles.inner}>
              <div className={styles.grid}>
                <div className={styles.left}>
                  <iframe
                    title="Office location map"
                    className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    allowFullScreen
                  />
                </div>
                <div className={styles.right}>
                  <h3 className={styles.formTitle}>Get A Free Quote</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
