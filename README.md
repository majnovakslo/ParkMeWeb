# ParkMe - Pametno Parkiranje za Slovenijo 🇸🇮

Profesionalna spletna stran za ParkMe startup podjetje, ki razvija inovativne pametne parkirne senzorje in aplikacije.

## 🚀 O Projektu

ParkMe je slovensko startup podjetje v Ljubljanskem univerzitetnem inkubatorju, ki razvija celovit IoT sistem za pametno upravljanje parkirnih mest. Naša rešitev združuje:

- **IoT Senzorje** - Realnočasovno spremljanje zasedenih/prostih mest
- **Mobilno Aplikacijo** - Iskanje, rezervacija, plačilo z Urbano kartico
- **Redarsko Aplikacijo** - Avtomatizirano spremljanje neplačanih parkirnin
- **Analitiko** - Podrobni vpogledi v izkoriščenost

## 🎯 Ciljna Publika
 
Spletna stran je namenjena:
- Potencialnim partnerjem (občine, trgovski centri, hoteli)
- Investitorjem
- Medijim
- Poslovnim odločevalcem

## ✨ Funkcionalnosti Spletne Strani

### Sekcije:
1. **Hero** - Impresiven uvod z ključnimi statistikami
2. **Problem** - Prikaz trenutnih izzivov parkiranja
3. **Solution** - Naša celovita rešitev s tremi platformami
4. **Technology** - IoT tehnologija in specifikacije
5. **Features** - Vse funkcionalnosti sistema
6. **Business Model** - Različni viri prihodkov
7. **Partnership** - Modeli sodelovanja (CAPEX, OPEX, Revenue Share)
8. **ROI Calculator** - Interaktivni kalkulator donosa
9. **About Us** - Zgodba, vizija, ekipa
10. **Contact** - Kontaktni obrazec in podatki

### Tehnične Značilnosti:
- ⚡ Next.js 14 za optimalno SEO
- 🎨 Tailwind CSS za moderne dizajne
- 🎭 Framer Motion za animacije
- 📱 Popolnoma responziven dizajn
- ♿ Dostopnost (WCAG)
- 🚀 Optimizirana zmogljivost

## 🛠️ Tehnologije

- **Framework:** Next.js 14 (React 18)
- **Styling:** Tailwind CSS
- **Ikone:** Lucide React
- **Animacije:** Framer Motion
- **Jezik:** TypeScript
- **Scroll Effects:** React Intersection Observer

## 📦 Namestitev

```bash
# Namestitev odvisnosti
npm install

# Razvojni strežnik
npm run dev

# Build za produkcijo
npm run build

# Zagon produkcijske verzije
npm start
```

## 🌐 Deployment

### Vercel (Priporočeno)
```bash
# Namestite Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Povežite GitHub repozitorij
2. Build command: `npm run build`
3. Publish directory: `.next`

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 🎨 Barvna Paleta

```css
--parkme-green: #00A651
--parkme-blue: #0066CC
--parkme-dark: #1a1a1a
--parkme-gray: #f5f5f5
```

## 📞 Kontakt

- **Email:** parkme.slo@gmail.com
- **Telefon:** 
  - Domen: 040 145 459
  - Maj: 068 641 803
- **Lokacija:** Ljubljanski univerzitetni inkubator, Ljubljana

## 📄 Licenca

© 2026 ParkMe. Vse pravice pridržane.

---

**Razvito z ❤️ za ParkMe startup**
