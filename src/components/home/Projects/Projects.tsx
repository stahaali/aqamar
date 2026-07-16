"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import { IMG } from "@/lib/images";
import styles from "./Projects.module.css";

const projects = [
  { title: "Office Complex", cat: "Construction", img: "project-1-1.jpg" },
  { title: "Industrial Site", cat: "Construction", img: "project-1-2.jpg" },
  { title: "Home Renovation", cat: "Construction", img: "project-1-3.jpg" },
  { title: "Commercial Tower", cat: "Construction", img: "project-1-4.jpg" },
];

export default function Projects() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <div className={styles.top}>
          <div>
            <div className="sectionTag">Our Projects</div>
            <AnimatedTitle
              className="sectionTitle"
              text="Completed Construction Projects"
            />
          </div>
          <Link href="#contact" className="thmBtn">
            <span className="thmBtnText">More About Us</span>
            <span className="btnIcon icon-right-arrow" />
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <Swiper
            className={styles.carousel}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: SwiperClass) => {
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {projects.map((item) => (
              <SwiperSlide key={item.title}>
                <article className={styles.single}>
                  <div className={styles.imgBox}>
                    <div className={styles.img}>
                      <Image
                        src={`${IMG}/project/${item.img}`}
                        alt={item.title}
                        width={410}
                        height={470}
                      />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.textBox}>
                        <h3>
                          <Link href="#projects">{item.title}</Link>
                        </h3>
                        <p>{item.cat}</p>
                      </div>
                    </div>
                    <div className={styles.iconBox}>
                      <Link href="#projects">
                        <span className="fas fa-plus" />
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.nav}>
            <button
              ref={prevRef}
              className={styles.navBtn}
              aria-label="Previous"
              type="button"
            >
              <span className="icon-left" />
            </button>
            <button
              ref={nextRef}
              className={styles.navBtn}
              aria-label="Next"
              type="button"
            >
              <span className="icon-right-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
