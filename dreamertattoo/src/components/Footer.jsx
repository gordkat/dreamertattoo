import styles from "./Footer.module.css";
import iconFacebbok from "../images/iconFacebook.svg";
import iconInstagram from "../images/iconInstagram.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.wrapperSocial}>
          <span>Follow us</span>
          <a
            href="https://www.facebook.com/dreamertattoosirmione"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.iconSocial}
              src={iconFacebbok}
              alt="Facebbok"
            />
          </a>
          <a
            href="https://www.instagram.com/dreamer_tattoo_sirmione/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.iconSocial}
              src={iconInstagram}
              alt="Instagram"
            />
          </a>
        </div>
        <div className={styles.wrapperNumber}>
          <span> Contact us </span>
          <a href="tel:+393405557048" className={styles.number}>
            +39 3405557048
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
