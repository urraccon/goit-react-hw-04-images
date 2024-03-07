import { useEffect } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ image, closeImage }) => {
  const { largeImageURL, tags } = image[0];

  useEffect(() => {
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  });

  const keyHandler = evt => {
    if (evt.key === 'Escape') {
      closeImage();
      // console.log('Press Escape');
    }
  };

  const overlayClicked = evt => {
    // console.log(evt);
    if (evt.target.className.includes('overlay')) {
      // console.log('Overlay clicked');
      closeImage();
    }
  };

  //   debugger;

  return (
    <div className={styles.overlay} onClick={overlayClicked}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.array,
  closeImage: PropTypes.func,
};

export default Modal;
