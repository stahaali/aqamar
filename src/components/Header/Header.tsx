"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Architecture", href: "/architecture" },
  { label: "Contact", href: "/contact" },
];

function isActive(href: string, pathname: string, hash: string) {
  if (href === "/") {
    return pathname === "/" && !hash;
  }

  if (href.startsWith("/#")) {
    const target = href.slice(1);
    return pathname === "/" && hash === target;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash || "");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

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
                <a href="mailto:abdul9008@gmail.com">abdul9008@gmail.com</a>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <span className="icon-map" />
                </span>
                <span>2565 Steeles Avenue East Unit 11, Brampton, ON, L6T 4L6</span>
              </li>
            </ul>

            <div className={styles.topRight}>
              <p className={styles.socialTitle}>Follow Us On:</p>
              <div className={styles.social}>
                <a
                  href="#"
                  aria-label="Facebook"
                  className={styles.socialFacebook}
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" aria-label="Yelp" className={styles.socialYelp}>
                  <i className="fab fa-yelp" />
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
              src="/assets/images/footer-logo.webp"
              alt="AQ Construction"
              width={262}
              height={200}
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
            {navItems.map((item) => {
              const active = isActive(item.href, pathname, hash);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={active ? styles.active : undefined}
                    onClick={() => {
                      setOpen(false);
                      if (item.href.startsWith("/#")) {
                        setHash(item.href.slice(1));
                      } else if (item.href === "/") {
                        setHash("");
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.navRight}>
            <a href="tel:+16478029008" className={styles.call}>
              <span className={styles.callIcon}>
                <span className="icon-call" />
              </span>
              <span className={styles.callText}>
                <small>Call Anytime</small>
                <strong>647-802-9008</strong>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
