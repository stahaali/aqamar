import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import { IMG } from "@/lib/images";
import styles from "./Blog.module.css";

const posts = [
  {
    title: "Top Construction Tips for a Strong & Durable Building",
    img: "blog-1-1.jpg",
    day: "10",
    month: "Nov",
  },
  {
    title: "Modern Construction Materials You Should Know",
    img: "blog-1-2.jpg",
    day: "15",
    month: "Aug",
  },
  {
    title: "Common Construction Mistakes and How to Avoid Them",
    img: "blog-1-3.jpg",
    day: "25",
    month: "Mar",
  },
];

export default function Blog() {
  return (
    <section className={styles.blog} id="blog">
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Our Blog</div>
          <AnimatedTitle className="sectionTitle" text="Latest Blog & News" />
        </div>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.title} className={styles.card}>
              <div className={styles.imgBox}>
                <Image
                  src={`${IMG}/blog/${post.img}`}
                  alt={post.title}
                  width={400}
                  height={280}
                />
                <span className={styles.tag}>Construction</span>
                <div className={styles.date}>
                  <strong>{post.day}</strong>
                  <span>{post.month}</span>
                </div>
              </div>
              <div className={styles.content}>
                <ul className={styles.meta}>
                  <li>Admin</li>
                  <li>Comment</li>
                </ul>
                <h3>
                  <Link href="#blog">{post.title}</Link>
                </h3>
                <p>
                  Learn essential construction tips to ensure safety,
                  durability, and long-term performance.
                </p>
                <Link href="#blog" className={styles.readMore}>
                  Read More <span className="icon-right-arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
