import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Header.module.css";
import dreamerLogo from "../images/dreamerLogo12grey.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.logo}>
          <Link
            to="/"
            className={styles.logoLink}
            arial-label="logo Dreamer Tattoo"
          >
            <img
              src={dreamerLogo}
              alt="logo Dreamer Tattoo"
              width="394"
              height="58"
            />
          </Link>
        </div>
        <nav className={styles.wrapperNav}>
          <ul className={styles.menu}>
            <li>
              <Link to="/" className={styles.btn}>
                Studio
              </Link>
            </li>
            <li>
              <Link to="/tricopigmentation" className={styles.btn}>
                tricopigmentazione
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={styles.btn}>
                Galeria
              </Link>
            </li>
            <li>
              <Link to="/aftercare" className={styles.btn}>
                Cura del tattoo
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.btn}>
                Contatti
              </Link>
            </li>
          </ul>
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
