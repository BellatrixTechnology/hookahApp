const axios = require('axios');
const { API } = require('../../config/API');

const CategoryAPI = {
  PostCategory: async (_id, name, imageData) => {
    const config = {
      method: 'post',
      url: `${API}restaurant/category`,
      headers: {
        Authorization: _id,
      },
      data: {
        name,
        avatar: imageData,
      },
    };
    return axios(config);
  },
  GetAllCategories: async (_id) => {
    return axios({
      method: 'get',
      url: `${API}restaurant/category`,
      headers: {
        Authorization: _id,
      },
    });
  },
  GetAllCategoriesForCustomer: async (_restaurant) => {
    return axios({
      method: 'get',
      url: `${API}restaurant/category/forCustomers/${_restaurant}`,
    });
  },
  EditCategoryInfo: async (categoryName, modalDataAvatar, modalDataID) => {
    var data = JSON.stringify({
      name: categoryName,
      avatar: modalDataAvatar,
    });

    var config = {
      method: 'put',
      url: `${API}/restaurant/category/${modalDataID}`,
      headers: {
        'authorization': '5fcd273bf61e3a246455346e',
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log('Success Updating');
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  DeleteCategoryByID: async (categoryName, modalDataAvatar, modalDataID) => {
    var data = JSON.stringify({
      name: categoryName,
      avatar: modalDataAvatar,
    });

    var config = {
      method: 'delete',
      url: `${API}restaurant/category/${modalDataID}`,
      headers: {
        'authorization': modalDataID,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  GetOrdersByRestuarantID: async (restuarant) => {
    var data = '';
    return axios({
      method: 'get',
      url: `${API}restaurant/orders/${restuarant}`,
      headers: {
        authorization: restuarant,
      },
      data: data,
    });
  },
};

export default CategoryAPI;
// post a ct
