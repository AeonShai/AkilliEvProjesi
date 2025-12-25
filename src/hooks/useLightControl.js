import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

export const useLightControl = () => {
  const [lightStatus, setLightStatus] = useState(null);
  const [error, setError] = useState(null);

  const fetchStatus = async () => {
    try {
      const response = await apiClient.get('/status');
      setLightStatus(response.data);
    } catch (err) {
      setError("Bağlantı Hatası: Veri çekilemedi.");
    }
  };

  const updateLight = async (params) => {
    try {
      // ISO 25010: Güvenilirlik - Sınır kontrolü
      if (params.brightness !== undefined) {
        params.brightness = Math.max(0, Math.min(100, params.brightness));
      }
      
      const response = await apiClient.patch('/status', params);
      let data = response.data;
      if (data && typeof data === 'object' && 'item' in data) {
        data = data.item;
      }
      if (data && typeof data === 'object' && (('isLightOn' in data) || ('brightness' in data) || ('deviceName' in data))) {
        setLightStatus(data);
      } else {
        setLightStatus(prev => ({ ...prev, ...params }));
      }
    } catch (err) {
      setError("Komut iletilemedi.");
    }
  };

  useEffect(() => { fetchStatus(); }, []);

  return { lightStatus, error, updateLight };
};