/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",f=\"month\",h=\"quarter\",c=\"year\",d=\"date\",$=\"Invalid Date\",l=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},D=\"en\",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if(\"string\"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g=\"set\"+(this.$u?\"UTC\":\"\");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+\"Hours\",0);case u:return l(g+\"Minutes\",1);case s:return l(g+\"Seconds\",2);case i:return l(g+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h=\"set\"+(this.$u?\"UTC\":\"\"),$=(n={},n[a]=h+\"Date\",n[d]=h+\"Date\",n[f]=h+\"Month\",n[c]=h+\"FullYear\",n[u]=h+\"Hours\",n[s]=h+\"Minutes\",n[i]=h+\"Seconds\",n[r]=h+\"Milliseconds\",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,\"0\")},d=n.meridiem||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,\"0\"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,\"0\"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,\"0\"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,\"0\"),s:String(this.$s),ss:O.s(this.$s,2,\"0\"),SSS:O.s(this.$ms,3,\"0\"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",f],[\"$y\",c],[\"$D\",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));\n\n//# sourceURL=webpack://gamevers/./node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "./node_modules/dayjs/plugin/customParseFormat.js":
/*!********************************************************!*\
  !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
  \********************************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t={LTS:\"h:mm:ss A\",LT:\"h:mm A\",L:\"MM/DD/YYYY\",LL:\"MMMM D, YYYY\",LLL:\"MMMM D, YYYY h:mm A\",LLLL:\"dddd, MMMM D, YYYY h:mm A\"},e=/(\\[[^[]*\\])|([-:/.()\\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\\d\\d/,r=/\\d\\d?/,i=/\\d*[^\\s\\d-_:/()]+/,o={},s=function(t){return(t=+t)+(t>68?1900:2e3)};var a=function(t){return function(e){this[t]=+e}},f=[/[+-]\\d\\d:?(\\d\\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if(\"Z\"===t)return 0;var e=t.match(/([+-]|\\d\\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:\"+\"===e[0]?-n:n}(t)}],u=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},h=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?\"pm\":\"PM\");return n},d={A:[i,function(t){this.afternoon=h(t,!1)}],a:[i,function(t){this.afternoon=h(t,!0)}],S:[/\\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\\d{3}/,function(t){this.milliseconds=+t}],s:[r,a(\"seconds\")],ss:[r,a(\"seconds\")],m:[r,a(\"minutes\")],mm:[r,a(\"minutes\")],H:[r,a(\"hours\")],h:[r,a(\"hours\")],HH:[r,a(\"hours\")],hh:[r,a(\"hours\")],D:[r,a(\"day\")],DD:[n,a(\"day\")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\\[|\\]/g,\"\")===t&&(this.day=r)}],M:[r,a(\"month\")],MM:[n,a(\"month\")],MMM:[i,function(t){var e=u(\"months\"),n=(u(\"monthsShort\")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=u(\"months\").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\\d+/,a(\"year\")],YY:[n,function(t){this.year=s(t)}],YYYY:[/\\d{4}/,a(\"year\")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\\[[^\\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\\[[^\\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),a=s.length,f=0;f<a;f+=1){var u=s[f],h=d[u],c=h&&h[0],l=h&&h[1];s[f]=l?{regex:c,parser:l}:u.replace(/^\\[|\\]$/g,\"\")}return function(t){for(var e={},n=0,r=0;n<a;n+=1){var i=s[n];if(\"string\"==typeof i)r+=i.length;else{var o=i.regex,f=i.parser,u=t.substr(r),h=o.exec(u)[0];f.call(e,h),t=t.replace(h,\"\")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,s=t.args;this.$u=r;var a=s[1];if(\"string\"==typeof a){var f=!0===s[2],u=!0===s[3],h=f||u,d=s[2];u&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(t,e,n){try{if([\"x\",\"X\"].indexOf(e)>-1)return new Date((\"X\"===e?1e3:1)*t);var r=c(e)(t),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,u=r.seconds,h=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=u||0,g=h||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(t){return new Date(\"\")}}(e,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),h&&e!=this.format(a)&&(this.$d=new Date(\"\")),o={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(\"\"))}else i.call(this,t)}}}));\n\n//# sourceURL=webpack://gamevers/./node_modules/dayjs/plugin/customParseFormat.js?");

/***/ }),

/***/ "./src/assets/images/linux.svg":
/*!*************************************!*\
  !*** ./src/assets/images/linux.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/linux.svg\");\n\n//# sourceURL=webpack://gamevers/./src/assets/images/linux.svg?");

/***/ }),

/***/ "./src/assets/images/mobile.svg":
/*!**************************************!*\
  !*** ./src/assets/images/mobile.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/mobile.svg\");\n\n//# sourceURL=webpack://gamevers/./src/assets/images/mobile.svg?");

/***/ }),

/***/ "./src/assets/images/other.svg":
/*!*************************************!*\
  !*** ./src/assets/images/other.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/other.svg\");\n\n//# sourceURL=webpack://gamevers/./src/assets/images/other.svg?");

/***/ }),

/***/ "./src/assets/images/ps4.svg":
/*!***********************************!*\
  !*** ./src/assets/images/ps4.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/ps4.svg\");\n\n//# sourceURL=webpack://gamevers/./src/assets/images/ps4.svg?");

/***/ }),

/***/ "./src/assets/images/search.svg":
/*!**************************************!*\
  !*** ./src/assets/images/search.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/search.svg\");\n\n//# sourceURL=webpack://gamevers/./src/assets/images/search.svg?");

/***/ }),

/***/ "./src/assets/images/switch.svg":
/*!**************************************!*\
  !*** ./src/assets/images/switch.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/switch.svg\");\n\n//# sourceURL=webpack://gamevers/./src/assets/images/switch.svg?");

/***/ }),

/***/ "./src/assets/images/windows.svg":
/*!***************************************!*\
  !*** ./src/assets/images/windows.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/windows.svg\");\n\n//# sourceURL=webpack://gamevers/./src/assets/images/windows.svg?");

/***/ }),

/***/ "./src/assets/images/xbox.svg":
/*!************************************!*\
  !*** ./src/assets/images/xbox.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/xbox.svg\");\n\n//# sourceURL=webpack://gamevers/./src/assets/images/xbox.svg?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gamevers/./src/scss/main.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.games = void 0;\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\nvar routes_1 = __webpack_require__(/*! ./ts/routes */ \"./src/ts/routes.ts\");\nvar search_svg_1 = __webpack_require__(/*! ./assets/images/search.svg */ \"./src/assets/images/search.svg\");\nsearch_svg_1.default;\nvar searchbar = document.querySelector(\".searchbar__bar\");\nvar pageNumber = 1;\nexports.games = [];\nvar setRoute = function ( /*{ gameSearch, pageNumber }: { gameSearch?: string; pageNumber?: number }*/) {\n    console.log(exports.games);\n    var pageContent = document.getElementById('app');\n    if (pageContent) {\n        // if (gameSearch) {\n        //   routes[\"pageList\"]({ pageArgument: gameSearch, pageContent });\n        //   return true;\n        // }\n        var path = window.location.hash.substring(1).split('/');\n        var pageArgument = path[1] || \"\";\n        routes_1.default[path[0]]({ pageArgument: pageArgument, pageContent: pageContent });\n        return true;\n    }\n    console.error(\"Oups, there was an issue!\");\n    return false;\n};\nwindow.addEventListener('hashchange', function () {\n    pageNumber = 1;\n    setRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n    pageNumber = 1;\n    setRoute();\n});\n// searchbar?.addEventListener(\"keypress\", (e): void  => {\n//   if ((e as KeyboardEvent).key === \"Enter\") {\n//     pageNumber = 1;\n//     setRoute(({ gameSearch: searchbar as HTMLInputElement).value });\n//   }\n// })\n\n\n//# sourceURL=webpack://gamevers/./src/index.ts?");

/***/ }),

/***/ "./src/ts/Game.ts":
/*!************************!*\
  !*** ./src/ts/Game.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar dayjs = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\nvar customParseFormat = __webpack_require__(/*! dayjs/plugin/customParseFormat */ \"./node_modules/dayjs/plugin/customParseFormat.js\");\nvar Game = /** @class */ (function () {\n    function Game(gameDetails) {\n        Object.assign(this, gameDetails);\n        this.trailer = \"test\";\n        this.formatReleased();\n        this.getTrailer();\n    }\n    Game.prototype.getTrailer = function () {\n        var _this = this;\n        var url = \"https://api.rawg.io/api/games/\".concat(this.id, \"/movies?key=\").concat(\"de92c7a378e6497c88c0435e934fd4d4\");\n        fetch(url)\n            .then(function (response) { return response.json(); })\n            .then(function (result) { var _a; return _this.trailer = (_a = result === null || result === void 0 ? void 0 : result.results[0]) === null || _a === void 0 ? void 0 : _a.data[\"480\"]; })\n            .catch(function (error) { return console.error(\"Erreur ! 💥💥💥💥💥 =>\", error); });\n    };\n    Game.prototype.formatReleased = function () {\n        dayjs.extend(customParseFormat);\n        var releaseDate = dayjs(this.released, \"YYYY-MM-DD\").format(\"MMM DD, YYYY\");\n        if (releaseDate === \"Invalid Date\") {\n            this.released = \"Release Date Not Revealed\";\n            return this;\n        }\n        this.released = releaseDate;\n        return this;\n    };\n    return Game;\n}());\nexports[\"default\"] = Game;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/Game.ts?");

/***/ }),

/***/ "./src/ts/PageDetail.ts":
/*!******************************!*\
  !*** ./src/ts/PageDetail.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar PageDetail = function (_a) {\n    var pageArgument = _a.pageArgument, pageContent = _a.pageContent;\n    var render = function () {\n        pageContent.innerHTML = \"\\n      <section class=\\\"home\\\">\\n        <div class=\\\"articles\\\">Hey, this is the Details Page of \".concat(pageArgument, \"!</div>\\n      </section>\\n    \");\n    };\n    render();\n};\nexports[\"default\"] = PageDetail;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/PageDetail.ts?");

/***/ }),

/***/ "./src/ts/PageList.ts":
/*!****************************!*\
  !*** ./src/ts/PageList.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar CardGame_1 = __webpack_require__(/*! ./components/CardGame */ \"./src/ts/components/CardGame.ts\");\nvar PlatformSelect_1 = __webpack_require__(/*! ./components/PlatformSelect */ \"./src/ts/components/PlatformSelect.ts\");\nvar dayjs = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\nvar __1 = __webpack_require__(/*! .. */ \"./src/index.ts\");\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/ts/Game.ts\");\nvar PageList = function (_a) {\n    var pageArgument = _a.pageArgument, pageContent = _a.pageContent, pageNumber = _a.pageNumber;\n    var fetchList = function (url, argument) {\n        // Use With API request\n        if (argument === void 0) { argument = undefined; }\n        var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n        fetch(finalURL)\n            .then(function (response) { return response.json(); })\n            .then(function (data) { return getGameDetails(data.results); })\n            .catch(function (error) {\n            console.error(\"Erreur ! 💥💥💥💥💥 =>\", error);\n            handleError();\n        });\n    };\n    var getGameDetails = function (data) {\n        __1.games.splice(0, __1.games.length);\n        data.forEach(function (d) {\n            fetch(\"https://api.rawg.io/api/games/\".concat(d.id, \"?&key=\").concat(\"de92c7a378e6497c88c0435e934fd4d4\"))\n                .then(function (response) { return response.json(); })\n                .then(function (result) { return __1.games.push(new Game_1.default(result)); })\n                .then(function () { return displayResults(); })\n                .catch(function (error) {\n                console.error(\"Erreur ! 💥💥💥💥💥 =>\", error);\n                handleError();\n            });\n        });\n    };\n    var displayResults = function () {\n        var gamesArr = __spreadArray([], __1.games, true);\n        var resultsContent = gamesArr.map(function (game) { return (0, CardGame_1.default)(game); });\n        var resultsContainer = document.querySelector(\".page-list .articles\");\n        if (resultsContainer) {\n            resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n            return;\n        }\n        handleError();\n        return;\n    };\n    var preparePage = function () {\n        if (pageArgument === \"\") {\n            fetchList(\"https://api.rawg.io/api/games?dates=\".concat(dayjs().format(\"YYYY-MM-DD\"), \",\").concat(dayjs().add(1, \"year\").format(\"YYYY-MM-DD\"), \"&ordering=-added&key=\").concat(\"de92c7a378e6497c88c0435e934fd4d4\"));\n            return;\n        }\n        var cleanedArg = pageArgument.replace(/\\s+/g, \"-\");\n        fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"de92c7a378e6497c88c0435e934fd4d4\", \"&page_size=9&page=\").concat(pageNumber), cleanedArg);\n        // Use Without API request\n        // const data = require(\"../borderlands_api_results.json\");\n        // console.log(data);\n        // displayResults(data.results);\n    };\n    var handleError = function () {\n        pageContent.innerHTML = \"\\n    <section class=\\\"page-list\\\">\\n      <div class=\\\"articles\\\">Oups ! Nous n'avons pas r\\u00E9ussi \\u00E0 charger le contenu \\uD83D\\uDE05 !</div>\\n    </section>\\n    \";\n    };\n    var render = function () {\n        pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"description\\\">\\n          <h2>Welcome,</h2>\\n          <p>The Hyper Progame is the world\\u2019s premier event for computer and video games and related products. At The Hyper Progame, the video game industry\\u2019s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure to the entire video game industry, all under one roof. This text seems familiar.</p>\\n          \".concat((0, PlatformSelect_1.default)(), \"\\n        </div>\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n    \");\n        preparePage();\n    };\n    render();\n};\nexports[\"default\"] = PageList;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/PageList.ts?");

/***/ }),

/***/ "./src/ts/components/CardGame.ts":
/*!***************************************!*\
  !*** ./src/ts/components/CardGame.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar PlatformIcons_1 = __webpack_require__(/*! ./PlatformIcons */ \"./src/ts/components/PlatformIcons.ts\");\nvar CardGame = function (_a) {\n    var background_image = _a.background_image, id = _a.id, name = _a.name, parent_platforms = _a.parent_platforms, released = _a.released, rating = _a.rating, ratings_count = _a.ratings_count, genres = _a.genres, developers = _a.developers;\n    return (\"\\n  <article class=\\\"card-game\\\">\\n  <a href=\\\"#pagedetail/\".concat(id, \"\\\">\\n    <div class=\\\"card-game__header\\\">\\n      <img src=\\\"\").concat(background_image, \"\\\">\\n      <div class=\\\"details\\\">\\n        <h4 class=\\\"released\\\">\").concat(released, \"</h4>\\n        <h4 class=\\\"developers\\\">\").concat(developers.map(function (dev) { return dev.name; }), \"</h4>\\n        <h4 class=\\\"rating\\\">\").concat(rating, \"/5 - \").concat(ratings_count, \" votes</h4>\\n        <p class=\\\"tags\\\">\").concat(genres.map(function (genre) { return genre.name; }).join(\", \"), \"</p>\\n      </div>\\n    </div>\\n    <h3 class=\\\"card-game__title\\\">\").concat(name, \"</h3>\\n    <div class=\\\"card-game__platforms\\\">\\n      \").concat((0, PlatformIcons_1.default)(parent_platforms), \"\\n    </div>\\n  </a>\\n  </article>\\n  \"));\n};\nexports[\"default\"] = CardGame;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/components/CardGame.ts?");

/***/ }),

/***/ "./src/ts/components/PlatformIcons.ts":
/*!********************************************!*\
  !*** ./src/ts/components/PlatformIcons.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar linux_svg_1 = __webpack_require__(/*! ../../assets/images/linux.svg */ \"./src/assets/images/linux.svg\");\nvar mobile_svg_1 = __webpack_require__(/*! ../../assets/images/mobile.svg */ \"./src/assets/images/mobile.svg\");\nvar other_svg_1 = __webpack_require__(/*! ../../assets/images/other.svg */ \"./src/assets/images/other.svg\");\nvar ps4_svg_1 = __webpack_require__(/*! ../../assets/images/ps4.svg */ \"./src/assets/images/ps4.svg\");\nvar switch_svg_1 = __webpack_require__(/*! ../../assets/images/switch.svg */ \"./src/assets/images/switch.svg\");\nvar windows_svg_1 = __webpack_require__(/*! ../../assets/images/windows.svg */ \"./src/assets/images/windows.svg\");\nvar xbox_svg_1 = __webpack_require__(/*! ../../assets/images/xbox.svg */ \"./src/assets/images/xbox.svg\");\nvar PlatformIcons = function (platforms) {\n    var platformIconsMap = {\n        \"pc\": windows_svg_1.default,\n        \"xbox\": xbox_svg_1.default,\n        \"playstation\": ps4_svg_1.default,\n        \"nintendo\": switch_svg_1.default,\n        \"ios\": mobile_svg_1.default,\n        \"android\": mobile_svg_1.default,\n        \"linux\": linux_svg_1.default,\n    };\n    return platforms === null || platforms === void 0 ? void 0 : platforms.map(function (platform) {\n        var _a = platform.platform, slug = _a.slug, name = _a.name; //TODO: Changer de nom parce que là c'est vraiment pas ouf\n        return \"\\n      <div class=\\\"icon\\\">\\n        <div class=\\\"hover\\\">\".concat(name, \"</div>\\n        <img class=\\\"icon\\\" src=\\\"\").concat(platformIconsMap[slug] || (platformIconsMap[slug] = other_svg_1.default), \"\\\" alt=\\\"\").concat(name, \"\\\">\\n      </div>\\n    \");\n    }).join(\"\\n\");\n};\nexports[\"default\"] = PlatformIcons;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/components/PlatformIcons.ts?");

/***/ }),

/***/ "./src/ts/components/PlatformSelect.ts":
/*!*********************************************!*\
  !*** ./src/ts/components/PlatformSelect.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar PlatformSelect = function () {\n    return \"\\n  <select class=\\\"platform-select\\\">\\n    <option selected>Any</option>\\n    <option>PlayStation</option>\\n    <option>XBox</option>\\n    <option>Switch</option>\\n    <option>PC</option>\\n    <option>Linux</option>\\n    <option>Mobile</option>\\n  </select>\\n  \";\n};\nexports[\"default\"] = PlatformSelect;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/components/PlatformSelect.ts?");

/***/ }),

/***/ "./src/ts/routes.ts":
/*!**************************!*\
  !*** ./src/ts/routes.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar PageDetail_1 = __webpack_require__(/*! ./PageDetail */ \"./src/ts/PageDetail.ts\");\nvar PageList_1 = __webpack_require__(/*! ./PageList */ \"./src/ts/PageList.ts\");\nvar routes = {\n    \"\": PageList_1.default,\n    pageList: PageList_1.default,\n    pageDetail: PageDetail_1.default\n};\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://gamevers/./src/ts/routes.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;