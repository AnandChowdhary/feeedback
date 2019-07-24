!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(n(1)),c=a(n(3));n(4);var l=function(e){function t(t){var n=e.call(this)||this;return n.settings=t||{},n.emitter.emit("ready"),n}return r(t,e),t.prototype.create=function(){if(!this.container){this.emitter.emit("beforeCreate",c.default),this.container=document.createElement("div"),this.container.innerHTML=c.default;var e=this.settings.appendTo||document.body;e&&e.appendChild(this.container),this.trapFocus(),this.listen(),this.emitter.emit("created",this.container)}},t.prototype.open=function(){this.container||this.create(),this.container&&(this.container.style.display="block"),this.emitter.emit("open")},t.prototype.close=function(){this.container&&(this.container.style.display="none"),this.emitter.emit("close"),this.reset()},t.prototype.reset=function(){this.container&&(this.container.style.display="none",this.container.innerHTML=c.default,this.listen(),this.emitter.emit("reset",this.container))},t.prototype.submit=function(e){var t=this;return this.emitter.emit("beforeSubmit",e),new Promise(function(n,o){"function"==typeof t.settings.onSubmit?t.settings.onSubmit(e).then(function(e){return n(e)}).catch(function(e){return o(e)}):"object"==typeof t.settings.postResults?fetch(t.settings.postResults.endpoint,i({method:t.settings.postResults.method,body:JSON.stringify(e)},t.settings.postResults.fetchOptions)).then(function(e){return n(e)}).catch(function(e){return o(e)}):o(new Error("no-endpoint"))})},t.prototype.trapFocus=function(){if(this.container){var e=this.container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),t=e[0],n=e[e.length-1];this.container.addEventListener("keydown",function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===t&&(n.focus(),e.preventDefault()):(console.log("Here"),document.activeElement===n&&(t.focus(),e.preventDefault())))})}},t.prototype.listen=function(){var e=this;if(this.container){var t=this.container.querySelector("form");if(t){t.addEventListener("submit",function(t){return e.formSubmit(t)});var n=this.container.querySelector("button.close");n&&n.addEventListener("click",function(){return e.close()});var o=this.container.querySelector(".feeedback-background");o&&o.addEventListener("click",function(){return e.close()})}}},t.prototype.formSubmit=function(e){var t=this;if(e.preventDefault(),this.container){var n=this.container.querySelector("form");if(n){var o=this.container.querySelector(".loading"),r=this.container.querySelector(".success"),i=this.container.querySelector(".error");n.style.display="none",o&&(o.style.display="block");var a="0",s="",c=n.querySelector("input[name='emoji_ID_']");c&&(a=c.value);var l=n.querySelector("textarea[name='message_ID_']");console.log(l),l&&(s=l.value),this.submit({rating:parseInt(a),message:s}).then(function(e){t.emitter.emit("submit",e),o&&(o.style.display="none"),r&&(r.style.display="block")}).catch(function(e){t.emitter.emit("error",e),o&&(o.style.display="none"),i&&(i.style.display="block")}).finally(function(){setTimeout(function(){t.close(),t.emitter.emit("finish")},t.settings.messageDelay||2500)})}}},t}(s.default);t.default=l,window.Feeedback=l},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(2)),i=function(){function e(){this.emitter=new r.default}return e.prototype.on=function(e,t){return this.emitter.on(e,t)},e.prototype.off=function(e,t){return this.emitter.off(e,t)},e}();t.default=i},function(e,t,n){"use strict";n.r(t),t.default=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}},function(e,t){e.exports='<dialog open class=feeedback-dialog> <button class=close aria-label="Close feedback modal">&times;</button> <h1>Give us feedback</h1> <p>What do you think of this webpage?</p> <form method=dialog> <div class=emojis> <label> <input type=radio name=emoji_ID_ value=5 /> <span class=emoji aria-label="Very happy">😀</span> </label> <label> <input type=radio name=emoji_ID_ value=4 /> <span class=emoji aria-label=Happy>🙂</span> </label> <label> <input type=radio name=emoji_ID_ value=3 /> <span class=emoji aria-label=Neutral>😐</span> </label> <label> <input type=radio name=emoji_ID_ value=2 /> <span class=emoji aria-label=Sad>🙁</span> </label> <label> <input type=radio name=emoji_ID_ value=1 /> <span class=emoji aria-label="Very sad">😢</span> </label> </div> <label> <span>Do you have any comments?</span> <textarea name=message_ID_ placeholder="Enter your feedback here"></textarea> </label> <button>Submit feedback</button> </form> <div class=loading> <div class=large-emoji>⌛</div> <p>Submitting your feedback...</p> </div> <div class=success> <div class=large-emoji>🙌</div> <p>Thank you for your feedback!</p> </div> <div class=error> <div class=large-emoji>🚫</div> <p> Unfortunately, we weren\'t able to save your feedback because of an internal error. </p> </div> </dialog> <div class=feeedback-background></div> '},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(7)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,'.feeedback-dialog{position:fixed;z-index:11000;display:none;top:10vh;appearance:none;max-width:300px;width:auto;text-align:left;padding:2rem;border:1px solid rgba(0,0,0,0.1);border-radius:0.2rem;box-shadow:0 0.3rem 0.5rem rgba(0,0,0,0.2)}.feeedback-dialog[open]{display:block !important}.feeedback-dialog h1{margin-top:0;font-size:110%}.feeedback-dialog form label{display:block}.feeedback-dialog form textarea,.feeedback-dialog form input,.feeedback-dialog form select,.feeedback-dialog form button{display:block;font:inherit;padding:0.5rem 0.75rem;width:100%;border:1px solid #ddd;box-sizing:border-box}.feeedback-dialog form textarea{resize:none;height:7.5rem}.feeedback-dialog form button{background-color:#6c5ce7;color:#fff;width:auto;margin-top:1rem;font-weight:bold;border-radius:2rem;padding:0.5rem 1rem}.feeedback-dialog .emojis{display:flex;justify-content:space-between;margin-bottom:1rem}.feeedback-dialog .emojis input[type="radio"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.feeedback-dialog .emojis input[type="radio"]+.emoji{display:inline-block;font-size:250%;transition:0.2s}.feeedback-dialog .emojis input[type="radio"]+.emoji:hover{transform:scale(1.2);opacity:1}.feeedback-dialog .emojis input[type="radio"]:focus+.emoji{transform:scale(1.2) !important}.feeedback-dialog .emojis input[type="radio"]:checked+.emoji{transform:scale(1.2);opacity:1}.feeedback-dialog .success,.feeedback-dialog .error,.feeedback-dialog .loading{display:none}.feeedback-dialog .success .large-emoji,.feeedback-dialog .error .large-emoji,.feeedback-dialog .loading .large-emoji{font-size:300%}.feeedback-dialog .close{font:inherit;padding:0.5rem;border:0;position:absolute;right:1rem;top:1.5rem;width:2rem;height:2rem;font-size:0.5rem;line-height:0.5rem;font-size:1.25rem;border-radius:1rem}.feeedback-dialog .close:hover,.feeedback-dialog .close:focus{background-color:#eee}.feeedback-dialog p,.feeedback-dialog label span{display:block;margin:0 0 1rem 0}.feeedback-background{background-color:rgba(100,100,100,0.5);position:fixed;left:0;right:0;top:0;bottom:0;z-index:10000}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),c=null,l=0,u=[],f=n(8);function d(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(v(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function b(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,n);n.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return y(t,e.attrs),b(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;n=c||(c=h(t)),o=j.bind(null,n,a,!1),r=j.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),b(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}e&&d(p(e,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var g,k=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function j(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=k(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}])});