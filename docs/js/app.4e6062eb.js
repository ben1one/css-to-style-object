!function(e){function n(n){for(var r,c,a=n[0],l=n[1],i=n[2],p=0,s=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(n);s.length;)s.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var l=t[a];0!==o[l]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={0:0},u=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var i=0;i<a.length;i++)n(a[i]);var f=l;u.push([34,1]),t()}({34:function(e,n,t){"use strict";t.r(n);t(35),t(56),t(64);console.log("webpack starterkit");var r=t(65),o=function(){var e=r(document.getElementById("textarea").value,{camelCase:!0,numbers:document.getElementById("numbers").checked});document.getElementById("pre").innerHTML=function(e){return e.replace(/\"/g,"'")}(JSON.stringify(e,null,2).replace(/"(\w+)"\s*:/g,"$1:"))};document.getElementById("textarea").addEventListener("change",(function(){console.log("textarea changed"),o()})),document.getElementById("numbers").addEventListener("change",(function(){console.log("numbers changed"),o()})),o()},64:function(e,n,t){}});
//# sourceMappingURL=app.4e6062eb.js.map