(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{106:function(t,n,e){var r=e(8),o=e(40),s=e(1)("species");t.exports=function(t,n){var e,i=r(t).constructor;return void 0===i||void 0==(e=r(i)[s])?n:o(e)}},107:function(t,n,e){var r,o,s,i=e(13),c=e(127),a=e(64),u=e(42),v=e(3),f=v.process,l=v.setImmediate,h=v.clearImmediate,p=v.MessageChannel,d=v.Dispatch,_=0,m={},y=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},w=function(t){y.call(t.data)};l&&h||(l=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++_]=function(){c("function"==typeof t?t:Function(t),n)},r(_),_},h=function(t){delete m[t]},"process"==e(20)(f)?r=function(t){f.nextTick(i(y,t,1))}:d&&d.now?r=function(t){d.now(i(y,t,1))}:p?(s=(o=new p).port2,o.port1.onmessage=w,r=i(s.postMessage,s,1)):v.addEventListener&&"function"==typeof postMessage&&!v.importScripts?(r=function(t){v.postMessage(t+"","*")},v.addEventListener("message",w,!1)):r="onreadystatechange"in u("script")?function(t){a.appendChild(u("script")).onreadystatechange=function(){a.removeChild(this),y.call(t)}}:function(t){setTimeout(i(y,t,1),0)}),t.exports={set:l,clear:h}},108:function(t,n,e){"use strict";var r=e(40);t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},109:function(t,n,e){var r=e(8),o=e(2),s=e(108);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=s.f(t);return(0,e.resolve)(n),e.promise}},126:function(t,n,e){"use strict";var r,o,s,i,c=e(43),a=e(3),u=e(13),v=e(65),f=e(4),l=e(2),h=e(40),p=e(47),d=e(48),_=e(106),m=e(107).set,y=e(128)(),w=e(108),g=e(129),k=e(130),x=e(109),P=a.TypeError,b=a.process,j=b&&b.versions,C=j&&j.v8||"",E=a.Promise,M="process"==v(b),T=function(){},O=o=w.f,D=!!function(){try{var t=E.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(T,T)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof n&&0!==C.indexOf("6.6")&&-1===k.indexOf("Chrome/66")}catch(t){}}(),F=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var e=t._c;y(function(){for(var r=t._v,o=1==t._s,s=0,i=function(n){var e,s,i,c=o?n.ok:n.fail,a=n.resolve,u=n.reject,v=n.domain;try{c?(o||(2==t._h&&$(t),t._h=1),!0===c?e=r:(v&&v.enter(),e=c(r),v&&(v.exit(),i=!0)),e===n.promise?u(P("Promise-chain cycle")):(s=F(e))?s.call(e,a,u):a(e)):u(r)}catch(t){v&&!i&&v.exit(),u(t)}};e.length>s;)i(e[s++]);t._c=[],t._n=!1,n&&!t._h&&S(t)})}},S=function(t){m.call(a,function(){var n,e,r,o=t._v,s=A(t);if(s&&(n=g(function(){M?b.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=M||A(t)?2:1),t._a=void 0,s&&n.e)throw n.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){m.call(a,function(){var n;M?b.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},K=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},H=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw P("Promise can't be resolved itself");(n=F(t))?y(function(){var r={_w:e,_d:!1};try{n.call(t,u(H,r,1),u(K,r,1))}catch(t){K.call(r,t)}}):(e._v=t,e._s=1,R(e,!1))}catch(t){K.call({_w:e,_d:!1},t)}}};D||(E=function(t){p(this,E,"Promise","_h"),h(t),r.call(this);try{t(u(H,this,1),u(K,this,1))}catch(t){K.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(46)(E.prototype,{then:function(t,n){var e=O(_(this,E));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=M?b.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&R(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),s=function(){var t=new r;this.promise=t,this.resolve=u(H,t,1),this.reject=u(K,t,1)},w.f=O=function(t){return t===E||t===i?new s(t):o(t)}),f(f.G+f.W+f.F*!D,{Promise:E}),e(32)(E,"Promise"),e(62)("Promise"),i=e(12).Promise,f(f.S+f.F*!D,"Promise",{reject:function(t){var n=O(this);return(0,n.reject)(t),n.promise}}),f(f.S+f.F*(c||!D),"Promise",{resolve:function(t){return x(c&&this===i?E:this,t)}}),f(f.S+f.F*!(D&&e(66)(function(t){E.all(t).catch(T)})),"Promise",{all:function(t){var n=this,e=O(n),r=e.resolve,o=e.reject,s=g(function(){var e=[],s=0,i=1;d(t,!1,function(t){var c=s++,a=!1;e.push(void 0),i++,n.resolve(t).then(function(t){a||(a=!0,e[c]=t,--i||r(e))},o)}),--i||r(e)});return s.e&&o(s.v),e.promise},race:function(t){var n=this,e=O(n),r=e.reject,o=g(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},127:function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},128:function(t,n,e){var r=e(3),o=e(107).set,s=r.MutationObserver||r.WebKitMutationObserver,i=r.process,c=r.Promise,a="process"==e(20)(i);t.exports=function(){var t,n,e,u=function(){var r,o;for(a&&(r=i.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){i.nextTick(u)};else if(!s||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var v=c.resolve(void 0);e=function(){v.then(u)}}else e=function(){o.call(r,u)};else{var f=!0,l=document.createTextNode("");new s(u).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},129:function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},130:function(t,n,e){var r=e(3).navigator;t.exports=r&&r.userAgent||""},131:function(t,n,e){"use strict";var r=e(4),o=e(12),s=e(3),i=e(106),c=e(109);r(r.P+r.R,"Promise",{finally:function(t){var n=i(this,o.Promise||s.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},176:function(t,n,e){"use strict";e.r(n);e(63),e(126),e(131);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=e(5),s=Object(o.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[e("h3",{attrs:{id:"起步就像数-1-2-3-一样容易"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起步就像数-1-2-3-一样容易","aria-hidden":"true"}},[t._v("#")]),t._v(" 起步就像数 1, 2, 3 一样容易")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\nyarn global add vuepress "),e("span",{attrs:{class:"token comment"}},[t._v("# 或 npm install -g vuepress")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 创建一个 markdown 文件")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" README.md\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 开始编写")]),t._v("\nvuepress dev\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 构建为静态文件")]),t._v("\nvuepress build\n")])])]),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("兼容性注意事项")]),t._v(" "),e("p",[t._v("VuePress 要求 Node.js >= 8。")])]),t._v(" "),e("blockquote",[e("p",[t._v("dfs")])])])},[],!1,null,null,null);s.options.__file="README.md";n.default=s.exports}}]);