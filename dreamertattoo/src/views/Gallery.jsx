import styles from "./Gallery.module.css";
import GalleryList from "../components/GalleryList";

const Gallery = () => {
  return (
    <main className={styles.containerGallery}>
      <h1 className={styles.titleGallery}>gallery</h1>
      <GalleryList />
    </main>
  );
};

export default Gallery;
