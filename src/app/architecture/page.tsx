import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Offerings from "@/components/architecture/Offerings/Offerings";
import Acquisition from "@/components/architecture/Acquisition/Acquisition";
import Inspections from "@/components/architecture/Inspections/Inspections";
import styles from "./architecture.module.css";

export const metadata: Metadata = {
  title: "Real Estate || AQ Construction",
  description:
    "Architectural offerings including as-built surveys, feasibility studies, renderings, 3D modeling, construction documents, and consultant coordination.",
};

export default function ArchitecturePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <div
            className={styles.pageHeaderBg}
            style={{
              backgroundImage:
                "url(/assets/images/architecture/archtecure-banner.webp)",
            }}
          />
          <div className="container">
            <div className={styles.pageHeaderInner}>
              <h3>Real Estate</h3>
              <ul className={styles.breadcrumb}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="fas fa-angle-right" />
                </li>
                <li>Real Estate</li>
              </ul>
            </div>
          </div>
        </section>

        <Offerings />
        <Acquisition />
        <Inspections />
      </main>
      <Footer />
    </>
  );
}
