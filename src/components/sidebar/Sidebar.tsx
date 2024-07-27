import styles from "./Sidebar.module.scss";
import NavElement from "../../ui/navElement";
import ImageRounded from "../../ui/imageRounded";

const Sidebar = () => {
  const navigation = [
    { text: "Главная", link: "/", isActive: true },
    { text: "Профиль", link: "/profile", isActive: false },
    { text: "Новости", link: "/news", isActive: false },
    { text: "Популярное", link: "/popular", isActive: false },
    { text: "Сообщества", link: "/communities", isActive: false },
  ];

  return (
    <aside className={styles.sidebar}>
      <ImageRounded
        src={"avatar.png"}
        link="/profile"
        style={{ marginTop: 30, marginBottom: 18 }}
      />
      <nav>
        <ul>
          {navigation.map((navEl, index) => {
            return (
              <NavElement
                key={index}
                text={navEl.text}
                link={navEl.link}
                isActive={navEl.isActive}
              />
            );
          })}
        </ul>
      </nav>
      <div className={styles.logo}>
        <a href="/">
          The <br />
          Network
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
