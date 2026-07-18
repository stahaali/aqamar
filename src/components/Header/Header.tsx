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
  { label: "Real Estate", href: "/architecture" },
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
      <nav className={styles.nav}>
        <div className={`container ${styles.navInner}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/images/logo-3.webp"
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
            <div className={styles.contactStack}>
              <a href="tel:+16478029008" className={styles.call}>
                <span className={styles.callIcon}>
                  <span className="icon-call" />
                </span>
                <span className={styles.callText}>
                  <small>Call Anytime</small>
                  <strong>647-802-9008</strong>
                </span>
              </a>
              <a href="mailto:abdul9008@gmail.com" className={styles.callEmail}>
                <span className={styles.callIconSm}>
                  <span className="icon-mail" />
                </span>
                <span className={styles.callText}>
                  <small>Preferred Contact is Email</small>
                  <strong>abdul9008@gmail.com</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
