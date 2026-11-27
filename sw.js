// Programming platform: simple service worker. Pages always load from the network (so the new-version notice works) and no student data is stored.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(fetch(e.request).catch(()=>new Response('<html dir="rtl" lang="ar"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><body style="font-family:sans-serif;text-align:center;padding:40px"><h2>\u0645\u0641\u064a\u0634 \u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u0646\u062a</h2><p>\u0627\u0644\u0645\u0646\u0635\u0629 \u0645\u062d\u062a\u0627\u062c\u0629 \u0646\u062a. \u062c\u0631\u0651\u0628 \u062a\u0627\u0646\u064a \u0644\u0645\u0627 \u0627\u0644\u0646\u062a \u064a\u0631\u062c\u0639.</p></body></html>',{status:503,headers:{'Content-Type':'text/html; charset=utf-8'}})));
});
