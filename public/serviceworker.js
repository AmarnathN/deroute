const CACHE_NAME = "VERSION-1";
const URLS_TO_CACHE = ["index.html", "offline.html"];

const self = this;
// installation
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("opened cache");
        return cache.addAll(URLS_TO_CACHE);
      })
      .catch((err) => console.log("open cache error: ", err))
  );
});

// listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => {
        return caches.match("offline.html");
      });
    })
  );
});
// activate
self.addEventListener("activate", (event) => {
  const CACHE_WHITELIST = [];
  CACHE_WHITELIST.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (!CACHE_WHITELIST.includes(name)) {
            return caches.delete(name);
          }
        })
      )
    )
  );
});
