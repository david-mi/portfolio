
import { projectsData } from "./data";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./projects.module.css"

function Projects() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projets</h2>
      <div className={styles.projects}>
        {projectsData.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </section>
  );
}

export default Projects;