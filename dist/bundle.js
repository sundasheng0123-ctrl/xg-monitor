(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Monitor = factory());
})(this, (function () { 'use strict';

  const defaultConfig={url:"",jsError:false,resourceError:false,promiseError:false,ajaxError:false,vueError:false,consoleError:false,scriptError:false,staticError:false};

  function isValidUrl(url){try{new URL(url);return true}catch{return false}}

  class Moniter{init(config){if(!config)throw new Error("config is required");this.config={...defaultConfig,...config};this.initMonitor();}initMonitor(){const{url}=this.config;if(!url)throw new Error("report url is required");if(!isValidUrl(url))throw new Error("report url is invalid")}constructor(parameters){this.config=defaultConfig;}}

  return Moniter;

}));
