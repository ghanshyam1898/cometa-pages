(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8jRI":function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function c(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var o=c(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(e)}r["%C2"]="�";for(var i=Object.keys(r),u=0;u<i.length;u++){var s=i[u];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},"8yz6":function(e,t,r){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},J4zp:function(e,t,r){var n=r("wTVA"),a=r("m0LI"),o=r("ZhPi"),c=r("wkBT");e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||c()}},Pmem:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||c()}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},"cr+I":function(e,t,r){"use strict";var n=r("J4zp"),a=r("RIqP");function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=r("Pmem"),u=r("8jRI"),s=r("8yz6");function l(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function m(e,t){return t.decode?u(e):e}function p(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function y(e){var t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=a};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var c,i=o(e.split("&"));try{for(i.s();!(c=i.n()).done;){var u=c.value,f=s(t.decode?u.replace(/\+/g," "):u,"="),p=n(f,2),y=p[0],g=p[1];g=void 0===g?null:["comma","separator"].includes(t.arrayFormat)?g:m(g,t),r(m(y,t),g,a)}}catch(I){i.e(I)}finally{i.f()}for(var v=0,b=Object.keys(a);v<b.length;v++){var h=b[v],E=a[h];if("object"==typeof E&&null!==E)for(var w=0,j=Object.keys(E);w<j.length;w++){var S=j[w];E[S]=d(E[S],t)}else a[h]=d(E,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((function(e,t){var r=a[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))}t.extract=y,t.parse=g,t.stringify=function(e,t){if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[f(t,e),"[",o,"]"].join("")]:[[f(t,e),"[",f(o,e),"]=",f(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[f(t,e),"[]"].join("")]:[[f(t,e),"[]=",f(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,n){return null==n||0===n.length?r:0===r.length?[[f(t,e),"=",f(n,e)].join("")]:[[r,f(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[f(t,e)]:[[f(t,e),"=",f(n,e)].join("")])}}}}(t),o={},c=0,i=Object.keys(e);c<i.length;c++){var u=i[c];r(u)||(o[u]=e[u])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var a=e[r];return void 0===a?"":null===a?f(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):f(r,t)+"="+f(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),a=n(r,2),o=a[0],c=a[1];return Object.assign({url:o.split("?")[0]||"",query:g(y(e),t)},t&&t.parseFragmentIdentifier&&c?{fragmentIdentifier:m(c,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign({encode:!0,strict:!0},r);var n=p(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),c=Object.assign(o,e.query),i=t.stringify(c,r);i&&(i="?".concat(i));var u=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(f(e.fragmentIdentifier,r))),"".concat(n).concat(i).concat(u)}},dv8B:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("t7gX"),c=r("vrFN"),i=r("YwZP"),u=r("cr+I"),s=r.n(u),l=function(e){return function(t){return a.a.createElement(i.Location,null,(function(r){var n=r.location,o=r.navigate;return a.a.createElement(e,Object.assign({},t,{location:n,navigate:o,search:n.search?s.a.parse(n.search):{}}))}))}},f=(r("8z7e"),r("qhky"));t.default=l((function(e){var t=e.search,r=t.payment_status,i=t.message,u=Object(n.useState)(!1),s=u[0],l=u[1],m=Object(n.useState)(!1),p=m[0],y=m[1],d=Object(n.useState)(!1),g=d[0],v=d[1];return Object(n.useEffect)((function(){window.history&&window.history.pushState&&(window.addEventListener("popstate",(function(e){alert(JSON.stringify(e))})),window.onpopstate=function(e){alert(JSON.stringify(e)),alert("2")},window.history.pushState({forward:!0},null,"#forward")),"TXN_SUCCESS"===r?l(!0):"TXN_FAILURE"===r?y(!0):"PENDING"===r&&v(!0)}),[r]),a.a.createElement("div",{className:"section abs-center section-pay-status"},s?a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:"Payment Successful"}),a.a.createElement(f.a,null,a.a.createElement("meta",{name:"theme-color",content:"#007E33"})),a.a.createElement("div",{className:"section-pay-design success"}),a.a.createElement("div",{className:"message success"},a.a.createElement(o.a,{icon:"smile"}),a.a.createElement("h2",null,i))):a.a.createElement(a.a.Fragment,null),p?a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:"Payment Failed"}),a.a.createElement(f.a,null,a.a.createElement("meta",{name:"theme-color",content:"#CC0000"})),a.a.createElement("div",{className:"section-pay-design error"}),a.a.createElement("div",{className:"message error"},a.a.createElement(o.a,{icon:"frown"}),a.a.createElement("h2",null,i))):a.a.createElement(a.a.Fragment,null),g?a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:"Payment Pending"}),a.a.createElement(f.a,null,a.a.createElement("meta",{name:"theme-color",content:"#FF8800"})),a.a.createElement("div",{className:"section-pay-design warn"}),a.a.createElement("div",{className:"message warn"},a.a.createElement(o.a,{icon:"meh"}),a.a.createElement("h2",null,i))):a.a.createElement(a.a.Fragment,null))}))},m0LI:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-education-payment-status-js-1fcc1abba9f685e9602c.js.map