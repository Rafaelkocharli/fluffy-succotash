import Ad from "../../components/ad";
import Feed from "../../components/feed/Feed";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Feed />
      <section>
        <Ad />
      </section>
    </main>
  );
};

export default HomePage;
