import axios from 'axios';

const API_KEY = 'N5kHN38n0PeTJWf4-hZjlPZF5KnbLnDYFwWIfvKmATo';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchPhotos = async (query, page) => {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      client_id: API_KEY,
      per_page: '12',
      orientation: 'landscape',
    },
  });

  return response.data.results;
};

