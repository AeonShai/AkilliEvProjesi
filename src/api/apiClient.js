import axios from 'axios';
import { Platform } from 'react-native';

// Android emülatör 10.0.2.2 üzerinden ana makineye (localhost) bağlanır.
const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

const apiClient = axios.create({
  baseURL,
  timeout: 10000, // Zaman aşımını 10 saniyeye çıkardık
});

export default apiClient;
