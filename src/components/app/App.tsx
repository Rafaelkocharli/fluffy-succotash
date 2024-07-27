import { Route, Routes } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import styles from "./App.module.scss";
import HomePage from "../../pages/homePage";

function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" />
        <Route path="/news" />
        <Route path="/popular" />
        <Route path="/communities" />
      </Routes>
    </div>
  );
}

export default App;
