import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.tvmaze.com',
});

export default client;
