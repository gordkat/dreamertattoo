import styles from "./Footer.module.css";
import iconFacebbok from "../images/iconFacebookOutline.svg";
import iconInstagram from "../images/iconInstagramOutline.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.wrapperSocial}>
          <b>Seguici</b>
          <a
            href="https://www.facebook.com/dreamertattoosirmione"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook link"
          >
            <img
              // className={styles.iconSocial}
              src={iconFacebbok}
              alt="Facebook link"
              width="24"
              height="24"
            />
          </a>
          <a
            href="https://www.instagram.com/dreamer_tattoo_sirmione/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram link"
          >
            <img
              // className={styles.iconSocial}
              src={iconInstagram}
              alt="Instagram"
              alt="Instagram link"
              width="24"
              height="24"
            />
          </a>
        </div>
        <div className={styles.wrapperNumber}>
          <b> Contattaci </b>
          <a href="tel:+393405557048" className={styles.number}>
            +39 3405557048
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
