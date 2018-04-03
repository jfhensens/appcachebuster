(function() {
  if (typeof window.sap !== "object" && typeof window.sap !== "function") {
    var sScriptPath = 'sap\x2dui\x2dcore.js';
        
    var oBootstrap = document.getElementById("sap-ui-bootstrap")

    if (oBootstrap && oBootstrap.src) {
      var iIdxCb = oBootstrap.src.indexOf('/sap-ui-cachebuster/');

      if (iIdxCb >= 0 && oBootstrap.src.substring(iIdxCb +
        '/sap-ui-cachebuster/'.length) == sScriptPath) {
    
        var sBasePath = oBootstrap.src.substring(0, iIdxCb);
    
        sBasePath += '/' + localStorage['cachebuster-timestamp'] + '/';
    
        window["sap-ui-config"] = window["sap-ui-config"] || {};
    
        window["sap-ui-config"].resourceRoots = window["sap-ui-config"].resourceRoots || {};
    
        window["sap-ui-config"].resourceRoots[''] = sBasePath;
        
        document.write('<script type="text/javascript" src="' + sBasePath + sScriptPath + '"></script>');
      }
    }
  }
})();