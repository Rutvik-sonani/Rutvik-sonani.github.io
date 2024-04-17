'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "95299539301475555969b5494283140d",
".git/config": "c96e051137c702e6b4cba2bd12048ff4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "ddcaa20f704b702df6fcde443f4054d1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5ba291d824ef605c50fb09fdd36e8877",
".git/logs/refs/heads/main": "a203610c89e33c7bbdd80bfd670e970e",
".git/logs/refs/remotes/origin/main": "641a9849a4f621806550ce6bb4dea6d1",
".git/objects/02/46226685450fdd58c580e12929a9a7f544eb76": "080df11f041feb1fd9e90899a7e9571b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "93af8866e046dd27e34f47c20878a9b0",
".git/objects/0b/31c16ef408240f4ecb87b6b433e6f5cbfed6f6": "da1c3ff81c721516b0967513fcc78632",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "00f42c84080ce5c913903ae2fdc7b1d9",
".git/objects/11/42d6e81ae168b9906e6c89997c817f23ecda67": "16f09278c4c0cd07a9f096ff3072f4ec",
".git/objects/15/e3cd33d86e2b2ad20e762e83eea7df6cd6ca5e": "3cf0083c2059cd389094a0b4c7837d74",
".git/objects/18/68cd8e1af2495cf4b6b6d2af7be33506a56ed6": "8ba4da585e6d0c9b296f8c0d7c9aba2f",
".git/objects/1b/a904ef4bd0aef11e175eb3b10ef5363f5db0c3": "e61402526d3dba24cc7153736a84373a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "8fda235814acf392f50dd9a4feb7db11",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "523fe2b91800e86d9ac88ae5078912d7",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "ec204aa531516b764b0fec3f1cfa8534",
".git/objects/22/5b7620d12044910a34a6f528bf124313828826": "35cf3724cd4b656cd7321812547f4c5b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "fe2d8e778b22f092b9152a9ff9b15c75",
".git/objects/2b/df0650ef323fb921943387f9ff77e10b85c2c8": "967173e80afffa9564dfe533a944cf56",
".git/objects/2c/3c303383d5e676fcd20198cc9559e470ab7cf9": "0ed6fd6cb8ce32ca344d05b116a25e48",
".git/objects/2d/420680d7f2ffe8fcff7ac260ad5a5d71d3cb84": "693b9fd244119b51064802304edad8c3",
".git/objects/2d/4695d7d895e08eb90112cc26363fdf829b73ca": "f5147f171c7fc0ffc518b91d0f4e822c",
".git/objects/2f/3276887d8df4dba11370b27b163d77faa633a1": "45983eebd8a9c1db9aca88589a7c4fd4",
".git/objects/31/7241df2beda5c7ffe6d9a2ca4ae89011dd6b76": "66702584e4dda84422a97637f96e95c4",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "bf72be4604c984a5ff17ddb852dac423",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "8d2fd1b562fe6248092f0f7be87c777a",
".git/objects/38/f1819537af0ca1774400502bc55646f42916b1": "a01f61784df1a369b3168e6307cd0c8b",
".git/objects/3b/2405ca1f9814edef69266eb07731f5ec55b6f0": "fe3977be45226ab03598cf40f47bcfff",
".git/objects/3d/5e80372dccfb3a7e2cbe591484541b67825889": "af65d7a04aa0763836ba42db8b4dd4e9",
".git/objects/3e/31f89df73a7aff79cd8766d8b52975186fb511": "720ff97d51eed0864b3743d6601b3f84",
".git/objects/40/f27f0b4f5281b873a5e8909d4cbbf9b94876b7": "9639a779e578f7c20ac3c8706bf41f2a",
".git/objects/42/ac072a9b8b232c104adced2f8a704b4365b1a4": "4240c62078f3482944ca6985046c7d13",
".git/objects/46/1176676d969e6576ebabaf59f3932b5b085166": "a27ed7bd314c3ac307ee4ac821f50665",
".git/objects/4a/2b461e5db1108226e22a33404e4c57b97d5889": "1207c96f99b8b0e77dbf5801b9db88a1",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "5cb210ebf2040198d349ddc9901286df",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "bcdb121b48c166c5d22e1468320a62f2",
".git/objects/5f/e5c6913b269d524eb42c1f58ca445aa013a8f7": "a8d4ef2972656d5c6d0423b1ce4216a2",
".git/objects/61/a5b9a11c4d5fa856fcff2bfd45fba686f67ead": "f18d797940cea71a32e5883c5198dc05",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "40d9aab5decf7709f8f07b6007c148f7",
".git/objects/62/b35e68b4d6e212133ba0401cc1dcec0d2f6339": "1ffc805f23283040c75b18c93bba195d",
".git/objects/63/8f4e27fa4f9861444acdb591d576eb63bc8c2c": "ffe08b918a86d3e87b338c196a5cc943",
".git/objects/6b/5c61ef30f93cd92aef3a9c256cd335f60090d4": "9bbe440dc57d57f1272ca42a19e33a99",
".git/objects/6c/2acb7fde83bb3722830dd8886e2d1613c8e7b5": "ece18f43370c89c6736df3b36de171fc",
".git/objects/6f/81af339405b691560786b4601ed4a8b103b06b": "031c2a5bb81ba3769c21aea9d528230c",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "ad63d419463b744193f6a65344413530",
".git/objects/7f/16d9852d0f2609c6a62203d3ad673b6cbc8e09": "8d45b91f83a8b132a7dadfc62b381062",
".git/objects/81/2c137c2a433aa029df2c567dbea5b167595e32": "870a395e7ffb96c6e8c9b6a224bbdf20",
".git/objects/84/8d06f5afe3d3de2676911fd7f4b53502729636": "607236c7722c9fe88e0ce57400995b96",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "0bc19006a42d012c63c8b1207e68a80c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/6ea6d1811b3a6b1922cdbaea9c63a4b7162a74": "6115679f9aabd92ee5fdd8eaee828d3b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7909d438d590f164deab50c335ceb405",
".git/objects/97/149e55f741364ed84c8ef5ef583d83a99507b0": "878b18e4ab56d6f1f94aa309d7c055fd",
".git/objects/97/a561d3bba7254d28317787475ef43b28508d41": "c4485b675fd6b185290bf2c6df1cc203",
".git/objects/9c/7cf654309bd4166d49a86b8e1a0e6f1bcad3ae": "444efdef22a761a7f9c3e6edb720117f",
".git/objects/a6/ab7354982228e5c9216e6b360250bcd5fe64f4": "a1c1b93deaab6b6f6fbb91dba31df6e4",
".git/objects/a8/55eef1f06652dc32d7ad8a34da7ca4d1e5b73f": "c616a6777da19ea690cde0738d430e12",
".git/objects/ab/34e3d710cb1afe013acce4400d799c954c502e": "1a0535e224dc8e094bbf78ec4da153d1",
".git/objects/ac/13384818d3b73395bf6fda4b876b21a3e693e9": "92d30f57e954354aa34b45522dd1fea8",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "2aaea956914fa5bf077f30fb120cbd47",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "80ee9e3f04b243c298ededf694d91120",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/31f437902df42b73f44109968ac1e337f77a4c": "3ec63076ba111f681346205c99834278",
".git/objects/ba/d56fcffa6b91104a3dbb4f44151b8f39d6c400": "526871a06156934357b8202db4a2cc2d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "e6f06b42748018e79e683bf97d2beb87",
".git/objects/c4/dd774b25752ed412b40e3358b9f587df7ab605": "19f1c2cf0d90477d6c1c7a6e550db086",
".git/objects/c6/e2fa74367fb88510bbab07e201812ec26e7e23": "9c6a9b3b7e08a20ec13b3c6690197bea",
".git/objects/cc/f44210c6dcb08704b7fc27856f28b1ae566792": "4b3a854c7e0ccbb73d590268cfddf98f",
".git/objects/d1/9064bb1b99fbcab13aed3e7b00f7f5042f40b1": "569906f731135d5bea873b4184917ce8",
".git/objects/d3/944accc7af7667d930fb24c72ab73c804b822d": "6d4ab0f55c668f660ba6cbf1e9163105",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "d5f7a768b78f47b77c5492ef10ea9538",
".git/objects/d5/3fc01eb64f95ad09577aacd9a266f51964eee4": "fb20d6e8e4f3e37af4818bba8c455411",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/b185a993a1ef6b27c72f9b2053d67ac6d3f32e": "5af000d2508ff565ac4144e830d601ee",
".git/objects/e0/9f875f87c01670d04cd636b8687db2ae741acb": "30ec6758b06c0878096234c5dde7d9e4",
".git/objects/e5/377adcd6535fd5c201c826771ff8d0f658399c": "55828b7fff05afaa5340cd46d9d6f939",
".git/objects/e9/489d6472fdd2caa97bc31c1ef41b7015755151": "8536d9acee4d7c3c61bd3fbdd447a336",
".git/objects/e9/65eee7458bce3fe453473822d0b8e188351046": "dbd04b7602a722c5f2ab76d546180ab5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f0/eccd9b1f2d63faade3db9857e943431ac1879f": "8f529cda8dd51de22b79720ffb6ca63e",
".git/objects/f4/8259fe2b167c0397764d66ce090fb0585d3941": "6c31259a34b1234c2ba042702bc28c3f",
".git/objects/fc/7e6237bd86d0903fda480dc51c2eae42dd45cc": "248d9a9d273baecfd089500eb0990323",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "d592583bcdeaba6e83d542f0b4d5d734",
".git/refs/heads/main": "bbaab9c975700f646dceb804e9e283a3",
".git/refs/remotes/origin/main": "bbaab9c975700f646dceb804e9e283a3",
"assets/AssetManifest.json": "7bb3452e7ab236001e94eaa61805049d",
"assets/AssetManifest.smcbin": "edf26fcc1f4295ab8fb9c50f4ea7d1d5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "d7805dcc8e4fbf0fb04d602bdc2c4d56",
"assets/images/BIODATA.pdf": "0098a2c4f561807c9f0064ccb22dd185",
"assets/images/deedy_resume.pdf": "7abb4d1961631143d23600178b3cb8f5",
"assets/images/pic1(1).jpeg": "f7e0c7d62056cc3137bc0cc17f6bc57c",
"assets/images/pic1.jpeg": "20cc8e14c825247bcf3cba73dd123c69",
"assets/images/pic10.jpg": "018ba627ba61a1f9f56bd8bb52a9a387",
"assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/images/pic102.gif": "c0224f6324f10974e0482820b1fe8a9d",
"assets/images/pic103.png": "a0d5184f8ba106025f0e3a2a168db839",
"assets/images/pic104.png": "fed0d69678a987180c5f88908bc0d978",
"assets/images/pic105.png": "96385896ceff1f85b15ed6984a1be730",
"assets/images/pic106.png": "c2b2c7bd15ba676b42b146cf0257a8e9",
"assets/images/pic107.jfif": "a20876a9adbf141c66610b7852422e8a",
"assets/images/pic108.jfif": "ccd28b4c096d1977d027f14708e0e7a7",
"assets/images/pic109.jfif": "0631080de0efd9d3fc49852662e783cc",
"assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/images/pic110.jfif": "886435a9874555d371649e0bddf26eff",
"assets/images/pic111.gif": "88612f94478814faac69b0c63a4780fb",
"assets/images/pic112.jfif": "fdf64ddd6b3459eca1afc9bc5902e270",
"assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/images/pic114.png": "17beab7c354f1e71ff2801109b8f0edb",
"assets/images/pic115.png": "550c98a93dd1c3125e4614ee3151e3ea",
"assets/images/pic116.jfif": "fef16bfc930bbb9e3eb2553ed1da8b6c",
"assets/images/pic117.png": "7e928df851c015cc5f450da2f48411ec",
"assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/images/pic119.jpeg": "6d49ab73d023784d5036c78c45ab3967",
"assets/images/pic120.png": "ea39b948bcc12495cc2825782b9e645f",
"assets/images/pic121.png": "1f3bbe6d1220201e931afd6b91970a8f",
"assets/images/pic2.jpg": "93e932fcbb9c1db1e0a5829686bb746c",
"assets/images/pic3.png": "14b61ff3fbf71e2aa236380ee44a2d85",
"assets/images/pic4.jpg": "62faf8feb0638161021fb8f822453071",
"assets/images/pic5.jpg": "ecddcb730edf455705e72a6b66130033",
"assets/images/pic501.png": "4b16cfe4e55171a08a01126ba4495ef2",
"assets/images/pic506.png": "3c62dca1da5ea47cee95324888147879",
"assets/images/pic6.jpg": "b4c58c2d54b612e2c83596b109a71793",
"assets/images/pic7.jpg": "67944bdffd3e281e1750a4b89f312fe1",
"assets/images/pic8.jpg": "29041bd87a06ac88a870978d0ff531ae",
"assets/images/pic9.jpg": "3afc29061b7096887276615bde19a7b0",
"assets/NOTICES": "6894c32b7ac086cfbe8eec40d262f9e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "93117f15f70bd94188d1515f8ca91591",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "df059b9bb3db4cb0137aa5d6378fee14",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f087b2ea82865126b1e7ce511aef7f78",
"/": "f087b2ea82865126b1e7ce511aef7f78",
"main.dart.js": "b5d00835e39abe680f669bd4417a730a",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
