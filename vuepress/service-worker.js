/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c7e4bf1b074050120662b7ec9add9c87"
  },
  {
    "url": "assets/css/1.styles.64d3275c.css",
    "revision": "5f6729f552b34004dca7dcdc4bef7ee7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.220c1380.js",
    "revision": "2f268613c8d291c144d71a0b427b12c5"
  },
  {
    "url": "assets/js/app.06884dc9.js",
    "revision": "28ac58084dd12f15a37c169d1392c5ac"
  },
  {
    "url": "index.html",
    "revision": "0a5faa05c80d2b48b3833c284ad6377a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
