import Config from 'react-native-config';

interface IEnv {
  name?: string;
  apiUrl?: string;
}

export const env: IEnv = {
  name: Config.REACT_NATIVE_APP_NAME,
  apiUrl: Config.REACT_NATIVE_API_URL,
};
