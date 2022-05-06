import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src="../../../src/assets/images/logo.png" alt="logo" />
          </div>
          <nav className="navbar">
            <NavLink to="/">Home</NavLink> |
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
