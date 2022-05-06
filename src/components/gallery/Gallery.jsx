import Header from "../header/Header";
import styles from "./Gallery.module.css";
export const Gallery = () => {
  return (
    <>
      <Header />

      <div className={styles.img}>
        <img src="../../../src/assets/images/goku.png" />
        <img src="../../../src/assets/images/goku2.png" />
        <img src="../../../src/assets/images/goku3.png" />
        <img src="../../../src/assets/images/goku4.png" />
        <img src="../../../src/assets/images/goku5.png" />
        <img src="../../../src/assets/images/goku6.png" />
        <img src="../../../src/assets/images/goku8.png" />
        <img src="../../../src/assets/images/goku9.png" />
      </div>
    </>
  );
};
