import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.tvmaze.com',
});

client.interceptors.request.use(
  function (config) {
    console.log('🚀 ~ file: api.ts ~ line 9 ~ config', config);
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
export default client;
