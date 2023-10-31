import styles from "./skills.module.css";

function Skills() {
  return (
    <section className={styles.skills}>
      <h3 className={styles.title}>Compétences</h3>

      <div>
        <section>
          <h4>Front End</h4>
          <ul className={styles.skillsList}>
            <li>NextJs</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>

        <section>
          <h4>Back End</h4>
          <ul className={styles.skillsList}>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </section>

        <section>
          <h4>Divers</h4>
          <ul className={styles.skillsList}>
            <li>Git / Github</li>
            <li>Firebase</li>
            <li>Figma</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Skills;