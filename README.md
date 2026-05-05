# MASTER METER Web

Elektrik sayaç sistemleri ve akıllı enerji yönetimi çözümleri sunan MASTER METER'in kurumsal web sitesi.

## Teknoloji Stack

- **Build Tool**: Vite
- **CSS**: Vanilla CSS (variables, modular)
- **JavaScript**: Vanilla JS (ES6+)
- **Linting**: ESLint, Stylelint
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged

## Proje Yapısı

```
master-meter-web/
├── src/
│   ├── index.html
│   ├── css/
│   │   ├── variables.css      # CSS değişkenleri
│   │   ├── base.css           # Reset + temel stiller
│   │   ├── components.css     # UI bileşenleri
│   │   └── responsive.css     # Responsive tasarımı
│   ├── js/
│   │   ├── slider.js          # Hero slider
│   │   ├── menu.js            # Mobil menü
│   │   ├── faq.js             # FAQ accordion
│   │   └── form.js            # Form işlemi
│   └── Photos/                # Proje görselleri
├── .husky/                    # Git hooks
├── vite.config.js
├── .eslintrc.json
├── .prettierrc.json
├── .stylelintrc.json
├── .gitignore
└── package.json
```

## Kurulum

```bash
# Node.js 18+ gereklidir
npm install
```

## Geliştirme

```bash
# Dev server başlat (port 5173)
npm run dev

# Kod stilini kontrol et
npm run lint

# Kod stilini otomatik düzelt
npm run lint:fix

# CSS kontrol et
npm run style:check

# CSS otomatik düzelt
npm run style:fix

# Tüm dosyaları formatlı yap
npm run format
```

## Build

```bash
# Production build
npm run build

# Output: dist/ klasörüne kaydedilir

# Build'i test etmek
npm run preview
```

## Kod Kalite Standartları

### ESLint Kuralları
- `semi: true` — Satır sonu noktalı virgül zorunlu
- `quotes: 'single'` — Tek tırnak kullan
- `no-var` — `var` yerine `const`/`let` kullan
- `prefer-const` — Değişmeyen değerler için `const` kullan

### Prettier Formatting
- Satır genişliği: 100 karakter
- Tab: 2 boşluk
- Trailing comma: ES5 uyumlu

### Stylelint Kuralları
- Standard CSS yapısı
- 2 boşluk indentation
- Geçerli hex renkler
- Bilinmeyen özellikleri uyar

## Git Workflow

Commit yapmadan önce otomatik olarak çalışan:
1. ESLint (JS dosyaları) → otomatik düzelt
2. Stylelint (CSS dosyaları) → otomatik düzelt
3. Prettier (tüm dosyalar) → otomatik format

## Tarayıcı Desteği

- Chrome/Edge: Son 2 versiyon
- Firefox: Son 2 versiyon
- Safari: Son 2 versiyon
- Mobile: Tüm modern tarayıcılar

## Performance

- ✅ Critical CSS inline
- ✅ Lazy loading resimler
- ✅ WebP format desteği
- ✅ CSS/JS minification (build time)

## Accessibility (a11y)

- ✅ WCAG 2.1 AA uyumlu
- ✅ Keyboard navigation
- ✅ ARIA landmark roles
- ✅ Form label ilişkilendirmeleri

## SEO

- ✅ Meta tags (OpenGraph, Twitter Card)
- ✅ Structured data (JSON-LD)
- ✅ Mobile-friendly
- ✅ Performance optimized

## Deployment

Vercel veya Netlify kullanarak otomatik deploy:

```bash
# Build komutu
npm run build

# Output dizini
dist/
```

## Katkıda Bulunma

[CONTRIBUTING.md](./CONTRIBUTING.md) dosyasını oku.

## Lisans

MIT
