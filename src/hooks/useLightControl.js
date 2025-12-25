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
      setError("Bağlantı Hatası: Lamba durumuna ulaşılamıyor.");
    }
  };

  const updateLight = async (params) => {
    try {
      // Parlaklık sınır kontrolü
      if (params.brightness !== undefined) {
        params.brightness = Math.max(0, Math.min(100, params.brightness));
      }
      
      // json-server /status endpoint'ine doğrudan PATCH gönderir
      const response = await apiClient.patch('/status', params);
      
      // Başarılı ise yerel durumu güncelle
      setLightStatus(prev => ({ ...prev, ...response.data }));
      setError(null); // Hata varsa temizle
    } catch (err) {
      setError("Komut iletilemedi. Sunucunun açık olduğundan emin olun.");
      console.log("Update Error:", err);
    }
  };

  useEffect(() => { fetchStatus(); }, []);

  return { lightStatus, error, updateLight };
};
