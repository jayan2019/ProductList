import axios from 'axios';
import {env} from '@/config/env';

const appInstance = axios.create({
  baseURL: env.apiUrl, // Set base URL from env file
});

export default appInstance;
