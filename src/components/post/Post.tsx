import Image from "../../ui/image";
import styles from "./Post.module.scss";
import StatsBlock from "../../ui/statsBlock/StatsBlock";
import PostHeader from "../../ui/postHeader/PostHeader";

interface IProps {
  post: {
    authorImage: string;
    authorName: string;
    title: string;
    image: string;
    likes: number;
    comments: number;
    views: number;
    date: number;
  };
}

const Post = ({ post }: IProps) => {
  return (
    <article>
      <PostHeader
        authorImage={post.authorImage}
        authorName={post.authorName}
        date={post.date}
      />
      <div className={styles.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
        facilisis felis, quis egestas augue. Quisque iaculis mollis tempus. Nam
        vitae nibh odio.
      </div>
      <div className={styles.image}>
        <Image src={"post_0_0.jpg"} />
      </div>
      <div className={styles.footer}>
        <StatsBlock icon="likes" value={123000} />
        <StatsBlock icon="comments" value={354} />
        <StatsBlock icon="views" value={1000000} />
      </div>
    </article>
  );
};

export default Post;
