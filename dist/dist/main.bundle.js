!function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(p&&p(e);f.length;)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={1:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=c;s.push([361,0]),r()}({101:function(t,e,r){"use strict";var n,a=r(46),s=r(21),o=r(139),i=r(28);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=(c(n={},i.a.SET_SITE_OPTION,function(t,e){t.siteOption=e}),c(n,i.a.SET_POSTS,function(t,e){t.posts=e}),c(n,i.a.SET_QUERIED_OBJECT,function(t,e){t.queriedObject=e}),c(n,i.a.SET_HASMORE,function(t,e){t.hasMore=e}),n);a.a.use(s.a);var p=new s.a.Store({state:{siteOption:{},posts:[],route:{},queriedObject:{},hasMore:!1},mutations:u,actions:o});e.a=p},137:function(t,e,r){"use strict";var n=r(21),a={computed:Object(n.b)({name:function(t){return t.siteOption.name}})},s=(r(155),r(33)),o=Object(s.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("router-link",{attrs:{to:"/"}},[this._v(this._s(this.name))])],1)},[],!1,null,"3215453c",null).exports,i={data:function(){return{categories:[],author:{}}},props:{post:{}},created:function(){this.fetchMetaData()},mounted:function(){this.fetchMetaData()},methods:{fetchMetaData:function(){var t=this;(new wp.api.collections.Categories).fetch({data:{post:this.post.id}}).then(function(e){t.categories=e}),new wp.api.models.User({id:this.post.author}).fetch().then(function(e){t.author=e})}}},c=(r(152),Object(s.a)(i,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("header",[r("h1",[t._v(t._s(t.post.title.rendered))]),t._v(" "),t.author.name?r("span",[t._v("Author: "),r("router-link",{attrs:{to:t._f("path")(t.author.link)}},[t._v(t._s(t.author.name))])],1):t._e(),t._v("\n    Categories: "),t._l(t.categories,function(e){return r("span",{staticClass:"category"},[r("router-link",{attrs:{to:t._f("path")(e.link)}},[t._v(t._s(e.name))])],1)})],2),t._v(" "),r("div",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content.rendered)}})])},[],!1,null,"2d55950e",null).exports),u={computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t})({},Object(n.b)({posts:"posts",route:"route",hasMore:"hasMore"}),{next:function(){var t=this.route.params.page?parseInt(this.route.params.page)+1:2;return{name:this.route.name,params:{endpoint:"page",page:t}}},prev:function(){var t=this.route.params.page>1?parseInt(this.route.params.page)-1:1;return{name:this.route.name,params:{endpoint:"page",page:t}}}})},p=(r(149),{components:{Archive:Object(s.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"posts"},[t._l(t.posts,function(e){return r("div",{key:e.id,staticClass:"media item"},[r("div",{staticClass:"media-body small border-bottom"},[r("h6",[r("router-link",{attrs:{to:t._f("path")(e.link)}},[t._v(t._s(e.title.rendered))])],1),t._v(" "),r("p",{domProps:{innerHTML:t._s(e.excerpt.rendered)}})])])}),t._v(" "),r("p",[t.route.params.page>1?r("router-link",{attrs:{to:t.prev}},[t._v("Prev")]):t._e(),t._v(" "),t.hasMore?r("router-link",{attrs:{to:t.next}},[t._v("Next")]):t._e()],1)],2)},[],!1,null,"525fe84b",null).exports,Post:c,SiteName:o},created:function(){var t=this;this.$store.dispatch("fetchSiteOption"),this.$store.dispatch("fetchPosts"),this.$router.afterEach(function(){t.$store.dispatch("fetchPosts")})},computed:Object(n.b)({posts:"posts",route:"route"})}),l=(r(146),r(142),Object(s.a)(p,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container App",attrs:{id:"app"}},[e("header",{staticClass:"App__header"},[e("site-name")],1),this._v(" "),e("div",{staticClass:"App__main"},[1!==this.posts.length||"post"!==this.route.name&&"page"!==this.route.name&&"front-page"!==this.route.name?[e("archive")]:this._l(this.posts,function(t){return e("post",{key:t.id,attrs:{post:t}})})],2)])},[],!1,null,"d7ed3196",null));e.a=l.exports},139:function(t,e,r){"use strict";r.r(e),function(t){r.d(e,"fetchSiteOption",function(){return i}),r.d(e,"fetchPosts",function(){return c});var n=r(28);function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(a,s){try{var o=e[a](s),i=o.value}catch(t){return void r(t)}if(!o.done)return Promise.resolve(i).then(function(t){n("next",t)},function(t){n("throw",t)});t(i)}("next")})}}var s,o,i=(s=a(regeneratorRuntime.mark(function e(r){var a,s,o=r.commit;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.wpApiSettings.root);case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,o(n.a.SET_SITE_OPTION,s);case 7:case"end":return e.stop()}},e,void 0)})),function(t){return s.apply(this,arguments)}),c=(o=a(regeneratorRuntime.mark(function e(r){var a,s,o,i,c,u,p,l,f,h,d,v,m,_,g,b,O=r.commit,w=r.state;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=new wp.api.collections.Posts,s=[],o={},i=!1,c=w.route.params.page||1,u={page:c},!w.route.query.preview){e.next=16;break}return p=new wp.api.models.Post({id:1709}),e.next=10,p.fetch();case 10:l=e.sent,console.log(l),o=(s=[l])[0],e.next=79;break;case 16:e.t0=w.route.name,e.next="home"===e.t0?19:"category"===e.t0?24:"post_tag"===e.t0?34:"author"===e.t0?44:"post"===e.t0?54:"page"===e.t0?67:"front-page"===e.t0?73:79;break;case 19:return e.next=21,a.fetch({data:u});case 21:return s=e.sent,i=a.hasMore(),e.abrupt("break",79);case 24:return e.next=26,(new wp.api.collections.Categories).fetch({data:{slug:w.route.params.category}});case 26:return f=e.sent,o=f[0],u=Object.assign(u,{categories:f[0].id}),e.next=31,a.fetch({data:u});case 31:return s=e.sent,i=a.hasMore(),e.abrupt("break",79);case 34:return e.next=36,(new wp.api.collections.Tags).fetch({data:{slug:w.route.params.post_tag}});case 36:return h=e.sent,o=h[0],u=Object.assign(u,{tags:h[0].id}),e.next=41,a.fetch({data:u});case 41:return s=e.sent,i=a.hasMore(),e.abrupt("break",79);case 44:return e.next=46,(new wp.api.collections.Users).fetch({data:{slug:w.route.params.author}});case 46:return d=e.sent,o=d[0],u=Object.assign(u,{author:d[0].id}),e.next=51,a.fetch({data:u});case 51:return s=e.sent,i=a.hasMore(),e.abrupt("break",79);case 54:if(!w.route.params.postname){e.next=60;break}return e.next=57,a.fetch({data:{slug:w.route.params.postname}});case 57:s=e.sent,e.next=65;break;case 60:return v=new wp.api.models.Post({id:w.route.params.post_id}),e.next=63,v.fetch();case 63:m=e.sent,s=[m];case 65:return o=s[0],e.abrupt("break",79);case 67:return _=new wp.api.collections.Pages,e.next=70,_.fetch({data:{slug:w.route.params.pagename}});case 70:return s=e.sent,o=s[0],e.abrupt("break",79);case 73:return g=new wp.api.models.Page({id:t.themeSettings.pageOnFront}),e.next=76,g.fetch();case 76:return b=e.sent,s=[b],e.abrupt("break",79);case 79:O(n.a.SET_QUERIED_OBJECT,o),O(n.a.SET_HASMORE,i),O(n.a.SET_POSTS,s);case 82:case"end":return e.stop()}},e,void 0)})),function(t){return o.apply(this,arguments)})}.call(this,r(45))},141:function(t,e,r){},142:function(t,e,r){"use strict";var n=r(69);r.n(n).a},145:function(t,e,r){},146:function(t,e,r){"use strict";var n=r(70);r.n(n).a},148:function(t,e,r){},149:function(t,e,r){"use strict";var n=r(71);r.n(n).a},151:function(t,e,r){},152:function(t,e,r){"use strict";var n=r(72);r.n(n).a},154:function(t,e,r){},155:function(t,e,r){"use strict";var n=r(73);r.n(n).a},28:function(t,e,r){"use strict";e.a={SET_SITE_OPTION:"SET_SITE_OPTION",SET_POSTS:"SET_POSTS",SET_QUERIED_OBJECT:"SET_QUERIED_OBJECT",SET_HASMORE:"SET_HASMORE"}},361:function(t,e,r){"use strict";r.r(e),function(t){r(360);var e=r(46),n=r(21),a=r(137),s=r(101),o=r(102),i=r(138),c=new o.a({mode:"history",routes:[].concat(t.themeSettings.permastructs)});e.a.filter("path",function(t){if(!t)return"";var e=new URL(t);return e.href.replace(e.origin,"")}),t.addEventListener("load",function(){Object(i.sync)(s.a,c),e.a.use(o.a),e.a.use(n.a),new e.a({router:c,store:s.a,el:"#app",template:"<App/>",components:{App:a.a}})})}.call(this,r(45))},69:function(t,e,r){var n=r(141);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,r(51).default)("21ae8aaa",n,!0,{})},70:function(t,e,r){var n=r(145);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,r(51).default)("a40c4268",n,!0,{})},71:function(t,e,r){var n=r(148);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,r(51).default)("083c7628",n,!0,{})},72:function(t,e,r){var n=r(151);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,r(51).default)("3ed9e8bc",n,!0,{})},73:function(t,e,r){var n=r(154);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,r(51).default)("232ee4e2",n,!0,{})}});