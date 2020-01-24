import axios from 'axios';
import VueCookies from 'vue-cookies';

const URI_BACKEND = 'http://localhost:3000/';

function getCrypto1(callback) {
  const token = VueCookies.get('token');
  axios.get(`${URI_BACKEND}api/v1/getCurrencies`, { headers: { token } }).then((x) => {
    callback(x);
  });
}

function postCrypto(currencies, callback) {
  axios.post(`${URI_BACKEND}api/v1/postCurrencies`, { currencies }).then((x) => {
    callback(x);
  });
}

function validateJWT(token, callback) {
  axios.get(`${URI_BACKEND}api/v1/validate`, { headers: { token } }).then((x) => {
    callback(x);
  });
}

export default { getCrypto1, postCrypto, validateJWT };
