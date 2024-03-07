import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
  const { id, webformatURL, tags } = image;
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
  image: PropTypes.object,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
