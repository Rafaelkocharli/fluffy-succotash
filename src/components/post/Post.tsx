import Image from "../../ui/image";
import ImageRounded from "../../ui/imageRounded";
import styles from "./Post.module.scss";

const Post = () => {
  return (
    <article>
      <div className={styles.header}>
        <div className={styles.author}>
          <ImageRounded link="/#" src={"community_0.jpg"} />
          <div className={styles.name}>IT и другие приключения Шурика</div>
        </div>
        <div className={styles.date}>3 ч. назад</div>
      </div>
      <div className={styles.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
        facilisis felis, quis egestas augue. Quisque iaculis mollis tempus. Nam
        vitae nibh odio.
      </div>
      <div className={styles.image}>
        <Image src={"post_0_0.jpg"} />
      </div>
      <div className={styles.footer}>
        <div className={styles.left}>
          <div className={styles.mark}>
            <i className="fi fi-rr-heart"></i>
            <span>123 тыс.</span>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.mark}>
            <i className="fi fi-rr-comment-dots"></i>
            <span>354</span>
          </div>
          <div className={styles.mark}>
            <i className="fi fi-rr-eye"></i>
            <span>1 млн.</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
