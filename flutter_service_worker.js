'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"manifest.json": "3c00bfb5fa6c03e5efff656e896ed43c",
"assets/AssetManifest.bin": "ac65a8dbf414d257d13251fb4a39bf78",
"assets/AssetManifest.json": "2e4f209e80f41779e27a3f40bf20bd19",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin.json": "a5519edeebde2ece88518eb26411e689",
"assets/assets/images/screenshots/etech_miniature.webp": "deb58136f9bd3346e58cfac47cbed9c2",
"assets/assets/images/screenshots/clinicaut_miniature.webp": "b5d4ceb5c434a4c3a690b3629ee73acb",
"assets/assets/images/screenshots/etech/0_inventory.webp": "ce8a5230a1a86cd3e3886d8acd41bcba",
"assets/assets/images/screenshots/etech/3_add_personnel.webp": "bb392155c950906ec3c85edf7cfc7b36",
"assets/assets/images/screenshots/etech/2_store_management.webp": "4891fe1715d85d73d738f6868099b048",
"assets/assets/images/screenshots/etech/4_add_branch.webp": "6887038c0b1e1f42b0959c0a83ea05d3",
"assets/assets/images/screenshots/etech/1_product_detail.webp": "b57a356b5a2a357071224b54497f64ca",
"assets/assets/images/screenshots/etech/5_access_history.webp": "0e24526e1b4df206c8904e2a070ec952",
"assets/assets/images/screenshots/etech/6_make_a_sale.webp": "97af6d93bbf5147fdd4aec8eb8203e24",
"assets/assets/images/screenshots/clinicaut/8_Payments.webp": "b9a57025dbf82005559d2c4c212634b6",
"assets/assets/images/screenshots/clinicaut/2_schedule_an_appointment.webp": "5a472cfaec669aff8e08bd7a59e52baa",
"assets/assets/images/screenshots/clinicaut/9_Accounting.webp": "be82e24b4c849cd1a7ec26a634444fb0",
"assets/assets/images/screenshots/clinicaut/4_Patient_detail.webp": "efe8ad9c36fad59b34a90631713392cb",
"assets/assets/images/screenshots/clinicaut/6_Medical_history_detail.webp": "ef1d007111047068e737870d14a59c6c",
"assets/assets/images/screenshots/clinicaut/7_Treatment_plan_detail.webp": "41028f22f59a88c6e362f1588b9e89d9",
"assets/assets/images/screenshots/clinicaut/5_Add_medical_history.webp": "054f04e4b087768334eb10d9fb344a9a",
"assets/assets/images/screenshots/clinicaut/1_appointments.webp": "51e1b2875d5a729336c46c023be9b104",
"assets/assets/images/screenshots/clinicaut/0_login.webp": "0e6b7eca1e6a0558cddb2cedecad879f",
"assets/assets/images/screenshots/clinicaut/3_Register_a_new_patient.webp": "80e1f20f8074ff7b5fcf0a79e9a9e423",
"assets/assets/icons/es.svg": "4a45e07bb4708e975e67eba01e3ccca1",
"assets/assets/icons/github-mark.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/icons/us.svg": "1d23b9509d0a0a828e3071096b0d2edf",
"assets/NOTICES": "4b5d3e159463d27be0d5591425179ab9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"index.html": "334a5c115a6a15ab2dfc3e714748899e",
"/": "334a5c115a6a15ab2dfc3e714748899e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "0b3863f1f0478d0563c5e68e5b52e8b1",
"flutter_bootstrap.js": "70abb7e6137bc8e5fd13a1dfb10b0b45"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
