import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './modal.module.css';

// Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним оверлеєм і відображатися велика
// версія зображення. Модальне вікно повинно закриватися по натисканню клавіші ESC або по кліку на оверлеї.

class Modal extends Component {
  render() {
    return (
      <div id="modal" onClick={this.props.onClickClose} className={css.Overlay}>
        <div className={css.Modal}>
          <img className={css.Largeimg} src={this.props.largeImageUrl} alt="" />
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  };
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default Modal;
