"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Portfolio", href: "/#projects" },
];

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${sticky ? styles.headerSticky : ""}`}>
      {!sticky && (
        <div className={styles.topbar}>
          <div className={`container ${styles.topbarInner}`}>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>
                  <span className="icon-mail" />
                </span>
                <a href="mailto:info@Builza25.com">info@Builza25.com</a>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <span className="icon-map" />
                </span>
                <span>4124 Cimmaron Road, CA 92806</span>
              </li>
            </ul>

            <p className={styles.welcome}>
              Welcome To Builza Our Best Construction HTML5 Template
            </p>

            <div className={styles.topRight}>
              <p className={styles.socialTitle}>Follow Us On:</p>
              <div className={styles.social}>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" aria-label="Pinterest">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className={styles.nav}>
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/images/logo.webp"
              alt="AQ Construction"
              width={180}
              height={137}
              priority
            />
          </Link>

          <button
            className={styles.menuBtn}
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.navRight}>
            <Link href="/contact" className="thmBtn">
              <span className="thmBtnText">Get A Quote</span>
              <span className="btnIcon icon-right-arrow" />
            </Link>
            <a href="tel:+9288006780" className={styles.call}>
              <span className={styles.callIcon}>
                <span className="icon-call" />
              </span>
              <span className={styles.callText}>
                <small>Call Anytime</small>
                <strong>+92 ( 8800 ) - 6780</strong>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
