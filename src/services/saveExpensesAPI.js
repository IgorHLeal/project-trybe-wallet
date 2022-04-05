const endpoint = 'https://economia.awesomeapi.com.br/json/all';

const getSaveExpenses = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export default getSaveExpenses;
