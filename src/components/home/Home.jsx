import Header from "../header/Header";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.main}></div>
    </>
  );
};
