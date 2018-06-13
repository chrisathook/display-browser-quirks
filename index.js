"use strict";
var ua = navigator.userAgent.toLowerCase();
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (function (p) {
  return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || safari.pushNotification);
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isAndroid = /(android)/i.test(navigator.userAgent);
console.log('QUIRKS MODE');
/**
 * Fixes many basic browser problem with snapping things to pixels. Ported from the Craig Albert original version
 * @param nodeList
 * @returns {boolean}
 */

export function smoothify(nodeList) {
  if (isiOS || isAndroid) {
    return false;
  }
  let itterArray = Array.from(nodeList);
  
  itterArray.forEach(item =>{
  
    item.style.transform = "rotate(.01deg)";
    item.style.transform = "translateZ(0.1)";
  })
  
}
/*
  Array.from( container.querySelectorAll('.catch-all')).forEach(function (item) {
      item.addEventListener('click', catchAllHandler);
    });
 */