const API_KEY = 'QNIh0ADRC1h3vjRO2EcCJgHV9znBsCOa';
const BASE_URL = 'https://api.polygon.io/v3/reference/tickers';

export const fetchStocks = async () => {
  const response = await fetch(`${BASE_URL}?active=true&limit=200&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchStockDetails = async (ticker) => {
  const response = await fetch(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=QNIh0ADRC1h3vjRO2EcCJgHV9znBsCOa`);
  const data = await response.json();
  // console.log(data)
  return data;
};

