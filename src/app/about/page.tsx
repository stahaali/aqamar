import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import About from "@/components/home/About/About";
import OurMission from "@/components/about/OurMission/OurMission";
import Features from "@/components/about/Features/Features";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us || Builza || Construction Template",
  description:
    "Learn about Abdul Rauf Qamar — Professional Engineer & Realtor with 30+ years of construction experience in the Greater Toronto Area.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pageHeader}>
          <div
            className={styles.pageHeaderBg}
            style={{
              backgroundImage:
                "url(/assets/images/about/about-banner4.webp)",
            }}
          />
          <div className="container">
            <div className={styles.pageHeaderInner}>
              <h3>About Us</h3>
              <ul className={styles.breadcrumb}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="fas fa-angle-right" />
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </section>

        <About plainBg />
        <OurMission />
        <Features />
      </main>
      <Footer />
    </>
  );
}
