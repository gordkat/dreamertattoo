import styles from "./Contact.module.css";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
  // const {} = useLoadScript({ googleMapsApiKey: "" });
  return (
    <main className={styles.containerContact}>
      <div className={styles.wrapperContact}>
        <h2 className={styles.titleContact}>Contatti</h2>
        <div className={styles.wrapperMapAddress}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5595.66330398044!2d10.610816108214856!3d45.473195072607616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781eb4ea7fec025%3A0x1ac3d4fc8c55025e!2sDREAMER%20TATTOO%20studio!5e0!3m2!1sen!2sit!4v1675174661874!5m2!1sen!2sit"
            width="400"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <p className={styles.address}>
              Via colombare, 3
              <br />
              vicino Porto Galeazzi
              <br />
              Sirmione, Italia
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
