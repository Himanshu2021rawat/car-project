import axios from "axios";

const API_URL = process.env.NODE_ENV !== 'production'
  ? "http://wagonon.com/"
  : "http://wagonon.com/";
const AUTH_KEY = "febc8f8ac083f5fc27e032c81e7b536a"; // Replace with your actual authorization key

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      // Assuming you are using a router, you might want to navigate to the login page like this
      // router.push('/login');
      window.location.href = '/#/login';
    }
    return Promise.reject(error);
  }
);

const getStocks = () => {
  const headers = {
    Authorization: 'Bearer ' + AUTH_KEY,
  };

  return axios.get(API_URL + "api/v1/get-live-stock/2", { headers });
};

const DataService = {
  getStocks,
};

export default DataService;







 // get all stock
//http://wagonon.com/api/v1/get-live-stock/2

//get img
//https://wagonon.com/api/v2/get-car-img/$stockId

//get single stock
//https://wagonon.com/api/v2/get-stock-details/$stockId/live

//Authorization:febc8f8ac083f5fc27e032c81e7b536a