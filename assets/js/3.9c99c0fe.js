(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{106:function(t,n,e){var r=e(8),o=e(40),i=e(1)("species");t.exports=function(t,n){var e,s=r(t).constructor;return void 0===s||void 0==(e=r(s)[i])?n:o(e)}},107:function(t,n,e){var r,o,i,s=e(13),c=e(111),a=e(64),u=e(41),f=e(3),h=f.process,l=f.setImmediate,v=f.clearImmediate,p=f.MessageChannel,d=f.Dispatch,_=0,m={},y=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},w=function(t){y.call(t.data)};l&&v||(l=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++_]=function(){c("function"==typeof t?t:Function(t),n)},r(_),_},v=function(t){delete m[t]},"process"==e(20)(h)?r=function(t){h.nextTick(s(y,t,1))}:d&&d.now?r=function(t){d.now(s(y,t,1))}:p?(i=(o=new p).port2,o.port1.onmessage=w,r=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",w,!1)):r="onreadystatechange"in u("script")?function(t){a.appendChild(u("script")).onreadystatechange=function(){a.removeChild(this),y.call(t)}}:function(t){setTimeout(s(y,t,1),0)}),t.exports={set:l,clear:v}},108:function(t,n,e){"use strict";var r=e(40);t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},109:function(t,n,e){var r=e(8),o=e(2),i=e(108);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},110:function(t,n,e){"use strict";var r,o,i,s,c=e(42),a=e(3),u=e(13),f=e(65),h=e(4),l=e(2),v=e(40),p=e(44),d=e(45),_=e(106),m=e(107).set,y=e(112)(),w=e(108),g=e(113),x=e(114),P=e(109),b=a.TypeError,j=a.process,k=j&&j.versions,T=k&&k.v8||"",E=a.Promise,M="process"==f(j),C=function(){},O=o=w.f,F=!!function(){try{var t=E.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(C,C)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(C)instanceof n&&0!==T.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),S=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},$=function(t,n){if(!t._n){t._n=!0;var e=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0,s=function(n){var e,i,s,c=o?n.ok:n.fail,a=n.resolve,u=n.reject,f=n.domain;try{c?(o||(2==t._h&&R(t),t._h=1),!0===c?e=r:(f&&f.enter(),e=c(r),f&&(f.exit(),s=!0)),e===n.promise?u(b("Promise-chain cycle")):(i=S(e))?i.call(e,a,u):a(e)):u(r)}catch(t){f&&!s&&f.exit(),u(t)}};e.length>i;)s(e[i++]);t._c=[],t._n=!1,n&&!t._h&&D(t)})}},D=function(t){m.call(a,function(){var n,e,r,o=t._v,i=K(t);if(i&&(n=g(function(){M?j.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=M||K(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},K=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){m.call(a,function(){var n;M?j.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},A=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),$(n,!0))},G=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw b("Promise can't be resolved itself");(n=S(t))?y(function(){var r={_w:e,_d:!1};try{n.call(t,u(G,r,1),u(A,r,1))}catch(t){A.call(r,t)}}):(e._v=t,e._s=1,$(e,!1))}catch(t){A.call({_w:e,_d:!1},t)}}};F||(E=function(t){p(this,E,"Promise","_h"),v(t),r.call(this);try{t(u(G,this,1),u(A,this,1))}catch(t){A.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(43)(E.prototype,{then:function(t,n){var e=O(_(this,E));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=M?j.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&$(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=u(G,t,1),this.reject=u(A,t,1)},w.f=O=function(t){return t===E||t===s?new i(t):o(t)}),h(h.G+h.W+h.F*!F,{Promise:E}),e(32)(E,"Promise"),e(62)("Promise"),s=e(12).Promise,h(h.S+h.F*!F,"Promise",{reject:function(t){var n=O(this);return(0,n.reject)(t),n.promise}}),h(h.S+h.F*(c||!F),"Promise",{resolve:function(t){return P(c&&this===s?E:this,t)}}),h(h.S+h.F*!(F&&e(66)(function(t){E.all(t).catch(C)})),"Promise",{all:function(t){var n=this,e=O(n),r=e.resolve,o=e.reject,i=g(function(){var e=[],i=0,s=1;d(t,!1,function(t){var c=i++,a=!1;e.push(void 0),s++,n.resolve(t).then(function(t){a||(a=!0,e[c]=t,--s||r(e))},o)}),--s||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=O(n),r=e.reject,o=g(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},111:function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},112:function(t,n,e){var r=e(3),o=e(107).set,i=r.MutationObserver||r.WebKitMutationObserver,s=r.process,c=r.Promise,a="process"==e(20)(s);t.exports=function(){var t,n,e,u=function(){var r,o;for(a&&(r=s.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){s.nextTick(u)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);e=function(){f.then(u)}}else e=function(){o.call(r,u)};else{var h=!0,l=document.createTextNode("");new i(u).observe(l,{characterData:!0}),e=function(){l.data=h=!h}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},113:function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},114:function(t,n,e){var r=e(3).navigator;t.exports=r&&r.userAgent||""},115:function(t,n,e){"use strict";var r=e(4),o=e(12),i=e(3),s=e(106),c=e(109);r(r.P+r.R,"Promise",{finally:function(t){var n=s(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},167:function(t,n,e){"use strict";e.r(n);e(63),e(110),e(115);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=e(5),i=Object(o.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.slotKey}},[n("p",[this._v("在Mac命令行中配置github，添加秘钥，便不必每次提交都输入密码，很方便。\n")]),this._v(" "),n("pre",[n("code",[this._v('#在本机生成秘钥和公钥\nssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n\nEnter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]Enter \n\npassphrase (empty for no passphrase): [Type a passphrase]\nEnter same passphrase again: [Type passphrase again]\n\n#添加秘钥到ssh agent\nssh-add ~/.ssh/id_rsa\n#然后在github账号设置中添加本机刚刚生成的公钥\npbcopy < ~/.ssh/id_rsa.pub\n# Copies the contents of the id_rsa.pub file to your clipboard\n#测试是否可以连接成功\nssh -T git@github.com')])])])},[],!1,null,null,null);i.options.__file="Github在mac中的配置.md";n.default=i.exports}}]);