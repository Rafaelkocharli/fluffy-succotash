import styles from "./Select.module.scss";

const Select = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selected}>
        Актуальное <i className="fi fi-bs-angle-down"></i>
      </div>
    </div>
  );
};

export default Select;
