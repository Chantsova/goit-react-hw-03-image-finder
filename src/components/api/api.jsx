import axios from 'axios';
import PropTypes from 'prop-types';

const getImagesAPI = (name, page) => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '22538110-4c245d53289541016fd72dadc',
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: page,
      },
    })
    .then(response => {
      if (response.data.totalHits !== 0) {
        const images = response.data.hits;
        return images;
      }
      return Promise.reject(
        new Error(`There are no images with name "${name}"`),
      );
    });
};

export default getImagesAPI;

getImagesAPI.propTypes = {
  page: PropTypes.number.isRequired,
};
