import axios from 'axios';

const KEY = `27487139-e524d10819fee38ea9f4aa544`;

axios.defaults.baseURL = `https://pixabay.com/api/`;
export async function fetchImages(query, page = 1) {
  const fetchedData = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return fetchedData.data.hits;
}
