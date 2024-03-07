import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '41393795-c06419c206da666f6a710e150';

async function get(term, page) {
  //   console.log('Get request');
  const response = await axios.get(
    `/?q=${term}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  //   console.log(response.data.hits);
  return response.data.hits;
}

const imageService = {
  get,
};

export default imageService;
