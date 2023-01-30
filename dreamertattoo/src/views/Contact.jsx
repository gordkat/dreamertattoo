import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <main className={styles.containerContact}>
      <div className={styles.wrapperContact}>
        <h2 className={styles.titleContact}>dreamer tattoo</h2>
        <p className={styles.address}>
          Via colombare, 3
          <br />
          vicino Porto Galeazzi
          <br />
          Sirmione, Italy
        </p>
        <div>Mappa</div>
      </div>
    </main>
  );
};

export default Contact;
