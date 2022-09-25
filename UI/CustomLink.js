import Link from "next/link";
import styles from "../styles/link.module.scss";

const CustomLink = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className={styles.navbar__link}>{text}</a>
    </Link>
  );
};

export default CustomLink;
