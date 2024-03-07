import styles from './App.module.css';
import SearchBar from './search-bar/SearchBar';
import Loader from './common/loader/Loader';
import ImageGallery from './image-gallery/ImageGallery';
import Button from './common/button/Button';
import Modal from './common/modal/Modal';
import imageService from './service/imageService';
import { useEffect, useState } from 'react';

const App = () => {
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState(false);
  const [page, setPage] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [image, setImage] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getImage(term, page) {
      const response = await imageService.get(term, page);

      if (response.length !== 0) {
        setSearchResults(prev => prev.concat(response));
        setIsLoadMoreBtnVisible(true);
      } else {
        setIsLoadMoreBtnVisible(false);
      }
    }

    if (page !== '') {
      setIsLoading(true);

      getImage(term, page)
        .catch(err => window.alert(`error: ${err}`))
        .finally(() => setIsLoading(false));
    }
  }, [term, page]);

  useEffect(() => {
    if (image.length !== 0) setIsModalOpen(true);
  }, [image]);

  const search = evt => {
    evt.preventDefault();
    const searchTerm = evt.target[1].value;

    if (term !== searchTerm) {
      setTerm(searchTerm);
      setPage(1);
      setSearchResults([]);
    }
  };

  const loadMoreResults = () => {
    setPage(page + 1);
  };

  const openImage = evt => {
    const imageId = evt.target.id;
    const image = searchResults.filter(elem => elem.id === Number(imageId));
    setImage(image);
  };

  const closeImage = () => {
    setIsModalOpen(false);
  };

  // console.log(searchResults);
  return (
    <>
      <div className={styles.app}>
        <SearchBar onSubmit={search} />
        <ImageGallery images={searchResults} onClick={openImage} />
        {isLoading && <Loader />}
        {!isLoading && isLoadMoreBtnVisible && (
          <Button onClick={loadMoreResults}>Load More</Button>
        )}
        {isModalOpen && <Modal image={image} closeImage={closeImage} />}
      </div>
    </>
  );
};

export default App;
