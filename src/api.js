const config = {
  baseURL: 'https://new.testing.sdalkupil.ru/api/v2/',
  headers: {
    authorization: '16957632011bcb694beed6c570d4144c',
    'Content-Type': 'application/json',
  },
};

function checkResponse(response) {
  if(!response) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.json();
}

//запрос списка брендов
function getBrands() {
  return fetch(`${config.baseURL}/catalog/brands`, {
    method: 'GET',
    headers: config.headers,
  })
  .then((response) => checkResponse(response));
}

//запрос списка девайсов, относящихся к бренду
//brandID?
function getDevices() {
  return fetch(`${config.baseURL}/catalog/brands/${brandID}/devices`, {
    method: 'GET',
    headers: config.headers
  })
  .then((response) => checkResponse(response));
}

//запрос списка моделей, относящихся к бренду
function getModels() {
  return fetch(`${config.baseURL}/catalog/brands/${brandID}/models`, {
    method: 'GET',
    headers: config.headers
  })
  .then((response) => checkResponse(response));
}

//запрос информации о девайсе и его цене
function getPrice() {
  return fetch(`${config.baseURL}/catalog/brands/${brandsId}/devices/${deviceID}`, {
    method: 'GET',
    headers: config.headers
  })
  .then((response) => checkResponse(response));
}