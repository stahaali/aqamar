"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./Testimonials.module.css";

const MAPS_URL =
  "https://www.google.com/maps/place/Abdul+Qamar+Design+Engineer+%26+Realtor/@43.7141956,-79.6780124,17z/data=!4m8!3m7!1s0x882b6b4e8e722ee7:0xdc16cc6218766088!8m2!3d43.7141956!4d-79.6780124!9m1!1b1!16s%2Fg%2F11fd4xr7zl";

const testimonials = [
  {
    name: "Vinu Patel",
    text: "Abdul's approach as a professional structural engineer encompasses thorough reviews, significant design input, and detailed inspections. He is consistently able to provide timely solutions, demonstrating his comprehensive expertise.",
  },
  {
    name: "Amit Nayak",
    text: "Abdul did the Designing and Approval work required for my Basement Apartment unit with City of Brampton. A fine gentleman and true professional — got things done smoothly and in a timely manner.",
  },
  {
    name: "Harris Javaid",
    text: "We bought our second home from Abdul. Extremely happy with his advice and patience. He met our demands within budget and found us our new home.",
  },
  {
    name: "T Asghar",
    text: "Abdul has an excellent engineering mindset — always comes up with outside-the-box solutions. Completes projects on time. Highly recommended for construction jobs.",
  },
  {
    name: "Khawer Khan",
    text: "Very efficient and more than qualified. Prompt to reply to City of Mississauga officers and modify plans when required. Will stay in touch for future projects.",
  },
  {
    name: "iTi Permit",
    text: "Very professional and experienced. Specialist in legal basement apartments — helped single-car garage homeowners get legal basement permits.",
  },
  {
    name: "Joaquin",
    text: "We have worked with Abdul for almost 3 years now on different projects and it all have worked perfectly.",
  },
  {
    name: "Choudry Sian",
    text: "Abdul Qamar is the best and quickest service provider with very reasonable cost.",
  },
];

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
          centeredSlides
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={`review-${index}`}>
              <article className={styles.single}>
                <div className={styles.quote1}>
                  <span className="icon-right-1" />
                </div>
                <h3 className={styles.name}>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </h3>
                <p className={styles.text}>{item.text}</p>
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
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
