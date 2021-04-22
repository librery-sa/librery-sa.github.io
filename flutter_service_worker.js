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
"assets/NOTICES": "d935250b56b9c99547e4553bec1244df",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"index.html": "b3e6f8c3b15ff2a53d6abcb0da9f9ae2",
"/": "b3e6f8c3b15ff2a53d6abcb0da9f9ae2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "098b0f695d7843c767049984912e1679",
".git/config": "69b8f6ebc8074e3628a50c66ee694ed4",
".git/COMMIT_EDITMSG": "c8bf0299b407a509047df38dc8db6ce9",
".git/refs/remotes/origin/main": "32468b231f5d2c9fdf2d3c82de96dd9d",
".git/refs/heads/main": "32468b231f5d2c9fdf2d3c82de96dd9d",
".git/index": "c3002787c7c5fe66a26150eae16e1ea9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "be46d391a8e5a6200040b1f1cae1101f",
".git/logs/refs/remotes/origin/main": "26b785e54c48a43372d4965195af1a27",
".git/logs/refs/heads/main": "d0db1ae4e6f9f166790d4fe8735258dc",
".git/logs/HEAD": "d0db1ae4e6f9f166790d4fe8735258dc",
".git/objects/8e/a238404807cbd1ff383102e5eec7df1d6c2bc2": "cfdfe7fa0e25d8f9b1a56c4270481e4c",
".git/objects/7a/eee6ef57a70ded1639941e24221b6193d00575": "87a4c20950187479cbac83152b9eb99e",
".git/objects/6d/dde6601fb8b61f9298c289e8faa385329c271a": "c05e11f860ef3af3bb5bb8ef5244a03d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/b8/cfbbfa31f40f88ed76349ef38f3a5de3439f45": "adb16b37c837db23256cb4ffccbe986d",
".git/objects/96/a11e05e973172070fd06654c483eb6cc75a874": "e819b3a9ff7451b5cd4fdeb87fe03769",
".git/objects/17/7da1adc4ae5a6a317399f633035348401b39f4": "d1813f15ba8b3e10cc9af3934351e5a3",
".git/objects/35/0bfa6909910a63a4e8a59bccadd33e8e12c55b": "f0f301bcbabe43810b5a50079d814944",
".git/objects/ba/e6f75be24e35b95ba29a77ec5e350886c07b9a": "b4377622e8512e1e703d42459a28a92a",
".git/objects/68/8f944ad1415284c8fd8742723bfb5b9bf34c53": "8e3c1f95f35483480590e16fb18f982e",
".git/objects/8c/d553e54c568b062197e220b0d9b33f49e8e6f5": "68c9f78d926692e2210c4f5535afe745",
".git/objects/2c/08a934ce5ac87cd392c65cd71a108a54ef5163": "7bb92f36b18f274f6b5722c8129ea0c2",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/0c/884431bc912deba534032875db64fee76e5608": "24040ec4b83fb979ce2fae9f758b2127",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/42/3d587a89e934d063830ba25884f5d06af3c909": "3fba6dfe2589ebf715dd2f82cbc9f158",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "5793ea2dc29a103a0b9e8d9420726c5a",
".git/objects/e7/fed2b05e719092486edba51577439e5d4475cf": "d870a5797013c0943f4442c56bea7583",
".git/objects/9c/74b8b3255d723580944e92d67332068edf439f": "33bb28a33526187257346f407291ba6f",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2a/8d1b7a3892c942f550a7594d12e7dfa9cfd7ef": "e77f387ac8ef22ec690550f5877dbc36",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/1b/100a39b51cd270073144a7e909028e2b0cd508": "f82b827dc8ba32eee3316e8056d6be4f",
".git/objects/44/e468f0b65fcae7a168c48c3c5740454152c1b7": "1ca185f0e33f8690743aff5e08e980e3",
".git/objects/86/b630c543a253ff7b221da73f672c81faa8d3c1": "fe52a2f07328149fe8803c64f5bb1b59",
".git/objects/66/8f212057e805fd948fa463210d2668276dbdc8": "cf44ac360d0ec3745f725728699028fc",
".git/objects/5b/8bed2f36bcb403cfe443b25227ae6ba7a0268f": "28b39f7ee498b7fdfbf6993d210892f2",
".git/objects/25/17605e894ae2321ee75dcb9ac50270f2ff4735": "1d89629605016c4d5543fac8f4fbbd43",
".git/objects/df/ae089e92deac7733fa9a418353329939a31551": "5765522d73080ffb5e7484c4efb28e0c",
".git/objects/6f/6f088f13e536f803183736ee80aa6805c9bee4": "2735b7855c2c1feafadc8d6ea8d6da83",
".git/objects/c4/e2b1f0b9cb93ba607eb12306741455f3a2c5df": "adc6ae398cf0d5967d2e1962ea77df46",
".git/objects/c4/2ace00801acd91de99429ace9da13a818b695f": "eb3638fa616824f673c81473f575fe60",
".git/objects/02/e08db78e4dae6d4b614527680badeb88a78878": "304f3f2653590799247d4986082c97a0",
".git/objects/9f/03f6e107b332233fd17e76474b1efa29109353": "8c10756a0e7c0538d78160a3dabd4fdc",
".git/objects/00/1b6a34c4fde80292bbc8836ccbfe2946ba46ac": "744755fceebef166844b8d712be9433f",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/36/e896003be631ff2e621458d936b20833bc897f": "b7a162a6a5d47d8676c31d0292b22505",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/c1/b000c7946a62cdf2f8e00fcdfe83fd082f6b23": "ce6ec52bfdbd21b9bec5d1f7551c096c",
".git/objects/3e/ddfe863bbfbddf9aa7a4517c6aa18ab612fc32": "55abf7fb3f740f11b0086341863f94fb",
".git/objects/4b/60a272950d3cda05dbdd959436f4d94725f4d9": "daf7968c3fb635cc10c2b8610c197399",
".git/objects/bf/3f59f47f185149a7133ba08b9b38b9a67c5426": "eed92a58cd423ecc5c9bcab6652cf4d3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/db/57363b9d4d994a70c8642934f1d525580bdf61": "212a386702a92cb41e24b09a456578d2",
".git/objects/98/8825c76a7f1fd1416832213686bc2a6bc17826": "76107bdd72cd825159fc7e4ac493bffe",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/cb/62914b45f43414d53e19587dc48f7208c2d392": "ce6534699a67d116f579f1f9ebde52f9",
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
"main.dart.js": "f25ac848b5b1fb5935841c53997e72c0",
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
