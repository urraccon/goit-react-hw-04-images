import styles from './Loader.module.css';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <TailSpin
        className={styles.spinner}
        visible={true}
        height="50"
        width="50"
        color="#ffdd00"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
