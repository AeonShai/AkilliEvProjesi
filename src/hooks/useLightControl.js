import { useState, useEffect } from 'react';

// Sahte (Mock) Lamba Kontrolü - Sunucu bağımsız çalışır
export const useLightControl = () => {
  // Başlangıç değerleri (Sahte lamba verisi)
  const [lightStatus, setLightStatus] = useState({
    isLightOn: false,
    brightness: 50,
    deviceName: "Simüle Edilen Lamba"
  });
  
  const [error, setError] = useState(null);

  // Veri çekme simülasyonu
  const fetchStatus = () => {
    console.log("Simülasyon: Veri yerelden yüklendi.");
  };

  // Güncelleme simülasyonu (API'ye gitmez, sadece ekranı günceller)
  const updateLight = (params) => {
    setLightStatus(prev => {
      let newBrightness = prev.brightness;
      
      if (params.brightness !== undefined) {
        newBrightness = Math.max(0, Math.min(100, params.brightness));
      }

      const newState = {
        ...prev,
        ...params,
        brightness: newBrightness
      };

      console.log("Simülasyon Güncellendi:", newState);
      return newState;
    });
  };

  useEffect(() => { fetchStatus(); }, []);

  return { lightStatus, error, updateLight };
};
