const axios = require('axios');
const { API } = require('../../config/API');

const Restaurant = {
  Login: async ({ email, password }) => {
    console.log(email, password);
    return axios({
      method: 'post',
      url: `${API}restaurant/user/login`,
      data: {
        email,
        password,
      },
    });
  },
  Register: async ({ email, password, brandName }) => {
    console.log(email, password, brandName);
    return axios({
      method: 'post',
      url: `${API}restaurant/user/register`,
      data: {
        email,
        password,
        brandName,
      },
    });
  },
};

export default Restaurant;
// post a ct
