import React from "react";
import PropTypes from "prop-types";
import ImageCard from "./ImageCard";
import styles from "../styles/ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.ImageGalleryItem}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
