if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),f={module:{uri:o},exports:c,require:d};i[o]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CXvThMvv.js",revision:null},{url:"assets/phaser-pjvDu-AS.js",revision:null},{url:"index.html",revision:"ad5ca8246deb3627d188e6755ed86218"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"style.css",revision:"7dde65df2b30ac8edfe447f3c2a11987"},{url:"android-chrome-192x192.png",revision:"cbef09a8097f4c2f19fe2eba2f5a8bb8"},{url:"android-chrome-512x512.png",revision:"aa483dea4787eb5f4391e5aa01944462"},{url:"apple-touch-icon.png",revision:"891307debde0674dfc31a590d16b832a"},{url:"favicon-16x16.png",revision:"73c0b4956eab661e03e5e6d4bc6fc347"},{url:"favicon-32x32.png",revision:"7c5a7f7d915878e2e97b5a394aa01b7d"},{url:"favicon.ico",revision:"3cedffc73db82ce96ede7b37ffbfd8fe"},{url:"manifest.webmanifest",revision:"c10c0afaceb940f84010bee9727a70cd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
