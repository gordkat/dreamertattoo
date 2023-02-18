import styles from "./GalleryList.module.css";
import GalleryItem from "./GalleryItem";
import tattoo from "../images/tattoo.jpg";

const photos = [
  {
    url: tattoo,
    alt: "tattoo photo 1",
  },
  {
    url: tattoo,
    alt: "tattoo photo 2",
  },
  {
    url: tattoo,
    alt: "tattoo photo 3",
  },
  {
    url: tattoo,
    alt: "tattoo photo 4",
  },
  {
    url: tattoo,
    alt: "tattoo photo 5",
  },
  {
    url: tattoo,
    alt: "tattoo photo 6",
  },
  {
    url: tattoo,
    alt: "tattoo photo 7",
  },
  {
    url: tattoo,
    alt: "tattoo photo 8",
  },
  {
    url: tattoo,
    alt: "tattoo photo 9",
  },
  {
    url: tattoo,
    alt: "tattoo photo 10",
  },
  {
    url: tattoo,
    alt: "tattoo photo 11",
  },
  {
    url: tattoo,
    alt: "tattoo photo 12",
  },
  {
    url: tattoo,
    alt: "tattoo photo 13",
  },
  {
    url: tattoo,
    alt: "tattoo photo 14",
  },
  {
    url: tattoo,
    alt: "tattoo photo 15",
  },
];

const GalleryList = () => {
  return (
    <ul className={styles.galleryList}>
      {photos.map((photo) => (
        <GalleryItem photo={photo} key={photo.alt} />
      ))}
    </ul>
  );
};
export default GalleryList;
