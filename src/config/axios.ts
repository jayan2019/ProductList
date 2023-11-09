import axios from 'axios';
import {env} from '@/config/env';

const appInstance = axios.create({
  baseURL: env.apiUrl,
});

export default appInstance;
