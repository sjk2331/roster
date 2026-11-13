// Minimal service worker: makes the page installable on Android. It caches nothing, so you always get the latest version.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
