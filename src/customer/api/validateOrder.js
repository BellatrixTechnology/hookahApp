const axios = require('axios');
const { API } = require('../../config/API');

const ValidateOrder = {
  validation: async (data) => {
    return axios({
      method: 'post',
      url: `${API}customer/order/validateCart`,
      headers: {
        Authorization: '5fde000995e02300175b6314',
      },
      data: {
        cart: data,
      },
    });
  },
  CheckoutProducts: async (
    restuarant,
    products,
    customer,
    total,
    variant = 'Classic',
    specialInstructions = '.'
  ) => {
    // var data = JSON.stringify({
    //   restaurant: '5fcd273bf61e3a246455346e',
    // products: [
    //   { product: '5ff71e9f83ee230017a8ca6d', extras: [] },
    //   { product: '601141c4e7f4250d602a32b3', extras: [] },
    // ],
    //   customer: '5fe9c1017e2e702fdd01f184',
    //   total: 46,
    // });

    var data = JSON.stringify({
      restaurant: restuarant,
      products: [
        {
          product: products,
          extras: [],
          varient: variant,
          specialInstructions: specialInstructions,
        },
        {
          product: products,
          extras: [],
          varient: variant,
          specialInstructions: specialInstructions,
        },
      ],
      customer: customer,
      total: total,
    });

    return axios({
      method: 'post',
      url: `${API}customer/order/placeorder`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    });
  },
  GetAllProductsCustomer: async (customer) => {
    var data = '';
    return axios({
      method: 'get',
      url: `${API}customer/order`,
      headers: {
        authorization: customer,
      },
      data: data,
    });
  },
};

export default ValidateOrder;
