'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "18dfa871c84e70130e1244a797956c60",
".git/config": "99012c6cd67ef6c8a797e5db76607fc8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "38e033e814c6e02d8a7e68e39bbc4af1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2e8f206bff4719b008e64e93ef0844bf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd34cde541a584bd142fcaa5260b4ab8",
".git/logs/refs/heads/master": "bd34cde541a584bd142fcaa5260b4ab8",
".git/logs/refs/remotes/origin/master": "9eb904dcd103d1bc84c2e91c2de925b7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/3f95541399f9a7ec1ddbfb01c98a596b5ed84c": "9f86f58f57a153417494d79de8cd2cd5",
".git/objects/11/e0866593d498f442b23f2f53bde17a84791386": "a4125f0eaae89eb5325b3ac333534767",
".git/objects/1a/09476b20f431b431659e174ee2fd578fdbba84": "bd4427971f9bcf902d2a75efdd5a415c",
".git/objects/1c/a7f5ad5fbdd4f37033762f91ce7ea1c865313b": "ce663ffa08a2d90fc67cb035efefb9ca",
".git/objects/23/e269b09a168c948cf6e98e28d8d7e005845e7c": "ad202de0b98b001cf6c110eaa35c1d2c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/627361c837b736d1d35669ebd52deb58731edc": "e336acc9d9f7fbd0d01163b36369ce29",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/b5fd42e7419af64f58dd35560ee10cf449a41e": "5ed8c284dfac8c95928b59a7eba9b59f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/ac1aed677dbb1e9a334047f369f7839114d39a": "88624f1764e3acaee3032150f5f45216",
".git/objects/3c/837b54107fd38673dcd74f58405b862f7ad5d0": "b1f2d3729a8abebe266528e4b3799b57",
".git/objects/40/7b96040fb2c079f0a86ae91a34e6071928e389": "f9936318010ef4fa414017071bd88ed4",
".git/objects/40/b747cacc3c61a271ee386162b8178f9e48e5be": "dabf311e56bcdbdec5e6dfa0cd2cd169",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/9a8e841c6a12e22562756bc7769ce59e165540": "ee7f81c3eccbb777ef168b81be4c52f0",
".git/objects/48/3bf187be47e57b271d6b9a7e3d2974c8dadd1a": "96fae3d6588e1c689fe7f5921012e335",
".git/objects/49/147ff67002562c55068e6c5ea8327cd48f158e": "343a69004b97941ed767a7d3908065bd",
".git/objects/4b/885747ae5c02b66e59c4ee14ee534ab07d069d": "440173fe6329478218b7ac847299fac6",
".git/objects/4d/1f1442111071a99cc65a65bd722275dfa2e9c7": "53b2b2fecfb3ba6e32303144973afc49",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/52d791d9ee263f6968360f6d4cfaae8a49d45a": "117720745ef3fc5526b70780383fea1a",
".git/objects/58/55f85cacdc5d65955e7dbd56a7adb9c39b0f7e": "ce91e0f9c4670d1c384e697e9a6ec54e",
".git/objects/59/5d6d43537ba85c169b741b83e48028ddfef3e9": "19c024005cba49549e3654ed25abee14",
".git/objects/62/389b61e6f35457ebe4b19af16d99414fd92259": "889920e42655e2cb8d20622b4bec2010",
".git/objects/65/8a6a1c9296532be9f8e52ba0dea47e5f2aca49": "9c899ba39b5d275a389c1a3f51c13919",
".git/objects/6f/4d3d3a2d694b86251d4499f11899361c846a09": "60d623443f62cdc0227a0a9ce6ce1d63",
".git/objects/70/71482a0b9a2dc213f531b3771f3a7d8a4dab5e": "164948d0e39c37a275e729707c78c1fb",
".git/objects/70/cd35b7e6a333c997dc0d94afda515ffdfa001b": "390890b40523b856d7607c6041e232a4",
".git/objects/73/40a40aab55849fd94d6d8c4ec9ce64e0200e92": "0b436585251592ab3b7d3bbd61b0a050",
".git/objects/77/8651101b5e9cff02b061398e60050cb75f6358": "0a17eaf6557d026c7bb920cfbadbc17d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/47153c47e407d04bdc7bf62964ff75e8e6252c": "70c6d87b6aaa0466dd8af07ab3be23b7",
".git/objects/7e/ceaef8bb544766ebf046a570b8fde827e15071": "12e137d5a12f5ca7fe7dd4f61c5b91ba",
".git/objects/82/88410cadd311b731bb63ad35d5181f428a3d0d": "1d17cc6325a5495573599aef825aa3b8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/3d799537c0186569f4ea12f8daec8bac56147c": "9a2a226a199a1e50669bea28de7deb4f",
".git/objects/95/e548b2634691d07e990e25fe968b6e28c0d3c8": "3ecdd35c1e32aa2967b144bd0b8a7225",
".git/objects/9a/c2224eeb35e85ea6bef33367a345aa9271c43a": "abcb990e54b7e7d69cf524aaf738003a",
".git/objects/9b/21724d732f3b2c0724b00955f22f1b81d61e53": "14f954fea46248cf0fdbff02ede22639",
".git/objects/9c/fd72c278f2be85e3cccc9178c6714182e182d3": "fc6b314e19480635c4d217ac19a051c5",
".git/objects/a0/6f4d5c05ca066a5b3cef345fb2e035830fbc85": "95bb860064c3df8b3656e9a4a34f1746",
".git/objects/a0/8812d1c64c6cce62e9dbbc6500c0c38e612488": "fd6c6be5495a082f8ad61fe1e1d7d5c6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/6b3a43d5e4f5b2925c0f36b1b685ad98b6dcc7": "45f8186116ec64ab88c90737edc78b89",
".git/objects/a5/99244e79446216fc0b5b1cf70a21b1e5cff53d": "af51b1f42185b31cb4a431ebfb58391b",
".git/objects/a6/7a0ae5ff0003f8b59efd6184baba6c238095cd": "18cd411455ee04d4350d8d7f4588d49b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/00d5354ef1acd9fe203224d10202f4e394d7de": "67b106ffe2502438fb9e16f97b5bf980",
".git/objects/aa/63718bd29b3d32cc4b5bdf9ef70ab01755a69a": "fb091481863f1e53f6f71f8d1812ec95",
".git/objects/aa/ad3b656e38465052130b2636b61f03629c64c6": "e8de7492d83b58861fa703895abde29b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/dce4936e983674c9db8418c0aa1d0d9ccb28c6": "f7b2bd80db8c866ebfde7546672d6214",
".git/objects/ad/0741b4a478bd391cdb606839109312c1a08982": "fdc457a5b748e7543e9f3d19f497f8dd",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/b3/10d150ba19e8fc359ed1a41450c547c9afab8e": "484aa75c819dda583ffe824cc92a86c2",
".git/objects/b3/98aa2a458da8cfbda422025510d22e9e664d64": "0781df424cd30e48b0dd6c4e5560a090",
".git/objects/b6/2217040ac348ed63974c0ba64d4d2c7d5fb899": "f362cf5cefe4485670addcce85ee8828",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/5dd8292ba172bac6765b2943599764bea97bcc": "feb7570be0d90610cf06577a4b10d58f",
".git/objects/bd/a88074f22d673131a2480b8c28f5cf9e28a0a4": "89d45aa335714c19b31f094e4d2981bf",
".git/objects/c2/293d5c8b81de044a73eeb80e461d7df177e726": "015cfeec435cdff4a547c1416f2cee14",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/cc/858eea0d4977e733baec0950dccdc70d3b8c44": "b534a3a9d54a6901b2abb7110491a576",
".git/objects/cd/de4f3f32e4865fd1c6d3b3f2c209fa3b1d4bae": "7153d8451fb3a866be8bde90877f1375",
".git/objects/cd/fa5c6c611518248d2abee247cf6090502706e9": "82531d21fdd95c55acc9c1e1bd4eb7c2",
".git/objects/ce/6e784df3601616dcf4415dd6570a65572264d2": "adc6d823109a6fcd13c43cb28e38b717",
".git/objects/cf/995b7f252b3dca1c97dfa37a0c54d983c195f7": "821ba76159e78610ec17872b3fa62435",
".git/objects/cf/aba16d6c0b2f9d6af69cf635cb72c960196653": "43ed9eb4522b295cb8fa94154d4b5fdb",
".git/objects/d0/5b2d4386a3e773bd27531fcec54431f6fdaa92": "24a665d8a62559dfa734bed180109f9f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/fdb8fa8f2639594e3e3018212b6d6fc5ae52ec": "56f2688497ef17e394290f96c288b929",
".git/objects/db/8c19085623549badb77138eb1ac8c178de04ac": "80b3184ea3b2039de7ff06c9273f86cf",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/dc122712924d3818f82d9f52b8c20bf03fc308": "a5dbf440f83457ff79a1a5b0572bff91",
".git/objects/e4/b0355fcc7d70fb0a890275e9a988e4a161c85b": "10f487dc4099cf1596dba21da7dbafe7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/84b19a9ce2a64f6802dc06962dfa737f74482c": "6013c6add6579c5dfb09509b19afcac1",
".git/objects/ed/2496a6308c460c1b710d2c205ad03d97af4521": "15b569ca7863e8056dadd83be349e0d2",
".git/objects/f2/58850d22a4e12f6d06125b3566f693336829ab": "d6b4242f9acf00fcac00813db61935a4",
".git/objects/f6/bf87dbf32d0859d94156ea50293d02ca215daa": "5923c4f9f146d2679db1c25a8de5fa99",
".git/objects/f9/8a2dab85c9bbec24ba3351b3def565b23bb6cb": "2ad9dc288fa3d6e4c7fb364592814b6d",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/fc/76e740d287e54215712ab5e61c9922ee3a3258": "f408aa77792dee20f7edb973054baa5d",
".git/refs/heads/master": "dd06739d5af007ddb79fe58fe01c8fa4",
".git/refs/remotes/origin/master": "dd06739d5af007ddb79fe58fe01c8fa4",
".git/sourcetreeconfig.json": "1f4bed94cd123759f3beb4fa2db182c7",
"assets/AssetManifest.json": "5008908c6a89bca47cdff3e6d1257542",
"assets/FontManifest.json": "c1fe9e49676c7e6030c0b597c32284a7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/fonts/Comfortaa-Bold.ttf": "9f81d628ecf6c80f7ebf80e1ed455d92",
"assets/lib/fonts/Comfortaa-Light.ttf": "7fc83210bd61acc3ec2d6b92e320dde7",
"assets/lib/fonts/Comfortaa-Medium.ttf": "d2b08213f0984c9ef60eb52794e78794",
"assets/lib/fonts/Comfortaa-Regular.ttf": "31aefe19554b85e0e5c1232daebc158e",
"assets/lib/fonts/Comfortaa-SemiBold.ttf": "2111f43a3fa184866e7033c66683056c",
"assets/lib/fonts/Mali-Bold.ttf": "65580d7de3378dc2eec40515e69eba64",
"assets/lib/fonts/Mali-BoldItalic.ttf": "8ebe2e42d0ecfdcc269c58cfcf97fdce",
"assets/lib/fonts/Mali-ExtraLight.ttf": "8090dd063c5b54a936dc4aa2b357e2ee",
"assets/lib/fonts/Mali-ExtraLightItalic.ttf": "b0ea3dee29e7045009e528dd72ae5203",
"assets/lib/fonts/Mali-Italic.ttf": "a27f85e7a1e18ff38c75697a5858506e",
"assets/lib/fonts/Mali-Light.ttf": "bb99e4989f3fdf8fe204e9f3a8aacdf4",
"assets/lib/fonts/Mali-LightItalic.ttf": "ba4860d16aab77e9702e8569f9b5de14",
"assets/lib/fonts/Mali-Medium.ttf": "bdad20cfc7e404521a8cfd85c8b57513",
"assets/lib/fonts/Mali-MediumItalic.ttf": "fd1f4604927f7aea99b77f9ad476e854",
"assets/lib/fonts/Mali-Regular.ttf": "f90744ee422886829a848c45277bf99b",
"assets/lib/fonts/Mali-SemiBold.ttf": "24182c39b8c44bb4811a34bb7222b484",
"assets/lib/fonts/Mali-SemiBoldItalic.ttf": "08ece66b5f2ed2d629563db1e4848173",
"assets/lib/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/lib/fonts/Ubuntu-BoldItalic.ttf": "c16e64c04752a33fc51b2b17df0fb495",
"assets/lib/fonts/Ubuntu-Italic.ttf": "9f353a170ad1caeba1782d03dd8656b5",
"assets/lib/fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/lib/fonts/Ubuntu-LightItalic.ttf": "b242f3fdf0e61d01f35f0dec0170b200",
"assets/lib/fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/lib/fonts/Ubuntu-MediumItalic.ttf": "89af35d9567dcc3a76f3db4f9544658b",
"assets/lib/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/lib/images/background.jpg": "f5771a85739c27900e6b85d862f378be",
"assets/lib/images/blank-profile.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/lib/images/facebook.png": "bf13172645021df048e76f2fd475641f",
"assets/lib/images/github.png": "afac3f709fae93689013f9dfbc7d8d03",
"assets/lib/images/instagram.png": "d884e995e0abfbe82d52d09de7e730cb",
"assets/lib/images/linkedin.png": "6d69e16f719146efd5940b103a178ee8",
"assets/lib/images/profile.png": "d08d46d65a0d4e15dfa799ff178f19dc",
"assets/lib/images/resume.pdf": "bd80440a151d031f2b54d9dd96348851",
"assets/lib/images/twitter.png": "88aa93c7d7d0b4f3bb45a0c7ad8f9a4b",
"assets/NOTICES": "91f227b609df4f56c2583164827a1148",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59773ce188f0b16690fa1096b84b60a7",
"/": "59773ce188f0b16690fa1096b84b60a7",
"main.dart.js": "d8d814e3aa7227cc33d297c6d5cc2d7b",
"manifest.json": "7c710253a49b131e24fe7efa696a27f9",
"version.json": "bd341ba74d38c530da636604a427deda"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
