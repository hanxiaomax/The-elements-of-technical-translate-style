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
    "revision": "b381689deeb204245ffabbfd0e7765bf"
  },
  {
    "url": "assets/css/1.styles.63a6b951.css",
    "revision": "a46417e11fa25605d618c4597c57f856"
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
    "url": "assets/js/app.991e46cc.js",
    "revision": "5d9aea155b6da157339eb8b1031dcff2"
  },
  {
    "url": "index.html",
    "revision": "f59d4f37f96bcb026404cdd3b4efbc6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
