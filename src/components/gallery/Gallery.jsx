import Header from "../header/Header";
import styles from "./Gallery.module.css";
import myImage from "../../../src/images/goku.png";
import myImage2 from "../../../src/images/goku2.png";
import myImage3 from "../../../src/images/goku3.png";
import myImage4 from "../../../src/images/goku4.png";
import myImage5 from "../../../src/images/goku5.png";
import myImage6 from "../../../src/images/goku6.png";
import myImage7 from "../../../src/images/goku7.png";
import myImage8 from "../../../src/images/goku8.png";

export const Gallery = () => {
  return (
    <>
      <Header />
      <div className={styles.img}>
        <img src={myImage} />
        <img src={myImage2} />
        <img src={myImage3} />
        <img src={myImage4} />
        <img src={myImage5} />
        <img src={myImage6} />
        <img src={myImage7} />
        <img src={myImage8} />
      </div>
    </>
  );
};
