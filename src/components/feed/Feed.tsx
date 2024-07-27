import Search from "../../ui/search";
import Select from "../../ui/select";
import styles from "./Feed.module.scss";
import Post from "../post";

const Feed = () => {
  const data = [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at facilisis felis, quis egestas augue. Quisque iaculis mollis tempus. Nam vitae nibh odio.",
      authorName: "IT и другие приключения Шурика",
      authorImage: "community_0.jpg",
      image: "post_0_0.jpg",
      likes: 123000,
      comments: 354,
      views: 1000000,
      date: 1722100855,
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.bar}>
        <Select />
        <Search />
      </div>
      <Post post={data[0]} />
    </section>
  );
};

export default Feed;
