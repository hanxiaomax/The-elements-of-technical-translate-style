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
    "revision": "99f4b9da0092b4efe7569c939eea0fc1"
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
    "url": "assets/js/0.03a4a4e7.js",
    "revision": "396f1c61649b209e93ffd39f0fee60c1"
  },
  {
    "url": "assets/js/app.18101f90.js",
    "revision": "db7e1cd4f84a4b3bc6b625836e40571d"
  },
  {
    "url": "index.html",
    "revision": "decd73906cd2659421c2a32c37f61a54"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
