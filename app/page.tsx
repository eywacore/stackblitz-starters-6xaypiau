// app/page.tsx - BEREKET GLOBAL ÇALIŞAN SON VERSİYON

'use client';

import React, { useState, useEffect } from 'react';

// ============================================================================
// SITE AYARLARI
// ============================================================================

const SITE_AYARLARI = {
  siteAdi: 'BEREKET GLOBAL',
  siteSlogan: 'Doğal Ticaret, Güvenli Gelecek',
  siteUrl: 'bereketglobal.com',
  yil: '2024',
  
  renkler: {
    ana: '#2E7D32',
    vurgu: '#8B5A2B',
    arkaplan: '#FAF7F2',
    yazi: '#2C3E50',
  },
  
  istatistikler: {
    ilanSayisi: '15K+',
    uyeSayisi: '10K+',
    puan: '4.8'
  }
};

// ============================================================================
// KATEGORİLER - GÜNCELLENMİŞ GÖRSELLER
// ============================================================================

const KATEGORILER = [
  { 
    id: 'buyukbas-kucukbas', 
    name: 'Büyükbaş & Küçükbaş & Keçi', 
    icon: '🐄', 
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80', 
    count: '8.234',
    bg: 'bg-amber-50',
    desc: 'Simental, Holştayn, Akkaraman, Kıl Keçisi...',
    aktif: true
  },
  { 
    id: 'kumes', 
    name: 'Kümes Hayvanları', 
    icon: '🐔', 
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80', 
    count: '4.234',
    bg: 'bg-yellow-50',
    desc: 'Tavuk, Hindi, Kaz, Ördek...',
    aktif: true
  },
  { 
    id: 'sus-hayvanlari', 
    name: 'Süs Hayvanları', 
    icon: '🕊️', 
    image: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c773?auto=format&fit=crop&w=600&q=80', 
    count: '1.234',
    bg: 'bg-blue-50',
    desc: 'Güvercin, Kanarya, Papağan, Süs Balığı...',
    badge: 'Yeni',
    aktif: true
  },
  { 
    id: 'ari', 
    name: 'Arı & Bal', 
    icon: '🐝', 
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80', 
    count: '2.345',
    bg: 'bg-amber-50',
    desc: 'Kafkas, Karniyol, Çiçek Balı...',
    aktif: true
  },
  { 
    id: 'hububat', 
    name: 'Hububat', 
    icon: '🌾', 
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80', 
    count: '3.456',
    bg: 'bg-stone-50',
    desc: 'Buğday, Arpa, Mısır, Yulaf...',
    aktif: true
  },
  { 
    id: 'bakliyat', 
    name: 'Bakliyat', 
    icon: '🫘', 
    image: 'https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&w=600&q=80', 
    count: '2.890',
    bg: 'bg-amber-50',
    desc: 'Nohut, Fasulye, Mercimek...',
    badge: 'Üreticiden',
    aktif: true
  },
  { 
    id: 'meyve', 
    name: 'Meyve', 
    icon: '🍎', 
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80', 
    count: '4.567',
    bg: 'bg-red-50',
    desc: 'Elma, Armut, Kiraz, Üzüm...',
    aktif: true
  },
  { 
    id: 'sebze', 
    name: 'Sebze', 
    icon: '🥬', 
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80', 
    count: '4.567',
    bg: 'bg-green-50',
    desc: 'Domates, Biber, Patlıcan...',
    aktif: true
  },
  { 
    id: 'makine', 
    name: 'Tarım Makineleri', 
    icon: '🚜', 
    image: 'https://images.unsplash.com/photo-1597250655578-7aa5b5bc7c1d?auto=format&fit=crop&w=600&q=80', 
    count: '2.345',
    bg: 'bg-blue-50',
    desc: 'Traktör, Biçerdöver, Ekipman...',
    aktif: true
  },
  { 
    id: 'tohum-gubre', 
    name: 'Tohum & Gübre', 
    icon: '🌱', 
    image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7b3a?auto=format&fit=crop&w=600&q=80', 
    count: '3.456',
    bg: 'bg-emerald-50',
    desc: 'Tohum, Fide, Gübre, İlaç...',
    aktif: true
  },
  { 
    id: 'arazi', 
    name: 'Arazi', 
    icon: '🏞️', 
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80', 
    count: '2.345',
    bg: 'bg-stone-50',
    desc: 'Tarla, Bahçe, Mera...',
    aktif: true
  }
];

// ============================================================================
// MARKALAR
// ============================================================================

const MARKALAR = [
  { id: 1, name: 'ANADOLU TARIM', logo: '🌾', image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7b3a?auto=format&fit=crop&w=200&q=80', aktif: true },
  { id: 2, name: 'BERKE TARIM', logo: '🚜', image: 'https://images.unsplash.com/photo-1597250655578-7aa5b5bc7c1d?auto=format&fit=crop&w=200&q=80', aktif: true },
  { id: 3, name: 'YENİBAHÇE', logo: '🌱', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda0?auto=format&fit=crop&w=200&q=80', aktif: true },
  { id: 4, name: 'ÇİFTÇİM', logo: '👨‍🌾', image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=200&q=80', aktif: true },
  { id: 5, name: 'KÖYÜM', logo: '🏡', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=200&q=80', aktif: true }
];

// ============================================================================
// REKLAMLAR
// ============================================================================

const REKLAMLAR = [
  { id: 1, title: 'ANADOLU TARIM', text: 'Taze meyve sebze alımı - Fiyatlar yüksek!', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=600&q=80', aktif: true },
  { id: 2, title: 'BERKE TARIM', text: 'Sıfır faizli traktör kredisi', image: 'https://images.unsplash.com/photo-1597250655578-7aa5b5bc7c1d?auto=format&fit=crop&w=600&q=80', aktif: true },
  { id: 3, title: 'YENİBAHÇE', text: 'Organik gübre kampanyası', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', aktif: true }
];

// ============================================================================
// HABERLER
// ============================================================================

const HABERLER = [
  { id: 1, title: 'ÇKS başvuruları başladı', time: '10 dk önce', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80', aktif: true },
  { id: 2, title: 'Mazot desteği hesaplara yattı', time: '1 saat önce', image: 'https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&w=400&q=80', aktif: true },
  { id: 3, title: 'Hububat fiyatları açıklandı', time: '3 saat önce', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80', aktif: true },
  { id: 4, title: 'Süs hayvanları fuarı', time: '5 saat önce', image: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c773?auto=format&fit=crop&w=400&q=80', aktif: true }
];

// ============================================================================
// İLANLAR
// ============================================================================

const ILANLAR = [
  { 
    id: 1, 
    title: 'Simental Gebe Düve', 
    kategori: 'Büyükbaş & Küçükbaş & Keçi',
    location: 'Sivas/Şarkışla', 
    price: '92.000 TL', 
    priceValue: 92000, 
    seller: 'Ahmet Yılmaz', 
    verified: true, 
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400&q=80', 
    views: 234, 
    vip: true, 
    date: '2 saat önce',
    aktif: true
  },
  { 
    id: 2, 
    title: 'Güvercin Çiftliği (50 çift)', 
    kategori: 'Süs Hayvanları',
    location: 'Bursa/Karacabey', 
    price: '12.500 TL', 
    priceValue: 12500, 
    seller: 'Güvercin Sever', 
    verified: true, 
    image: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c773?auto=format&fit=crop&w=400&q=80', 
    views: 89, 
    date: '4 saat önce',
    badge: 'Süs',
    aktif: true
  },
  { 
    id: 3, 
    title: 'Organik Nohut (1 ton)', 
    kategori: 'Bakliyat',
    location: 'Konya/Cihanbeyli', 
    price: '25.000 TL', 
    priceValue: 25000, 
    seller: 'Bakliyatçı', 
    verified: true, 
    image: 'https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&w=400&q=80', 
    views: 145, 
    featured: true, 
    date: '3 saat önce',
    aktif: true
  },
  { 
    id: 4, 
    title: 'Kıl Keçisi Sürüsü (25 baş)', 
    kategori: 'Büyükbaş & Küçükbaş & Keçi',
    location: 'Antalya/Elmalı', 
    price: '45.000 TL', 
    priceValue: 45000, 
    seller: 'Keçi Üreticisi', 
    verified: true, 
    image: 'https://images.unsplash.com/photo-1524024973431-2ad916746081?auto=format&fit=crop&w=400&q=80', 
    views: 78, 
    date: '5 saat önce',
    aktif: true
  }
];

// ============================================================================
// SOHBET ODALARI
// ============================================================================

const SOHBET_ODALARI = [
  { 
    id: 'genel', 
    name: '🌾 GENEL', 
    icon: '🌾',
    aktif: true,
    altOdalar: [
      { id: 'genel-duyuru', name: '📢 Duyurular', aktif: true },
      { id: 'genel-yardim', name: '🆘 Yardım', aktif: true },
      { id: 'genel-muhabbet', name: '💬 Muhabbet', aktif: true }
    ]
  },
  { 
    id: 'hayvan', 
    name: '🐄 HAYVAN', 
    icon: '🐄',
    aktif: true,
    altOdalar: [
      { id: 'hayvan-inek', name: '🐂 İnek / Büyükbaş', aktif: true },
      { id: 'hayvan-koyun', name: '🐑 Koyun / Küçükbaş', aktif: true },
      { id: 'hayvan-keci', name: '🐐 Keçi', aktif: true },
      { id: 'hayvan-tavuk', name: '🐔 Tavuk / Hindi', aktif: true },
      { id: 'hayvan-sus', name: '🕊️ Süs Hayvanları', aktif: true },
      { id: 'hayvan-ari', name: '🐝 Arıcılık', aktif: true },
      { id: 'hayvan-veteriner', name: '💉 Veteriner', aktif: true }
    ]
  },
  { 
    id: 'tarim', 
    name: '🌱 TARIM', 
    icon: '🌱',
    aktif: true,
    altOdalar: [
      { id: 'tarim-hububat', name: '🌾 Hububat', aktif: true },
      { id: 'tarim-bakliyat', name: '🫘 Bakliyat', aktif: true },
      { id: 'tarim-meyve', name: '🍎 Meyve', aktif: true },
      { id: 'tarim-sebze', name: '🥬 Sebze', aktif: true },
      { id: 'tarim-tohum', name: '🌱 Tohum & Fide', aktif: true },
      { id: 'tarim-gubre', name: '🧪 Gübre & İlaç', aktif: true },
      { id: 'tarim-makine', name: '🚜 Makine & Ekipman', aktif: true }
    ]
  },
  { 
    id: 'nakliye', 
    name: '🚛 NAKLİYE', 
    icon: '🚛',
    aktif: true,
    altOdalar: [
      { id: 'nakliye-yuk-aranan', name: '📦 Yük Aranıyor', aktif: true },
      { id: 'nakliye-arac-var', name: '🚚 Araç Var', aktif: true },
      { id: 'nakliye-hayvan', name: '🐄 Canlı Hayvan Taşıma', aktif: true },
      { id: 'nakliye-gida', name: '🥬 Gıda / Soğuk Zincir', aktif: true },
      { id: 'nakliye-tarim', name: '🌾 Tarım Ürünleri', aktif: true },
      { id: 'nakliye-fiyat', name: '💰 Navlun Fiyatları', aktif: true },
      { id: 'nakliye-rota', name: '🗺️ Rota Paylaşımı', aktif: true },
      { id: 'nakliye-ilan', name: '📋 Nakliye İlanları', aktif: true }
    ]
  }
];

// ============================================================================
// SOHBET MESAJLARI
// ============================================================================

const SOHBET_MESAJLARI = [
  { id: 1, oda: 'genel', altOda: 'genel-muhabbet', user: 'Çiftçi_Ali', msg: '🌿 Günaydın arkadaşlar, bu sene buğday fiyatları nasıl?', time: '09:15' },
  { id: 2, oda: 'genel', altOda: 'genel-muhabbet', user: 'Ziraat_Müh', msg: '🌾 TMO 8.50 TL/kg açıkladı', time: '09:18' },
  { id: 3, oda: 'hayvan', altOda: 'hayvan-inek', user: 'Veteriner_Kenan', msg: '🐄 Simental düve arayan var mı?', time: '09:22' },
  { id: 4, oda: 'hayvan', altOda: 'hayvan-sus', user: 'Güvercin_Sevdalısı', msg: '🕊️ Taklacı güvercin seven var mı?', time: '09:35' },
  { id: 5, oda: 'tarim', altOda: 'tarim-bakliyat', user: 'Bakliyatçı', msg: '🫘 Nohut fiyatları 25 TL/kg\'dan gidiyor', time: '09:42' }
];

// ============================================================================
// ANA BİLEŞEN
// ============================================================================

export default function BereketGlobal() {
  // Temel state'ler
  const [showAI, setShowAI] = useState(false);
  const [activeOda, setActiveOda] = useState('genel');
  const [activeAltOda, setActiveAltOda] = useState('genel-muhabbet');
  const [messages, setMessages] = useState(SOHBET_MESAJLARI);
  const [newMessage, setNewMessage] = useState('');
  const [currentAd, setCurrentAd] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [chatBoyutu, setChatBoyutu] = useState('normal');
  
  // Özel mesajlaşma state'leri
  const [ozelMesajlar, setOzelMesajlar] = useState<{kimden: string, kime: string, mesaj: string, zaman: string}[]>([]);
  const [ozelMesajKutusu, setOzelMesajKutusu] = useState(false);
  const [ozelMesajKullanici, setOzelMesajKullanici] = useState('');
  const [ozelMesajInput, setOzelMesajInput] = useState('');

  // Filtrelemeler
  const aktifKategoriler = KATEGORILER.filter(k => k.aktif !== false);
  const aktifMarkalar = MARKALAR.filter(m => m.aktif !== false);
  const aktifReklamlar = REKLAMLAR.filter(r => r.aktif !== false);
  const aktifHaberler = HABERLER.filter(h => h.aktif !== false);
  const aktifIlanlar = ILANLAR.filter(i => i.aktif !== false);
  const aktifOdalar = SOHBET_ODALARI.filter(o => o.aktif !== false);

  // Reklam otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % aktifReklamlar.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [aktifReklamlar.length]);

  // Mesaj gönderme
  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { 
      id: Date.now(), 
      oda: activeOda, 
      altOda: activeAltOda,
      user: 'Ben', 
      msg: newMessage, 
      time: 'şimdi' 
    }]);
    setNewMessage('');
  };

  // Özel mesaj gönderme
  const sendOzelMesaj = () => {
    if (!ozelMesajInput.trim() || !ozelMesajKullanici) return;
    setOzelMesajlar([...ozelMesajlar, {
      kimden: 'Ben',
      kime: ozelMesajKullanici,
      mesaj: ozelMesajInput,
      zaman: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    }]);
    setOzelMesajInput('');
  };

  const { renkler, istatistikler, siteAdi, siteSlogan, siteUrl, yil } = SITE_AYARLARI;

  return (
    <div className="min-h-screen" style={{ backgroundColor: renkler.arkaplan, color: renkler.yazi }}>
      
      {/* HEADER */}
      <div className="text-white py-2 shadow-md" style={{ background: `linear-gradient(to right, ${renkler.ana}, ${renkler.vurgu})` }}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="font-light text-sm">🌿 Doğal ve Güvenilir</span>
            <span className="font-light text-sm">🤝 {istatistikler.uyeSayisi} Üye</span>
            <span className="font-light text-sm">⭐ {istatistikler.puan} Puan</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">🌍 {siteUrl}</span>
            <button onClick={() => setShowAI(!showAI)} className="bg-white/10 hover:bg-white/20 px-4 py-1 rounded-full text-sm transition">
              🤖 AI Asistan
            </button>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b" style={{ borderColor: `${renkler.ana}10` }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(to bottom right, ${renkler.ana}, ${renkler.vurgu})` }}>
                <span className="text-white font-bold text-2xl">BG</span>
              </div>
              <div>
                <span className="font-bold text-2xl" style={{ color: renkler.yazi }}>
                  {siteAdi.split(' ')[0]}<span style={{ color: renkler.ana }}>{siteAdi.split(' ')[1]}</span>
                </span>
                <p className="text-xs" style={{ color: `${renkler.yazi}60` }}>{siteSlogan}</p>
              </div>
            </div>

            <div className="flex-1 max-w-xl mx-8">
              <input type="text" placeholder="Ne aramıştınız? (Örn: Simental düve, güvercin, nohut...)" 
                className="w-full px-6 py-3 bg-white border-0 rounded-2xl text-sm shadow-md focus:ring-2 transition-all"
                style={{ '--tw-ring-color': `${renkler.ana}20` } as any}
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-full transition hover:bg-opacity-10">
                🔔
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: renkler.vurgu }}></span>
              </button>
              <button className="relative p-2 rounded-full transition hover:bg-opacity-10">
                ❤️
                <span className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: renkler.ana }}>5</span>
              </button>
              <button className="text-white px-6 py-2 rounded-xl text-sm hover:shadow-lg transition" style={{ background: `linear-gradient(to right, ${renkler.ana}, ${renkler.vurgu})` }}>
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HOŞGELDİN BANNER */}
      <div className="py-8 border-y" style={{ background: `linear-gradient(to right, ${renkler.ana}10, ${renkler.vurgu}10)`, borderColor: `${renkler.ana}10` }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light mb-2">🌿 Hoş Geldiniz</h1>
              <p style={{ color: `${renkler.yazi}70` }}>Türkiye'nin en kapsamlı tarım ve hayvancılık platformu</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <span className="text-2xl font-bold" style={{ color: renkler.ana }}>{istatistikler.ilanSayisi}</span>
                <p className="text-xs" style={{ color: `${renkler.yazi}60` }}>İlan</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold" style={{ color: renkler.ana }}>{istatistikler.uyeSayisi}</span>
                <p className="text-xs" style={{ color: `${renkler.yazi}60` }}>Üye</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold" style={{ color: renkler.ana }}>{istatistikler.puan}</span>
                <p className="text-xs" style={{ color: `${renkler.yazi}60` }}>Puan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KATEGORİLER */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-light mb-8 flex items-center gap-2">
          <span className="w-1 h-6 rounded-full" style={{ backgroundColor: renkler.ana }}></span>
          Kategoriler
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {aktifKategoriler.map((kat, index) => (
            <div key={kat.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={kat.image} alt={kat.name} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl filter drop-shadow-lg">{kat.icon}</span>
                  <span className="font-medium text-lg">{kat.name}</span>
                </div>
                <p className="text-sm text-white/90">{kat.count} ilan</p>
                {kat.badge && (
                  <span className="absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-full" style={{ backgroundColor: renkler.ana }}>
                    {kat.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MARKA PANOSU */}
      <div className="bg-white py-12 border-y" style={{ borderColor: `${renkler.ana}10` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light mb-8 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full" style={{ backgroundColor: renkler.vurgu }}></span>
            İş Ortaklarımız
          </h2>
          <div className="grid grid-cols-5 gap-6">
            {aktifMarkalar.map((m) => (
              <div key={m.id} className="group text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 transition-all duration-300" 
                  style={{ borderColor: `${renkler.ana}10` }}>
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl block mb-1">{m.logo}</span>
                <span className="text-sm font-medium" style={{ color: renkler.yazi }}>{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REKLAM SLIDER */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative overflow-hidden rounded-3xl h-96 shadow-xl">
          {aktifReklamlar.map((ad, index) => (
            <div key={ad.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentAd ? 'opacity-100' : 'opacity-0'}`}>
              <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white max-w-xl">
                <h3 className="text-4xl font-light mb-3">{ad.title}</h3>
                <p className="text-lg text-white/90 mb-4">{ad.text}</p>
                <button className="text-white px-8 py-3 rounded-full text-sm font-medium hover:shadow-lg transition" style={{ backgroundColor: renkler.ana }}>
                  Detaylı Bilgi
                </button>
              </div>
            </div>
          ))}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {aktifReklamlar.map((_, i) => (
              <button key={i} onClick={() => setCurrentAd(i)}
                className={`h-2 rounded-full transition-all duration-500 ${i === currentAd ? 'w-8 bg-white' : 'w-2 bg-white/50'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* HABERLER */}
      <div className="bg-white/50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light mb-8 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full" style={{ backgroundColor: renkler.ana }}></span>
            Güncel Haberler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aktifHaberler.map((h) => (
              <div key={h.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="h-40 overflow-hidden">
                  <img src={h.image} alt={h.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-4">
                  <p className="font-medium mb-2" style={{ color: renkler.yazi }}>{h.title}</p>
                  <p className="text-xs" style={{ color: `${renkler.yazi}50` }}>{h.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* İLANLAR VE SOHBET YAN YANA */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-6">
          {/* İLANLAR - SOL TARAF */}
          <div className="flex-1">
            <h2 className="text-2xl font-light mb-8 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full" style={{ backgroundColor: renkler.vurgu }}></span>
              Son İlanlar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aktifIlanlar.map((ilan) => (
                <div key={ilan.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img src={ilan.image} alt={ilan.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    {ilan.vip && (
                      <div className="absolute top-3 right-3 text-white px-3 py-1 rounded-full text-xs shadow-lg" style={{ background: `linear-gradient(to right, ${renkler.ana}, ${renkler.vurgu})` }}>
                        ✨ VIP
                      </div>
                    )}
                    {ilan.badge && (
                      <div className="absolute top-3 left-3 text-white px-3 py-1 rounded-full text-xs shadow-lg" style={{ backgroundColor: renkler.ana }}>
                        {ilan.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium text-lg mb-2" style={{ color: renkler.yazi }}>{ilan.title}</h3>
                    <p className="text-sm mb-3" style={{ color: `${renkler.yazi}60` }}>📍 {ilan.location}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-light" style={{ color: renkler.ana }}>{ilan.price}</span>
                      <span className="text-sm flex items-center gap-1" style={{ color: `${renkler.yazi}60` }}>
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {ilan.seller}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOHBET - SAĞ TARAF (KALICI) */}
          <div className="w-80 flex-shrink-0">
            <div 
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl sticky top-24"
              style={{ borderColor: `${renkler.ana}10` }}
            >
              {/* Başlık - Kontrol Butonları */}
              <div className="text-white p-3 rounded-t-2xl flex justify-between items-center" style={{ background: `linear-gradient(to right, ${renkler.ana}, ${renkler.vurgu})` }}>
                <span className="font-medium text-lg">💬 Topluluk Sohbeti</span>
                
                {/* KONTROL BUTONLARI */}
                <div className="flex items-center gap-1">
                  {/* Küçült/Büyüt Butonları */}
                  <button 
                    onClick={() => setChatBoyutu(chatBoyutu === 'kucuk' ? 'normal' : 'kucuk')}
                    className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/20 transition"
                    title={chatBoyutu === 'kucuk' ? 'Büyüt' : 'Küçült'}
                  >
                    {chatBoyutu === 'kucuk' ? '□' : '−'}
                  </button>
                  
                  {/* Yenile */}
                  <button 
                    onClick={() => {
                      const container = document.getElementById('sohbet-mesajlari');
                      if (container) container.scrollTop = 0;
                    }}
                    className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/20 transition"
                    title="Yenile"
                  >
                    ↻
                  </button>
                </div>
              </div>
              
              {/* Ana Odalar */}
              <div className="p-2 border-b bg-white/50 flex flex-wrap gap-1 overflow-x-auto" style={{ borderColor: `${renkler.ana}10` }}>
                {aktifOdalar.map((oda) => (
                  <button key={oda.id} onClick={() => { setActiveOda(oda.id); setActiveAltOda(oda.altOdalar[0]?.id || ''); }} 
                    className={`px-3 py-1.5 rounded-full text-xs transition whitespace-nowrap ${activeOda === oda.id ? 'text-white' : 'bg-opacity-10 hover:bg-opacity-20'}`}
                    style={{
                      backgroundColor: activeOda === oda.id ? renkler.ana : `${renkler.ana}10`,
                      color: activeOda === oda.id ? 'white' : renkler.yazi
                    }}>
                    {oda.name}
                  </button>
                ))}
              </div>

              {/* Alt Odalar - Sadece normal boyutta göster */}
              {chatBoyutu !== 'kucuk' && aktifOdalar.find(o => o.id === activeOda)?.altOdalar && (
                <div className="p-2 border-b bg-white/30 flex flex-wrap gap-1 overflow-x-auto" style={{ borderColor: `${renkler.ana}10` }}>
                  {aktifOdalar.find(o => o.id === activeOda)?.altOdalar.filter(a => a.aktif !== false).map((alt) => (
                    <button key={alt.id} onClick={() => setActiveAltOda(alt.id)}
                      className={`px-2 py-1 rounded-full text-xs whitespace-nowrap transition ${activeAltOda === alt.id ? 'text-white' : 'bg-white hover:bg-opacity-60'}`}
                      style={{
                        backgroundColor: activeAltOda === alt.id ? renkler.vurgu : `${renkler.ana}10`,
                        color: activeAltOda === alt.id ? 'white' : renkler.yazi
                      }}>
                      {alt.name}
                    </button>
                  ))}
                </div>
              )}

              {/* KAYDIRMA BUTONLARI - Sadece normal boyutta göster */}
              {chatBoyutu !== 'kucuk' && (
                <div className="p-1 border-b bg-white/30 flex justify-between items-center" style={{ borderColor: `${renkler.ana}10` }}>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => {
                        const container = document.getElementById('sohbet-mesajlari');
                        if (container) container.scrollTop += 100;
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded hover:bg-opacity-20 transition text-xs" 
                      style={{ backgroundColor: `${renkler.ana}10` }}
                      title="Aşağı kaydır">
                      ⬇️
                    </button>
                    <button 
                      onClick={() => {
                        const container = document.getElementById('sohbet-mesajlari');
                        if (container) container.scrollTop -= 100;
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded hover:bg-opacity-20 transition text-xs" 
                      style={{ backgroundColor: `${renkler.ana}10` }}
                      title="Yukarı kaydır">
                      ⬆️
                    </button>
                  </div>
                  <span className="text-xs opacity-50">Kaydır</span>
                </div>
              )}

              {/* Mesajlar - Özel mesaj butonu eklendi */}
              <div 
                id="sohbet-mesajlari" 
                className="overflow-y-auto p-3 bg-white/30" 
                style={{ height: chatBoyutu === 'kucuk' ? '100px' : '300px' }}
              >
                {messages.filter(m => m.oda === activeOda && m.altOda === activeAltOda).map(m => (
                  <div key={m.id} className="mb-3 flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-medium text-xs" style={{ color: renkler.yazi }}>{m.user}</span>
                        <span className="text-[10px]" style={{ color: `${renkler.yazi}40` }}>{m.time}</span>
                      </div>
                      <p className="text-xs ml-1 p-2 bg-white/50 rounded-lg" style={{ color: `${renkler.yazi}80` }}>{m.msg}</p>
                    </div>
                    {/* ÖZEL MESAJ BUTONU */}
                    {m.user !== 'Ben' && (
                      <button 
                        onClick={() => {
                          setOzelMesajKullanici(m.user);
                          setOzelMesajKutusu(true);
                        }}
                        className="ml-2 p-1 rounded hover:bg-opacity-20 transition text-xs"
                        style={{ backgroundColor: `${renkler.ana}10` }}
                        title={`${m.user} ile özel mesajlaş`}
                      >
                        💬
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Mesaj Gönder - Her zaman görünür */}
              <div className="p-2 border-t bg-white/50" style={{ borderColor: `${renkler.ana}10` }}>
                <div className="flex gap-1">
                  <input 
                    value={newMessage} 
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1 px-3 py-2 bg-white border-0 rounded-lg text-xs shadow-sm focus:ring-2 transition" 
                    placeholder="Mesajınızı yazın..." 
                    style={{ '--tw-ring-color': `${renkler.ana}20` } as any} 
                  />
                  <button 
                    onClick={sendMessage} 
                    className="text-white px-3 py-2 rounded-lg text-xs hover:shadow-lg transition whitespace-nowrap" 
                    style={{ background: `linear-gradient(to right, ${renkler.ana}, ${renkler.vurgu})` }}>
                    Gönder
                  </button>
                </div>
                <p className="text-[10px] text-center mt-1" style={{ color: `${renkler.yazi}50` }}>
                  {aktifOdalar.reduce((acc, o) => acc + (o.altOdalar?.length || 0), 0)} oda • 124 online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ÖZEL MESAJ MODAL */}
      {ozelMesajKutusu && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setOzelMesajKutusu(false)}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium" style={{ color: renkler.yazi }}>💬 {ozelMesajKullanici} ile özel sohbet</h3>
              <button onClick={() => setOzelMesajKutusu(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            
            {/* Özel mesajlar */}
            <div className="h-64 overflow-y-auto p-2 bg-gray-50 rounded-lg mb-3">
              {ozelMesajlar.filter(m => 
                (m.kimden === 'Ben' && m.kime === ozelMesajKullanici) || 
                (m.kimden === ozelMesajKullanici && m.kime === 'Ben')
              ).map((m, i) => (
                <div key={i} className={`mb-2 ${m.kimden === 'Ben' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded-lg text-xs max-w-[80%] ${m.kimden === 'Ben' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    <p>{m.mesaj}</p>
                    <p className="text-[8px] opacity-70 mt-1">{m.zaman}</p>
                  </div>
                </div>
              ))}
              {ozelMesajlar.filter(m => 
                (m.kimden === 'Ben' && m.kime === ozelMesajKullanici) || 
                (m.kimden === ozelMesajKullanici && m.kime === 'Ben')
              ).length === 0 && (
                <p className="text-center text-gray-400 text-sm">Henüz mesaj yok. Sohbete başlayın!</p>
              )}
            </div>
            
            {/* Mesaj gönder */}
            <div className="flex gap-2">
              <input 
                value={ozelMesajInput} 
                onChange={(e) => setOzelMesajInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendOzelMesaj()}
                className="flex-1 px-3 py-2 border rounded-lg text-sm" 
                placeholder="Mesajınızı yazın..."
              />
              <button 
                onClick={sendOzelMesaj}
                className="px-4 py-2 rounded-lg text-sm text-white"
                style={{ background: `linear-gradient(to right, ${renkler.ana}, ${renkler.vurgu})` }}
              >
                Gönder
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI MODAL */}
      {showAI && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowAI(false)}>
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(to bottom right, ${renkler.ana}, ${renkler.vurgu})` }}>
                <span className="text-white text-2xl">🌿</span>
              </div>
              <div>
                <h3 className="text-xl font-light" style={{ color: renkler.yazi }}>🌿 Bereket Asistan</h3>
                <p className="text-sm" style={{ color: `${renkler.yazi}60` }}>Size nasıl yardımcı olabilirim?</p>
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left p-4 rounded-xl transition" style={{ backgroundColor: `${renkler.ana}10` }}>
                <span className="block font-medium" style={{ color: renkler.yazi }}>📊 Piyasa Raporu</span>
                <span className="text-sm" style={{ color: `${renkler.yazi}60` }}>Güncel fiyatlar ve trendler</span>
              </button>
              <button className="w-full text-left p-4 rounded-xl transition" style={{ backgroundColor: `${renkler.ana}10` }}>
                <span className="block font-medium" style={{ color: renkler.yazi }}>🔍 İlan Denetimi</span>
                <span className="text-sm" style={{ color: `${renkler.yazi}60` }}>İlanlarınızı AI ile kontrol edin</span>
              </button>
              <button className="w-full text-left p-4 rounded-xl transition" style={{ backgroundColor: `${renkler.ana}10` }}>
                <span className="block font-medium" style={{ color: renkler.yazi }}>✨ Fırsat Bul</span>
                <span className="text-sm" style={{ color: `${renkler.yazi}60` }}>Size özel fırsatları keşfedin</span>
              </button>
            </div>
            <button onClick={() => setShowAI(false)} className="mt-6 w-full py-3 rounded-xl transition" style={{ backgroundColor: `${renkler.yazi}10`, color: renkler.yazi }}>
              Kapat
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-white/80 py-12 mt-12" style={{ backgroundColor: renkler.yazi }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-light mb-4">{siteAdi}</h3>
              <p className="text-sm text-white/60">{siteSlogan}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Kategoriler</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Büyükbaş & Küçükbaş</li>
                <li>Süs Hayvanları</li>
                <li>Kümes Hayvanları</li>
                <li>Hububat & Bakliyat</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Kurumsal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Hakkımızda</li>
                <li>Reklam Ver</li>
                <li>Sponsorluk</li>
                <li>KVKK</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">İletişim</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>📞 0850 123 45 67</li>
                <li>📧 info@bereketglobal.com</li>
                <li>📍 İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
            © {yil} {siteAdi}. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}