import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './modal.module.css';

// Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним оверлеєм і відображатися велика
// версія зображення. Модальне вікно повинно закриватися по натисканню клавіші ESC або по кліку на оверлеї.

const Modal = props => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.keyCode === 27) {
        props.onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [props]);

  return (
    <div id="modal" onClick={props.onClickClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img className={css.BigImg} src={props.bigImageUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default Modal;
