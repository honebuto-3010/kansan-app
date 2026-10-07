// ============================
// Mutare Unitatem - Service Worker
// ============================

const CACHE_NAME = "unitatem-cache-v1";

// キャッシュするファイル
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",

  // CSS
  "./css/style.css",
  "./css/pages.css",

  // JS
  "./js/main.js",
  "./js/length.js",
  "./js/weight.js",
  "./js/capacity.js",
  "./js/screen.js",
  "./js/golden.js",

  // Pages
  "./pages/length.html",
  "./pages/weight.html",
  "./pages/capacity.html",
  "./pages/screen.html",
  "./pages/golden.html",

  // Icons（後で差し替えOK）
  "./192-icon.png",
  "./512-icon.png",
  "./icon_000121_64.png",
  "./icon_109921_64.png",
  "./icon_121911_64.png",
  "./icon_134021_64.png",
  "./icon_144531_64.png",
  "./icon_150381_64.png"
];

// インストール（初回キャッシュ）
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエスト時のキャッシュ処理
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request).catch(() => {
        return caches.match("./offline.html");
      });
    })
  );
});


// 古いキャッシュの削除
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});


