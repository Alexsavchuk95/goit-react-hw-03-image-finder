import axios from 'axios';

const getItems = (query, page) =>
  axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=14391483-6df0c27986739f1f1bff685ef`,
  );

export default getItems;
