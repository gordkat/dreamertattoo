import styles from "./Contact.module.css";
import iconFacebbok from "../images/iconFacebook.svg";
import iconInstagram from "../images/iconInstagram.svg";

const Contact = () => {
  return (
    <main className={styles.containerContact}>
      <div className={styles.wrapperContact}>
        <h2 className={styles.titleContact}>Contatti</h2>
        <div className={styles.wrapperMapAddress}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5595.66330398044!2d10.610816108214856!3d45.473195072607616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781eb4ea7fec025%3A0x1ac3d4fc8c55025e!2sDREAMER%20TATTOO%20studio!5e0!3m2!1sen!2sit!4v1675174661874!5m2!1sen!2sit"
            width="400"
            height="400"
            style={{ border: 0, maxWidth: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <address className={styles.wrapperDescription}>
            <div className={styles.wrapperAddress}>
              <h3 className={styles.title}>dreamer tattoo</h3>
              <a
                href="https://www.google.com/maps/place/DREAMER+TATTOO+studio/@45.472053,10.610771,15z/data=!4m6!3m5!1s0x4781eb4ea7fec025:0x1ac3d4fc8c55025e!8m2!3d45.4728055!4d10.6105137!16s%2Fg%2F1tf6fhhd?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkContact}
              >
                Sirmione
                <br />
                Via Colombare, n.3
              </a>
            </div>
            <div className={styles.wrapperPhone}>
              <h3 className={styles.title}>telefono</h3>
              <a href="tel:+393405557048" className={styles.linkContact}>
                +39 340 555 7048
              </a>
            </div>
            <div className={styles.wrapperEmail}>
              <h3 className={styles.title}>e-mail</h3>
              <a
                href="mailto:sirmione@dreamertattoo.it"
                className={styles.linkContact}
              >
                sirmione@dreamertattoo.it
              </a>
            </div>
            <div className={styles.wrapperSocial}>
              <h3 className={styles.title}>social</h3>
              <div className={styles.wrapperLinks}>
                <a
                  href="https://www.facebook.com/dreamertattoosirmione"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook link"
                >
                  <img
                    // className={styles.iconSocial}
                    src={iconFacebbok}
                    width="48"
                    height="48"
                    alt="Facebbok link"
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
                    width="48"
                    height="48"
                    alt="Instagram link"
                  />
                </a>
              </div>
            </div>
          </address>
        </div>
      </div>
    </main>
  );
};

export default Contact;
