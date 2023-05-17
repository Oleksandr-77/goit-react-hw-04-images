import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './button.module.css';

// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і рендеритися разом із
//  попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. Якщо масив зображень
//  порожній, кнопка не рендериться.

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.getMoreImage} className={css.Button}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  getMoreImage: PropTypes.func.isRequired,
};

export default Button;
