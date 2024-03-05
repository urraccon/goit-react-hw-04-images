import ImageGalleryItem from 'components/image-gallery-item/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ items, onClick }) => {
  // debugger;
  return (
    <ul className={styles.imageGallery}>
      {items.map(item => {
        return <ImageGalleryItem key={item.id} item={item} onClick={onClick} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};

export default ImageGallery;
