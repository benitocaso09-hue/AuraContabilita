// Un Service Worker base per far scattare il prompt di installazione
self.addEventListener('install', (event) => {
  console.log('Service Worker in installazione...');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Lascia passare le richieste di rete normalmente
  // (In una PWA avanzata, qui diresti all'app di caricare i file salvati offline)
});