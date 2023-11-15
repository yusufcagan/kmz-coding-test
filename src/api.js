import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apiv5.akilliticaretim.com/api/v5',
  headers: {
    'Content-Type': 'application/json',
    GUID: '24BE-DB0E-D75E-4060',
  },
});

export default api;
