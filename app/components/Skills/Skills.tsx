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
import SectionTitle from "../SectionTitle/SectionTitle";
import Category from "./Category/Category";

function Skills() {
  return (
    <section className={styles.skills}>
      <SectionTitle title="Compétences" />
      <div className={styles.sections}>
        <Category title="Front End">
          <li><NextJsIcon />NextJs</li>
          <li><ReduxIcon />Redux</li>
          <li><ReactIcon />React</li>
          <li><TypescriptIcon />TypeScript</li>
        </Category>
        <Category title="Back End">
          <li><ExpressJsIcon />ExpressJs</li>
          <li><MongoDbIcon /> MongoDB</li>
          <li><MysqlIcon /> MySQL</li>
        </Category>
        <Category title="Divers">
          <li><GitIcon />Git</li>
          <li><GithubIcon />Github</li>
          <li><FirebaseIcon />Firebase</li>
          <li><FigmaIcon />Figma</li>
        </Category>
      </div>
    </section>
  );
}

export default Skills;