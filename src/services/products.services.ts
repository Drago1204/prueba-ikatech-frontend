import axios from 'axios';

export const getProductsService = async () => {
  const { data } = await axios.get('zapato.json');
  return data;
};
