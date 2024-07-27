import { Link } from "react-router-dom";
import styles from "./NavElement.module.scss";

interface IProps {
  text: string;
  link: string;
  isActive: boolean;
}

const NavElement = ({ text, link, isActive }: IProps) => {
  const activeStyles = isActive ? { backgroundColor: "#e3e3e3" } : {};

  return (
    <li>
      <Link to={link} className={styles.li} style={activeStyles}>
        {text}
      </Link>
    </li>
  );
};

export default NavElement;
