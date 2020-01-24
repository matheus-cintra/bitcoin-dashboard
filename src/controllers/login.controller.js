import axios from 'axios';

const URI_BACKEND = 'http://localhost:3000/';

function doLogin(form, callback) {
  axios.post(`${URI_BACKEND}api/v1/login`, { form }).then((x) => {
    callback(x);
  });
}

function doLogout(callback) {
  axios.get(`${URI_BACKEND}api/v1/logout`).then((x) => {
    callback(x);
  });
}

function validateJWT(token, callback) {
  axios.get(`${URI_BACKEND}api/v1/validate`, { headers: { token } }).then((x) => {
    callback(x);
  });
}

export default { doLogin, validateJWT, doLogout };
