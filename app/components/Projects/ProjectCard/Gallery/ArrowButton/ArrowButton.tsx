
import styles from "./arrowButton.module.css";
import { CustomArrowProps } from "react-slick";

interface Props extends CustomArrowProps {
  role: "previous" | "next"
}

function ArrowButton({ onClick, role }: Props) {
  const classNames = `${styles.button} ${styles[role]}`

  return (
    <button onClick={onClick} className={classNames}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535ZM9.97 15.53a.75.75 0 0 1 0-1.06L12.44 12L9.97 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0Z" clipRule="evenodd">
        </path>
      </svg>
    </button>
  );
}

export default ArrowButton;