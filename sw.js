const cacheName = 'v1';

const cacheAssets = [
  'index.html',
  'about.html',
  'favorites.html',
  '/img/bar1-min.jpeg',
  'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
  'style.css',
  '/scripts/app.js',
  '/scripts/cocktail.js',
  '/scripts/ui.js'
];

// Call Install Event
self.addEventListener('install', e => {

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
