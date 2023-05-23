import PropTypes from 'prop-types';
import css from './button.module.css';

// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і рендеритися разом із
//  попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. Якщо масив зображень
//  порожній, кнопка не рендериться.

const Button = ({ getMoreImage }) => {
  return (
    <button onClick={getMoreImage} className={css.Button}>
      Load more
    </button>
  );
};


Button.propTypes = {
  getMoreImage: PropTypes.func.isRequired,
};

export default Button;
