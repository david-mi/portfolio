import styles from "./social.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { socialData } from "./data";
import SocialLink from "./SocialLink/SocialLink";

function Social() {
  return (
    <footer className={styles.social}>
      <SectionTitle title="Social" />
      <div className={styles.links}>
        {socialData.map((socialData) => {
          return (
            <SocialLink
              key={socialData.name}
              {...socialData}
            />
          )
        })}
      </div>
    </footer>
  );
}

export default Social;