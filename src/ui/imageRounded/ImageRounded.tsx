import { Link } from "react-router-dom";
import styles from "./ImageRounded.module.scss";
import Image from "../image";

interface IProps {
  src: string;
  link: string;
  style?: object;
}

const ImageRounded = ({ src, link, style }: IProps) => {
  return (
    <div className={styles.image} style={style}>
      <Link to={link}>
        <Image src={src} />
      </Link>
    </div>
  );
};

export default ImageRounded;
