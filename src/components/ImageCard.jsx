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
      <div className={styles.info}>
        <p>Autor: {image.user.name}</p>
        <p>Polubienia: {image.likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
