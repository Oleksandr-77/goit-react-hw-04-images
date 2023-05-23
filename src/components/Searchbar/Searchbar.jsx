import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './searchbar.module.css';

// Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми.
//  Створює DOM-елемент наступної структури.

const Searchbar = props => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue( e.target.value );
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(searchValue);
  };

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}></span>
          </button>
          <input
            name="search"
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  };

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
