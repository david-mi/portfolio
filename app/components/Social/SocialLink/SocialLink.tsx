import { SocialData } from "../data";
import styles from "./socialLink.module.css";
import Link from "next/link";

function SocialLink({ name, href, label, icon }: SocialData) {
  return (
    <Link
      className={styles.socialLink}
      href={href}
      target="_blank"
      aria-label={label}
      title={label}
    >
      {icon}
      <p>{name}</p>
    </Link>
  );
}

export default SocialLink;