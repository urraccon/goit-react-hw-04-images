import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleChange = evt => {
    // debugger;
    const term = evt.target.value;
    setTerm(term);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}></span>
        </button>
        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          value={term}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
