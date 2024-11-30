import React from "react";
import styles from "../styles/ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  if (!image) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <img
          src={image.urls.regular}
          alt={image.description}
          className={styles.Image}
        />
        <div className={styles.info}>
          <p>Autor: {image.user.name}</p>
          <p>Polubienia: {image.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
