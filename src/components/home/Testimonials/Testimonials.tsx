"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Brandon Clemmer",
    role: "Home owner",
    img: "/assets/images/testimonial/testimonial-1-1.webp",
  },
  {
    name: "Alisha Martin",
    role: "Home owner",
    img: "/assets/images/testimonial/testimonial-1-2.webp",
  },
  {
    name: "Herbert Spins",
    role: "Home owner",
    img: "/assets/images/testimonial/testimonial-1-3.webp",
  },
];

const text =
  "Working with them was smooth and hassle-free. The project exceeded our expectations. Reliable, skilled, and trustworthy. They turned our vision into reality effortlessly. Their attention.";

export default function Testimonials() {
  return (
    <section className={styles.testimonial} id="testimonials">
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Testimonial</div>
          <AnimatedTitle
            className="sectionTitle"
            text={"What Our Clients\nSay About Us"}
          />
        </div>

        <Swiper
          className={styles.carousel}
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            992: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className={styles.single}>
                <div className={styles.quote1}>
                  <span className="icon-right-1" />
                </div>
                <h3 className={styles.name}>
                  <a href="#testimonials">{item.name}</a>
                </h3>
                <p className={styles.subTitle}>{item.role}</p>
                <p className={styles.text}>{text}</p>
                <div className={styles.rating}>
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                </div>
                <div className={styles.quote2}>
                  <span className="icon-left" />
                </div>
                <div className={styles.imgBox}>
                  <div className={styles.imgBoxShape1}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/shapes/testimonial-one-img-box-shape-1.webp"
                      alt=""
                    />
                  </div>
                  <div className={styles.imgBoxShape2}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/images/shapes/testimonial-one-img-box-shape-2.webp"
                      alt=""
                    />
                  </div>
                  <div className={styles.img}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={item.name} />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
