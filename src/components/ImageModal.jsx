import React from "react";
import styles from "../styles/ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className={styles.ImageModal}>
      <span className={styles.close} onClick={onClose}>
        &times;
      </span>
      <img src={image.urls.regular} alt={image.description} />
      <div className={styles.modalContent}>
        <p>Autor: {image.user.name}</p>
        <p>Polubienia: {image.likes}</p>
        <p>Opis: {image.description}</p>
      </div>
    </div>
  );
};

export default ImageModal;
