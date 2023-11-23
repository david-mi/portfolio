import styles from "./sectionTitle.module.css";

interface Props {
  title: string
}

function SectionTitle({ title }: Props) {
  return (
    <h3 className={styles.sectionTitle}>
      <span>{title}</span>
    </h3>
  );
}

export default SectionTitle;