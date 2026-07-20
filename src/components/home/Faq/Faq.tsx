"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer Civil Engineering, Construction, Architectural Planning, Project Management, Renovation, Interior & Exterior Finishing, and Real Estate Consultancy for residential, commercial, and industrial projects.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. We undertake residential homes, commercial buildings, offices, plazas, industrial facilities, and renovation projects.",
  },
  {
    question: "Do you provide complete turnkey construction services?",
    answer:
      "We provide complete project management services.",
  },
  {
    question: "Can you help with property buying and selling?",
    answer:
      "Absolutely. We provide professional real estate consultancy, property buying, selling, investment guidance, and valuation services.",
  },
  {
    question: "Do you prepare construction estimates and BOQs?", 
    answer:
      "Yes. We provide detailed cost estimates, Bills of Quantities (BOQs), material calculations, and project budgeting.",
  },
  {
    question: "How do I get a quotation?",
    answer:
      "Simply contact us by phone, WhatsApp, or email with your project details. We'll review your requirements and provide a customized quotation.",
  },
  {
    question: "How long does a construction project take?",
    answer:
      "The timeline depends on the size and complexity of the project. After reviewing your requirements, we provide a detailed project schedule.",
  },
  {
    question: "Do you ensure quality and safety standards?",
    answer:
      "Yes. We follow industry best practices, quality control procedures, and safety regulations throughout every stage of construction.",
  },
  {
    question: "Can I monitor the progress of my project?",
    answer:
      "Yes. We provide regular updates, site progress reports, and maintain transparent communication throughout the project.",
  },
  {
    question: "Why should I choose Abdul Qamar Engineer & Realtor?",
    answer:
      "Experienced Engineering Team · Professional Project Management · High-Quality Construction · Transparent Pricing · On-Time Project Delivery · Trusted Real Estate Consultancy · Dedicated Customer Support",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.shapeLeft} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/shape-3.webp" alt="" />
      </div>

      <div className="container">
        <div className={styles.head}>
          <div className={styles.tag}>
            <span className={styles.tagLine} />
            FAQ
            <span className={styles.tagLine} />
          </div>
          <h2 className={`sectionTitle ${styles.title}`}>
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={item.question}
                className={`${styles.item}${open ? ` ${styles.itemOpen}` : ""}`}
              >
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`${styles.chevron} ${open ? "fas fa-chevron-up" : "fas fa-chevron-down"}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={styles.answerWrap}
                  style={{
                    maxHeight: open ? "320px" : "0px",
                  }}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
