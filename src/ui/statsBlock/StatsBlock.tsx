import { numberToString } from "../../helpers/numberToString";
import styles from "./StatsBlock.module.scss";

type StatType = "likes" | "views" | "comments";

interface IProps {
  icon: StatType;
  value: number;
}

interface IStats {
  likes: string;
  views: string;
  comments: string;
}

const stats: IStats = {
  likes: "fi fi-rr-heart",
  views: "fi fi-rr-eye",
  comments: "fi fi-rr-comment-dots",
};

const StatsBlock = ({ icon, value }: IProps) => {
  return (
    <div className={styles.mark}>
      <i className={stats[icon]}></i>
      <span>{numberToString(value)}</span>
    </div>
  );
};

export default StatsBlock;
