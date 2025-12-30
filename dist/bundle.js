(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Monitor = {}));
})(this, (function (exports) { 'use strict';

  const defaultConfig={url:"",jsError:true,resourceError:true,promiseError:true,httpError:true,vueError:false,monitorTiming:true};

  function isValidUrl(url){try{new URL(url);return true}catch{return false}}function getLines(stack){return stack.split("\n").slice(1).map(item=>item.replace(/^\s+at\s+/g,"")).join("^")}function getSelectors(path){return path.reverse().filter(element=>{return element!==document&&element!==window&&element instanceof Element}).map(element=>{if(element.id){return `${element.tagName.toLowerCase()}#${element.id}`}else if(element.className&&typeof element.className==="string"){return `${element.tagName.toLowerCase()}.${element.className}`}else {return element.tagName.toLowerCase()}}).join(" ")}function getSelector(pathOrElement){if(Array.isArray(pathOrElement)){return getSelectors(pathOrElement)}else {return getSelectors([pathOrElement])}}

  function observerJsError(instance){window.addEventListener("error",e=>{const target=e.target;if(target&&(target.src||target.href)){instance.send({kind:"stability",type:"error",errorType:"resourceError",message:e.message,filename:target.src||target.href,tagName:target.tagName,selector:getSelector(target)});}else {let log={kind:"stability",type:"error",errorType:"jsError",message:e.message,filename:e.filename,position:`${e.lineno}:${e.colno}`,stack:getLines(e.error.stack),selector:getSelector(target)};instance.send(log);}});}

  const VueMonitorPlugin={install(app){app.config.errorHandler=(e,vm)=>{moniter.send({kind:"stability",type:"error",errorType:"vueError",message:e.message,tagName:vm.htmlType??"",stack:getLines(e.stack),className:vm.$el.className,id:vm.$el.id});};}};

  class Moniter{init(config){if(!config)throw new Error("config is required");this.config={...defaultConfig,...config};this.initMonitor();}initMonitor(){const{url}=this.config;if(!url)throw new Error("report url is required");if(!isValidUrl(url))throw new Error("report url is invalid");if(this.config.jsError){observerJsError(this);}else if(this.config.monitorTiming);}send(data){console.log(data);}constructor(){this.config=defaultConfig;}}const moniter=new Moniter;

  exports.Moniter = Moniter;
  exports.VueMonitorPlugin = VueMonitorPlugin;
  exports.moniter = moniter;

}));
