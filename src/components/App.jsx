import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import axios from 'axios';
import css from './app.module.css';
import { MagnifyingGlass } from 'react-loader-spinner';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bigImageUrl, setBigImageUrl] = useState('');

  useEffect(() => {
  const makeApiCall = () => {
    if (!query) {
      return;
    }

    const PER_PAGE = 12;
    const API_KEY = '34903370-8acb58693fc15daed0bd1e114';
    const searchUrl = `https://pixabay.com/api/?q=${encodeURIComponent(
      query
    )}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

    setIsLoading(true);
    axios.get(searchUrl).then(response => {
      const totalPages = Math.round(response.data.totalHits / PER_PAGE);
      const loadedImages = response.data.hits;
      setTotalPages(totalPages);
      setImages(prevImages => [...prevImages, ...loadedImages]);
      setIsLoading(false);
    });
  };
  makeApiCall();
}, [query, page]);

  const handleSearch = searchValue => {
    if (searchValue !== '') {
      if (searchValue !== query) {
        setQuery(searchValue);
        setPage(1);
        setImages([]);
      } else {
        setQuery(searchValue);
      }
    }
  };

  const handleImageClick = largeImageUrl => {
    setBigImageUrl(bigImageUrl);
    setIsModalOpen(true);
    };

  const handleModalClickClose = e => {
    if (e.target.id === 'modal' && isModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const fetchMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  getImagesFromUrl(searchUrl) {
    axios.get(searchUrl).then(response => {
      const totalPages = Math.round(response.data.totalHits / 12);
      this.setState({ totalPages, images: response.data.hits });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.makeApiCall(this.state.query, this.state.page);
    }
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery
          images={this.state.images}
          onModalOpen={this.handleImageClick}
        />
        {this.state.isModalOpen && (
          <Modal
            largeImageUrl={this.state.largeImageUrl}
            onClose={this.handleModalClose}
            onClickClose={this.handleModalClickClose}
          />
        )}
        {this.state.isLoading && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{ margin: '0 auto' }}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        )}
        {this.state.totalPages > 1 &&
          this.state.page < this.state.totalPages && (
            <Button getMoreImage={this.fetchMoreImages} />
          )}
      </div>
    );
  }
}

export default App;
