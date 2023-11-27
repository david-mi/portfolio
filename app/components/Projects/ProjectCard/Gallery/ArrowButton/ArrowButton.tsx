
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
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <path strokeLinecap="round" strokeLinejoin="round" d="m13.5 9l-3 3l3 3"></path>
        </g>
      </svg>
    </button>
  );
}

export default ArrowButton;