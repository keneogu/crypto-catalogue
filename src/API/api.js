import axios from 'axios';

export const coinAPI = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchCoin = async (id) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
