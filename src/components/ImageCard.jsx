import React from "react";
import styles from "../styles/ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={styles.ImageCard} onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.description}
        className={styles.Image}
      />
    </div>
  );
};

export default ImageCard;
