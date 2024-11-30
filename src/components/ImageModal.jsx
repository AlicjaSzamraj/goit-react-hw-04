import React, { useEffect } from "react";
import Modal from "react-modal";
import styles from "../styles/ImageModal.module.css";

Modal.setAppElement("#root"); 

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!image) {
    return null;
  }

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <button className={styles.closeButton} onClick={onClose}>
        ×
      </button>
      <img
        src={image.urls.regular}
        alt={image.description}
        className={styles.Image}
      />
      <div className={styles.info}>
        <p>
          <strong>Autor:</strong> {image.user.name}
        </p>
        <p>
          <strong>Polubienia:</strong> {image.likes}
        </p>
        {image.description && (
          <p>
            <strong>Opis:</strong> {image.description}
          </p>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
