if (!self.define) {
  let e,
    i = {};
  const n = (n, s) => (
    (n = new URL(n + ".js", s).href),
    i[n] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = i), document.head.appendChild(e);
        } else (e = n), importScripts(n), i();
      }).then(() => {
        let e = i[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, r) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[a]) return;
    let l = {};
    const o = (e) => n(e, a),
      c = { module: { uri: a }, exports: l, require: o };
    i[a] = Promise.all(s.map((e) => c[e] || o(e))).then((e) => (r(...e), l));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "android-chrome-192x192.png",
          revision: "cbef09a8097f4c2f19fe2eba2f5a8bb8",
        },
        {
          url: "android-chrome-512x512.png",
          revision: "aa483dea4787eb5f4391e5aa01944462",
        },
        {
          url: "apple-touch-icon.png",
          revision: "891307debde0674dfc31a590d16b832a",
        },
        { url: "assets/Astronaut_Idle.png", revision: null },
        { url: "assets/cell.png", revision: null },
        { url: "assets/demo1.png", revision: null },
        { url: "assets/demo2.png", revision: null },
        { url: "assets/demo3.png", revision: null },
        { url: "assets/drill1.png", revision: null },
        { url: "assets/drill2.png", revision: null },
        { url: "assets/drill3.png", revision: null },
        { url: "assets/excavator1.png", revision: null },
        { url: "assets/excavator2.png", revision: null },
        { url: "assets/excavator3.png", revision: null },
        { url: "assets/index-CXvThMvv.js", revision: null },
        { url: "assets/phaser-pjvDu-AS.js", revision: null },
        { url: "assets/stats.png", revision: null },
        {
          url: "favicon-16x16.png",
          revision: "73c0b4956eab661e03e5e6d4bc6fc347",
        },
        {
          url: "favicon-32x32.png",
          revision: "7c5a7f7d915878e2e97b5a394aa01b7d",
        },
        { url: "favicon.ico", revision: "3cedffc73db82ce96ede7b37ffbfd8fe" },
        { url: "index.html", revision: "ad5ca8246deb3627d188e6755ed86218" },
        {
          url: "manifest.webmanifest",
          revision: "575c49afe3a4439ac3d8bc0f070ebcaf",
        },
        { url: "registerSW.js", revision: "402b66900e731ca748771b6fc5e7a068" },
        {
          url: "site.webmanifest",
          revision: "7bf333e47554a10c816cbe88a689efd5",
        },
        { url: "style.css", revision: "7dde65df2b30ac8edfe447f3c2a11987" },
        {
          url: "android-chrome-192x192.png",
          revision: "cbef09a8097f4c2f19fe2eba2f5a8bb8",
        },
        {
          url: "android-chrome-512x512.png",
          revision: "aa483dea4787eb5f4391e5aa01944462",
        },
        {
          url: "apple-touch-icon.png",
          revision: "891307debde0674dfc31a590d16b832a",
        },
        {
          url: "favicon-16x16.png",
          revision: "73c0b4956eab661e03e5e6d4bc6fc347",
        },
        {
          url: "favicon-32x32.png",
          revision: "7c5a7f7d915878e2e97b5a394aa01b7d",
        },
        { url: "favicon.ico", revision: "3cedffc73db82ce96ede7b37ffbfd8fe" },
        {
          url: "manifest.webmanifest",
          revision: "575c49afe3a4439ac3d8bc0f070ebcaf",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
