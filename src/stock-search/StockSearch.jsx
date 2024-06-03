import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for API calls
import './style.css';
import { ChevronLeft } from 'lucide-react';

const ACCESS_KEY = 'rq9OoN6Qq_Gv1n_Cdk_S0fFx2Km6rHHbbfQyhKxGOgo'; // Replace with your Unsplash access key

const StockSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(1); // Reset page on new search
    setImages([]); // Clear previous results
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${ACCESS_KEY}&per_page=12`);
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = async () => {
    setPage(page + 1);
    setIsLoading(true);

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${ACCESS_KEY}&per_page=12`);
      setImages([...images, ...response.data.results]); // Append new results
    } catch (error) {
      console.error('Error fetching more images:', error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Optional: Fetch initial results on component mount (if needed)
  }, []);

  return (
    <div>
      <a href='/'><h2 className='h2'><ChevronLeft size={60} /></h2></a>
      <div className='inline-search'>
      <h1>Stock Image Search</h1>
      <form className='fform' onSubmit={handleSearch}>
        <input type="text" id="search-box" placeholder="Search anything here..." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Error fetching images. Please try again.</p>}
      <div id="search-result">
        {images.map((image) => (
          <a href={image.links.html} key={image.id}>
            <img src={image.urls.small} alt={image.alt_description || 'Image'} />
          </a>
        ))}
      </div>
      {images.length > 0 && <button id="show-more-btn" onClick={handleShowMore} disabled={isLoading}>Show more</button>}
    </div>
    </div>
  );
};

export default StockSearch;
