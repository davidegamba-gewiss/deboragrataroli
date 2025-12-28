# 🎉 Guida Rapida - Sito Debora Grataroli

Ciao Debora! Questo è il tuo nuovo sito web 💜

## 🚀 Per Iniziare

### Cosa Fare SUBITO:

1. **Sostituisci la tua foto**
   - Metti la tua foto preferita in `assets/photos/debora.jpg`
   - Usa una foto quadrata (es. 800x800px)
   - Formato JPG o WebP

2. **Aggiungi i tuoi video YouTube**
   - Apri `index.html` con un editor di testo
   - Cerca `VIDEO_ID_1` e `VIDEO_ID_2`
   - Sostituiscili con gli ID dei tuoi video
   - **Come trovare l'ID:** dal link `youtube.com/watch?v=ABC123`, l'ID è `ABC123`

3. **Aggiungi i tuoi social**
   - Sempre in `index.html`
   - Cerca i link Instagram, TikTok, YouTube, Spotify
   - Sostituisci `USERNAME` con il tuo vero username
   - Per Spotify: copia il link del tuo profilo artista

4. **Aggiorna la tua email**
   - Cerca `deboragrataroli@example.com`
   - Sostituisci con la tua email vera

## 📱 Come Vedere il Sito

### Opzione 1: Sul tuo computer
1. Apri il file `index.html` con Chrome, Firefox o Safari
2. Fatto! 🎉

### Opzione 2: Online (gratis)
1. Vai su [netlify.com/drop](https://app.netlify.com/drop)
2. Trascina la cartella del sito
3. Ricevi un link da condividere! ✨

## 🎨 Personalizzazioni Facili

### Cambiare i Colori
Nel file `styles/main.css`, cerca queste righe:

```css
--purple-dark: #5E2CA5;
--purple-main: #7B3CBF;
```

Sostituisci con i codici colore che preferisci ([Usa questo tool](https://htmlcolorcodes.com/))

### Cambiare il Messaggio del Pop-up
In `index.html`, cerca:

```html
<h2 id="modalTitle">🎉 Buon 19° compleanno, Debora!</h2>
```

E modifica il testo come vuoi!

## ❓ Problemi Comuni

**Il pop-up non appare più?**
- È normale! Hai cliccato "Non mostrare più"
- Per farlo riapparire: F12 > Console > scrivi:
  ```javascript
  localStorage.clear()
  ```
  Poi ricarica la pagina

**I video non si vedono?**
- Controlla di aver messo gli ID corretti
- Verifica che i video siano pubblici su YouTube

**La foto non appare?**
- Controlla che si chiami esattamente `debora.jpg`
- Controlla che sia nella cartella `assets/photos/`

## 🎁 Modifiche Future

Questo sito è TUO! Possiamo modificarlo insieme quando vuoi:
- Aggiungere nuove sezioni
- Cambiare colori e stile
- Aggiungere più video
- Creare una galleria foto
- Aggiungere date concerti
- ...tutto quello che vuoi!

## 📞 Hai Bisogno di Aiuto?

Leggi il file `README.md` per istruzioni dettagliate, oppure chiedi a chi ti ha regalato il sito! 😊

---

**Buon compleanno e in bocca al lupo per la tua carriera! 🎤💜**
