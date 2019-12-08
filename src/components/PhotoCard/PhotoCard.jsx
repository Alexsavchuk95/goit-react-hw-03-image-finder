import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

export default class PhotoCard extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  state = {
    isModal: false,
  };

  openModal = () => {
    this.setState({ isModal: true });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const {
      webformatURL,
      likes,
      views,
      comments,
      downloads,
      largeImageURL,
    } = this.props;
    const { isModal } = this.state;
    return (
      <div className={style.photoCard}>
        <div className={style.image}>
          <img src={webformatURL} alt="randomPicture" />
        </div>

        <div className={style.stats}>
          <p className={style.statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={style.statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={style.statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={style.statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
        <button
          type="button"
          className={style.fullscreenButton}
          onClick={this.openModal}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
        {isModal && (
          <Modal onClose={this.closeModal} imageUrl={largeImageURL} />
        )}
      </div>
    );
  }
}
