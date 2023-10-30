import styles from "./page.module.css"
import Projects from "./components/Projects/Projects"
import Social from "./components/Social/Social"

function Home() {
  return (
    <main className={styles.container}>
      <Projects />
      <Social />
    </main>
  )
}

export default Home
