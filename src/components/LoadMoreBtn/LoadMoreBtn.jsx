import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.wrapper}>
      <button onClick={onClick} className={css.loadBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
