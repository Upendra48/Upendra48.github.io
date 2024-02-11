'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7450bc20db31b71f6ee9098c9f6cac6b",
".git/config": "3cd7b171c65eb5f72d4b67002d8e94ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "191d95e34268dc153d2b697f4a314868",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f22b6fea142fcd987659befd9598e7f8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9afe1a4b1740f7afe33a58192db6f107",
".git/logs/refs/heads/main": "5bcde90fe4a3fcc4e03339ad56e2abf2",
".git/logs/refs/remotes/origin/main": "6cb23c0e4f3b22c8a58bea03d7b3317d",
".git/objects/01/9ae00effbc375b8ddfaa21a7b00f12a518ba63": "994cffc43f45cad7268753482725f983",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/beb7997560b6f20fe19001d22e4f25334b04ac": "6a128611f81b73ec53604497058e967a",
".git/objects/0a/0ae42c5207b4f6cfe74d7c92e7aa66d1464b6e": "cff0ad18639b1d2d83f60097e2f4f7fc",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/8796f88e34712ab48ba35eb337e43cc40ec5e9": "cb24bd5ec3d3a78540b5ff0aebaf10c3",
".git/objects/0e/50edec0c11a0755895b84ea3615efd52d13f1f": "8c3eecd7e21643787e430e24ee5a1521",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/15/138f7a021b2cfd5d7f2242cf4451e1dfa6d855": "9e5a9bd11662a1c024d85eca5f014c8f",
".git/objects/18/e4a522c616197007da833a8037d0a999fd4102": "78254cf6fce91694311a58ee804063bf",
".git/objects/1e/cb2905ac67148701932ea92d0f604d835599af": "994bb94e284961709f00b467db211f62",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/34c842b0862975d78506259f32ffd79c9333fa": "4915f19a3712cdb0377792fabb759a62",
".git/objects/22/63303baf83d5d155dd10d91ef747e596eabc26": "99c5d656dbdd45de3169f72b62e14e08",
".git/objects/22/c88d4e9911469ee12cb1d2fa77d50537c81921": "b1095d414113af9838ea605c90fd9d76",
".git/objects/23/177d4ca7de3779d19d9556fae0088ef7ecb3f9": "bc1d7f04d5815217a4c4238281d5dbbd",
".git/objects/28/fa03b51007b946b45fbeb983b5ed037c1acf19": "71c6330c58ac5ff86aedef3205f64fbe",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/31/0e6c69bf428da283df6cbadc109af1323e5325": "518a1d9aee755f5935ebc17257779b43",
".git/objects/32/37c808d263eaf9b32d9ecf440741335c9956cc": "fdc41343fe55e80cd5a46eea122ff5da",
".git/objects/32/ab4eb5c9c2c2367f2fd08729f188dd0a2826d9": "7ed30080b260b0de7dc870380719ea2e",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3e/20d99c865a3ed158422cdb7dde8ef0a43fb087": "29f2f238ba2261046808cc370f24c7a1",
".git/objects/40/b3e84b086e62956849a20e5b07f3d2293225fe": "1c2e880d47fb63f70fa31e2e224858f6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/28e177bb7cb0bd0b32c9adea37d9da799d91ad": "e27643b24960d9bb81a7893deaccbeea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/1917be20c7a1f4266a9d184ec890447ae53afa": "8c2b4f0b26a1be3e99fc44b998bb067a",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/c76cb6a9beea1bc2e259ba358e850abea04dca": "4b792178a3ec759480803e0990685e8f",
".git/objects/4e/4ed58c462ca4dcc8d430c3ea17533967076a2d": "edd84919d00eb313bafcc503de97f32f",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/0433932fa0e5dd4f9dd781df72641c95b83779": "bdace4cabd8a7baa9bfbe21d70fa22d9",
".git/objects/5c/0c19494b0eb7d9238457a759c252060c47c5b6": "32aec9bb45d657ae60a11f1cb9c9e050",
".git/objects/5c/9c64e6946a5cbd0826cd1d004ea6d40ea379b5": "87ce31d77d012af91b923bf82c56ada1",
".git/objects/60/88273824a4264cc427fb89dc7a68b1a5355f83": "2db5820f46ff92d0a146a281ab5c49af",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/68/d4132f256c37f323e1717c8be6a1856073dc75": "32045fb040a03d78de394413a5ba62c1",
".git/objects/6b/8d08b414862faa4e75360d0e76980e85535da5": "bedf93f7d41160b3772958705c1269aa",
".git/objects/70/0b63b282b16eefa1873af931316e117632f2ab": "57f8c2af28a7dc2e5eb60857f246d15b",
".git/objects/71/01b1ddd9ab672590bdcc92ff0821297850d656": "2cd78bf281caccc7877a957654d4d7a5",
".git/objects/76/532839257a91799d7ea78d71228c29c1c58742": "42b6d8cef3d906654a8361e07d523a2a",
".git/objects/76/835ae2f64f92ee88282f3839d6d82220944307": "7f3f8f2d5c289c547e041e2f6b55da75",
".git/objects/84/3d78fdf0567883a75a9897a326591d1bc1cf94": "a46cfe0967f56192e5aa580496fc79a0",
".git/objects/87/5c09b3e43fb05511811e52ce0d3a9d5e90c431": "ac4654cbeab3a2decf30175b44c4622e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/23e8c026aca069757d340b9aa1168ed4057d86": "405506c4fe1e9740cd9b952f1e8583a3",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/d072c5b89a2bca4d204e41f59493a97c9211d5": "b425a62f3e842e640c1b3203e781e362",
".git/objects/9a/a61a688b66280e69e1f3c725c8cf9e6d629c09": "7f16ef533b29e4bbb115e4b283beba6f",
".git/objects/9d/1a71de24ee95cc7aa578ba5382df276a15a52e": "c395f5997a0a3eb4f4ec0fc7576e2893",
".git/objects/a0/247b5da03bc71becf87a3d75551033b71fd46c": "e8bc6fb27e8eb1b11f1a00096b017474",
".git/objects/a2/fcffe5eb9510af7d66acd61c7cbf3ff2c90972": "bbc89c1140acf2c6a9fa3e7c6bf9de49",
".git/objects/a7/079c9f05d3e354c21c73c140888d7d71d8907a": "f5f7787b047799aeb635704aa40b3768",
".git/objects/b0/85f81f7a0989a967e430439cbe441333575e84": "fd30398599cadd30cc4b12f2bdb6ca85",
".git/objects/b3/9fe5e081f0a74e96a81ec02bea5d1714f94eaa": "cba16cf94bd91b08deea46581ca12794",
".git/objects/b3/f3fd9fc972ac769aee76fdc8668d825d8c0bda": "55fa38ab1be9964c6dff43441cdc08cd",
".git/objects/b5/87ffb4682a42a39a7b5a0f3e464eb6402ef05c": "cae41a6ace040b064964d0fe8a49cfbe",
".git/objects/b5/a9c88ebc8097608a0f1c0549ec242b6ecf990d": "de1776428acf3d9a832ceba81a3551a7",
".git/objects/b6/a8eed39faf63c40a200533f354cf764c76b456": "b833110687f5e0157f7db8ca18d86b84",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/b04cf13e994661b083330847c513e3fca074e4": "7d45292fb258e8234db0d5da28e8506c",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/070646e22733446a13f6dbf466ec92a22b705d": "7f397d3bff80698de6c90cd60dafaf9b",
".git/objects/c1/6a03a48e9ac7b9f83d69708b3a786305bfe6da": "6a13a95008473eb19c20433b31a80d31",
".git/objects/c4/0809c6bdce301e8a7050b7f48d9bccd97ad64b": "735552134ae3a79c6cd9b37ccafb4fe8",
".git/objects/c9/91ca73b72e20df54032fbdcec1f3a6cb925ffd": "73c75658a8d5cec50277a8e284397cf8",
".git/objects/d3/5927f1eaca0c8e6251c43af5bc7d7f24c354d7": "f24d4871ffaff1524ffb9277722f8d4d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/9c1abf928640aba3ca4b86a4f51d251d4d4d34": "757dc16a814d479d6531fd90d2e6cd13",
".git/objects/e1/e2fad2f05506a8662d7056a588dd74b7055579": "04336aafac1f43743bd79e1d52dc142f",
".git/objects/e2/47badf52c44cb18366dae1e053bb3e637db1f7": "7881e86707afea1d72d4e70ba80f57de",
".git/objects/e3/33027c7c6ee4f1537a597c72be29201808fad6": "1234d2a1d3ec79b17c1c01b267b7b5a7",
".git/objects/e4/196dfb8bd199a8b379b2bdadb9346303452ca7": "77eba7bdb1706bf288893175b59eff0c",
".git/objects/e6/4515e8f54456bee5ebdd96f300512d420d0a8a": "efbe69877a8625ead52a1010ac51e21f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/882c77aee8b05979dccec958b6be75b602d2a2": "a3eff61e6021d3281ebea077fe52b56b",
".git/objects/f1/e96bab37fa7a561b5402e4b968affe76c3dc84": "6c8b4bbc6e68cd182f2748a1447a2a1e",
".git/objects/f7/e5722e9afda66f0f4ebd97844650d545ddd21d": "2f7194419076473428922d7fbd4018f7",
".git/objects/f9/3f09c1bf6271069e176b3788479d0c1948c628": "24eff4589bb6e0e934f7aa3c06e64bca",
".git/objects/fd/dc2b77c732a473d587d69eef2411f7863ddb24": "62ad0828d045d3762905d576d4291378",
".git/objects/fe/d1b5d75e2e21ec0eac0d5a4609633d2e3964d9": "0ca61c860c1ef3b36b85dd7bf81b916a",
".git/ORIG_HEAD": "3a8a481c395557dad4e8738455333849",
".git/refs/heads/main": "3a8a481c395557dad4e8738455333849",
".git/refs/remotes/origin/main": "3a8a481c395557dad4e8738455333849",
"assets/AssetManifest.bin": "dbfb5bd00206387040239c134bb16367",
"assets/AssetManifest.bin.json": "8c6c332b960288ce7ad2e0e5a5fa5489",
"assets/AssetManifest.json": "f0d34bf6ca24ebab1f9212f0f8bdf487",
"assets/assets/contact_icons/github_logo.png": "05455a6926c64d192ab80e1fc63bf261",
"assets/assets/contact_icons/icons8-facebook.gif": "efde0c460a861d3649639ffada970fef",
"assets/assets/contact_icons/icons8-github-100.png": "f35bd9b4df8c27bea46e37a9d6460b16",
"assets/assets/contact_icons/icons8-instagram.gif": "61ff3c844b07a8ef508cc4fd04a8c1af",
"assets/assets/contact_icons/icons8-linkedin.gif": "f0290527cf66ab115bd42f24e78f7c4c",
"assets/assets/contact_icons/icons8-twitter-squared.gif": "4189036706d017c4611050cf1ceab8c9",
"assets/assets/contact_icons/icons8-youtube-logo.gif": "bb8b7be842ae145b3b3e51893b512ab2",
"assets/assets/flutter_dev.png": "33a9e50cc9df78a1925b2867c5f354db",
"assets/assets/language_icons/adobe_illustrator.png": "b8dc67965eac02d8f0fae3de68134445",
"assets/assets/language_icons/c++.png": "b8a1078d92d851db2364d5e405a0649d",
"assets/assets/language_icons/C_programming.png": "11396a41fce307b10316e942e62d2d39",
"assets/assets/language_icons/c_sharp.png": "e77e8ad819dc0a8b73b69635c2c74237",
"assets/assets/language_icons/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/language_icons/firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/assets/language_icons/flutter.png": "6637b6c64481c76692760d0729b9c10a",
"assets/assets/language_icons/git.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/projects/1.png": "9d98d983026b0ddc825735734bdf9c08",
"assets/assets/projects/calculator_app.png": "4eff7aa8933ee4153b549c643a7fff1c",
"assets/assets/projects/Portfolio.png": "fa95d74594c7ab679a0ae39245362b42",
"assets/assets/projects/sneaker_shop.png": "8b373a0e448ed103bee27df31c4a1ede",
"assets/assets/projects/to_do_app.png": "bab1a21eee1b1cf8df0c992f14dd834c",
"assets/assets/projects/weather_app.png": "ac46c4cd268a8fe12f34058ef5835da7",
"assets/assets/skills_icons/android.png": "410b619a1a3d96b00d3cb6195bad165c",
"assets/assets/skills_icons/desktop.png": "cca6a940ecb113c796cdaf7b716e1f54",
"assets/assets/skills_icons/ios.png": "418842b9353207e5fe433a756bb0467c",
"assets/assets/skills_icons/web.png": "795790bfd0e9d48f21e878f2000c3514",
"assets/build/web/assets/assets/flutter_dev.png": "33a9e50cc9df78a1925b2867c5f354db",
"assets/build/web/assets/assets/projects/1.png": "9d98d983026b0ddc825735734bdf9c08",
"assets/build/web/assets/assets/projects/calculator_app.png": "4eff7aa8933ee4153b549c643a7fff1c",
"assets/build/web/assets/assets/projects/Portfolio.png": "fa95d74594c7ab679a0ae39245362b42",
"assets/build/web/assets/assets/projects/sneaker_shop.png": "8b373a0e448ed103bee27df31c4a1ede",
"assets/build/web/assets/assets/projects/to_do_app.png": "bab1a21eee1b1cf8df0c992f14dd834c",
"assets/build/web/assets/assets/projects/weather_app.png": "ac46c4cd268a8fe12f34058ef5835da7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9be45962810f30157ff2802caf90c317",
"assets/NOTICES": "8b87588aa27f439d8ed750bf38097704",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "30d7130ee22b43ce1bd4a9b751f5642e",
"/": "30d7130ee22b43ce1bd4a9b751f5642e",
"main.dart.js": "53f3148f0a8e1e0a0454874a1470ebd0",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
