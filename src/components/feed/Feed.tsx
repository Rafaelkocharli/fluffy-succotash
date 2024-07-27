import Search from "../../ui/search";
import Select from "../../ui/select";
import styles from "./Feed.module.scss";
import Post from "../post";

const Feed = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bar}>
        <Select />
        <Search />
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default Feed;
