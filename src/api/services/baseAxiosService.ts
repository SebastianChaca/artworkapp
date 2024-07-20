import axios from 'axios';

export const artworksBase = axios.create({
  baseURL: 'https://api.artic.edu/api/v1',
  timeout: 1000,
});
