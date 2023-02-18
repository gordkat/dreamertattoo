import { useEffect } from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const refNavbar = useRef();
  useEffect(() => {
    const handerCloseMenu = (event) => {
      console.log(refNavbar.current);
      if (
        navbarOpen &&
        refNavbar.current &&
        !refNavbar.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handerCloseMenu);
    return () => {
      document.removeEventListener("mousedown", handerCloseMenu);
    };
  }, [navbarOpen]);
  return (
    <div className={styles.navbar} ref={refNavbar}>
      <button
        type="button"
        className={styles.btnNavbar}
        onClick={() => {
          setNavbarOpen((prev) => !prev);
        }}
      >
        {navbarOpen ? (
          <MdClose
            style={{ width: "24px", height: "24px" }}
            aria-label="Close menu icon"
          />
        ) : (
          <FiMenu
            style={{
              width: "24px",
              height: "24px",
            }}
            aria-label="Open menu icon"
          />
        )}
      </button>
      <ul
        className={`${styles.burgerMenu} ${navbarOpen ? styles.showMenu : ""}`}
      >
        <li>
          <Link
            to="/"
            className={styles.burgerBtn}
            onClick={() => setNavbarOpen(false)}
          >
            Studio
          </Link>
        </li>
        <li>
          <Link
            to="/tricopigmentation"
            className={styles.burgerBtn}
            onClick={() => setNavbarOpen(false)}
          >
            tricopigmentazione
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={styles.burgerBtn}
            onClick={() => setNavbarOpen(false)}
          >
            Galeria
          </Link>
        </li>
        <li>
          <Link
            to="/aftercare"
            className={styles.burgerBtn}
            onClick={() => setNavbarOpen(false)}
          >
            Cura del tattoo
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={styles.burgerBtn}
            onClick={() => setNavbarOpen(false)}
          >
            Contatti
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
