import { Hearts } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <Hearts
      height="80"
      width="80"
      color="#A3295B"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
    />
  );
};

export default Loader;
