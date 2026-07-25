// Clean, minimal network-only service worker
// Suppresses all service worker caching to completely eliminate staleness,
// while remaining present to satisfy PWA installation criteria.

// On activation, prune and completely delete all legacy cache stores to reclaim space
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Simple network-only passthrough (no caching at all)
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin and non-GET requests
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith(fetch(request));
});
