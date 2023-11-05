
import { projectsData } from "./data";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./projects.module.css"

function Projects() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Projets Persos</h3>
      <div className={styles.projects}>
        {projectsData.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </section>
  );
}

export default Projects;