"use strict";

window["sap-ui-config"] = {
  theme: "sap_belize",
  libs: "sap.m",
  compatVersion: "edge",
  bindingSyntax: "complex",
  manifestFirst: true,
  preload: "",
  resourceRoots: {
    "be.infrabel.demo": "http://localhost:8080/demo/"
  },
  logLevel: "ALL",
  appCacheBuster: "http://localhost:8080/demo/",
  "xx-appCacheBusterHooks": {
    onIndexLoaded: function (sUrl, mIndexInfo) {
      var sIndexFile = "sap-ui-cachebuster-info.json";

      var sBaseUrl = sUrl.substring(0, sUrl.indexOf(sIndexFile) + sIndexFile.length);
      
      localStorage[sBaseUrl] = JSON.stringify(mIndexInfo);
    }
  }
}