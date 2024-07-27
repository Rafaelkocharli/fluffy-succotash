import ImageRounded from "../imageRounded";
import styles from "./PostHeader.module.scss";
import { timestampToString } from "../../helpers/timestampToString";

interface IProps {
  authorImage: string;
  authorName: string;
  date: number;
}

const PostHeader = ({ authorImage, authorName, date }: IProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.author}>
        <ImageRounded link="/#" src={authorImage} />
        <div className={styles.name}>{authorName}</div>
      </div>
      <div className={styles.date}>{timestampToString(date)}</div>
    </div>
  );
};

export default PostHeader;
