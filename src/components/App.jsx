import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import { fetchPictures } from '../pictures-api';
import ImageModal from './ImageModal/ImageModal';
import styles from './App.module.css';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      return;
    }

    const loadPictures = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetchPictures(searchTerm, page);
        setPictures((prevState) => [...prevState, ...response]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadPictures();
  }, [page, searchTerm]);

  const handleSearch = async (topic) => {
    setSearchTerm(topic);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className={styles.generalShape}>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {pictures.length > 0 && <ImageGallery pictures={pictures} onImageClick={openModal} />}
        {pictures.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
        <ImageModal isOpen={isModalOpen} imageUrl={selectedImage} altText="Selected Image" closeModal={closeModal} />
      </div>
    </>
  );
};

export default App;