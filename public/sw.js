const CACHE_NAME = 'the-daily-diff-cache';
const ASSETS_TO_CACHE = [
  '/',
  '/archive/',
  '/stats/',
  '/icon.png',
  '/the-daily-diff.png'
];

// Install: Cache critical shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate: Prune older caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Interceptor
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin and non-GET requests
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  const isDoc = request.headers.get('accept')?.includes('text/html');
  const isStaticResource = /\.(css|js|json|jsonl)$/i.test(url.pathname);

  // 1. Network-First with Cache Fallback for HTML Documents and Code/Data resources
  // This guarantees that online users always get the freshest layouts, styles, and data instantly on refresh.
  if (isDoc || isStaticResource) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => {
          return caches.match(request).then((cached) => {
            if (cached) return cached;
            // For documents, fall back to the root if not found in cache
            if (isDoc) return caches.match('/');
            return Promise.reject('Offline and asset not in cache');
          });
        })
    );
    return;
  }

  // 2. Cache-First with Network Fallback for heavy media, fonts, and metadata
  // This saves bandwidth on mobile data and ensures lightning-fast media loading.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
