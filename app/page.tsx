import styles from "./page.module.css"
import Projects from "./components/Projects/Projects"

function Home() {
  return (
    <main className={styles.container}>
      <Projects />
    </main>
  )
}

export default Home
