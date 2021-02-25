'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/assets/images/logo.png": "58a6ee004019968296a3346ce836abd5",
"assets/assets/images/librery.svg": "77758258778ef280744fe22cee6f4165",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/FontManifest.json": "2cad5f84f4be0d546c4a136b9d6fd4a5",
"assets/AssetManifest.json": "1a66a773bec13fe5344792e7904a822a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"index.html": "179bf4cde39c06d6f66c5365adac72fc",
"/": "179bf4cde39c06d6f66c5365adac72fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "006228d486cc2a863f46a9fbfd1f6a1f",
".git/config": "6b895c7ce80adfe6d06f7a008d2d057f",
".git/refs/remotes/origin/main": "71ad05ee763edbac93917b360e43ca6f",
".git/refs/heads/main": "71ad05ee763edbac93917b360e43ca6f",
".git/index": "dcf5e5039914f052cd9df8b06b2d301d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/main": "1707e0cd6630181381cbd4dc33c3dfe2",
".git/logs/refs/heads/main": "bd9830f0bd5e5dd0092e30fdbc4562ca",
".git/logs/HEAD": "bd9830f0bd5e5dd0092e30fdbc4562ca",
".git/objects/b8/cfbbfa31f40f88ed76349ef38f3a5de3439f45": "adb16b37c837db23256cb4ffccbe986d",
".git/objects/68/8f944ad1415284c8fd8742723bfb5b9bf34c53": "8e3c1f95f35483480590e16fb18f982e",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "5793ea2dc29a103a0b9e8d9420726c5a",
".git/objects/bf/3f59f47f185149a7133ba08b9b38b9a67c5426": "eed92a58cd423ecc5c9bcab6652cf4d3",
".git/objects/98/8825c76a7f1fd1416832213686bc2a6bc17826": "76107bdd72cd825159fc7e4ac493bffe",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"main.dart.js": "aa971c86c42dbb9f4535d16d675dcfa2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"LICENSE": "1ebbd3e34237af26da5dc08a4e440464",
"manifest.json": "e6dec7a6574ec0f3211d1cc7adfceca5",
"version.json": "625074778a361e85dae1cf829c2dc483"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
