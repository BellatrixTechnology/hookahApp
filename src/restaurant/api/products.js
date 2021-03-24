const axios = require('axios');
const { API } = require('../../config/API');

const ProductsAPI = {
  PostProduct: async ({
    _id,
    _category,
    name,
    description,
    quantity,
    price,
    avatar,
    extras,
  }) => {
    const config = {
      method: 'post',
      url: `${API}restaurant/products`,
      headers: {
        Authorization: _id,
      },
      data: {
        _category,
        name,
        description,
        quantity,
        price,
        avatar,
        extras,
      },
    };
    return axios(config);
  },
  GetProducts: async ({ _id, _category }) => {
    console.log('sdfsdfgsdfg', _id, _category);
    return axios({
      method: 'get',
      url: `${API}restaurant/products/${_category}`,
      headers: {
        Authorization: _id,
      },
    });
  },
  ProductsByCategoryID: async (_category) => {
    return axios({
      method: 'get',
      url: `${API}restaurant/products/bycategory/${_category}`,
      headers: { Authorization: _category },
    });
  },
  ProductsByRestuarantID: async (_category) => {
    return axios({
      method: 'get',
      url: `${API}restaurant/products/${_category}`,
      headers: { Authorization: _category },
    });
  },
  UpdateProductByID: async (
    name,
    description,
    quantity,
    price,
    avatar,
    extras,
    ID
  ) => {
    var data = JSON.stringify({
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      avatar: avatar,
      extras: extras,
    });

    return axios({
      method: 'put',
      url: `${API}restaurant/products/${ID}`,
      headers: {
        'authorization': ID,
        'Content-Type': 'application/json',
      },
      data: data,
    });
  },
  DeleteProductByID: async (
    name,
    description,
    quantity,
    price,
    avatar,
    extras,
    ID
  ) => {
    var data = JSON.stringify({
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      avatar: avatar,
      extras: extras,
    });

    return axios({
      method: 'delete',
      url: `${API}restaurant/products/${ID}`,
      headers: {
        'authorization': ID,
        'Content-Type': 'application/json',
      },
      data: data,
    });
  },
};

export default ProductsAPI;
// post a ct
