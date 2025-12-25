# Akıllı Ev Işık Kontrolü - Gereksinim Dokümanı

## 1. Proje Amacı
IoT tabanlı ekosistem için React Native kullanılarak geliştirilmiş, ISO/IEC 25010 standartlarına uygun, hafif bir ışık kontrol istemcisi oluşturmak.

## 2. Fonksiyonel Gereksinimler (Functional Suitability)
- **FR-01 (Durum Sorgulama):** Uygulama açılışta `GET /status` isteği ile ışığın güncel durumunu çekmelidir.
- **FR-02 (Güç Kontrolü):** Kullanıcı switch aracılığıyla ışığı açıp kapatabilmeli, bu işlem `PATCH /status` ile sunucuya iletilmelidir.
- **FR-03 (Parlaklık Ayarı):** Kullanıcı 0-100 arası bir slider ile parlaklık değiştirebilmeli, bu veri sunucuya güncellenmelidir.
- **FR-04 (Geri Bildirim):** İşlem başarılı olduğunda arayüz güncellenmeli, başarısız olduğunda kullanıcıya hata gösterilmelidir.

## 3. Kalite Gereksinimleri (ISO/IEC 25010)
- **Performans (Performance Efficiency):** Uygulama içi tepki süresi ve ağ isteği işleme süreci toplamda <200ms olmalıdır.
- **Güvenilirlik (Reliability):** Sunucuya ulaşılamadığı durumlarda uygulama çökmek yerine "Bağlantı Hatası" uyarısı vermelidir.
- **Kullanılabilirlik (Usability):** Işık durumu (Açık/Kapalı) renk değişimleri ile görsel olarak desteklenmelidir.
- **Bakım Yapılabilirlik (Maintainability):** Kod yapısı modüler (API ve UI katmanları ayrı) olmalıdır.

## 4. Kabul Test Planı (Acceptance Test Plan)
| ID | Senaryo | Beklenen Sonuç | Durum |
|:---|:---|:---|:---|
| AT-01 | Uygulama Başlatma | Sunucudaki mevcut verinin (Açık/Kapalı) ekrana yansıması. | Beklemede |
| AT-02 | Işığı Açma/Kapama | Switch değişimi sonrası donanım durumunun (Mock API) değişmesi. | Beklemede |
| AT-03 | Parlaklık Kaydırma | Slider bırakıldığında sunucudaki değerin güncellenmesi. | Beklemede |
| AT-04 | Hata Senaryosu | Sunucu kapalıyken işlem yapıldığında uyarı çıkması. | Beklemede |