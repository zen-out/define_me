!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.define_me=t():e.define_me=t()}(this,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{containsThis:()=>y,dashDDMMYYYY:()=>p,dashYYYYMMDD:()=>s,git:()=>n,hhmm:()=>o,hhmmss:()=>d,hyphenDDMMYYYY:()=>u,hyphenYYYYMMDD:()=>i,knexDate:()=>f,matchWords:()=>m,node_modules:()=>r,stringDate:()=>c,yyyymmdd:()=>a});var r=/^(?:.*[\\\/])?node_modules(?:[\\\/].*)?$/,n=/^(?:.*[\\\/])?.git(?:[\\\/].*)?$/,o=/^(2[0-3]|[01][0-9]):?([0-5][0-9])$/,d=/^(2[0-3]|[01][0-9]):?([0-5][0-9]):?([0-5][0-9])$/,a=/((19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/,i=/\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/,u=/^\d{1,2}\-\d{1,2}\-\d{4}$/,s=/^\d{4}\/\d{1,2}\/\d{1,2}$/,p=/^\d{1,2}\/\d{1,2}\/\d{4}$/,c=/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2})\s+(\d{4})/,f=/\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])T(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\dZ/;function y(e,t){return function(e){var t=new RegExp(/^[A-Z]/),r=new RegExp(/^[a-z]/),n=t.test(e),o=r.test(e);return n&&o}(e)&&(e=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(e)),new RegExp(t).test(e)}function m(e,t){for(var r=/[(){[*+?.\\^$|]/g,n=0;n<t.length;n++)t[n]=t[n].replace(r,"\\$&");var o=new RegExp("\\b(?:"+t.join("|")+")\\b","gi");return e.match(o)||[]}return t})()}));