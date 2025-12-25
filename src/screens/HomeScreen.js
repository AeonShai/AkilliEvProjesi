import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useLightControl } from '../hooks/useLightControl';

const HomeScreen = () => {
  const { lightStatus, error, updateLight } = useLightControl();

  if (!lightStatus && !error) return <ActivityIndicator size="large" style={styles.center} />;

  // Güvenli veri erişimi için yardımcı değişkenler
  const isLightOn = lightStatus?.isLightOn || false;
  const brightness = lightStatus?.brightness || 0;
  const deviceName = lightStatus?.deviceName || "Akıllı Lamba";

  return (
    <View style={[styles.container, { backgroundColor: isLightOn ? '#FFF9C4' : '#ECEFF1' }]}>
      <Text style={styles.title}>{deviceName}</Text>
      
      <View style={styles.card}>
        <Text style={styles.statusText}>
          Durum: {isLightOn ? 'AÇIK' : 'KAPALI'}
        </Text>
        <Text style={styles.statusText}>Parlaklık: %{brightness}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: isLightOn ? '#F44336' : '#4CAF50' }]}
        onPress={() => updateLight({ isLightOn: !isLightOn })}
      >
        <Text style={styles.buttonText}>{isLightOn ? 'Kapat' : 'Aç'}</Text>
      </TouchableOpacity>

      <View style={styles.brightnessControls}>
        <TouchableOpacity onPress={() => updateLight({ brightness: brightness - 10 })} style={styles.smallButton}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.brightnessLabel}>Parlaklık Ayarı</Text>
        <TouchableOpacity onPress={() => updateLight({ brightness: brightness + 10 })} style={styles.smallButton}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  center: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { padding: 20, borderRadius: 10, backgroundColor: 'white', elevation: 3, marginBottom: 30, width: '100%', alignItems: 'center' },
  statusText: { fontSize: 18, marginVertical: 5 },
  button: { paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, elevation: 2 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  brightnessControls: { flexDirection: 'row', alignItems: 'center', marginTop: 30 },
  brightnessLabel: { marginHorizontal: 12 },
  smallButton: { backgroundColor: '#2196F3', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 12 },
  errorText: { color: 'red', marginTop: 20, fontWeight: 'bold' }
});

export default HomeScreen;
