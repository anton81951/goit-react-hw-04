import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import { useState, useEffect } from "react";

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
            searchTerm
          )}&client_id=jhQcplBUoglEL_QTQ7BQ096tyd_nHu5rVCFrZ0UPCbM`
        );

        if (!response.data || !response.data.results) {
          throw new Error("No data received from Unsplash");
        }

        setPictures(response.data.results);
        setError(null); // Reset error state if successful
      } catch (error) {
        console.error("Error fetching pictures from Unsplash:", error);
        setError(error); // Set error state if there's an error
      }
    };

    if (searchTerm) {
      fetchPictures();
    }
  }, [searchTerm]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery pictures={pictures} />
    </div>
  );
};

export default App;