const axios = require('axios');
const { API } = require('../../config/API');

const RestaurantExternal = {
  getAll: async () => {
    return axios({
      method: 'get',
      url: `${API}restaurant`,
    });
  },
  GetPendingOrders: async (restuarant) => {
    var data = '';
    return axios({
      method: 'get',
      url: `${API}restaurant/orders/pending-orders/${restuarant}`,
      headers: {
        authorization: restuarant,
      },
      data: data,
    });
  },
  GetPendingOrders: async (restuarant) => {
    var data = '';
    return axios({
      method: 'get',
      url: `${API}restaurant/orders/pending-orders/${restuarant}`,
      headers: {
        authorization: restuarant,
      },
      data: data,
    });
  },
  GetOngoingOrders: async (restuarant) => {
    var data = '';
    return axios({
      method: 'get',
      url: `${API}restaurant/orders/ongoing-orders/${restuarant}`,
      headers: {
        authorization: restuarant,
      },
      data: data,
    });
  },
  UpdateOrderStatus: async (orderID, status) => {
    var data = JSON.stringify({ status: status });
    return axios({
      method: 'put',
      url: `${API}restaurant/orders/${orderID}`,
      headers: {
        'authorization': orderID,
        'Content-Type': 'application/json',
      },
      data: data,
    });
  },
  CancelOrder: async (orderID) => {
    var data = '';
    return axios({
      method: 'delete',
      url: `${API}restaurant/orders/${orderID}`,
      headers: {
        authorization: orderID,
      },
      data: data,
    });
  },
  GetRestuarantStats: async (date) => {
    var data = '';
    return axios({
      method: 'get',
      url: `${API}restaurant/orders/order-stats/5fde000995e02300175b6314?date=2021-01-28T07:18:54.419Z`,
      headers: {
        authorization: '5fcd273bf61e3a246455346e',
      },
      data: data,
    });
  },
};

export default RestaurantExternal;
// post a ct
