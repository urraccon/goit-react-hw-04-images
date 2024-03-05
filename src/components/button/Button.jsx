import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={onClick} type="button">
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
