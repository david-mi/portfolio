import { PropsWithChildren } from "react"
import styles from "./category.module.css";

interface Props extends PropsWithChildren {
  title: string
}

function Category({ title, children }: Props) {
  return (
    <section className={styles.category}>
      <h4>{title}</h4>
      <ul className={styles.skillsList}>
        {children}
      </ul>
    </section>
  );
}

export default Category;