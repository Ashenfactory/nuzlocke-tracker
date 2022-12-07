const APP_PREFIX = 'nuzlocke-tracker';
const VERSION = '1.1.0';
const CACHE_NAME = APP_PREFIX + VERSION;
const URLS = [
	'/nuzlocke-tracker/',
	'/nuzlocke-tracker/index.html',
	'/nuzlocke-tracker/dist/js/main.min.js',
	'/nuzlocke-tracker/dist/js/plugins.min.js',
	'/nuzlocke-tracker/dist/css/main.min.css',
	'/nuzlocke-tracker/img/sprites.png'
];

self.addEventListener('fetch', e => {
	e.respondWith(
		caches.match(e.request).then(request => {
			return request || fetch(e.request);
		})
	);
});

self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			return cache.addAll(URLS);
		})
	);
});

self.addEventListener('activate', e => {
	e.waitUntil(
		caches.keys().then(keyList => {
			const cacheAllowlist = keyList.filter(key => {
				return key.indexOf(APP_PREFIX);
			});
			cacheAllowlist.push(CACHE_NAME);

			return Promise.all(keyList.map((key, i) => {
				if (cacheAllowlist.indexOf(key) === -1) {
					return caches.delete(keyList[i]);
				}
			}));
		})
	);
});
