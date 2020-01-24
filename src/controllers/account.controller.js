import axios from 'axios';
import VueCookies from 'vue-cookies';

const URI_BACKEND = 'http://localhost:3000/';

function getUser(id, callback) {
  console.log('id > ', id);
  const token = VueCookies.get('token');
  axios
    .post(`${URI_BACKEND}api/v1/getUser`, {
      headers: {
        token,
      },
      data: {
        _id: id,
      },
    })
    .then((x) => {
      callback(x);
    });
}

export default { getUser };
