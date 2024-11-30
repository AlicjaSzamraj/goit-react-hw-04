import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import styles from "./App.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    setLoading(true);
    setError(null);
    try {
      const response = await fetchImages(searchQuery, 1);
      setImages(response);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchImages(query, page + 1);
      setImages([...images, ...response]);
      setPage(page + 1);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  const fetchImages = async (searchQuery, pageNumber) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: searchQuery, page: pageNumber },
      headers: {
        Authorization: "Client-ID RdzwtXwbwQquj7GUBkIMeTlFC8Ba54eiPWu_WkH5xKg",
      },
    });
    return response.data.results;
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />} {loading && <Loader />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default App;
