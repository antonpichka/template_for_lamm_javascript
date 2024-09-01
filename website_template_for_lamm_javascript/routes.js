const express = require("express");
const { TempCacheProvider, debugPrint } = require("library_architecture_mvvm_modify_javascript");
const KeysTempCacheProviderUtility = require("./public/src/named_utility/keys_temp_cache_provider_utility.js");
const router = express.Router();

router.get("/", (_req, res) => {
  const tempCacheProvider = new TempCacheProvider();
  const q = tempCacheProvider.getNamed(KeysTempCacheProviderUtility.q,"default");
  debugPrint(q);
  res.sendFile(__dirname + "/public/src/named_vm/index_vm/index_vm.html");
});

router.get("/other", (_req, res) => {
  // Using "OtherRedirect" if needs
  const tempCacheProvider = new TempCacheProvider();
  tempCacheProvider.update(KeysTempCacheProviderUtility.q,"qwerty");
  res.sendFile(__dirname + "/public/src/named_vm/other_vm/other_vm.html");
});

module.exports = router;