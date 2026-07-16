"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import { IMG } from "@/lib/images";
import styles from "./Services.module.css";

const services = [
  {
    title: "Architectural Design, Drawings & Engineering Services",
    img: "services-1-1.jpg",
    count: "01",
    icon: "icon-building-construction",
  },
  {
    title: "New Homes, Plazas & Retail Space Design & Permits",
    img: "services-1-2.jpg",
    count: "02",
    icon: "icon-factory",
  },
  {
    title: "2nd Unit, Below Grade Entrance, Sunroom, Deck",
    img: "services-1-3.jpg",
    count: "03",
    icon: "icon-building",
  },
  {
    title: "Insulated Concrete Forms Design & Construction",
    img: "services-1-4.jpg",
    count: "04",
    icon: "icon-housing",
  },
  {
    title: "Subgrade, Structural & Geo-Technical Engineering",
    img: "services-1-5.jpg",
    count: "05",
    icon: "icon-interior-design-1",
  },
  {
    title: "We Provide Complete Project Design & Construction",
    img: "services-1-2.jpg",
    count: "06",
    icon: "icon-building-construction",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div
        className={styles.shape}
        style={{
          backgroundImage: `url(${IMG}/shapes/services-one-shape-1.png)`,
        }}
      />
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Our Services</div>
          <AnimatedTitle
            className="sectionTitle"
            text="Building Permits & Investments Opportunities"
          />
        </div>

        <Swiper
          className={styles.carousel}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {services.map((item) => (
            <SwiperSlide key={item.title}>
              <article className={styles.single}>
                <div className={styles.content}>
                  <h3 className={styles.title}>
                    <Link href="/services">{item.title}</Link>
                  </h3>
                  <p className={styles.text}>
                    Stylish interior and durable exterior solutions for
                    long-lasting results.
                  </p>
                  <div className={styles.count}>{item.count}</div>
                </div>
                <div className={styles.imgBox}>
                  <div className={styles.icon}>
                    <span className={item.icon} />
                  </div>
                  <div className={styles.img}>
                    <Image
                      src={`${IMG}/services/${item.img}`}
                      alt={item.title}
                      width={360}
                      height={260}
                    />
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
