import styles from "./page.module.css"
import Projects from "./components/Projects/Projects"
import Social from "./components/Social/Social"
import Presentation from "./components/Presentation/Presentation"

function Home() {
  return (
    <main className={styles.container}>
      <Presentation />
      <Projects />
      <Social />
    </main>
  )
}

export default Home
