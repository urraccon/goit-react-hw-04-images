import { Component } from 'react';
import styles from './App.module.css';
import SearchBar from './search-bar/SearchBar';
import axios from 'axios';
import Loader from './loader/Loader';
import ImageGallery from './image-gallery/ImageGallery';
import Button from './button/Button';
import Modal from './modal/Modal';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '41393795-c06419c206da666f6a710e150';

class App extends Component {
  state = {
    term: '',
    isLoading: false,
    isMoreResults: false,
    page: '',
    searchResults: [],
    modalImage: [],
    isModalOpen: false,
  };

  async requestData(term, page) {
    // debugger;
    try {
      this.setState({
        isLoading: true,
      });
      const response = await axios.get(
        `/?q=${term}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const data = response.data.hits;
      // console.log(data.length);
      if (data.length === 0) {
        this.setState({
          isMoreResults: false,
        });
      } else {
        console.log(data);
        this.setState(prev => {
          return {
            searchResults: prev.searchResults.concat(data),
            isMoreResults: true,
          };
        });
      }
    } catch (err) {
      window.alert(`error: ${err.message}`);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  searchTerm = evt => {
    evt.preventDefault();
    console.log(evt);
    const term = evt.target[1].value;
    const page = 1;
    this.setState({
      page,
      term,
      searchResults: [],
    });
    this.requestData(term, page);
  };

  loadMoreResults = () => {
    const { page, term } = this.state;
    // debugger;
    const nextPage = page + 1;
    this.setState({
      page: nextPage,
    });
    this.requestData(term, nextPage);
  };

  openModal = evt => {
    // debugger;
    console.log(evt);
    const itemId = evt.target.id;
    const { searchResults } = this.state;
    // debugger;
    const item = searchResults.filter(elem => elem.id === Number(itemId));
    // console.log(item);
    this.setState({
      openImage: item,
      isModalOpen: true,
    });
    document.addEventListener('keydown', this.keyDownHandler);
  };

  keyDownHandler = evt => {
    console.log(evt.key);
    if (evt.key === 'Escape') {
      this.setState({
        isModalOpen: false,
      });
      document.removeEventListener('keydown', this.keyDownHandler);
    }
  };

  render() {
    const { isLoading, searchResults, isMoreResults, openImage, isModalOpen } =
      this.state;
    console.log(searchResults);
    return (
      <>
        <div className={styles.app}>
          <SearchBar onSubmit={this.searchTerm} />
          <ImageGallery items={searchResults} onClick={this.openModal} />
          {isLoading && <Loader />}
          {!isLoading && isMoreResults && (
            <Button onClick={this.loadMoreResults}>Load More</Button>
          )}
          {isModalOpen && (
            <Modal
              item={openImage}
              onClick={() => {
                this.setState({
                  isModalOpen: false,
                });
              }}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
