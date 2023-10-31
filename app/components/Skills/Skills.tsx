import {
  ExpressJsIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GithubIcon,
  NextJsIcon,
  ReactIcon,
  ReduxIcon,
  TypescriptIcon,
  MongoDbIcon,
  MysqlIcon
}
  from "@/icons"
import styles from "./skills.module.css";

function Skills() {
  return (
    <section className={styles.skills}>
      <h3 className={styles.title}>Compétences</h3>

      <div>
        <section>
          <h4>Front End</h4>
          <ul className={styles.skillsList}>
            <li><NextJsIcon className={styles.svg} />NextJs</li>
            <li><ReduxIcon className={styles.svg} />Redux</li>
            <li><ReactIcon className={styles.svg} />React</li>
            <li><TypescriptIcon className={styles.svg} />TypeScript</li>
          </ul>
        </section>

        <section>
          <h4>Back End</h4>
          <ul className={styles.skillsList}>
            <li><ExpressJsIcon className={styles.svg} />ExpressJs</li>
            <li><MongoDbIcon className={styles.svg} /> MongoDB</li>
            <li><MysqlIcon className={styles.svg} /> MySQL</li>
          </ul>
        </section>

        <section>
          <h4>Divers</h4>
          <ul className={styles.skillsList}>
            <li><GitIcon className={styles.svg} />Git</li>
            <li><GithubIcon className={styles.svg} />Github</li>
            <li><FirebaseIcon className={styles.svg} />Firebase</li>
            <li><FigmaIcon className={styles.svg} />Figma</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Skills;