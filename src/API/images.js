import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38696137-0a6b9787b2b59d7133eac1c9a';

export const getAllImages = async (searchImg, page) => {
  const { data } = await axios(
    `?q=${searchImg}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
