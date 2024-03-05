import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { IoIosSearch } from 'react-icons/io';

class SearchBar extends Component {
  state = {
    term: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  handleChange = evt => {
    // debugger;
    const term = evt.target.value;
    this.setState({
      term,
    });
  };

  render() {
    const { term } = this.state;
    const { onSubmit } = this.props;
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.serachFormButtonLabel}>
              <IoIosSearch className={styles.searchIcon} />
            </span>
          </button>
          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            value={term}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
