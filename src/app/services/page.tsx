import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ServicesCards from "@/components/services/ServicesCards/ServicesCards";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services || Builza || Construction Template",
  description:
    "Architectural design, engineering, permits, ICF construction, and complete project design & construction services.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <div
            className={styles.pageHeaderBg}
            style={{
              backgroundImage:
                "url(/assets/images/services/service-banner04.webp)",
            }}
          />
          <div className="container">
            <div className={styles.pageHeaderInner}>
              <h3>Our Services</h3>
              <ul className={styles.breadcrumb}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="fas fa-angle-right" />
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </section>

        <ServicesCards />
      </main>
      <Footer />
    </>
  );
}
