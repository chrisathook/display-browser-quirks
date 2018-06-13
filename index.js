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
 * Fixes many basic browser problem with snapping things to pixels. Ported from the Craig Albert original version.
 * @param nodeList
 * @returns {boolean}
 */

export function smoothify(nodeList) {
  console.log("RUN SMOOTHIFY");
  if (isiOS || isAndroid) {
    return false;
  }
  let itterArray = Array.from(nodeList);
  itterArray.forEach(item => {
    if (isIE || isSafari || isEdge) {
      item.style.transform = "rotate(0.1deg)";
      return;
    }
    if (isFirefox && item.style.outline === "") {
      item.style.outline = "1px solid transparent";
    }
    item.style.transform = "rotate(0.1deg) translateZ(0.1px)";
  })
}
/**
 * fixes pixel snapping issues in chrome svgs
 * @param nodeList
 */
export function patchChromeSVG(nodeList) {
  console.log("patchChromeSVG --- add transformPerspective: 1000 if no 3D and scaling images");
  let itterArray = Array.from(nodeList);
  itterArray.forEach(item => {
    item.style.transform = "translateY(0.1px)";
  })
}

