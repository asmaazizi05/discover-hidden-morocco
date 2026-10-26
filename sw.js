// Self-destroying poison pill service worker to kill legacy workers on client browsers
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  self.registration.unregister().then(function() {
    return self.clients.matchAll({ type: 'window' });
  }).then(function(clients) {
    if ('caches' in self) {
      caches.keys().then(function(names) {
        names.forEach(function(name) { caches.delete(name); });
      });
    }
  });
});
