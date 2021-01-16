self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open('static')
      .then(function(cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
          '/',
          'index2.html',
          'main2.js',
          'app.js',
          'promise.js',
          'fetch.js',
          'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
          'style.css',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
        ])
        
      })
  )
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
          .then(function(res) {
            return caches.open('dynamic')
              .then(function(cache) {
                cache.put(event.request.url, res.clone());
                return res;
              })
          });
        }
      })
  );
});

