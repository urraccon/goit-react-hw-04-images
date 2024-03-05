import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ item, onClick, onKeyDown }) => {
  //   debugger;
  const { largeImageURL, tags } = item[0];
  return (
    <div className={styles.overlay} onClick={onClick} onKeyDown={onKeyDown}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Modal;
