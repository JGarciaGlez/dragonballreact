import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../../src/images/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
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
