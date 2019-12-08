import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import style from './Gallery.module.css';

const Gallery = ({ posts, onLoadMore }) => (
  <div>
    <ul className={style.gallery}>
      {posts.map(item => (
        <li key={item.id} className={style.listItem}>
          <PhotoCard {...item} />
        </li>
      ))}
    </ul>
    <button type="button" className={style.button} onClick={onLoadMore}>
      Load more
    </button>
  </div>
);
Gallery.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
export default Gallery;
