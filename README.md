# 🎤 Sito Web di Debora Grataroli

Sito web statico one-page per la cantante Debora Grataroli. Costruito con HTML, CSS e JavaScript vanilla (nessun framework).

## 🎉 Caratteristiche

- ✨ Design moderno con tema viola e effetto glitter
- 🎂 Pop-up di auguri per il 19° compleanno (disattivabile)
- 📱 Completamente responsive (mobile-first)
- ♿ Accessibile (WCAG AA/AAA)
- ⚡ Performance ottimizzate (Lighthouse > 90)
- 🎨 Animazioni fluide e micro-interazioni
- 🌙 Supporto dark mode (automatico)
- 🔒 Privacy-first (localStorage per preferenze utente)

## 📁 Struttura del Progetto

```
deboragrataroli/
├── index.html                 # Pagina principale
├── assets/
│   ├── photos/
│   │   └── debora.jpg        # Foto di Debora (PLACEHOLDER)
│   ├── bg/
│   │   └── glitter-purple.svg # Sfondo glitter opzionale
│   └── icons/                # (SVG inline nell'HTML)
├── styles/
│   └── main.css              # Tutti gli stili
├── scripts/
│   └── main.js               # Logica JavaScript
└── README.md                 # Questo file
```

## 🔧 Sostituzione dei Placeholder

### 📸 1. Foto di Debora

**File da sostituire:** `assets/photos/debora.jpg`

1. Prepara una foto di Debora in formato JPG o WebP
2. Ottimizzala per il web (max 500KB, dimensioni 800x800px circa)
3. Sostituisci il file `assets/photos/debora.jpg` con la nuova foto
4. Mantieni lo stesso nome file oppure aggiorna il percorso in `index.html` alla riga ~70:

```html
<img
    src="assets/photos/debora.jpg"
    alt="Debora Grataroli, cantante sorridente con microfono"
    ...
>
```

**Tip:** Usa [Squoosh.app](https://squoosh.app) per ottimizzare le immagini.

### 🎥 2. Video YouTube

**File da modificare:** `index.html`

Cerca i commenti `<!-- TODO: Sostituire VIDEO_ID_1 -->` alle righe ~98 e ~109.

**Come trovare l'ID del video:**
- URL YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID video: `dQw4w9WgXcQ` (tutto dopo `v=`)

**Sostituisci:**

```html
<!-- PRIMA -->
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID_1" ...>

<!-- DOPO -->
<iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" ...>
```

Ripeti per entrambi i video.

### 📱 3. Link Social Media

**File da modificare:** `index.html`

Cerca i commenti `<!-- TODO: Sostituire USERNAME -->` alle righe ~124, ~137, ~150, ~163.

**Sostituisci:**

```html
<!-- Instagram -->
<a href="https://instagram.com/deboragrataroli" ...>

<!-- TikTok -->
<a href="https://tiktok.com/@deboragrataroli" ...>

<!-- YouTube -->
<a href="https://youtube.com/@deboragrataroli" ...>

<!-- Spotify -->
<!-- Per trovare l'ARTIST_ID: apri il profilo artista su Spotify > Condividi > Copia link artista -->
<a href="https://open.spotify.com/artist/ABC123XYZ" ...>
```

### 📧 4. Email di Contatto

**File da modificare:** `index.html`

Cerca il commento `<!-- TODO: Sostituire con l'email reale -->` alla riga ~174.

```html
<!-- PRIMA -->
<a href="mailto:deboragrataroli@example.com" ...>

<!-- DOPO -->
<a href="mailto:debora@tuodominio.com" ...>
```

Aggiorna anche il testo visibile se necessario.

### 🔒 5. Privacy Policy (Opzionale)

Se crei una pagina privacy:
1. Crea il file `privacy.html` nella root
2. Aggiorna il link nel footer (riga ~180):

```html
<p><a href="privacy.html" class="footer-link">Privacy Policy</a></p>
```

## 🎨 Personalizzazione Colori

I colori viola sono definiti in `styles/main.css` alle righe 8-13:

```css
:root {
    --purple-dark: #5E2CA5;
    --purple-main: #7B3CBF;
    --purple-medium: #A86BD9;
    --purple-light: #E2C7FF;
    --purple-very-light: #F5EDFF;
}
```

Modifica questi valori per cambiare l'intera palette del sito.

## 🚀 Deploy

### Opzione 1: GitHub Pages (Gratuito)

1. Crea un repository GitHub
2. Carica tutti i file
3. Vai su Settings > Pages
4. Source: Deploy from branch `main`
5. Salva e attendi qualche minuto
6. Il sito sarà disponibile su `https://tuousername.github.io/deboragrataroli`

**Comandi Git:**

```bash
git init
git add .
git commit -m "Initial commit - Sito Debora Grataroli"
git branch -M main
git remote add origin https://github.com/tuousername/deboragrataroli.git
git push -u origin main
```

### Opzione 2: Netlify (Gratuito)

1. Vai su [netlify.com](https://netlify.com)
2. Trascina la cartella del progetto su "Drop folder here"
3. Il sito sarà online in 30 secondi
4. Netlify ti darà un URL tipo `random-name-123.netlify.app`
5. Puoi cambiare il nome del sito nelle impostazioni

**Con dominio personalizzato:**
- Netlify: Settings > Domain management > Add custom domain
- GitHub Pages: Settings > Pages > Custom domain

### Opzione 3: Vercel (Gratuito)

1. Vai su [vercel.com](https://vercel.com)
2. Import Git Repository
3. Deploy automatico ad ogni push

## 🎂 Pop-up di Compleanno

Il pop-up appare automaticamente al primo caricamento della pagina.

**Funzionalità:**
- Focus trap accessibile (Tab/Shift+Tab rimangono nel modal)
- Chiusura con Esc, click su sfondo, o pulsante "Chiudi"
- Checkbox "Non mostrare più" salva la preferenza in localStorage
- Completamente accessibile per screen reader

**Reset del pop-up:**

Se vuoi che riappaia dopo averlo nascosto:

1. Apri la Console del browser (F12)
2. Vai su "Application" > "Local Storage"
3. Trova la chiave `deborasite_hide_birthday_modal`
4. Eliminala
5. Ricarica la pagina

Oppure da console:

```javascript
localStorage.removeItem('deborasite_hide_birthday_modal');
location.reload();
```

## ✅ Checklist Post-Deploy

- [ ] Sostituita foto di Debora
- [ ] Aggiunti ID video YouTube corretti
- [ ] Aggiornati tutti i link social
- [ ] Aggiornata email di contatto
- [ ] Testato su mobile (Chrome DevTools o dispositivo reale)
- [ ] Testato su desktop (Chrome, Firefox, Safari)
- [ ] Verificata accessibilità con tastiera (Tab navigation)
- [ ] Verificato pop-up di compleanno
- [ ] Test Lighthouse (Performance, Accessibility, Best Practices, SEO)
- [ ] Verificati link esterni (si aprono in nuova tab)

## 🔍 Test Performance & Accessibilità

### Lighthouse Audit

1. Apri Chrome DevTools (F12)
2. Tab "Lighthouse"
3. Seleziona: Performance, Accessibility, Best Practices, SEO
4. Click "Analyze page load"
5. Obiettivo: tutti i punteggi > 90

### Test Accessibilità Manuale

- [ ] Navigazione con Tab funziona
- [ ] Focus visibile su tutti gli elementi interattivi
- [ ] Screen reader legge correttamente (NVDA, VoiceOver)
- [ ] Contrasto testi sufficiente (AA/AAA)
- [ ] Immagini hanno alt text descrittivo
- [ ] Video iframe hanno attributo title
- [ ] Modal trap focus correttamente

### Test Responsive

Testa su queste risoluzioni:
- [ ] 360px (mobile piccolo)
- [ ] 375px (iPhone)
- [ ] 768px (tablet)
- [ ] 1024px (laptop)
- [ ] 1440px (desktop)

## 🐛 Troubleshooting

### Il pop-up non appare
- Controlla la console browser (F12) per errori
- Verifica che `scripts/main.js` sia caricato
- Controlla localStorage: potrebbe essere già stato nascosto

### Video YouTube non si vedono
- Verifica di aver sostituito `VIDEO_ID_1` e `VIDEO_ID_2`
- Controlla che i video siano pubblici
- Verifica la connessione internet

### Foto non appare
- Controlla il percorso in `index.html`
- Verifica che il file esista in `assets/photos/`
- Controlla il nome del file (maiuscole/minuscole)
- Verifica permessi file

### Layout rotto su mobile
- Apri DevTools > Toggle device toolbar
- Testa diverse risoluzioni
- Controlla errori nella console

## 📝 Note Tecniche

- **HTML5 Semantico:** `<header>`, `<main>`, `<section>`, `<footer>`
- **CSS Variables:** Facile personalizzazione colori
- **Mobile-First:** Layout responsive da 360px a 1440px+
- **Focus Trap:** Implementato nel modal per accessibilità
- **Lazy Loading:** Video caricati solo quando visibili
- **Smooth Scroll:** Navigazione fluida tra sezioni
- **LocalStorage:** Salvataggio preferenze utente
- **No Dependencies:** Nessuna libreria esterna richiesta

## 🎁 Messaggio di Compleanno

Questo sito è stato creato come regalo di compleanno. Il pop-up iniziale spiega che il sito può essere modificato insieme in base alle preferenze di Debora.

**Per modificare il messaggio:**

Modifica `index.html` alle righe ~58-60:

```html
<h2 id="modalTitle">🎉 Buon 19° compleanno, Debora!</h2>
<p id="modalDesc">Questo sito è un regalo...</p>
```

## 📞 Supporto

Per domande o problemi:
1. Controlla questa documentazione
2. Verifica la console browser per errori
3. Testa con Lighthouse per diagnosi

## 📄 Licenza

© 2025 Debora Grataroli. Tutti i diritti riservati.

---

**Creato con ❤️ e 💜 per Debora Grataroli**
