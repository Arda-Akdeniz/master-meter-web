# Katkıda Bulunma Rehberi

MASTER METER web projesine katkı sağlamak için bu adımları izleyin.

## Başlamadan Önce

1. Projeyi fork edin
2. Lokal makinenize klonlayın:
   ```bash
   git clone https://github.com/YOUR_USERNAME/master-meter-web.git
   cd master-meter-web
   ```
3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

## Development Süreci

### 1. Feature Branch Oluştur

```bash
git checkout -b feature/feature-adi
# veya bug fix için
git checkout -b fix/bug-adi
```

### 2. Kodunuzu Geliştirin

```bash
# Dev server'ı çalıştırın
npm run dev

# Tarayıcıda http://localhost:5173 açın
```

### 3. Kod Kalitesini Kontrol Et

Commit yapmadan önce:

```bash
# JavaScript kontrolü
npm run lint

# Otomatik fix (yapılabilir problemler)
npm run lint:fix

# CSS kontrolü
npm run style:check

# CSS otomatik fix
npm run style:fix

# Tüm dosyaları formatlı yap
npm run format
```

### 4. Commit Yapın

```bash
git add .
git commit -m "feat: feature açıklaması"
# veya
git commit -m "fix: hata açıklaması"
```

#### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat` — Yeni özellik
- `fix` — Hata düzeltme
- `docs` — Belgelendirme
- `style` — Kod formatı (mantık değişmez)
- `refactor` — Kod yeniden yazma
- `perf` — Performance iyileştirmesi
- `test` — Test ekle/düzelt

**Örnek:**
```
feat(slider): Hero slider otomatik döngü ekle

- Auto-rotate her 4 saniyede
- Pause on hover
- Keyboard navigation (Arrow keys)
```

### 5. Push ve Pull Request

```bash
git push origin feature/feature-adi
```

GitHub'da:
1. Pull Request açın
2. Başlık ve açıklamayı doldurun
3. Checklist'i tamamlayın

### PR Checklist

- [ ] Kodumuz lint testlerini geçiyor (`npm run lint`)
- [ ] CSS formatı doğru (`npm run style:check`)
- [ ] Prettier formatlanmış (`npm run format`)
- [ ] Tarayıcıda test ettim (Chrome, Firefox, Mobile)
- [ ] Accessibility kontrol ettim (tab navigation, color contrast)
- [ ] Responsive tasarım kontrol ettim
- [ ] Gereksiz console.log'ları kaldırdım
- [ ] Yorum ekledi/güncelle (gerekirse)

## Kod Yazma Standartları

### CSS

```css
/* Değişken kullan */
color: var(--primary);
background: var(--shadow);

/* BEM naming convention (isteğe bağlı) */
.button__primary {
  background: var(--primary);
}

.button__primary:hover {
  opacity: 0.9;
}
```

### JavaScript

```javascript
// const/let kullan, var kullanma
const slider = document.getElementById('heroSlider');
let currentIndex = 0;

// Template literals
const message = `Hoş geldiniz, ${name}!`;

// Arrow functions tercih et
const handleClick = () => {
  console.log('Tıklandı');
};

// Açıklayıcı isimler
const initializeSlider = () => { /* ... */ };
```

### HTML

```html
<!-- Semantic HTML kullan -->
<header>
  <nav role="navigation">
    <a href="#main">Skip to content</a>
  </nav>
</header>

<main id="main">
  <!-- İçerik -->
</main>

<!-- ARIA labels ekle (gerekirse) -->
<button aria-label="Menü aç">☰</button>
```

## Performance İpuçları

1. **Görseller**: WebP format veya srcset kullan
2. **Fonts**: Preload (`<link rel="preload">`)
3. **CSS**: Critical CSS'i inline, rest deferred
4. **JavaScript**: `defer` veya asenkron yükle
5. **Lazy loading**: `loading="lazy"` kullan

## Accessibility (a11y)

- [ ] Tüm renkler WCAG AA kontrastına uyumlu (4.5:1 text için)
- [ ] Form label'ları `for`/`id` ile bağlı
- [ ] ARIA landmark roles (`role="main"`, `role="navigation"`)
- [ ] Keyboard navigation çalışıyor (Tab, Enter, Escape)
- [ ] Screen reader testi yapıldı

## Sorun Raporlama

GitHub Issues'de hata/önerinizi açın:

1. Açık başlık yazın
2. Hatayı yeniden üretmek için adımlar
3. Beklenen vs gerçek davranış
4. Ekran görüntüsü/video (gerekirse)
5. Tarayıcı/cihaz bilgisi

## Soru Sorma

- GitHub Discussions kullanın veya
- Discussions sekmesinde yeni başlık açın

## Lisans

Projeye katkı sağlayarak MIT lisansını kabul edersiniz.

---

Katkılarınız için teşekkür ederiz! 🎉
