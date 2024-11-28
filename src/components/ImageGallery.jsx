import React from "react";
import ImageCard from "./ImageCard";
import styles from "../styles/ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={styles.ImageGallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onImageClick={onImageClick} />
      ))}
    </div>
  );
};

export default ImageGallery;
