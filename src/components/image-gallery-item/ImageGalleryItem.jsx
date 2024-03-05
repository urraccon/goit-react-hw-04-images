import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item, onClick }) => {
  const { id, webformatURL, tags } = item;
  return (
    <li className={styles.imageGalleryItem}>
      <img
        id={id}
        src={webformatURL}
        alt={tags}
        className={styles.imageGalleryItemsImage}
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
