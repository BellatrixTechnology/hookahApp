const axios = require('axios');
const { API } = require('../config/API');

const PayloadAPI = {
  UploadImage: async (imageData) => {
    const data = new FormData();
    data.append('file', imageData);
    return axios({
      method: 'post',
      url: `${API}upload`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    });
  },
};

export default PayloadAPI;
