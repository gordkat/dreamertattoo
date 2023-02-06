import styles from "./HomePage.module.css";
import shop3 from "../images/shop3.jpg";
import shop1 from "../images/shop1.jpg";
const HomePage = () => {
  return (
    <main className={styles.containerHome}>
      <div className={styles.wrapperFoto}>
        <div className={styles.cardHomeFoto}>
          <img
            src={shop3}
            width="400"
            height="400"
            alt="Foto of the Dreamer Tattoo studio from outside"
            className={styles.homeFoto}
          />
        </div>
        <div className={styles.wrapperDescription}>
          <h1 className={styles.titleHome}>dreamer tattoo</h1>
          <p className={styles.homeDescription}>
            Dreamer Tattoo is located in the Sirmione since 2009.
            <br />
            We care about our tattoo art and try our best to make it show with
            every custom piece we do. We look forward to working with you!
            <br />
            By appointment only.
          </p>
          <button type="button" className={styles.btnCall}>
            <a href="tel:+393405557048" className={styles.btnLink}>
              chiamaci
            </a>
          </button>
        </div>
        <div className={styles.cardHomeFoto}>
          <img
            src={shop1}
            width="400"
            height="400"
            alt="Foto of the Dreamer Tattoo studio inside"
            className={styles.homeFoto}
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
