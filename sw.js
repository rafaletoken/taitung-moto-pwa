const CACHE='taitung-moto-v1';
const ASSETS=['./','./index.html','./manifest.json','./css/style.css','./js/app.js','./data/taitung-2026.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
   const copy=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return res;
 }).catch(()=>caches.match('./index.html'))));
});