import toast from 'react-hot-toast';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import css from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === '') {
      toast.error('EMPTY STRING!');
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          <BsFillSearchHeartFill className={css.icon} size={18} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
