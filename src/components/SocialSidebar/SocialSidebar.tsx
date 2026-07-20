import styles from "./SocialSidebar.module.css";

const links = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: "fab fa-facebook-f",
    className: styles.facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "fab fa-instagram",
    className: styles.instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "fab fa-linkedin-in",
    className: styles.linkedin,
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/",
    icon: "fab fa-yelp",
    className: styles.yelp,
  },
];

export default function SocialSidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Social media">
      <ul className={styles.list}>
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`${styles.link} ${item.className}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
            >
              <span className={item.icon} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
