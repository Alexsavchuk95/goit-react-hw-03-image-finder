import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  handleBackdropClick = event => {
    const { current } = this.backdropRef;
    if (current && event.target !== current) return;
    this.props.onClose();
  };

  render() {
    const { imageUrl } = this.props;
    return (
      <>
        <div
          className={style.backdrop}
          ref={this.backdropRef}
          onClick={this.handleBackdropClick}
          role="presentation"
        >
          <div className={style.modal}>
            <img src={imageUrl} alt="#" />
          </div>
        </div>
      </>
    );
  }
}
