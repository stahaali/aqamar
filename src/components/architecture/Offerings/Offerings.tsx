import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import styles from "./Offerings.module.css";

const offerings = [
  {
    title: "As-Built Surveys",
    icon: "icon-plan",
    text: "For existing buildings, this step is key to identifying the existing conditions, dimensions, and potential issues with a space. Our team creates a report and as-built drawings that will be used for the design and to aid the client in understanding the required updates for the project. In addition, our team meets the client and property manager in person to start the coordination process and identify solutions as early as possible.",
  },
  {
    title: "Feasibility Studies",
    icon: "icon-planning",
    text: "This service offers valuable insights to clients embarking on new projects. We delve deep into the project's potential, analyzing various factors such as site conditions, regulatory requirements, risk analysis, and feasibility testing to provide clients with a clear understanding of the project's viability and potential challenges. We empower our clients to make informed decisions, mitigate risks, and optimize outcomes through our industry expertise.",
  },
  {
    title: "Conceptual Renderings",
    icon: "icon-architecture",
    text: "Our firm excels in providing captivating conceptual renderings that bring our clients' visions to life. We understand the importance of visual storytelling in the design process and collaborate closely with our partners to capture their vision and creatively convey it. These renderings inspire confidence and excitement among stakeholders, driving the project forward with clarity and enthusiasm.",
  },
  {
    title: "3D Modeling",
    icon: "icon-building-plan",
    text: "We leverage cutting-edge software and our skilled team members to create intricate 3D models that accurately represent the project's architectural elements. These models not only enhance design communication but also facilitate informed decision-making, allowing for a seamless transition from concept to realization; they serve as invaluable tools for presentations and project evaluation.",
  },
  {
    title: "Construction Documents",
    icon: "icon-task",
    text: "We specialize in precise and detailed Construction Documents that streamline permitting and construction processes, prioritizing quality and compliance. Through close coordination and advanced technology, we deliver clear plans, specifications and schedules that serve as a roadmap for successful project execution. Our commitment to accuracy and efficiency minimizes errors, reduces rework, and helps achieve project goals on time and within budget.",
  },
  {
    title: "Coordination with Consultants",
    icon: "icon-professional",
    text: "We value close coordination with our outside consultants to effectively integrate our expertise across all disciplines involved. We create synergies that optimize project outcomes and exceed client expectations. Our commitment to teamwork and collaboration enables us to deliver comprehensive solutions throughout the life of our projects that address complex challenges with creativity and competence.",
  },
] as const;

export default function Offerings() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">What We Offer</div>
          <AnimatedTitle className="sectionTitle" text="Offerings" />
        </div>
        <div className={styles.grid}>
          {offerings.map((item) => (
            <article key={item.title} className={styles.item}>
              <span className={`${styles.icon} ${item.icon}`} />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
