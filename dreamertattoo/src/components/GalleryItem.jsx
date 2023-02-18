import styles from "./GalleryItem.module.css";
// import shop1 from "../images/shop1.jpg";

const GalleryItem = ({ photo }) => {
  return (
    <li className={styles.photoCard}>
      <img
        src={photo.url}
        alt={photo.alt}
        className={styles.photoItem}
        // width="200"
      />
    </li>
  );
};

export default GalleryItem;
