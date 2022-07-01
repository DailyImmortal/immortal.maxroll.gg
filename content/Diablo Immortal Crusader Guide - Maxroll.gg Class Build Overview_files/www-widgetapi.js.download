(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},ra={};try{ra.__proto__=pa;oa=ra.a;break a}catch(a){}oa=!1}ma=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype}
function ua(){this.v=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.s=0;this.J=this.l=null}
function va(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
ua.prototype.H=function(a){this.j=a};
function wa(a,b){a.l={Na:b,Sa:!0};a.i=a.s||a.o}
ua.prototype.return=function(a){this.l={return:a};this.i=this.o};
function w(a,b,c){a.i=c;return{value:b}}
ua.prototype.u=function(a){this.i=a};
function xa(a,b,c){a.s=b;void 0!=c&&(a.o=c)}
function ya(a,b){a.i=b;a.s=0}
function za(a){a.s=0;var b=a.l.Na;a.l=null;return b}
function Aa(a){a.J=[a.l];a.s=0;a.o=0}
function Ba(a){var b=a.J.splice(0)[0];(b=a.l=a.l||b)?b.Sa?a.i=a.s||a.o:void 0!=b.u&&a.o<b.u?(a.i=b.u,a.l=null):a.i=a.o:a.i=0}
function Ca(a){this.i=new ua;this.j=a}
function Da(a,b){va(a.i);var c=a.i.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.v=!1,e;var f=e.value}catch(g){return a.i.m=null,wa(a.i,g),Fa(a)}a.i.m=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.v=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,wa(a.i,c)}a.i.v=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Sa)throw b.Na;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){va(a.i);a.i.m?b=Ea(a,a.i.m.next,b,a.i.H):(a.i.H(b),b=Fa(a));return b};
this.throw=function(b){va(a.i);a.i.m?b=Ea(a,a.i.m["throw"],b,a.i.H):(wa(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ha(new Ga(new Ca(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.v=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.cb),reject:g(this.o)}};
b.prototype.cb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.bb(g):this.s(g)}};
b.prototype.bb=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.gb(h,g):this.s(g)};
b.prototype.o=function(g){this.H(2,g)};
b.prototype.s=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.eb();this.J()};
b.prototype.eb=function(){var g=this;e(function(){if(g.da()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.da=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.J=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.fb=function(g){var h=this.m();g.qa(h.resolve,h.reject)};
b.prototype.gb=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(y){try{l(r(y))}catch(z){m(z)}}:p}
var l,m,q=new b(function(r,p){l=r;m=p});
this.qa(k(g,l),k(h,m));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.qa=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).qa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(y){return function(z){r[y]=z;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).qa(q(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,entry:q}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.i=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Wa(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Qb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Wa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);function Kb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Kb().indexOf(a)}
;function Lb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Mb={};function Nb(a){this.i=Mb===Mb?a:""}
Nb.prototype.toString=function(){return this.i.toString()};var Ob=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pb(a){return a?decodeURI(a):a}
function Qb(a){return Pb(a.match(Ob)[3]||null)}
function Rb(a){var b=a.match(Ob);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Sb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Tb(a){var b=[],c;for(c in a)Sb(c,a[c],b);return b.join("&")}
var Ub=/#|$/;function Zb(a,b){var c=a.search(Ub);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;var $b={};function ac(a){if(a!==$b)throw Error("requires a valid immutable API token");}
;function bc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function cc(a){cc[" "](a);return a}
cc[" "]=function(){};var dc=E("Opera"),ec=E("Trident")||E("MSIE"),fc=E("Edge"),gc=E("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),hc=-1!=Kb().toLowerCase().indexOf("webkit")&&!E("Edge");function ic(){var a=A.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){var a=Kb();if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,oc;if(A.document&&ec){var pc=ic();oc=pc?pc:parseInt(nc,10)||void 0}else oc=void 0;var qc=oc;var rc=bc()||E("iPod"),sc=E("iPad");!E("Android")||Lb();Lb();var tc=E("Safari")&&!(Lb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(bc()||E("iPad")||E("iPod"));var uc={},wc=null;
function xc(a,b){Oa(a);void 0===b&&(b=0);if(!wc){wc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));uc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===wc[h]&&(wc[h]=g)}}}b=uc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var yc="undefined"!==typeof Uint8Array,zc={};var Ac;function Bc(a){if(zc!==zc)throw Error("illegal external caller");this.Ia=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Bc.prototype.isEmpty=function(){return null==this.Ia};var Cc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Dc(a,b){Object.isFrozen(a)||(Cc?a[Cc]|=b:void 0!==a.W?a.W|=b:Object.defineProperties(a,{W:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Ec(a){var b;Cc?b=a[Cc]:b=a.W;return null==b?0:b}
function Fc(a){return Array.isArray(a)?!!(Ec(a)&1):!1}
function Gc(a){Dc(a,1);return a}
function Kc(a){return Array.isArray(a)?!!(Ec(a)&2):!1}
function Lc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Dc(a,2)}
function Mc(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?Dc(a,8):Object.isFrozen(a)||(Cc?a[Cc]&=-9:void 0!==a.W&&(a.W&=-9))}
;function Nc(a){return Kc(a.C)}
function Oc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Pc,Qc=Object.freeze(Gc([]));function Rc(a){if(Nc(a))throw Error("Cannot mutate an immutable Message");}
var Sc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Tc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Uc(a){return a.displayName||a.name||"unknown type name"}
function Vc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Uc(b)+" but got "+(a&&Uc(a.constructor)));return a}
function Wc(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Xc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(yc&&null!=a&&a instanceof Uint8Array)return xc(a);if(a instanceof Bc){var b=a.Ia;null!=b&&"string"!==typeof b&&(yc&&b instanceof Uint8Array?b=xc(b):(Na(b),b=null));return null==b?"":a.Ia=b}}}return a}
;function Yc(a,b){b=void 0===b?Zc:b;return $c(a,b)}
function ad(a,b){if(null!=a){if(Array.isArray(a))a=$c(a,b);else if(Oc(a)){var c={},d;for(d in a)c[d]=ad(a[d],b);a=c}else a=b(a);return a}}
function $c(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=ad(c[d],b);Fc(a)&&Gc(c);return c}
function bd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Xc(a);return Array.isArray(a)?Yc(a,bd):a}
function Zc(a){return yc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function cd(a){return a.j||(a.j=a.C[a.l+a.V]={})}
function dd(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.C[b+a.V]}
function F(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Rc(a);b<a.l&&!d?a.C[b+a.V]=c:cd(a)[b]=c;return a}
function ed(a,b,c,d){c=void 0===c?!0:c;var e=dd(a,b,d);Array.isArray(e)||(e=Qc);if(Nc(a))c&&(Lc(e),Object.freeze(e));else if(e===Qc||Kc(e))e=Gc(e.slice()),F(a,b,e,d);return e}
function fd(a,b,c,d){Rc(a);(c=gd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),F(a,c));return F(a,b,d)}
function gd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=dd(a,e)&&(0!==c&&F(a,c,void 0,!1,!0),c=e)}return c}
function hd(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=dd(a,c,f);b=Wc(h,b,d);void 0==b?d=g:(d&&b.C!==h&&F(a,c,b.C,f,!0),a.i[c]=b,Nc(a)&&Lc(b.C),d=b)}}if(null==d)return d;Nc(d)&&!Nc(a)&&(d=d.Ha($b),F(a,c,d.C,e),a.i[c]=d);return d}
function id(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=Nc(a),g=a.i[c];d=ed(a,c,!0,d);var h=f||Kc(d);if(!g){g=[];f=f||h;for(var k=0;k<d.length;k++){var l=d[k];f=f||Kc(l);l=Wc(l,b);void 0!==l&&(g.push(l),h&&Lc(l.C))}a.i[c]=g;Mc(d,!f)}b=h||e;e=Kc(g);b&&!e&&(Object.isFrozen(g)&&(a.i[c]=g=g.slice()),Lc(g),Object.freeze(g));!b&&e&&(a.i[c]=g=g.slice());return g}
function H(a,b,c,d){Rc(a);a.i||(a.i={});b=null!=d?Vc(d,b).C:d;a.i[c]=d;return F(a,c,b)}
function jd(a,b,c,d,e){Rc(a);a.i||(a.i={});b=null!=e?Vc(e,b).C:e;a.i[c]=e;fd(a,c,d,b)}
function kd(a,b,c,d){Rc(a);if(null!=d){var e=Gc([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Vc(d[g],b).C,f=f||Kc(e[g]);a.i||(a.i={});a.i[c]=d;Mc(e,!f)}else a.i&&(a.i[c]=void 0),e=Qc;return F(a,c,e)}
function ld(a,b,c,d){Rc(a);var e=id(a,c,b,void 0,!1);c=null!=d?Vc(d,c):new c;a=ed(a,b);e.push(c);a.push(c.C);ac($b);Nc(c)&&Mc(a,!1)}
function md(a,b){a=dd(a,b);return null==a?"":a}
;function nd(a,b,c){a||(a=od);od=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.V=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.C=a;a:{d=this.C.length;a=d-1;if(d&&(d=this.C[a],Oc(d))){this.l=a-this.V;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.V),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.V,(d=this.C[a])?Array.isArray(d)&&Gc(d):this.C[a]=Qc;else{d=cd(this);var e=d[a];e?Array.isArray(e)&&Gc(e):d[a]=Qc}}
nd.prototype.toJSON=function(){var a=this.C;return Pc?a:Yc(a,bd)};
function pd(a){Pc=!0;try{return JSON.stringify(a.toJSON(),qd)}finally{Pc=!1}}
nd.prototype.clone=function(){var a=Yc(this.C);od=a;a=new this.constructor(a);od=null;rd(a,this);return a};
nd.prototype.isMutable=function(a){ac(a);return!Nc(this)};
nd.prototype.toString=function(){return this.C.toString()};
function qd(a,b){return Xc(b)}
function rd(a,b){b.ha&&(a.ha=b.ha.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=e[0].constructor,l=f;l=void 0===l?!1:l;f=Nc(h);k=id(h,k,g,l,f);g=ed(h,g,l);if(!(h=f)&&(h=g)){h=g;if(!Array.isArray(h))throw Error("cannot check mutability state of non-array");h=!(Ec(h)&8)}if(h){for(h=0;h<k.length;h++)(l=k[h])&&Nc(l)&&!f&&(k[h]=k[h].Ha($b),g[h]=k[h].C);Mc(g,!0)}f=k;for(k=0;k<Math.min(f.length,e.length);k++)rd(f[k],e[k])}}else(f=
hd(a,e.constructor,g,void 0,f))&&rd(f,e)}}}}
var od;function sd(){nd.apply(this,arguments)}
v(sd,nd);sd.prototype.Ha=function(){return this};
if(Sc){var td={};Object.defineProperties(sd,(td[Symbol.hasInstance]=Tc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),td))};function ud(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.za?Gc(a.slice()):a,kd(b,0<e.length?e[0].constructor:void 0,c,e)):H(b,a.constructor,c,a):(yc&&d instanceof Uint8Array?e=d.length?new Bc(new Uint8Array(d)):Ac||(Ac=new Bc(null)):(Array.isArray(d)&&(e?Lc(d):Fc(d)&&f.za&&(d=d.slice())),e=d),F(b,c,e))}
;function I(){sd.apply(this,arguments)}
v(I,sd);I.prototype.Ha=function(a){ac(a);if(Nc(this)){a={za:!0};var b=Nc(this);if(b&&!a.za)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.ha&&(c.ha=this.ha.slice());for(var d=this.C,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Oc(f))for(h in f){var g=+h;Number.isNaN(g)?cd(c)[h]=f[h]:ud(this,c,g,f[h],b,a)}else ud(this,c,e-this.V,f,b,a)}var h=c}else h=this;return h};
if(Sc){var vd={};Object.defineProperties(I,(vd[Symbol.hasInstance]=Tc(Object[Symbol.hasInstance]),vd))};var wd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function xd(a,b){a.removeAttribute("srcdoc");b instanceof Hb&&b.constructor===Hb?b=b.i:(Na(b),b="type_error:SafeUrl");a.src=b;for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(var c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function yd(a,b){this.width=a;this.height=b}
n=yd.prototype;n.clone=function(){return new yd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function zd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ad(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Bd(a){var b=Cd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Dd(){var a=[];Bd(function(b){a.push(b)});
return a}
var Cd={yb:"allow-forms",zb:"allow-modals",Ab:"allow-orientation-lock",Bb:"allow-pointer-lock",Cb:"allow-popups",Db:"allow-popups-to-escape-sandbox",Eb:"allow-presentation",Fb:"allow-same-origin",Gb:"allow-scripts",Hb:"allow-top-navigation",Ib:"allow-top-navigation-by-user-activation"},Ed=bb(function(){return Dd()});
function Fd(){var a=Gd(),b={};D(Ed(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Gd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Hd(a){this.isValid=a}
function Id(a){return new Hd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Jd=[Id("data"),Id("http"),Id("https"),Id("mailto"),Id("ftp"),new Hd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Kd(a,b){b=void 0===b?Jd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Hd&&d.isValid(a))return new Hb(a,Ib)}}
function Ld(a){var b=void 0===b?Jd:b;return Kd(a,b)||Jb}
;var Md=(new Date).getTime();function Nd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Qd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Qd);function Rd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var r=g,p=0;64>p;p+=4)r[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],z=e[2],G=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var M=G^y&(z^G);var O=1518500249}else M=y^z^G,O=1859775393;else 60>p?(M=y&z|G&(y|z),O=2400959708):(M=y^z^G,O=3395469782);M=((q<<5|q>>>27)&4294967295)+M+K+O+r[p]&4294967295;K=G;G=z;z=(y<<30|y>>>2)&4294967295;y=q;q=M}e[0]=e[0]+q&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+K&4294967295}
function c(q,r){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,z=q.length;y<z;++y)p.push(q.charCodeAt(y));q=p}r||(r=q.length);p=0;if(0==l)for(;p+64<r;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var y=24;0<=y;y-=8)q[r++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,jb:function(){for(var q=d(),r="",p=0;p<q.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return r}}}
;function Sd(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Td(Nd(d),a,c||null)].join(" "):null}
function Td(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Ud(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Ud(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ud(a){var b=Rd();b.update(a);return b.jb().toLowerCase()}
;var Vd={};function Wd(a){this.i=a||{cookie:""}}
n=Wd.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ba:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ub;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ba}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ba:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Xd=new Wd("undefined"==typeof document?null:document);function Yd(a){return!!Vd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Zd(a,b,c,d){(a=A[a])||(a=(new Wd(document)).get(b));return a?Sd(a,c,d):null}
function $d(a){var b=void 0===b?!1:b;var c=Nd(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Yd(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Wd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Yd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Wd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Sd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Yd(b)&&((b=Zd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Zd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function ae(){this.l=this.l;this.o=this.o}
ae.prototype.l=!1;ae.prototype.dispose=function(){this.l||(this.l=!0,this.ga())};
ae.prototype.ga=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function be(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
be.prototype.stopPropagation=function(){this.l=!0};
be.prototype.preventDefault=function(){this.defaultPrevented=!0};function ce(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=de(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ee[c])c=ee[c];else{c=String(c);if(!ee[c]){var f=/function\s+([^\(]+)/m.exec(c);ee[c]=f?f[1]:"[Anonymous]"}c=ee[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function de(a,b){b||(b={});b[fe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[fe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=de(a,b));return c}
function fe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ee={};var ge=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function he(a,b){be.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Wa(he,be);var ie={2:"touch",3:"pen",4:"mouse"};
he.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(gc){a:{try{cc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ie[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&he.N.preventDefault.call(this)};
he.prototype.stopPropagation=function(){he.N.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
he.prototype.preventDefault=function(){he.N.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(1E6*Math.random()|0);var ke=0;function le(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ta=e;this.key=++ke;this.ja=this.pa=!1}
function me(a){a.ja=!0;a.listener=null;a.proxy=null;a.src=null;a.ta=null}
;function ne(a){this.src=a;this.listeners={};this.i=0}
ne.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=oe(a,b,d,e);-1<g?(b=a[g],c||(b.pa=!1)):(b=new le(b,this.src,f,!!d,e),b.pa=c,a.push(b));return b};
ne.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=oe(e,b,c,d);return-1<b?(me(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function pe(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(me(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function oe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ja&&f.listener==b&&f.capture==!!c&&f.ta==d)return e}return-1}
;var qe="closure_lm_"+(1E6*Math.random()|0),re={},se=0;function te(a,b,c,d,e){if(d&&d.once)ue(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)te(a,b[f],c,d,e);else c=ve(c),a&&a[je]?a.X(b,c,Pa(d)?!!d.capture:!!d,e):we(a,b,c,!1,d,e)}
function we(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=xe(a);h||(a[qe]=h=new ne(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ye();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ge||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ze(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");se++}}
function ye(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ae;return a}
function ue(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ue(a,b[f],c,d,e);else c=ve(c),a&&a[je]?a.i.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):we(a,b,c,!0,d,e)}
function Be(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Be(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=ve(c),a&&a[je])?a.i.remove(String(b),c,d,e):a&&(a=xe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=oe(b,c,d,e)),(c=-1<a?b[a]:null)&&Ce(c))}
function Ce(a){if("number"!==typeof a&&a&&!a.ja){var b=a.src;if(b&&b[je])pe(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ze(c),d):b.addListener&&b.removeListener&&b.removeListener(d);se--;(c=xe(b))?(pe(c,a),0==c.i&&(c.src=null,b[qe]=null)):me(a)}}}
function ze(a){return a in re?re[a]:re[a]="on"+a}
function Ae(a,b){if(a.ja)a=!0;else{b=new he(b,this);var c=a.listener,d=a.ta||a.src;a.pa&&Ce(a);a=c.call(d,b)}return a}
function xe(a){a=a[qe];return a instanceof ne?a:null}
var De="__closure_events_fn_"+(1E9*Math.random()>>>0);function ve(a){if("function"===typeof a)return a;a[De]||(a[De]=function(b){return a.handleEvent(b)});
return a[De]}
;function Ee(){ae.call(this);this.i=new ne(this);this.da=this;this.H=null}
Wa(Ee,ae);Ee.prototype[je]=!0;Ee.prototype.addEventListener=function(a,b,c,d){te(this,a,b,c,d)};
Ee.prototype.removeEventListener=function(a,b,c,d){Be(this,a,b,c,d)};
function Fe(a,b){var c=a.H;if(c){var d=[];for(var e=1;c;c=c.H)d.push(c),++e}a=a.da;c=b.type||b;"string"===typeof b?b=new be(b,a):b instanceof be?b.target=b.target||a:(e=b,b=new be(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=Ge(g,c,!0,b)&&e}b.l||(g=b.i=a,e=Ge(g,c,!0,b)&&e,b.l||(e=Ge(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=Ge(g,c,!1,b)&&e}
Ee.prototype.ga=function(){Ee.N.ga.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,me(d[e]);delete a.listeners[c];a.i--}}this.H=null};
Ee.prototype.X=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Ge(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ja&&g.capture==c){var h=g.listener,k=g.ta||g.src;g.pa&&pe(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function He(a){Ee.call(this);var b=this;this.J=this.m=0;this.K=null!=a?a:{O:function(e,f){return setTimeout(e,f)},
Z:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.s=function(){return x(function(e){return w(e,Ie(b),0)})};
window.addEventListener("offline",this.s);window.addEventListener("online",this.s);this.J||Je(this)}
v(He,Ee);function Ke(){var a=Le;He.i||(He.i=new He(a));return He.i}
He.prototype.dispose=function(){window.removeEventListener("offline",this.s);window.removeEventListener("online",this.s);this.K.Z(this.J);delete He.i};
He.prototype.F=function(){return this.j};
function Je(a){a.J=a.K.O(function(){var b;return x(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):w(c,Ie(a),3):w(c,Ie(a),3);Je(a);c.i=0})},3E4)}
function Ie(a,b){return a.v?a.v:a.v=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.m=a.K.O(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.v=void 0;a.m&&(a.K.Z(a.m),a.m=0);g!==a.j&&(a.j=g,a.j?Fe(a,"networkstatus-online"):Fe(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.u(3)}})})}
;function Me(){this.data_=[];this.i=-1}
Me.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Me.prototype.get=function(a){return!!this.data_[a]};
function Ne(a){-1===a.i&&(a.i=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Oe(a){I.call(this,a,-1,Pe)}
v(Oe,I);function Qe(a,b){return F(a,2,b)}
function Re(a,b){return F(a,3,b)}
function Se(a,b){return F(a,4,b)}
function Te(a,b){return F(a,5,b)}
function Ue(a,b){return F(a,9,b)}
function Ve(a,b){return kd(a,We,10,b)}
function Xe(a,b){return F(a,11,b)}
function Ye(a,b){return F(a,1,b)}
function We(a){I.call(this,a)}
v(We,I);var Pe=[10,6];var Ze="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function $e(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function af(){var a=window,b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;var d=$e(a);if(d.uach_promise)return d.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Ze).then(function(e){null!=d.uach||(d.uach=e);return e});
return d.uach_promise=a}
function bf(a){var b;return Xe(Ve(Ue(Te(Se(Re(Qe(Ye(new Oe,a.platform||""),a.platformVersion||""),a.architecture||""),a.model||""),a.uaFullVersion||""),a.bitness||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new We;d=F(d,1,c.brand);return F(d,2,c.version)}))||[]),a.wow64||!1)}
function cf(){var a,b;return null!=(b=null==(a=af())?void 0:a.then(function(c){return bf(c)}))?b:null}
;function df(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
df.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function ef(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var ff;function gf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=zd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.La;c.La=null;e()}};
return function(e){d.next={La:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function hf(a){A.setTimeout(function(){throw a;},0)}
;function jf(){this.j=this.i=null}
jf.prototype.add=function(a,b){var c=kf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
jf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var kf=new df(function(){return new lf},function(a){return a.reset()});
function lf(){this.next=this.scope=this.i=null}
lf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
lf.prototype.reset=function(){this.next=this.scope=this.i=null};var mf,nf=!1,of=new jf;function pf(a,b){mf||qf();nf||(mf(),nf=!0);of.add(a,b)}
function qf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);mf=function(){a.then(rf)}}else mf=function(){var b=rf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!E("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(ff||(ff=gf()),ff(b)):A.setImmediate(b)}}
function rf(){for(var a;a=of.remove();){try{a.i.call(a.scope)}catch(b){hf(b)}ef(kf,a)}nf=!1}
;function sf(a,b){this.i=a[A.Symbol.iterator]();this.j=b}
sf.prototype[Symbol.iterator]=function(){return this};
sf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function tf(a,b){return new sf(a,b)}
;function uf(){this.blockSize=-1}
;function vf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Wa(vf,uf);vf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function wf(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
vf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)wf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){wf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){wf(this,e);f=0;break}}this.j=f;this.m+=b}};
vf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;wf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function xf(){}
xf.prototype.next=function(){return yf};
var yf={done:!0,value:void 0};function zf(a){return{value:a,done:!1}}
xf.prototype.L=function(){return this};function Af(a){if(a instanceof Bf||a instanceof Cf||a instanceof Df)return a;if("function"==typeof a.next)return new Bf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Bf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new Bf(function(){return a.L()});
throw Error("Not an iterator or iterable.");}
function Bf(a){this.j=a}
Bf.prototype.L=function(){return new Cf(this.j())};
Bf.prototype[Symbol.iterator]=function(){return new Df(this.j())};
Bf.prototype.i=function(){return new Df(this.j())};
function Cf(a){this.j=a}
v(Cf,xf);Cf.prototype.next=function(){return this.j.next()};
Cf.prototype[Symbol.iterator]=function(){return new Df(this.j)};
Cf.prototype.i=function(){return new Df(this.j)};
function Df(a){Bf.call(this,function(){return a});
this.l=a}
v(Df,Bf);Df.prototype.next=function(){return this.l.next()};function Ef(a,b){this.j={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ef)for(c=Ff(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ff(a){Gf(a);return a.i.concat()}
n=Ef.prototype;n.has=function(a){return Hf(this.j,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||If;Gf(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function If(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.j={};this.l=this.size=this.i.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return Hf(this.j,a)?(delete this.j[a],--this.size,this.l++,this.i.length>2*this.size&&Gf(this),!0):!1};
function Gf(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Hf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Hf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return Hf(this.j,a)?this.j[a]:b};
n.set=function(a,b){Hf(this.j,a)||(this.size+=1,this.i.push(a),this.l++);this.j[a]=b};
n.forEach=function(a,b){for(var c=Ff(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Ef(this)};
n.keys=function(){return Af(this.L(!0)).i()};
n.values=function(){return Af(this.L(!1)).i()};
n.entries=function(){var a=this;return tf(this.keys(),function(b){return[b,a.get(b)]})};
n.L=function(a){Gf(this);var b=0,c=this.l,d=this,e=new xf;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return yf;var f=d.i[b++];return zf(a?f:d.j[f])};
return e};
function Hf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Jf=A.JSON.stringify;function Kf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Lf(a){this.i=0;this.v=void 0;this.m=this.j=this.l=null;this.o=this.s=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Mf(b,2,c)},function(c){Mf(b,3,c)})}catch(c){Mf(this,3,c)}}
function Nf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Nf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Of=new df(function(){return new Nf},function(a){a.reset()});
function lg(a,b,c){var d=Of.get();d.j=a;d.onRejected=b;d.context=c;return d}
Lf.prototype.then=function(a,b,c){return mg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Lf.prototype.$goog_Thenable=!0;Lf.prototype.cancel=function(a){if(0==this.i){var b=new ng(a);pf(function(){og(this,b)},this)}};
function og(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?og(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):pg(c),qg(c,e,3,b)))}a.l=null}else Mf(a,3,b)}
function rg(a,b){a.j||2!=a.i&&3!=a.i||sg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function mg(a,b,c,d){var e=lg(null,null,null);e.i=new Lf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ng?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;rg(a,e);return e.i}
Lf.prototype.J=function(a){this.i=0;Mf(this,2,a)};
Lf.prototype.da=function(a){this.i=0;Mf(this,3,a)};
function Mf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.J,f=a.da;if(d instanceof Lf){rg(d,lg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){tg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.i=b,a.l=null,sg(a),3!=b||c instanceof ng||ug(a,c))}}
function tg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function sg(a){a.s||(a.s=!0,pf(a.H,a))}
function pg(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
Lf.prototype.H=function(){for(var a;a=pg(this);)qg(this,a,this.i,this.v);this.s=!1};
function qg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,vg(b,c,d);else try{b.l?b.j.call(b.context):vg(b,c,d)}catch(e){wg.call(null,e)}ef(Of,b)}
function vg(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ug(a,b){a.o=!0;pf(function(){a.o&&wg.call(null,b)})}
var wg=hf;function ng(a){Za.call(this,a)}
Wa(ng,Za);ng.prototype.name="cancel";function J(a){ae.call(this);this.v=1;this.m=[];this.s=0;this.i=[];this.j={};this.H=!!a}
Wa(J,ae);n=J.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.v;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.v=e+3;d.push(e);return e};
function xg(a,b,c){var d=yg;if(a=d.j[a]){var e=d.i;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.na(a)}}
n.na=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.s?(this.m.push(a),this.i[a+1]=function(){}):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.ca=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.H)for(e=0;e<c.length;e++){var g=c[e];zg(this.i[g+1],this.i[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.s--,0<this.m.length&&0==this.s)for(;c=this.m.pop();)this.na(c)}}return 0!=e}return!1};
function zg(a,b,c){pf(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.na,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.ga=function(){J.N.ga.call(this);this.clear();this.m.length=0};function Ag(a){this.i=a}
Ag.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,Jf(b))};
Ag.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ag.prototype.remove=function(a){this.i.remove(a)};function Bg(a){this.i=a}
Wa(Bg,Ag);function Cg(a){this.data=a}
function Dg(a){return void 0===a||a instanceof Cg?a:new Cg(a)}
Bg.prototype.set=function(a,b){Bg.N.set.call(this,a,Dg(b))};
Bg.prototype.j=function(a){a=Bg.N.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Bg.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Eg(a){this.i=a}
Wa(Eg,Bg);Eg.prototype.set=function(a,b,c){if(b=Dg(b)){if(c){if(c<Date.now()){Eg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Eg.N.set.call(this,a,b)};
Eg.prototype.j=function(a){var b=Eg.N.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Eg.prototype.remove.call(this,a);else return b}};function Fg(){}
;function Gg(){}
Wa(Gg,Fg);Gg.prototype[Symbol.iterator]=function(){return Af(this.L(!0)).i()};
Gg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Hg(a){this.i=a}
Wa(Hg,Gg);n=Hg.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.L=function(a){var b=0,c=this.i,d=new xf;d.next=function(){if(b>=c.length)return yf;var e=c.key(b++);if(a)return zf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return zf(e)};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Ig(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Wa(Ig,Hg);function Jg(a,b){this.j=a;this.i=null;var c;if(c=ec)c=!(9<=Number(qc));if(c){Kg||(Kg=new Ef);this.i=Kg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Kg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Wa(Jg,Gg);var Lg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Kg=null;function Mg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Lg[b]})}
n=Jg.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Mg(a),b);Ng(this)};
n.get=function(a){a=this.i.getAttribute(Mg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Mg(a));Ng(this)};
n.L=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new xf;d.next=function(){if(b>=c.length)return yf;var e=c[b++];if(a)return zf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return zf(e)};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ng(this)};
function Ng(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Og(a,b){this.j=a;this.i=b+"::"}
Wa(Og,Gg);Og.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Og.prototype.get=function(a){return this.j.get(this.i+a)};
Og.prototype.remove=function(a){this.j.remove(this.i+a)};
Og.prototype.L=function(a){var b=this.j[Symbol.iterator](),c=this,d=new xf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return zf(a?e.slice(c.i.length):c.j.get(e))};
return d};function Pg(a){I.call(this,a)}
v(Pg,I);Pg.prototype.getKey=function(){return dd(this,1)};
Pg.prototype.T=function(){return dd(this,2===gd(this,Qg)?2:-1)};
Pg.prototype.setValue=function(a){return fd(this,2,Qg,a)};
var Qg=[2,3,4,5,6];function Rg(a){I.call(this,a)}
v(Rg,I);function Sg(a){I.call(this,a)}
v(Sg,I);function Tg(a){I.call(this,a,-1,Ug)}
v(Tg,I);var Ug=[2];function Vg(a){I.call(this,a,-1,Wg)}
v(Vg,I);Vg.prototype.getPlayerType=function(){return dd(this,36)};
Vg.prototype.setHomeGroupInfo=function(a){return H(this,Tg,81,a)};
var Wg=[9,66,24,32,86,100,101];function Xg(a){I.call(this,a,-1,Yg)}
v(Xg,I);var Yg=[15,26,28];function Zg(a){I.call(this,a)}
v(Zg,I);Zg.prototype.setToken=function(a){return F(this,2,a)};function $g(a){I.call(this,a,-1,ah)}
v($g,I);$g.prototype.setSafetyMode=function(a){return F(this,5,a)};
var ah=[12];function bh(a){I.call(this,a,-1,ch)}
v(bh,I);var ch=[12];function dh(a){I.call(this,a,-1,eh)}
v(dh,I);function fh(a){I.call(this,a)}
v(fh,I);fh.prototype.getKey=function(){return md(this,1)};
fh.prototype.T=function(){return md(this,2)};
fh.prototype.setValue=function(a){return F(this,2,a)};
var eh=[4,5];function gh(a){I.call(this,a)}
v(gh,I);function hh(a){I.call(this,a)}
v(hh,I);var ih=[2,3,4];function jh(a){I.call(this,a)}
v(jh,I);function kh(a){I.call(this,a)}
v(kh,I);function lh(a){I.call(this,a)}
v(lh,I);function mh(a){I.call(this,a,-1,nh)}
v(mh,I);var nh=[10,17];function oh(a){I.call(this,a)}
v(oh,I);function ph(a){I.call(this,a)}
v(ph,I);function qh(a){I.call(this,a)}
v(qh,I);function rh(a){I.call(this,a,432)}
v(rh,I);
var sh=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];function th(a){I.call(this,a)}
v(th,I);function uh(a){I.call(this,a)}
v(uh,I);uh.prototype.setVideoId=function(a){return fd(this,1,vh,a)};
uh.prototype.getPlaylistId=function(){return dd(this,2===gd(this,vh)?2:-1)};
var vh=[1,2];function wh(a){I.call(this,a,-1,xh)}
v(wh,I);var xh=[3];var yh=A.window,zh,Ah,Bh=(null==yh?void 0:null==(zh=yh.yt)?void 0:zh.config_)||(null==yh?void 0:null==(Ah=yh.ytcfg)?void 0:Ah.data_)||{};C("yt.config_",Bh);function Ch(){var a=arguments;1<a.length?Bh[a[0]]=a[1]:1===a.length&&Object.assign(Bh,a[0])}
function L(a,b){return a in Bh?Bh[a]:b}
function Dh(){return L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Eh(){var a=Bh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Fh=[];function Gh(a){Fh.forEach(function(b){return b(a)})}
function Hh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ih(b)}}:a}
function Ih(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Ch("ERRORS",e));Gh(a)}
function Jh(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Ch("ERRORS",e))}
;var Kh=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Kh});var Lh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Mh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Lh||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Mh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Mh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Mh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};C("ytEventsEventsListeners",lb);var Nh=A.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Nh);
function Oh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Ph(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Qh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Qh=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Rh(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Oh(a,b,c,d);if(!e){e=++Nh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Mh(h);if(!Ad(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Mh(h);
h.currentTarget=a;return c.call(a,h)};
g=Hh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Qh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function Sh(a,b){"function"===typeof a&&(a=Hh(a));return window.setTimeout(a,b)}
function Th(a){"function"===typeof a&&(a=Hh(a));return window.setInterval(a,250)}
;var Uh=/^[\w.]*$/,Vh={q:!0,search_query:!0};function Wh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Xh(f[0]||""),h=Xh(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],m=String(Wh);k.args=[{key:l,value:f[1],query:a,method:Yh==m?"unchanged":m}];Vh.hasOwnProperty(l)||Jh(k)}}return c}
var Yh=String(Wh);function Zh(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function $h(a){"?"==a.charAt(0)&&(a=a.substr(1));return Wh(a,"&")}
function ai(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=$h(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Tb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function bi(a){if(!b)var b=window.location.href;var c=a.match(Ob)[1]||null,d=Qb(a);c&&d?(a=a.match(Ob),b=b.match(Ob),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Qb(b)==d&&(Number(b.match(Ob)[4]||null)||null)==(Number(a.match(Ob)[4]||null)||null):!0;return a}
function Xh(a){return a&&a.match(Uh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function N(a){a=ci(a);return"string"===typeof a&&"false"===a?!1:!!a}
function di(a,b){a=ci(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ci(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function ei(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function fi(a){var b=gi;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Md;e.flash="0";a:{try{var f=b.i.top.location.href}catch(W){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?wd:g;try{var h=g.history.length}catch(W){h=0}e.u_his=h;var k;e.u_h=null==(k=wd.screen)?void 0:k.height;var l;e.u_w=null==(l=wd.screen)?void 0:l.width;var m;e.u_ah=null==(m=wd.screen)?void 0:m.availHeight;var q;e.u_aw=null==
(q=wd.screen)?void 0:q.availWidth;var r;e.u_cd=null==(r=wd.screen)?void 0:r.colorDepth}catch(W){}h=b.i;try{var p=h.screenX;var y=h.screenY}catch(W){}try{var z=h.outerWidth;var G=h.outerHeight}catch(W){}try{var K=h.innerWidth;var M=h.innerHeight}catch(W){}try{var O=h.screenLeft;var kb=h.screenTop}catch(W){}try{K=h.innerWidth,M=h.innerHeight}catch(W){}try{var vc=h.screen.availWidth;var ta=h.screen.availTop}catch(W){}p=[O,kb,p,y,vc,ta,z,G,K,M];y=b.i.top;try{var na=(y||window).document,X="CSS1Compat"==
na.compatMode?na.documentElement:na.body;var ca=(new yd(X.clientWidth,X.clientHeight)).round()}catch(W){ca=new yd(-12245933,-12245933)}na=ca;ca={};var da=void 0===da?A:da;X=new Me;da.SVGElement&&da.document.createElementNS&&X.set(0);y=Fd();y["allow-top-navigation-by-user-activation"]&&X.set(1);y["allow-popups-to-escape-sandbox"]&&X.set(2);da.crypto&&da.crypto.subtle&&X.set(3);da.TextDecoder&&da.TextEncoder&&X.set(4);da=Ne(X);ca.bc=da;ca.bih=na.height;ca.biw=na.width;ca.brdim=p.join();b=b.j;b=(ca.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ca.wgl=!!wd.WebGLRenderingContext,ca);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var gi=new function(){var a=window.document;this.i=window;this.j=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return Zh(fi(a))});Date.now();var hi="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function ii(){if(!hi)return null;var a=hi();return"open"in a?a:null}
;var ji={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ki="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Qd)),li=!1;
function mi(a,b){b=void 0===b?{}:b;var c=bi(a),d=N("web_ajax_ignore_global_headers_if_set"),e;for(e in ji){var f=L(ji[e]);N("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=L("VISITOR_DATA"));!f||!c&&Qb(a)||d&&void 0!==b[e]||!N("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Qb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Qb(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Qb(a))b["X-YouTube-Ad-Signals"]=Zh(fi());return b}
function ni(a){var b=window.location.search,c=Qb(a);N("debug_handle_relative_url_for_query_forward_killswitch")||c||!bi(a)||(c=document.location.hostname);var d=Pb(a.match(Ob)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=$h(b),f={};D(ki,function(g){e[g]&&(f[g]=e[g])});
return ai(a,f||{},!1)}
function oi(a,b){var c=b.format||"JSON";a=pi(a,b);var d=qi(a,b),e=!1,f=ri(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,q=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||q||r)m=si(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.onFinish&&b.onFinish.call(q,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Sh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function pi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ai(a,b||{},!0);return a}
function qi(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Qb(a)&&!b.withCredentials&&Qb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=$h(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Tb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;
break a}f=!0}a=!f}!li&&a&&"POST"!=b.method&&(li=!0,Ih(Error("AJAX request with postData should use POST")));return e}
function si(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Jh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ti(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=ui(g)})}d&&vi(e);
return e}
function vi(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===vb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(g){A.console&&A.console.error(g.message)}vb=e}else vb=e}d=(e=vb)?e.createHTML(d):d;a[c]=new Nb(d)}else vi(a[b])}}
function ti(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ui(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ri(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Hh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ii();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;N("debug_forward_web_query_parameters")&&(a=ni(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=mi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var wi={Nb:"WEB_DISPLAY_MODE_UNKNOWN",Jb:"WEB_DISPLAY_MODE_BROWSER",Lb:"WEB_DISPLAY_MODE_MINIMAL_UI",Mb:"WEB_DISPLAY_MODE_STANDALONE",Kb:"WEB_DISPLAY_MODE_FULLSCREEN"};function xi(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var yi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},zi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Ai={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Bi={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ci(){var a=A.navigator;return a?a.connection:void 0}
;function Di(){return"INNERTUBE_API_KEY"in Bh&&"INNERTUBE_API_VERSION"in Bh}
function Ei(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),Aa:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Pa:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ob:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ra:L("INNERTUBE_CONTEXT_HL"),Qa:L("INNERTUBE_CONTEXT_GL"),pb:L("INNERTUBE_HOST_OVERRIDE")||"",rb:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),qb:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Fi(a){var b={client:{hl:a.Ra,gl:a.Qa,clientName:a.Pa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Aa}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=L("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ei();0<c.length&&(b.request={internalExperimentFlags:c});Gi(a,void 0,b);Hi(void 0,b);Ii(a,void 0,b);Ji(void 0,b);L("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&
(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries($h(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Ki(a){var b=new bh,c=new Vg;F(c,1,a.Ra);F(c,2,a.Qa);F(c,16,a.ob);F(c,17,a.innertubeContextClientVersion);if(a.Aa){var d=a.Aa,e=new Rg;d.coldConfigData&&F(e,1,d.coldConfigData);d.appInstallData&&F(e,6,d.appInstallData);d.coldHashData&&F(e,3,d.coldHashData);d.hotHashData&&F(e,5,d.hotHashData);H(c,Rg,62,e)}(d=A.devicePixelRatio)&&1!=d&&F(c,65,d);d=L("EXPERIMENTS_TOKEN","");""!==d&&F(c,54,d);d=ei();if(0<d.length){e=new Xg;for(var f=0;f<d.length;f++){var g=new Pg;F(g,1,d[f].key);g.setValue(d[f].value);
ld(e,15,Pg,g)}H(b,Xg,5,e)}Gi(a,c);Hi(c);Ii(a,c);Ji(c);L("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&(a=new $g,F(a,3,L("DELEGATED_SESSION_ID")));a=u(Object.entries($h(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?F(c,12,e):"cmodel"===d?F(c,13,e):"cbr"===d?F(c,87,e):"cbrver"===d?F(c,88,e):"cos"===d?F(c,18,e):"cosver"===d?F(c,19,e):"cplatform"===d&&F(c,42,e);H(b,Vg,1,c);return b}
function Gi(a,b,c){a=a.Pa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=hd(b,Sg,96)||new Sg;var d=xi();d=Object.keys(wi).indexOf(d);d=-1===d?null:d;null!==d&&F(c,3,d);H(b,Sg,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=xi())}
function Hi(a,b){var c;if(N("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?F(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Ii(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=hd(b,Rg,62))?d:new Rg;F(c,6,a.appInstallData);H(b,Rg,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ji(a,b){a:{var c=Ci();if(c){var d=yi[c.type||"unknown"]||"CONN_UNKNOWN";c=yi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?F(a,61,zi[d]):b&&(b.client.connectionType=d));N("web_log_effective_connection_type")&&(d=Ci(),d=null!=d&&d.effectiveType?Bi.hasOwnProperty(d.effectiveType)?Bi[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?F(a,94,Ai[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Li(a,b,c){c=void 0===c?{}:c;var d={};N("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Pb||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Ob:b=$d([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),N("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Mi(a){a=Object.assign({},a);delete a.Authorization;var b=$d();if(b){var c=new vf;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=xc(c.digest(),3)}return a}
;function Ni(a){var b=new Ig;(b=b.isAvailable()?a?new Og(b,a):b:null)||(a=new Jg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Eg(a):null;this.j=document.domain||window.location.hostname}
Ni.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Jf(b))}catch(f){return}else e=escape(b);b=this.j;Xd.set(""+a,e,{Ba:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Ni.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=Xd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ni.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;Xd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Oi=window,P=Oi.ytcsi&&Oi.ytcsi.now?Oi.ytcsi.now:Oi.performance&&Oi.performance.timing&&Oi.performance.now&&Oi.performance.timing.navigationStart?function(){return Oi.performance.timing.navigationStart+Oi.performance.now()}:function(){return(new Date).getTime()};var Pi;function Qi(){Pi||(Pi=new Ni("yt.innertube"));return Pi}
function Ri(a,b,c,d){if(d)return null;d=Qi().get("nextId",!0)||1;var e=Qi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Mi(c),requestTime:Math.round(P())};Qi().set("nextId",d+1,86400,!0);Qi().set("requests",e,86400,!0);return d}
function Si(a){var b=Qi().get("requests",!0)||{};delete b[a];Qi().set("requests",b,86400,!0)}
function Ti(a){var b=Qi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Mi(Li(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Ui(a,d.method,e,{}));delete b[c]}}Qi().set("requests",b,86400,!0)}}
;function Vi(){}
Vi.prototype.O=function(a,b){return Wi(a,1,b)};
function Xi(a,b){Wi(a,2,b)}
;function Yi(){Vi.apply(this,arguments)}
v(Yi,Vi);function Zi(){Yi.i||(Yi.i=new Yi);return Yi.i}
function Wi(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Sh(a,c||0)}
Yi.prototype.Z=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Yi.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};var Le=Zi();var $i=rc||sc;var aj=function(){var a;return function(){a||(a=new Ni("ytidb"));return a}}();
function bj(){var a;return null==(a=aj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var cj=[],dj=!1;function ej(a){dj||(cj.push({type:"ERROR",payload:a}),10<cj.length&&cj.shift())}
function fj(a,b){dj||(cj.push({type:"EVENT",eventType:a,payload:b}),10<cj.length&&cj.shift())}
;function gj(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(gj,Error);function hj(){try{return ij(),!0}catch(a){return!1}}
function ij(){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new gj("Datasync ID not set","unknown");}
;function jj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function kj(a){return a.substr(0,a.indexOf(":"))||a}
;var lj={},mj=(lj.AUTH_INVALID="No user identifier specified.",lj.EXPLICIT_ABORT="Transaction was explicitly aborted.",lj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",lj.MISSING_INDEX="Index not created.",lj.MISSING_OBJECT_STORES="Object stores not created.",lj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",lj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",lj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
lj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",lj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",lj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",lj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",lj),nj={},oj=(nj.AUTH_INVALID="ERROR",nj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",nj.EXPLICIT_ABORT="IGNORED",nj.IDB_NOT_SUPPORTED="ERROR",nj.MISSING_INDEX=
"WARNING",nj.MISSING_OBJECT_STORES="ERROR",nj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",nj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",nj.QUOTA_EXCEEDED="WARNING",nj.QUOTA_MAYBE_EXCEEDED="WARNING",nj.UNKNOWN_ABORT="WARNING",nj.INCOMPATIBLE_DB_VERSION="WARNING",nj),pj={},qj=(pj.AUTH_INVALID=!1,pj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,pj.EXPLICIT_ABORT=!1,pj.IDB_NOT_SUPPORTED=!1,pj.MISSING_INDEX=!1,pj.MISSING_OBJECT_STORES=!1,pj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,pj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,pj.QUOTA_EXCEEDED=!1,pj.QUOTA_MAYBE_EXCEEDED=!0,pj.UNKNOWN_ABORT=!0,pj.INCOMPATIBLE_DB_VERSION=!1,pj);function R(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?mj[a]:c;d=void 0===d?oj[a]:d;e=void 0===e?qj[a]:e;gj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,R.prototype)}
v(R,gj);function rj(a,b){R.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},mj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,rj.prototype)}
v(rj,R);function sj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,sj.prototype)}
v(sj,Error);var tj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function uj(a,b,c,d){b=kj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof R)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new R("QUOTA_EXCEEDED",a);if(tc&&"UnknownError"===e.name)return new R("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof sj)return new R("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&tj.some(function(f){return e.message.includes(f)}))return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new R("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Tb:e.name})];e.level="WARNING";return e}
function vj(a,b,c){var d=bj();return new R("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function wj(a){if(!a)throw Error();throw a;}
function xj(a){return a}
function yj(a){this.i=a}
function T(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
T.all=function(a){return new T(new yj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Y:0};f.Y<a.length;f={Y:f.Y},++f.Y)zj(T.resolve(a[f.Y]).then(function(g){return function(h){d[g.Y]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
T.resolve=function(a){return new T(new yj(function(b,c){a instanceof T?a.then(b,c):b(a)}))};
T.reject=function(a){return new T(new yj(function(b,c){c(a)}))};
T.prototype.then=function(a,b){var c=this,d=null!=a?a:xj,e=null!=b?b:wj;return new T(new yj(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Aj(c,c,d,f,g)}),c.onRejected.push(function(){Bj(c,c,e,f,g)})):"FULFILLED"===c.state.status?Aj(c,c,d,f,g):"REJECTED"===c.state.status&&Bj(c,c,e,f,g)}))};
function zj(a,b){a.then(void 0,b)}
function Aj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof T?Cj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Bj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof T?Cj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Cj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof T?Cj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Dj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ej(a){return new Promise(function(b,c){Dj(a,b,c)})}
function U(a){return new T(new yj(function(b,c){Dj(a,b,c)}))}
;function Fj(a,b){return new T(new yj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Gj(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
n=Gj.prototype;n.add=function(a,b,c){return Hj(this,[a],{mode:"readwrite",I:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Hj(this,[a],{mode:"readwrite",I:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return Hj(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).count(b)})};
function Ij(a,b,c){a=a.i.createObjectStore(b,c);return new xk(a)}
n.delete=function(a,b){return Hj(this,[a],{mode:"readwrite",I:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Hj(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).get(b)})};
function yk(a,b){return Hj(a,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(c){c=c.objectStore("LogsRequestsStore");return U(c.i.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Hj(a,b,c,d){var e,f,g,h,k,l,m,q,r,p,y,z;return x(function(G){switch(G.i){case 1:var K={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.I?3:1;g=0;case 2:if(h){G.u(3);break}g++;k=Math.round(P());xa(G,4);l=a.i.transaction(b,e.mode);K=new zk(l);K=Ak(K,d);return w(G,K,6);case 6:return m=G.j,q=Math.round(P()),Bk(a,k,q,g,void 0,b.join(),e),G.return(m);case 4:r=za(G);p=Math.round(P());y=uj(r,a.i.name,b.join(),a.i.version);
if((z=y instanceof R&&!y.i)||g>=f)Bk(a,k,p,g,y,b.join(),e),h=y;G.u(2);break;case 3:return G.return(Promise.reject(h))}})}
function Bk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof R&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&fj("QUOTA_EXCEEDED",{dbName:kj(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof R&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),fj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Ck(a,!1,d,f,b,g.tag),ej(e)):Ck(a,!0,d,f,b,g.tag)}
function Ck(a,b,c,d,e,f){fj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.i.name};
function xk(a){this.i=a}
n=xk.prototype;n.add=function(a,b){return U(this.i.add(a,b))};
n.autoIncrement=function(){return this.i.autoIncrement};
n.clear=function(){return U(this.i.clear()).then(function(){})};
n.count=function(a){return U(this.i.count(a))};
function Dk(a,b){return Ek(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Dk(this,a):U(this.i.delete(a))};
n.get=function(a){return U(this.i.get(a))};
n.index=function(a){try{return new Fk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new sj(a,this.i.name);throw b;}};
n.getName=function(){return this.i.name};
n.keyPath=function(){return this.i.keyPath};
function Ek(a,b,c){a=a.i.openCursor(b.query,b.direction);return Gk(a).then(function(d){return Fj(d,c)})}
function zk(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=R;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Ak(a,b){var c=new Promise(function(d,e){try{zj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
zk.prototype.abort=function(){this.i.abort();this.j=!0;throw new R("EXPLICIT_ABORT");};
zk.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new xk(a),this.l.set(a,b));return b};
function Fk(a){this.i=a}
n=Fk.prototype;n.count=function(a){return U(this.i.count(a))};
n.delete=function(a){return Hk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return U(this.i.get(a))};
n.getKey=function(a){return U(this.i.getKey(a))};
n.keyPath=function(){return this.i.keyPath};
n.unique=function(){return this.i.unique};
function Hk(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Gk(a).then(function(d){return Fj(d,c)})}
function Ik(a,b){this.request=a;this.cursor=b}
function Gk(a){return U(a).then(function(b){return b?new Ik(a,b):null})}
n=Ik.prototype;n.advance=function(a){this.cursor.advance(a);return Gk(this.request)};
n.continue=function(a){this.cursor.continue(a);return Gk(this.request)};
n.delete=function(){return U(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.T=function(){return this.cursor.value};
n.update=function(a){return U(this.cursor.update(a))};function Jk(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Gj(g.result,{closed:q}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.wb,m=c.upgrade,q=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&fj("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:kj(a)});var y=f(),z=new zk(g.transaction);
m&&m(y,function(G){return p.oldVersion<G&&p.newVersion>=G},z);
z.done.catch(function(G){e(G)})}catch(G){e(G)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){fj("IDB_UNEXPECTEDLY_CLOSED",{dbName:kj(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Kk(a,b,c){c=void 0===c?{}:c;return Jk(a,b,c)}
function Lk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,Ej(c),4);
if(2!=g.i)return ya(g,0);f=za(g);throw uj(f,a,"",-1);})}
;function Mk(a){return new Promise(function(b){Xi(function(){b()},a)})}
function Nk(a,b){this.name=a;this.options=b;this.m=!0;this.s=this.o=0;this.j=500}
Nk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Kk(a,b,c)};
Nk.prototype.delete=function(a){a=void 0===a?{}:a;return Lk(this.name,a)};
function Ok(a,b){return new R("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Pk(a,b){if(!b)throw vj("openWithToken",kj(a.name));return Qk(a)}
function Qk(a){function b(){var f,g,h,k,l,m,q,r,p,y;return x(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",xa(z,2),w(z,a.l(a.name,a.options.version,d),4);case 4:h=z.j;for(var G=a.options,K=[],M=u(Object.keys(G.ia)),O=M.next();!O.done;O=M.next()){O=O.value;var kb=G.ia[O],vc=void 0===kb.ub?Number.MAX_VALUE:kb.ub;!(h.i.version>=kb.ya)||h.i.version>=vc||h.i.objectStoreNames.contains(O)||K.push(O)}k=K;if(0===k.length){z.u(5);break}l=Object.keys(a.options.ia);m=h.objectStoreNames();
if(a.s<di("ytidb_reopen_db_retries",0))return a.s++,h.close(),ej(new R("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.o<di("ytidb_remake_db_retries",1))){z.u(6);break}a.o++;if(!N("ytidb_remake_db_enable_backoff_delay")){z.u(7);break}return w(z,Mk(a.j),8);case 8:a.j*=2;case 7:return w(z,a.delete(),9);case 9:return ej(new R("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new rj(m,l);case 5:return z.return(h);case 2:q=za(z);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){z.u(10);break}return w(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:r=z.j;p=r.i.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),
a.m=!1,Ok(a,p);return z.return(r);case 10:throw c(),q instanceof Error&&!N("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),uj(q,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw Ok(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,wb:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Rk=new Nk("YtIdbMeta",{ia:{databases:{ya:1}},upgrade:function(a,b){b(1)&&Ij(a,"databases",{keyPath:"actualName"})}});
function Sk(a,b){var c;return x(function(d){if(1==d.i)return w(d,Pk(Rk,b),2);c=d.j;return d.return(Hj(c,["databases"],{I:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return U(f.i.put(a,void 0)).then(function(){})})}))})}
function Tk(a,b){var c;return x(function(d){if(1==d.i)return a?w(d,Pk(Rk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function Uk(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],w(e,Pk(Rk,b),2)):3!=e.i?(d=e.j,w(e,Hj(d,["databases"],{I:!0,mode:"readonly"},function(f){c.length=0;return Ek(f.objectStore("databases"),{},function(g){a(g.T())&&c.push(g.T());return g.continue()})}),3)):e.return(c)})}
function Vk(a){return Uk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Wk,Xk=new function(){}(new function(){});
function Yk(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=bj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=$i)f=/WebKit\/([0-9]+)/.exec(Kb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Kb()),f=!(f&&602<=parseInt(f[1],10)));if(f||fc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Sk(d,Xk),4);case 4:return w(e,Tk("yt-idb-test-do-not-use",Xk),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Zk(){if(void 0!==Wk)return Wk;dj=!0;return Wk=Yk().then(function(a){dj=!1;var b;if(null!=(b=aj())&&b.i){var c;b={hasSucceededOnce:(null==(c=bj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=aj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function $k(){return B("ytglobal.idbToken_")||void 0}
function al(){var a=$k();return a?Promise.resolve(a):Zk().then(function(b){(b=b?Xk:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new Kf;function bl(a){if(!hj())throw a=new R("AUTH_INVALID",{dbName:a}),ej(a),a;var b=ij();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function cl(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.i){case 1:return f=null!=(e=Error().stack)?e:"",w(m,al(),2);case 2:g=m.j;if(!g)throw h=vj("openDbImpl",a,b),N("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ej(h),h;jj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:bl(a);xa(m,3);return w(m,Sk(k,g),5);case 5:return w(m,Kk(k.actualName,b,d),6);case 6:return m.return(m.j);case 3:return l=za(m),xa(m,7),w(m,Tk(k.actualName,g),9);case 9:ya(m,
8);break;case 7:za(m);case 8:throw l;}})}
function dl(a,b,c){c=void 0===c?{}:c;return cl(a,b,!1,c)}
function el(a,b,c){c=void 0===c?{}:c;return cl(a,b,!0,c)}
function fl(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return w(e,al(),2);if(3!=e.i){c=e.j;if(!c)return e.return();jj(a);d=bl(a);return w(e,Lk(d.actualName,b),3)}return w(e,Tk(d.actualName,c),0)})}
function gl(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?w(e,Lk(d.actualName,b),2):w(e,Tk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function hl(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return w(d,al(),2);if(3!=d.i){b=d.j;if(!b)return d.return();jj("LogsDatabaseV2");return w(d,Vk(b),3)}c=d.j;return w(d,gl(c,a,b),0)})}
function il(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return w(d,al(),2);if(3!=d.i){c=d.j;if(!c)return d.return();jj(a);return w(d,Lk(a,b),3)}return w(d,Tk(a,c),0)})}
;function jl(a){this.oa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ba=function(){};
this.now=Date.now;this.fa=!1;var b;this.Za=null!=(b=a.Za)?b:100;var c;this.Ya=null!=(c=a.Ya)?c:1;var d;this.Wa=null!=(d=a.Wa)?d:2592E6;var e;this.Va=null!=(e=a.Va)?e:12E4;var f;this.Xa=null!=(f=a.Xa)?f:5E3;var g;this.A=null!=(g=a.A)?g:void 0;this.sa=!!a.sa;var h;this.ra=null!=(h=a.ra)?h:.1;var k;this.wa=null!=(k=a.wa)?k:10;a.handleError&&(this.handleError=a.handleError);a.ba&&(this.ba=a.ba);a.fa&&(this.fa=a.fa);a.oa&&(this.oa=a.oa);this.B=a.B;this.K=a.K;this.D=a.D;this.G=a.G;this.R=a.R;this.Ea=a.Ea;
this.Da=a.Da;kl(this)&&(!this.B||this.B("networkless_logging"))&&ll(this)}
function ll(a){kl(a)&&!a.fa&&(a.i=!0,a.sa&&Math.random()<=a.ra&&a.D.ib(a.A),ml(a),a.G.F()&&a.ma(),a.G.X(a.Ea,a.ma.bind(a)),a.G.X(a.Da,a.Ka.bind(a)))}
n=jl.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(kl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D.set(d,this.A).then(function(e){d.id=e;c.G.F()&&nl(c,d)}).catch(function(e){nl(c,d);
ol(c,e)})}else this.R(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(kl(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.B&&this.B("nwl_skip_retry")&&(e.skipRetry=c);if(this.G.F()||this.B&&this.B("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return w(k,d.D.set(e,d.A).catch(function(l){ol(d,l)}),2);
f(g,h);k.i=0})}}this.R(a,b,e.skipRetry)}else this.D.set(e,this.A).catch(function(g){d.R(a,b,e.skipRetry);
ol(d,g)})}else this.R(a,b,this.B&&this.B("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(kl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.D.aa(d.id,c.A):e=!0;c.G.P&&c.B&&c.B("vss_network_hint")&&c.G.P(!0);f(g,h)};
this.R(d.url,d.options);this.D.set(d,this.A).then(function(g){d.id=g;e&&c.D.aa(d.id,c.A)}).catch(function(g){ol(c,g)})}else this.R(a,b)};
n.ma=function(){var a=this;if(!kl(this))throw vj("throttleSend");this.j||(this.j=this.K.O(function(){var b;return x(function(c){if(1==c.i)return w(c,a.D.Oa("NEW",a.A),2);if(3!=c.i)return b=c.j,b?w(c,nl(a,b),3):(a.Ka(),c.return());a.j&&(a.j=0,a.ma());c.i=0})},this.Za))};
n.Ka=function(){this.K.Z(this.j);this.j=0};
function nl(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!kl(a))throw c=vj("immediateSend"),c;if(void 0===b.id){e.u(2);break}return w(e,a.D.tb(b.id,a.A),3);case 3:(d=e.j)?b=d:a.ba(Error("The request cannot be found in the database."));case 2:if(pl(a,b,a.Wa)){e.u(4);break}a.ba(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return w(e,a.D.aa(b.id,a.A),5);case 5:return e.return();case 4:b.skipRetry||(b=ql(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return w(e,a.D.aa(b.id,a.A),8);case 8:a.R(b.url,b.options,!!b.skipRetry),e.i=0}})}
function ql(a,b){if(!kl(a))throw vj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:g=rl(f);if(!(a.B&&a.B("nwl_consider_error_code")&&g||a.B&&!a.B("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.wa)){l.u(2);break}if(!a.G.ka){l.u(3);break}return w(l,a.G.ka(),3);case 3:if(a.G.F()){l.u(2);break}c(e,f);if(!a.B||!a.B("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.u(6);break}return w(l,a.D.Fa(b.id,a.A,!1),6);case 6:return l.return();case 2:if(a.B&&a.B("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.wa)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.u(8);break}return b.sendCount<a.Ya?w(l,a.D.Fa(b.id,a.A),12):w(l,a.D.aa(b.id,a.A),8);case 12:a.K.O(function(){a.G.F()&&a.ma()},a.Xa);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):w(h,a.D.aa(b.id,a.A),2);a.G.P&&a.B&&a.B("vss_network_hint")&&a.G.P(!0);d(e,f);h.i=0})};
return b}
function pl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ml(a){if(!kl(a))throw vj("retryQueuedRequests");a.D.Oa("QUEUED",a.A).then(function(b){b&&!pl(a,b,a.Va)?a.K.O(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.u(2):w(c,a.D.Fa(b.id,a.A),2);ml(a);c.i=0})}):a.G.F()&&a.ma()})}
function ol(a,b){a.ab&&!a.G.F()?a.ab(b):a.handleError(b)}
function kl(a){return!!a.A||a.oa}
function rl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var sl=B("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.na;J.prototype.publish=J.prototype.ca;J.prototype.clear=J.prototype.clear;C("ytPubsub2Pubsub2Instance",sl);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function tl(a,b){Nk.call(this,a,b);this.options=b;jj(a)}
v(tl,Nk);function ul(a,b){var c;return function(){c||(c=new tl(a,b));return c}}
tl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ga?el:dl)(a,b,Object.assign({},c))};
tl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ga?il:fl)(this.name,a)};
function vl(a,b){return ul(a,b)}
;var wl;
function xl(){if(wl)return wl();var a={};wl=vl("LogsDatabaseV2",{ia:(a.LogsRequestsStore={ya:2},a),Ga:!1,upgrade:function(b,c,d){c(2)&&Ij(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return wl()}
;function yl(a){return Pk(xl(),a)}
function zl(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,yl(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,yk(d,e),3);f=g.j;c.xb=P();Al(c);return g.return(f)})}
function Bl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,yl(b),2);if(3!=l.i)return d=l.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Hj(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(m){return Hk(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.T()&&(k=q.T(),"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),
3);
c.xb=P();Al(c);return l.return(k)})}
function Cl(a,b){var c;return x(function(d){if(1==d.i)return w(d,yl(b),2);c=d.j;return d.return(Hj(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",U(f.i.put(g,void 0)).then(function(){return g})})}))})}
function Dl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return w(e,yl(b),2);d=e.j;return e.return(Hj(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),U(g.i.put(h,void 0)).then(function(){return h})):T.resolve(void 0)})}))})}
function El(a,b){var c;return x(function(d){if(1==d.i)return w(d,yl(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Fl(a){var b,c;return x(function(d){if(1==d.i)return w(d,yl(a),2);b=d.j;c=P()-2592E6;return w(d,Hj(b,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){return Ek(e.objectStore("LogsRequestsStore"),{},function(f){if(f.T().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Gl(){x(function(a){return w(a,hl(),0)})}
function Al(a){if(!N("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Hl={},Il=vl("ServiceWorkerLogsDatabase",{ia:(Hl.SWHealthLog={ya:1},Hl),Ga:!0,upgrade:function(a,b){b(1)&&Ij(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Jl(a){return Pk(Il(),a)}
function Kl(a){var b,c;x(function(d){if(1==d.i)return w(d,Jl(a),2);b=d.j;c=P()-2592E6;return w(d,Hj(b,["SWHealthLog"],{mode:"readwrite",I:!0},function(e){return Ek(e.objectStore("SWHealthLog"),{},function(f){if(f.T().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ll(a){var b;return x(function(c){if(1==c.i)return w(c,Jl(a),2);b=c.j;return w(c,b.clear("SWHealthLog"),0)})}
;var Ml={},Nl=0;
function Ol(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)ri(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ri(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new $a({url:a});if(d.l&&d.j||d.m){var e=Pb(a.match(Ob)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==Zb(a,"ri"));break b}}catch(h){}f=!1}if(f){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var g=!0;break b}}catch(h){}g=!1}b=g?!0:!1}else b=!1;b||Pl(a)}}
function Pl(a){var b=new Image,c=""+Nl++;Ml[c]=b;b.onload=b.onerror=function(){delete Ml[c]};
b.src=a}
;function V(){this.i=new Map;this.j=!1}
function Ql(){if(!V.i){var a=B("yt.networkRequestMonitor.instance")||new V;C("yt.networkRequestMonitor.instance",a);V.i=a}return V.i}
V.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
V.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
V.prototype.removeParams=function(a){return a.split("?")[0]};
V.prototype.removeParams=V.prototype.removeParams;V.prototype.isEndpointCFR=V.prototype.isEndpointCFR;V.prototype.requestComplete=V.prototype.requestComplete;V.getInstance=Ql;var Rl;function Sl(){Rl||(Rl=new Ni("yt.offline"));return Rl}
function Tl(a){if(N("offline_error_handling")){var b=Sl().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Sl().set("errors",b,2592E3,!0)}}
;function Y(){Ee.call(this);var a=this;this.m=!1;this.j=Ke();this.j.X("networkstatus-online",function(){if(a.m&&N("offline_error_handling")){var b=Sl().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new gj(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Ih(d)}Sl().set("errors",{},2592E3,!0)}}})}
v(Y,Ee);function Ul(){if(!Y.i){var a=B("yt.networkStatusManager.instance")||new Y;C("yt.networkStatusManager.instance",a);Y.i=a}return Y.i}
n=Y.prototype;n.F=function(){return this.j.F()};
n.P=function(a){this.j.j=a};
n.nb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.kb=function(){this.m=!0};
n.X=function(a,b){return this.j.X(a,b)};
n.ka=function(a){a=Ie(this.j,a);a.then(function(b){N("use_cfr_monitor")&&Ql().requestComplete("generate_204",b)});
return a};
Y.prototype.sendNetworkCheckRequest=Y.prototype.ka;Y.prototype.listen=Y.prototype.X;Y.prototype.enableErrorFlushing=Y.prototype.kb;Y.prototype.getWindowStatus=Y.prototype.nb;Y.prototype.networkStatusHint=Y.prototype.P;Y.prototype.isNetworkAvailable=Y.prototype.F;Y.getInstance=Ul;function Vl(a){a=void 0===a?{}:a;Ee.call(this);var b=this;this.j=this.v=0;this.m=Ul();var c=B("yt.networkStatusManager.instance.listen").bind(this.m);c&&(a.xa?(this.xa=a.xa,c("networkstatus-online",function(){Wl(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Wl(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Fe(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Fe(b,"publicytnetworkstatus-offline")})))}
v(Vl,Ee);Vl.prototype.F=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.m)():!0};
Vl.prototype.P=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.m);b&&b(a)};
Vl.prototype.ka=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.m);return N("skip_network_check_if_cfr")&&Ql().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.P((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.F())})):c?d.return(c(a)):d.return(!0)})};
function Wl(a,b){a.xa?a.j?(Le.Z(a.v),a.v=Le.O(function(){a.s!==b&&(Fe(a,b),a.s=b,a.j=P())},a.xa-(P()-a.j))):(Fe(a,b),a.s=b,a.j=P()):Fe(a,b)}
;var Xl;function Yl(){jl.call(this,{D:{ib:Fl,aa:El,Oa:Bl,tb:Cl,Fa:Dl,set:zl},G:Zl(),handleError:Ih,ba:Jh,R:$l,now:P,ab:Tl,K:Zi(),Ea:"publicytnetworkstatus-online",Da:"publicytnetworkstatus-offline",sa:!0,ra:.1,wa:di("potential_esf_error_limit",10),B:N,fa:!(hj()&&"www.youtube-nocookie.com"!==Qb(document.location.toString()))});this.l=new Kf;N("networkless_immediately_drop_all_requests")&&Gl();il("LogsDatabaseV2")}
v(Yl,jl);function am(){var a=B("yt.networklessRequestController.instance");a||(a=new Yl,C("yt.networklessRequestController.instance",a),N("networkless_logging")&&al().then(function(b){a.A=b;ll(a);a.l.resolve();a.sa&&Math.random()<=a.ra&&a.A&&Kl(a.A);N("networkless_immediately_drop_sw_health_store")&&bm(a)}));
return a}
Yl.prototype.writeThenSend=function(a,b){b||(b={});hj()||(this.i=!1);jl.prototype.writeThenSend.call(this,a,b)};
Yl.prototype.sendThenWrite=function(a,b,c){b||(b={});hj()||(this.i=!1);jl.prototype.sendThenWrite.call(this,a,b,c)};
Yl.prototype.sendAndWrite=function(a,b){b||(b={});hj()||(this.i=!1);jl.prototype.sendAndWrite.call(this,a,b)};
Yl.prototype.awaitInitialization=function(){return this.l.promise};
function bm(a){var b;x(function(c){if(!a.A)throw b=vj("clearSWHealthLogsDb"),b;return c.return(Ll(a.A).catch(function(d){a.handleError(d)}))})}
function $l(a,b,c){N("use_cfr_monitor")&&cm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?Ol(a):oi(a,b)}
function Zl(){Xl||(Xl=new Vl({sb:!0,lb:!0}));return Xl}
function cm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ql().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ql().requestComplete(a,!0);d(e,f)}}
;var dm=0,em=0,fm,gm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:em};C("ytNetworklessLoggingInitializationOptions",gm);function hm(a,b){function c(d){var e=im().F();if(!jm()||!d||e&&N("vss_networkless_bypass_write"))km(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};zl(f,d).then(function(g){f.id=g;im().F()&&lm(f)}).catch(function(g){lm(f);
im().F()?Ih(g):Tl(g)})}}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?al().then(function(d){c(d)}):c($k())}
function mm(a,b){function c(d){if(jm()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){N("use_cfr_monitor")&&Ql().requestComplete(e.url,!0);void 0!==e.id?El(e.id,d):f=!0;N("vss_network_hint")&&im().P(!0);g(k,l)};
if(N("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Ql().requestComplete(e.url,!1);h(k,l)}}km(e.url,e.options);
zl(e,d).then(function(k){e.id=k;f&&El(e.id,d)}).catch(function(k){im().F()?Ih(k):Tl(k)})}else km(a,b)}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?al().then(function(d){c(d)}):c($k())}
function nm(){var a=$k();if(!a)throw vj("throttleSend");dm||(dm=Le.O(function(){var b;return x(function(c){if(1==c.i)return w(c,Bl("NEW",a),2);if(3!=c.i)return b=c.j,b?w(c,lm(b),3):(Le.Z(dm),dm=0,c.return());dm&&(dm=0,nm());c.i=0})},100))}
function lm(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=$k();if(!b)throw c=vj("immediateSend"),c;if(void 0===a.id){e.u(2);break}return w(e,Cl(a.id,b),3);case 3:(d=e.j)?a=d:Jh(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=P()-f)){e.u(4);break}Jh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return w(e,El(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=om(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return w(e,El(a.id,b),8);case 8:km(a.url,a.options,!!a.skipRetry),e.i=0}})}
function om(a){var b=$k();if(!b)throw vj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:N("use_cfr_monitor")&&Ql().requestComplete(a.url,!1);g=rl(f);if(!(N("nwl_consider_error_code")&&g||!N("nwl_consider_error_code")&&pm()<=di("potential_esf_error_limit",10))){l.u(2);break}if(N("skip_checking_network_on_cfr_failure")&&(!N("skip_checking_network_on_cfr_failure")||Ql().isEndpointCFR(a.url))){l.u(3);break}return w(l,im().ka(),3);case 3:if(im().F()){l.u(2);break}c(e,f);if(!N("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.u(6);break}return w(l,Dl(a.id,b,!1),6);case 6:return l.return();case 2:if(N("nwl_consider_error_code")&&!g&&pm()>di("potential_esf_error_limit",10))return l.return();B("ytNetworklessLoggingInitializationOptions")&&gm.potentialEsfErrorCounter++;em++;if(void 0===(null==(k=a)?void 0:k.id)){l.u(8);break}return 1>a.sendCount?w(l,Dl(a.id,b),12):w(l,El(a.id,b),8);case 12:Le.O(function(){im().F()&&nm()},5E3);
case 8:c(e,f),l.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return N("use_cfr_monitor")&&Ql().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):w(h,El(a.id,b),2);N("vss_network_hint")&&im().P(!0);d(e,f);h.i=0})};
return a}
function im(){if(N("use_new_nwl"))return Zl();fm||(fm=new Vl({sb:!0,lb:!0}));return fm}
function km(a,b,c){c&&0===Object.keys(b).length?Ol(a):oi(a,b)}
function jm(){return B("ytNetworklessLoggingInitializationOptions")?gm.isNwlInitialized:!1}
function pm(){return B("ytNetworklessLoggingInitializationOptions")?gm.potentialEsfErrorCounter:em}
;function qm(a){var b=this;this.config_=null;a?this.config_=a:Di()&&(this.config_=Ei());Wi(function(){Ti(b)},0,5E3)}
qm.prototype.isReady=function(){!this.config_&&Di()&&(this.config_=Ei());return!!this.config_};
function Ui(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||N("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Ri(b,c,l,k)),z)){var G=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,O){Si(z);G(M,O)};
c.onFetchSuccess=function(M,O){Si(z);K(M,O)}}try{y&&d.retry&&!d.Ta.bypassNetworkless?(g.method="POST",d.Ta.writeThenSend?N("use_new_nwl_wts")?am().writeThenSend(p,g):hm(p,g):N("use_new_nwl_saw")?am().sendAndWrite(p,g):mm(p,g)):(g.method="POST",g.postParams||(g.postParams={}),oi(p,g))}catch(M){if("InvalidAccessError"==M.name)z&&(Si(z),z=0),Jh(Error("An extension is blocking network request."));
else throw M;}z&&Wi(function(){Ti(a)},0,5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Jh(new gj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new gj("innertube xhrclient not ready",b,c,d);Ih(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.pb)&&(h=f);var k=a.config_.rb||!1,l=Li(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},r=a.config_.qb&&f;r=r&&f.startsWith("Bearer");r||(q.key=a.config_.innertubeApiKey);var p=ai(""+h+m,q||{},!0);N("use_new_nwl")&&am().i||!N("use_new_nwl")&&
jm()?Zk().then(function(y){e(y)}):e(!1)}
;function rm(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var sm=A.ytPubsubPubsubInstance||new J,tm=A.ytPubsubPubsubSubscribedKeys||{},um=A.ytPubsubPubsubTopicToKeys||{},vm=A.ytPubsubPubsubIsSynchronous||{};J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.na;J.prototype.publish=J.prototype.ca;J.prototype.clear=J.prototype.clear;C("ytPubsubPubsubInstance",sm);C("ytPubsubPubsubTopicToKeys",um);C("ytPubsubPubsubIsSynchronous",vm);C("ytPubsubPubsubSubscribedKeys",tm);var wm=A.window;wm.ytExports||(wm.ytExports={logging:{transport:{leaderQueueLength:0,leaderChosen:!1}}});var xm=di("initial_gel_batch_timeout",2E3),ym=Math.pow(2,16)-1,zm=!1,Am=void 0;function Bm(){this.l=this.i=this.j=0}
var Cm=new Bm,Dm=new Bm,Em=!0,Fm=A.ytLoggingTransportGELQueue_||new Map;C("ytLoggingTransportGELQueue_",Fm);var Gm=new Map,Hm=A.ytLoggingTransportGELProtoQueue_||new Map;C("ytLoggingTransportGELProtoQueue_",Hm);var Im=A.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Im);var Jm=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",Jm);
function Km(){N("jspb_with_transport_leader")&&!wm.ytExports.logging.transport.leaderChosen&&(zm=wm.ytExports.logging.transport.leaderChosen=!0,document.addEventListener("FLUSH_REQUEST",function(){Lm(void 0,void 0,!0)}))}
function Mm(a,b){Km();if("log_event"===a.endpoint){Nm(a);var c=Om(a),d=Fm.get(c)||[];Fm.set(c,d);d.push(a.payload);Pm(b,d,c)}}
function Qm(a,b){Km();if("log_event"===a.endpoint){Nm(void 0,a);var c=Om(a,!0);if(N("jspb_with_transport_leader")&&zm){var d=Gm.get(c)||[];Gm.set(c,d);wm.ytExports.logging.transport.leaderQueueLength++;d.push(a.payload);Pm(b,d,c,!0)}else d=Hm.get(c)||[],Hm.set(c,d),a=a.payload.toJSON(),d.push(a),Pm(b,d,c,!0)}}
function Pm(a,b,c,d){d=void 0===d?!1:d;a&&(Am=new a);a=di("tvhtml5_logging_max_batch")||di("web_logging_max_batch")||100;var e=P(),f=d?Dm.l:Cm.l,g=Hm.get(c)||[];N("jspb_with_transport_leader")&&(zm&&b.length+g.length>=a||!zm&&wm.ytExports.logging.transport.leaderQueueLength+b.length>=a)||b.length>=a?Lm({writeThenSend:!0},N("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Rm(d),d?Dm.l=e:Cm.l=e)}
function Sm(a,b){Km();if("log_event"===a.endpoint){Nm(a);var c=Om(a),d=new Map;d.set(c,[a.payload]);b&&(Am=new b);return new Lf(function(e,f){Am&&Am.isReady()?Tm(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function Um(a,b){Km();if("log_event"===a.endpoint){Nm(void 0,a);var c=Om(a,!0),d=new Map,e=new Map;N("jspb_with_transport_leader")&&zm?e.set(c,[a.payload]):d.set(c,[a.payload.toJSON()]);b&&(Am=new b);return new Lf(function(f){Am&&Am.isReady()?Vm(d,e,f,{bypassNetworkless:!0},!0):f()})}}
function Om(a,b){var c="";if(a.ea)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new uh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&fd(d,2,vh,c.playlistId);Jm[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Im[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Lm(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Lf(function(d,e){c?(window.clearTimeout(Dm.j),window.clearTimeout(Dm.i),Dm.i=0):(window.clearTimeout(Cm.j),window.clearTimeout(Cm.i),Cm.i=0);if(N("jspb_with_transport_leader")&&!zm&&c)document.dispatchEvent(new CustomEvent("FLUSH_REQUEST")),d();else if(Am&&Am.isReady())if(void 0!==b)if(c){e=new Map;var f=new Map,g=Hm.get(b)||[];e.set(b,g);N("jspb_with_transport_leader")&&(g=Gm.get(b)||[],f.set(b,g));Vm(e,f,d,a);N("jspb_with_transport_leader")&&
Gm.delete(b);Hm.delete(b)}else f=new Map,g=Fm.get(b)||[],f.set(b,g),Tm(f,d,e,a),Fm.delete(b);else c?(Vm(Hm,Gm,d,a),Hm.clear(),N("jspb_with_transport_leader")&&Gm.clear()):(Tm(Fm,d,e,a),Fm.clear());else Rm(c),d()})}
function Rm(a){a=void 0===a?!1:a;if(N("web_gel_timeout_cap")&&(!a&&!Cm.i||a&&!Dm.i)){var b=Sh(function(){Lm({writeThenSend:!0},void 0,a)},6E4);
a?Dm.i=b:Cm.i=b}window.clearTimeout(a?Dm.j:Cm.j);b=L("LOGGING_BATCH_TIMEOUT",di("web_gel_debounce_ms",1E4));N("shorten_initial_gel_batch_timeout")&&Em&&(b=xm);b=Sh(function(){Lm({writeThenSend:!0},void 0,a)},b);
a?Dm.j=b:Cm.j=b}
function Tm(a,b,c,d,e){var f=Am;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size;a=u(a);for(var k=a.next();!k.done;k=a.next()){var l=u(k.value);k=l.next().value;var m=l.next().value;l=k;k=nb({context:Fi(f.config_||Ei())});k.events=m;(m=Im[l])&&Wm(k,l,m);delete Im[l];l="visitorOnlyApprovedKey"===l;Xm(k,g,l);Ym(d);m=function(){h--;h||b()};
var q=function(){h--;h||b()};
try{Ui(f,"log_event",k,Zm(d,l,m,q,e)),Em=!1}catch(r){Ih(r),c()}}}
function Vm(a,b,c,d,e){var f=Am;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size+b.size,k=new Map([].concat(ia(a),ia(b)));k=u(k);for(var l=k.next();!l.done;l=k.next()){var m=u(l.value).next().value,q=a.get(m),r=b.get(m)||[];l=new wh;var p=Ki(f.config_||Ei());H(l,bh,1,p);q=q?$m(q):[];q=u(q);for(p=q.next();!p.done;p=q.next())ld(l,3,rh,p.value);r=u(r);for(q=r.next();!q.done;q=r.next())ld(l,3,rh,q.value);(r=Jm[m])&&an(l,m,r);delete Jm[m];m="visitorOnlyApprovedKey"===m;bn(l,g,m);Ym(d);l=pd(l);m=Zm(d,m,
function(){wm.ytExports.logging.transport.leaderQueueLength=0;h--;h||c()},function(){wm.ytExports.logging.transport.leaderQueueLength=0;
h--;h||c()},e);
m.headers={"Content-Type":"application/json+protobuf"};m.postBodyFormat="JSPB";m.postBody=l;Ui(f,"log_event","",m);Em=!1}}
function Ym(a){N("always_send_and_write")&&(a.writeThenSend=!1)}
function Zm(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Ta:a,ea:b,Rb:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Xm(a,b,c){a.requestTimeMs=String(b);N("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=cn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function bn(a,b,c){F(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=cn();var d=new th;F(d,1,b);F(d,2,c);H(a,th,5,d)}}
function cn(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*ym/2));a++;a>ym&&(a=1);Ch("BATCH_CLIENT_COUNTER",a);return a}
function Wm(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function an(a,b,c){if(dd(c,1===gd(c,vh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,uh,4,c);a=hd(a,bh,1)||new bh;c=hd(a,$g,3)||new $g;var e=new Zg;e.setToken(b);F(e,1,d);ld(c,12,Zg,e);H(a,$g,3,c)}
function $m(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new rh(a[c]))}catch(d){Ih(new gj("Transport failed to deserialize "+String(a[c])))}return b}
function Nm(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);C("yt.logging.transport.scrapedPayloadsForTesting",c)}}
;var dn=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",dn);function en(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=rm();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};N("log_sequence_info_on_gel_web")&&d.la&&(a=e.context,b=d.la,b={index:fn(b),groupKey:b},a.sequence=b,d.mb&&delete dn[d.la]);(d.vb?Sm:Mm)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,ea:d.ea},c)}
function gn(a){Lm(void 0,void 0,void 0===a?!1:a)}
function fn(a){dn[a]=a in dn?dn[a]+1:0;return dn[a]}
;var hn=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",hn);function jn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:qm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||P());F(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=rm();d=new qh;F(d,1,b.timestamp||!isFinite(e)?-1:e);if(N("log_sequence_info_on_gel_web")&&b.la){e=b.la;var f=fn(e),g=new ph;F(g,2,f);F(g,1,e);H(d,ph,3,g);b.mb&&delete hn[b.la]}H(a,qh,33,d);(b.vb?Um:Qm)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,ea:b.ea},c)}
;function kn(a,b){var c=void 0===c?{}:c;if(N("migrate_events_to_ts")){c=void 0===c?{}:c;var d=qm;L("ytLoggingEventsDefaultDisabled",!1)&&qm===qm&&(d=null);en(a,b,d,c)}else d=qm,L("ytLoggingEventsDefaultDisabled",!1)&&qm==qm&&(d=null),en(a,b,d,c)}
;var ln=[{Ca:function(a){return"Cannot read property '"+a.key+"'"},
va:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ca:function(a){return"Cannot call '"+a.key+"'"},
va:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ca:function(a){return a.key+" is not defined"},
va:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var nn={U:[],S:[{hb:mn,weight:500}]};function mn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function on(){this.S=[];this.U=[]}
var pn;function qn(){if(!pn){var a=pn=new on;a.U.length=0;a.S.length=0;nn.U&&a.U.push.apply(a.U,nn.U);nn.S&&a.S.push.apply(a.S,nn.S)}return pn}
;var rn=new J;function sn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=tn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=tn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=tn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function tn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function un(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=vn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=sn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?vn(e+".ve",f,g,h):0;d+=g;d+=vn(e,a[e],b,c);if(500<d)break}}else c[b]=wn(a),d+=c[b].length;else c[b]=wn(a),d+=c[b].length;return d}
function vn(a,b,c,d){c+="."+a;a=wn(b);d[c]=a;return c.length+a.length}
function wn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var xn=new Set,yn=0,zn=0,An=0,Bn=[],Cn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Dn(){for(var a=u(Cn),b=a.next();!b.done;b=a.next()){var c=Kb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function En(){var a;return x(function(b){return(a=cf())?b.return(a.then(function(c){c=pd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return xc(d,3)})):b.return(Promise.resolve(null))})}
;var Fn={};function Gn(a){return Fn[a]||(Fn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Hn={},In=[],yg=new J,Jn={};function Kn(){for(var a=u(In),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Ln(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Gn(b)]:a.getAttribute("data-"+b):null;return c}
function Mn(a){yg.ca.apply(yg,arguments)}
;function Nn(a){this.i=a||{};a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Z(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function On(a,b,c){Pn||(Pn={},Rh(window,"message",function(d){a:{if(d.origin===Z(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Pn[e.id])d.v=!0,d.v&&(D(d.s,d.sendMessage,d),d.s.length=0),d.Ja(e)}e=void 0}return e}));
Pn[c]=b}
var Pn=null;var Qn=window;function Rn(a,b,c){this.o=this.i=this.j=null;this.l=0;this.v=!1;this.s=[];this.m=null;this.J={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.H=c;this.setup(a,b)}
n=Rn.prototype;n.setSize=function(a,b){this.i.width=a.toString();this.i.height=b.toString();return this};
n.getIframe=function(){return this.i};
n.Ja=function(a){Sn(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.m.subscribe(a,c);Tn(this,a);return this};
function Un(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.H===b[0]&&Tn(a,c)}}
n.destroy=function(){this.i&&this.i.id&&(Hn[this.i.id]=null);var a=this.m;a&&"function"==typeof a.dispose&&a.dispose();if(this.o){a=this.i;var b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.i)&&a.parentNode&&a.parentNode.removeChild(a);Pn&&(Pn[this.id]=null);this.j=null;a=this.i;for(var c in lb)lb[c][0]==a&&Ph(c);this.o=this.i=null};
n.Ma=function(){return{}};
function Vn(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.v?a.sendMessage(b):a.s.push(b)}
function Sn(a,b,c){a.m.l||(c={target:a,data:c},a.m.ca(b,c),Mn(a.H+"."+b,c))}
function Wn(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Z(a.j,"title"));(b=Z(a.j,"width"))&&c.setAttribute("width",b.toString());(b=Z(a.j,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ma();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(k){var l=Zb(window.location.href,k);null!==l&&(g[k]=l)});
Qn.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(Qn.yt_embedsTokenValue),delete Qn.yt_embedsTokenValue);var h=""+Z(a.j,"host")+("/embed/"+Z(a.j,"videoId"))+"?"+Tb(g);Qn.yt_embedsEnableUaChProbe?En().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Kd(l.href).toString();xd(c,Ld(k));return k}):
Qn.yt_embedsEnableIframeSrcWithIntent?xd(c,Ld(h)):c.src=h;
return c}
n.Ua=function(){this.i&&this.i.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.l)};
function Xn(a){On(a.j,a,a.id);a.l=Th(a.Ua.bind(a));Rh(a.i,"load",function(){window.clearInterval(a.l);a.l=Th(a.Ua.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Rb(a.src):"https://www.youtube.com"),this.j=new Nn(b),c||(b=Wn(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.i=a,this.i.id||(this.i.id="widget"+Qa(this.i)),Hn[this.i.id]=this,window.postMessage){this.m=new J;Xn(this);b=Z(this.j,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Jn)Jn.hasOwnProperty(e)&&
Un(this,e)}};
function Tn(a,b){a.J[b]||(a.J[b]=!0,Vn(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=Jf(a),c=[Rb(this.i.src||"").replace("http:","https:")];if(this.i.contentWindow)for(var d=0;d<c.length;d++)try{this.i.contentWindow.postMessage(b,c[d])}catch(Vb){if(Vb.name&&"SyntaxError"===Vb.name){if(!(Vb.message&&0<Vb.message.indexOf("target origin ''"))){var e=void 0,f=Vb;e=void 0===e?{}:e;e.name=L("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":h;if(f){f.hasOwnProperty("level")&&
f.level&&(h=f.level);if(N("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=yn)){var m=void 0,q=void 0,r=f,p=g,y=ce(r),z=y.message||"Unknown Error",G=y.name||"UnknownError",K=y.stack||r.j||"Not available";
if(K.startsWith(G+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var O=y.lineNumber||"Not available",kb=y.fileName||"Not available",vc=K,ta=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var na=0;na<r.args.length&&!(ta=un(r.args[na],"params."+na,p,ta),500<=ta);na++);else if(r.hasOwnProperty("params")&&r.params){var X=r.params;if("object"===typeof r.params)for(q in X){if(X[q]){var ca="params."+q,da=wn(X[q]);p[ca]=da;ta+=ca.length+da.length;if(500<ta)break}}else p.params=wn(X)}if(Bn.length)for(var W=
0;W<Bn.length&&!(ta=un(Bn[W],"params.context."+W,p,ta),500<=ta);W++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var S={message:z,name:G,lineNumber:O,fileName:kb,stack:vc,params:p,sampleWeight:1},Jj=Number(r.columnNumber);isNaN(Jj)||(S.lineNumber=S.lineNumber+":"+Jj);if("IGNORED"===r.level)m=0;else a:{for(var Kj=qn(),Lj=u(Kj.U),Pf=Lj.next();!Pf.done;Pf=Lj.next()){var Mj=Pf.value;if(S.message&&S.message.match(Mj.Sb)){m=Mj.weight;break a}}for(var Nj=u(Kj.S),
Qf=Nj.next();!Qf.done;Qf=Nj.next()){var Oj=Qf.value;if(Oj.hb(S)){m=Oj.weight;break a}}m=1}S.sampleWeight=m;for(var Pj=u(ln),Rf=Pj.next();!Rf.done;Rf=Pj.next()){var Sf=Rf.value;if(Sf.va[S.name])for(var Qj=u(Sf.va[S.name]),Tf=Qj.next();!Tf.done;Tf=Qj.next()){var Rj=Tf.value,Od=S.message.match(Rj.regexp);if(Od){S.params["params.error.original"]=Od[0];for(var Uf=Rj.groups,Sj={},Wb=0;Wb<Uf.length;Wb++)Sj[Uf[Wb]]=Od[Wb+1],S.params["params.error."+Uf[Wb]]=Od[Wb+1];S.message=Sf.Ca(Sj);break}}}S.params||(S.params=
{});var Tj=qn();S.params["params.errorServiceSignature"]="msg="+Tj.U.length+"&cb="+Tj.S.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(S.params["params.fconst"]="true");var qa=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(qa);if(0!==qa.sampleWeight&&!xn.has(qa.message)){if("ERROR"===h){rn.ca("handleError",qa);if(N("record_app_crashed_web")&&
0===An&&1===qa.sampleWeight)if(An++,N("errors_via_jspb")){var Vf=new oh;F(Vf,1,1);if(!N("report_client_error_with_app_crash_ks")){var Uj=new jh;F(Uj,1,qa.message);var Vj=new kh;H(Vj,jh,3,Uj);var Wj=new lh;H(Wj,kh,5,Vj);var Xj=new mh;H(Xj,lh,9,Wj);H(Vf,mh,4,Xj)}var co=Vf,Yj=new rh;jd(Yj,oh,20,sh,co);jn(Yj)}else{var Zj={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};N("report_client_error_with_app_crash_ks")||(Zj.systemHealth={crashData:{clientError:{logMessage:{message:qa.message}}}});kn("appCrashed",Zj)}zn++}else"WARNING"===
h&&rn.ca("handleWarning",qa);if(N("kevlar_gel_error_routing"))a:{var Wf=void 0,Xf=void 0,Hc=h,Q=qa;if(N("errors_via_jspb")){if(Dn())Xf=void 0;else{var Xb=new gh;F(Xb,1,Q.stack);Q.fileName&&F(Xb,4,Q.fileName);var Ia=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ia.length&&(1!==Ia.length||isNaN(Number(Ia[0]))?2!==Ia.length||isNaN(Number(Ia[0]))||isNaN(Number(Ia[1]))||(F(Xb,2,Number(Ia[0])),F(Xb,3,Number(Ia[1]))):F(Xb,2,Number(Ia[0])));var pb=new jh;F(pb,1,Q.message);F(pb,3,Q.name);
F(pb,6,Q.sampleWeight);"ERROR"===Hc?F(pb,2,2):"WARNING"===Hc?F(pb,2,1):F(pb,2,0);var Yf=new hh;F(Yf,1,!0);jd(Yf,gh,3,ih,Xb);var qb=new dh;F(qb,3,window.location.href);for(var ak=L("FEXP_EXPERIMENTS",[]),Zf=0;Zf<ak.length;Zf++){var bk=qb,eo=ak[Zf];Rc(bk);ed(bk,5).push(eo)}var $f=Dh();if(!Eh()&&$f)for(var ck=u(Object.keys($f)),rb=ck.next();!rb.done;rb=ck.next()){var dk=rb.value,ag=new fh;F(ag,1,dk);ag.setValue(String($f[dk]));ld(qb,4,fh,ag)}var bg=Q.params;if(bg){var ek=u(Object.keys(bg));for(rb=ek.next();!rb.done;rb=
ek.next()){var fk=rb.value,cg=new fh;F(cg,1,"client."+fk);cg.setValue(String(bg[fk]));ld(qb,4,fh,cg)}}var gk=L("SERVER_NAME"),hk=L("SERVER_VERSION");if(gk&&hk){var dg=new fh;F(dg,1,"server.name");dg.setValue(gk);ld(qb,4,fh,dg);var eg=new fh;F(eg,1,"server.version");eg.setValue(hk);ld(qb,4,fh,eg)}var Pd=new kh;H(Pd,dh,1,qb);H(Pd,hh,2,Yf);H(Pd,jh,3,pb);Xf=Pd}var ik=Xf;if(!ik)break a;var jk=new rh;jd(jk,kh,163,sh,ik);jn(jk)}else{if(Dn())Wf=void 0;else{var Ic={stackTrace:Q.stack};Q.fileName&&(Ic.filename=
Q.fileName);var Ja=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ja.length&&(1!==Ja.length||isNaN(Number(Ja[0]))?2!==Ja.length||isNaN(Number(Ja[0]))||isNaN(Number(Ja[1]))||(Ic.lineNumber=Number(Ja[0]),Ic.columnNumber=Number(Ja[1])):Ic.lineNumber=Number(Ja[0]));var fg={level:"ERROR_LEVEL_UNKNOWN",message:Q.message,errorClassName:Q.name,sampleWeight:Q.sampleWeight};"ERROR"===Hc?fg.level="ERROR_LEVEL_ERROR":"WARNING"===Hc&&(fg.level="ERROR_LEVEL_WARNNING");var fo={isObfuscated:!0,browserStackInfo:Ic},
Yb={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(Yb.experimentIds=L("FEXP_EXPERIMENTS"));var gg=Dh();if(!Eh()&&gg)for(var kk=u(Object.keys(gg)),sb=kk.next();!sb.done;sb=kk.next()){var lk=sb.value;Yb.kvPairs.push({key:lk,value:String(gg[lk])})}var hg=Q.params;if(hg){var mk=u(Object.keys(hg));for(sb=mk.next();!sb.done;sb=mk.next()){var nk=sb.value;Yb.kvPairs.push({key:"client."+nk,value:String(hg[nk])})}}var ok=L("SERVER_NAME"),pk=L("SERVER_VERSION");ok&&pk&&(Yb.kvPairs.push({key:"server.name",
value:ok}),Yb.kvPairs.push({key:"server.version",value:pk}));Wf={errorMetadata:Yb,stackTrace:fo,logMessage:fg}}var qk=Wf;if(!qk)break a;kn("clientError",qk)}if("ERROR"===Hc||N("errors_flush_gel_always_killswitch"))b:if(N("migrate_events_to_ts"))c:{if(N("web_fp_via_jspb")&&(gn(!0),!N("web_fp_via_jspb_and_json")))break c;gn()}else{if(N("web_fp_via_jspb")&&(gn(!0),!N("web_fp_via_jspb_and_json")))break b;gn()}}if(!N("suppress_error_204_logging")){var tb=qa,Jc=tb.params||{},Xa={urlParams:{a:"logerror",
t:"jserror",type:tb.name,msg:tb.message.substr(0,250),line:tb.lineNumber,level:h,"client.name":Jc.name},postParams:{url:L("PAGE_NAME",window.location.href),file:tb.fileName},method:"POST"};Jc.version&&(Xa["client.version"]=Jc.version);if(Xa.postParams){tb.stack&&(Xa.postParams.stack=tb.stack);for(var rk=u(Object.keys(Jc)),ig=rk.next();!ig.done;ig=rk.next()){var sk=ig.value;Xa.postParams["client."+sk]=Jc[sk]}var jg=Dh();if(jg)for(var tk=u(Object.keys(jg)),kg=tk.next();!kg.done;kg=tk.next()){var uk=
kg.value;Xa.postParams[uk]=jg[uk]}var vk=L("SERVER_NAME"),wk=L("SERVER_VERSION");vk&&wk&&(Xa.postParams["server.name"]=vk,Xa.postParams["server.version"]=wk)}oi(L("ECATCHER_REPORT_HOST","")+"/error_204",Xa)}try{xn.add(qa.message)}catch(ko){}yn++}}}}}else throw Vb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Yn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Zn(a){return 0===a.search("get")||0===a.search("is")}
;function $n(a,b){Rn.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.M={};this.playerInfo={};this.videoTitle=""}
v($n,Rn);n=$n.prototype;n.Ma=function(){var a=Z(this.j,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Z(this.j,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Ja=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.M[c]=a[c]);break;case "infoDelivery":ao(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.l),this.playerInfo={},this.M={},bo(this,a.apiInterface),ao(this,a));break;default:Sn(this,b,a)}};
function ao(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.i.setAttribute("title",b))):(a.videoTitle="",a.i.setAttribute("title","YouTube "+Z(a.j,"title"))))}}
function bo(a,b){D(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Yn(c)?this[c]=function(){this.playerInfo={};
this.M={};Vn(this,c,arguments);return this}:Zn(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Vn(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Z(this.j,"host")+("/embed/"+Z(this.j,"videoId")),b=Number(Z(this.j,"width")),c=Number(Z(this.j,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,"&#39;")),
-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.M.namespaces?a?this.M[a]?this.M[a].options||[]:[]:this.M.namespaces||[]:[]};
n.getOption=function(a,b){if(this.M.namespaces&&a&&b&&this.M[a])return this.M[a][b]};
function go(a){if("iframe"!==a.tagName.toLowerCase()){var b=Ln(a,"videoid");b&&(b={videoId:b,width:Ln(a,"width"),height:Ln(a,"height")},new $n(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return Hn[a]});
C("YT.scan",Kn);C("YT.subscribe",function(a,b,c){yg.subscribe(a,b,c);Jn[a]=!0;for(var d in Hn)Hn.hasOwnProperty(d)&&Un(Hn[d],a)});
C("YT.unsubscribe",function(a,b,c){xg(a,b,c)});
C("YT.Player",$n);Rn.prototype.destroy=Rn.prototype.destroy;Rn.prototype.setSize=Rn.prototype.setSize;Rn.prototype.getIframe=Rn.prototype.getIframe;Rn.prototype.addEventListener=Rn.prototype.addEventListener;$n.prototype.getVideoEmbedCode=$n.prototype.getVideoEmbedCode;$n.prototype.getOptions=$n.prototype.getOptions;$n.prototype.getOption=$n.prototype.getOption;
In.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);D(fb(a,b),go)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Kn();var ho=A.onYTReady;ho&&ho();var io=A.onYouTubeIframeAPIReady;io&&io();var jo=A.onYouTubePlayerAPIReady;jo&&jo();}).call(this);
