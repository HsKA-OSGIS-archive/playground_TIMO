// var CACHE_STATIC = 'static-v6';
// var CACHE_DYNAMIC = 'dynamic-v1';
 

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open('static3')
      .then(function(cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
          '/',
          'index2.html',
          'main2.js',
          'main3.js',
          'app.js',
          'promise.js',
          'fetch.js',
          'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
          'https://openlayers.org/en/v4.6.5/build/ol.js',
          'https://code.jquery.com/jquery-3.5.1.js',
          'https://openlayers.org/en/v4.6.5/css/ol.css',
          'style.css',
          'style1.ss',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
        ])
        
      })
  )
  
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== 'static3' && key !== 'dynamic1') {
            console.log('[Service Worker] Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
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
            return caches.open('dynamic1')
              .then(function(cache) {
                cache.put(event.request.url, res.clone());
                return res;
              })
          })
          .catch(function(err){

          });
        }
      })
  );
});

