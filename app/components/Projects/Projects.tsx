
import { projectsData } from "./data";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./projects.module.css"
import SectionTitle from "../SectionTitle/SectionTitle";

function Projects() {
  return (
    <section className={styles.container}>
      <SectionTitle title="Projets Persos" />
      <div className={styles.projects} id="projects">
        {projectsData.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </section>
  );
}

export default Projects;