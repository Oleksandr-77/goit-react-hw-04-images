import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './searchbar.module.css';

// Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми.
//  Створює DOM-елемент наступної структури.

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
