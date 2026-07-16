import Image from "next/image";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import { IMG } from "@/lib/images";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Brandon Clemmer",
    role: "Home owner",
    img: "testimonial-1-1.jpg",
  },
  {
    name: "Alisha Martin",
    role: "Home owner",
    img: "testimonial-1-2.jpg",
  },
  {
    name: "Herbert Spins",
    role: "Home owner",
    img: "testimonial-1-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Testimonial</div>
          <AnimatedTitle
            className="sectionTitle"
            text={"What Our Clients\nSay About Us"}
          />
        </div>
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.card}>
              <div className={styles.quote}>“</div>
              <div className={styles.stars}>★★★★★</div>
              <p>
                Working with them was smooth and hassle-free. The project
                exceeded our expectations. Reliable, skilled, and trustworthy.
                They turned our vision into reality effortlessly. Their
                attention.
              </p>
              <div className={styles.author}>
                <div className={styles.imgBox}>
                  <Image
                    src={`${IMG}/testimonial/${item.img}`}
                    alt={item.name}
                    width={70}
                    height={70}
                  />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
