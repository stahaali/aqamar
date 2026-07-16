import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle/AnimatedTitle";
import { IMG } from "@/lib/images";
import styles from "./Team.module.css";

const team = [
  { name: "Adam Smith", role: "Team Leader", img: "team-1-1.jpg" },
  { name: "Andrew Devito", role: "Team Leader", img: "team-1-2.jpg" },
  { name: "Alisha Martin", role: "Team Leader", img: "team-1-3.jpg" },
  { name: "Boris Green", role: "Team Leader", img: "team-1-4.jpg" },
];

export default function Team() {
  return (
    <section className={styles.team} id="team">
      <div className="container">
        <div className={styles.head}>
          <div className="sectionTag">Our Team</div>
          <AnimatedTitle className="sectionTitle" text="Meet Our Expert Team" />
        </div>
        <div className={styles.grid}>
          {team.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.imgBox}>
                <Image
                  src={`${IMG}/team/${member.img}`}
                  alt={member.name}
                  width={400}
                  height={460}
                />
                <ul className={styles.social}>
                  <li>
                    <a href="#">f</a>
                  </li>
                  <li>
                    <a href="#">𝕏</a>
                  </li>
                  <li>
                    <a href="#">in</a>
                  </li>
                </ul>
              </div>
              <div className={styles.content}>
                <h3>
                  <Link href="#team">{member.name}</Link>
                </h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
