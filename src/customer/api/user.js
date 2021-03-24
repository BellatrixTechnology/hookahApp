const axios = require('axios');
const { API } = require('../../config/API');

const Customer = {
  Auth: async (device_id) => {
    console.log({device_id})
    return axios({
      method: 'post',
      url: `${API}customer/auth`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        device_id,
      },
    });
  },
};

export default Customer;
