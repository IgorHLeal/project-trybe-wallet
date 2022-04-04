const endpoint = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencyQuotation = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();

  return response.ok ? Promise.resolve(data) : Promise.reject(data);
};

export default getCurrencyQuotation;

// ---------- REFERÊNCIAS ----------
// O código foi feito pegando comom base o código da aula ao vivo 15.2

// rensponse.ok: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
// Promise.resolve: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Promise.reject: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
