"use strict";

var getCacheBusterInfo = function (sUrl) {
  var sIndexFile = "sap-ui-cachebuster-info.json";
  
  var sBaseUrl = sUrl.substring(0, sUrl.indexOf(sIndexFile) + sIndexFile.length);

  var mIndexInfo;
  
  var xhr = new XMLHttpRequest();
  
  var sDummyUrl = sBaseUrl + "?_=" + new Date().getTime();
  
  xhr.open("HEAD", sDummyUrl, false);
  
  //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  
  try {
    xhr.send(null);
  
    console.log("device is online");
    
    console.log("status: " + xhr.status);
  
    mIndexInfo = null;
  } 
  catch (e) {
    console.log("device is offline");
  
    console.log(e);
  
    mIndexInfo = JSON.parse(localStorage[sBaseUrl]);
  } finally {
    return mIndexInfo;
  }
}

window["sap-ui-config"]["xx-appCacheBusterHooks"].onIndexLoad = function (sUrl) {
  return getCacheBusterInfo(sUrl);
}