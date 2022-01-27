(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",a="hour",s="day",o="week",c="month",u="quarter",d="year",l="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,s=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:s,D:l,h:a,m:i,s:r,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=v;var $=function(t){return t instanceof S},_=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},w=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},D=m;D.l=_,D.i=$,D.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function v(t){this.$L=_(t.locale,null,!0),this.parse(t)}var g=v.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return D},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return w(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<w(t)},g.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,u=!!D.u(e)||e,f=D.p(t),h=function(t,e){var r=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?r:r.endOf(s)},p=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,g=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case d:return u?h(1,0):h(31,11);case c:return u?h(1,g):h(0,g+1);case o:var M=this.$locale().weekStart||0,$=(v<M?v+7:v)-M;return h(u?m-$:m+(6-$),g);case s:case l:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case r:return p(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var o,u=D.p(t),f="set"+(this.$u?"UTC":""),h=(o={},o[s]=f+"Date",o[l]=f+"Date",o[c]=f+"Month",o[d]=f+"FullYear",o[a]=f+"Hours",o[i]=f+"Minutes",o[r]=f+"Seconds",o[n]=f+"Milliseconds",o)[u],p=u===s?this.$D+(e-this.$W):e;if(u===c||u===d){var v=this.clone().set(l,1);v.$d[h](p),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[D.p(t)]()},g.add=function(n,u){var l,f=this;n=Number(n);var h=D.p(u),p=function(t){var e=w(f);return D.w(e.date(e.date()+Math.round(t*n)),f)};if(h===c)return this.set(c,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===s)return p(1);if(h===o)return p(7);var v=(l={},l[i]=t,l[a]=e,l[r]=1e3,l)[h]||1,g=this.$d.getTime()+n*v;return D.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,s=this.$m,o=this.$M,c=n.weekdays,u=n.months,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].substr(0,a)},l=function(t){return D.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:d(n.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,c,2),ddd:d(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:D.s(a,2,"0"),h:l(1),hh:l(2),a:h(a,s,!0),A:h(a,s,!1),m:String(s),mm:D.s(s,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||v[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,l,f){var h,p=D.p(l),v=w(n),g=(v.utcOffset()-this.utcOffset())*t,m=this-v,y=D.m(this,v);return y=(h={},h[d]=y/12,h[c]=y,h[u]=y/3,h[o]=(m-g)/6048e5,h[s]=(m-g)/864e5,h[a]=m/e,h[i]=m/t,h[r]=m/1e3,h)[p]||m,f?y:D.a(y)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=_(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return D.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),Y=S.prototype;return w.prototype=Y,[["$ms",n],["$s",r],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",l]].forEach((function(t){Y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,S,w),t.$i=!0),w},w.locale=_,w.isDayjs=$,w.unix=function(t){return w(1e3*t)},w.en=M[y],w.Ls=M,w.p={},w}()},285:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-_:/()]+/,a={},s=function(t){return(t=+t)+(t>68?1900:2e3)},o=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],u=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},l={A:[i,function(t){this.afternoon=d(t,!1)}],a:[i,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,o("seconds")],ss:[r,o("seconds")],m:[r,o("minutes")],mm:[r,o("minutes")],H:[r,o("hours")],h:[r,o("hours")],HH:[r,o("hours")],hh:[r,o("hours")],D:[r,o("day")],DD:[n,o("day")],Do:[i,function(t){var e=a.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,o("month")],MM:[n,o("month")],MMM:[i,function(t){var e=u("months"),n=(u("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,o("year")],YY:[n,function(t){this.year=s(t)}],YYYY:[/\d{4}/,o("year")],Z:c,ZZ:c};function f(n){var r,i;r=n,i=a&&a.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var a=r&&r.toUpperCase();return n||i[r]||t[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),o=s.length,c=0;c<o;c+=1){var u=s[c],d=l[u],f=d&&d[0],h=d&&d[1];s[c]=h?{regex:f,parser:h}:u.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<o;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,c=i.parser,u=t.substr(r),d=a.exec(u)[0];c.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,s=t.args;this.$u=r;var o=s[1];if("string"==typeof o){var c=!0===s[2],u=!0===s[3],d=c||u,l=s[2];u&&(l=s[2]),a=this.$locale(),!c&&l&&(a=n.Ls[l]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=f(e)(t),i=r.year,a=r.month,s=r.day,o=r.hours,c=r.minutes,u=r.seconds,d=r.milliseconds,l=r.zone,h=new Date,p=s||(i||a?1:h.getDate()),v=i||h.getFullYear(),g=0;i&&!a||(g=a>0?a-1:h.getMonth());var m=o||0,y=c||0,M=u||0,$=d||0;return l?new Date(Date.UTC(v,g,p,m,y,M,$+60*l.offset*1e3)):n?new Date(Date.UTC(v,g,p,m,y,M,$)):new Date(v,g,p,m,y,M,$)}catch(t){return new Date("")}}(e,o,r),this.init(),l&&!0!==l&&(this.$L=this.locale(l).$L),d&&e!=this.format(o)&&(this.$d=new Date("")),a={}}else if(o instanceof Array)for(var h=o.length,p=1;p<=h;p+=1){s[1]=o[p-1];var v=n.apply(this,s);if(v.isValid()){this.$d=v.$d,this.$L=v.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,t)}}}()},418:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"img/linux.svg"},798:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"img/mobile.svg"},696:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"img/other.svg"},424:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"img/ps4.svg"},369:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"img/search.svg"},843:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"img/switch.svg"},447:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"img/windows.svg"},978:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"img/xbox.svg"},436:(t,e,n)=>{"use strict";n.r(e)},607:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.previous_path=e.games=void 0,n(436);var r=n(601);n(369).default,e.games=[];var i=function(){var t=document.getElementById("app");if(window.scrollTo(0,0),t){var e=window.location.hash.substring(1).split("/"),n=e[1]||"",i=void 0;return e[1]&&e[1].match(/^(parent_platforms|developers|publishers|genres|tags)=\d+/)&&(i=e[1].split("=")[0],n=e[1].split("=")[1]),r.default[e[0]]({pageArgument:n,pageContent:t,typeArgument:i}),!0}return console.error("Oups, there was an issue!"),!1},a=function(){var t=window.location.hash.substring(1).split("/");return console.log(t),""===t[0]||"pageList"===t[0]?window.location.hash:e.previous_path};window.addEventListener("hashchange",(function(){i(),e.previous_path=a()})),window.addEventListener("DOMContentLoaded",(function(){i(),e.previous_path=a()}))},862:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(484),i=n(285),a=function(){function t(t,e){Object.assign(this,t),this.screenshots=e,this.formatReleased()}return t.prototype.getTrailer=function(){var t=this;if(0===this.movies_count)return this;var e="https://api.rawg.io/api/games/".concat(this.id,"/movies?key=").concat("de92c7a378e6497c88c0435e934fd4d4");return fetch(e).then((function(t){return t.json()})).then((function(e){var n;return t.trailer=null===(n=null==e?void 0:e.results[0])||void 0===n?void 0:n.data[480]})).catch((function(t){return console.error("Erreur ! 💥💥💥💥💥 =>",t)})),this},t.prototype.getScreenshots=function(){var t=this,e="https://api.rawg.io/api/games/".concat(this.id,"/screenshots?key=").concat("de92c7a378e6497c88c0435e934fd4d4");return fetch(e).then((function(t){return t.json()})).then((function(e){return t.screenshots=e.results.map((function(t){return t.image}))})).then((function(t){var e=document.querySelector(".screenshots");e&&(e.innerHTML=t.map((function(t){return'<img src="'.concat(t,'" alt="Screenshot">')})).join("\n"))})).catch((function(t){return console.error("Erreur ! 💥💥💥💥💥 =>",t)})),this},t.prototype.formatReleased=function(){r.extend(i);var t=r(this.released,"YYYY-MM-DD").format("MMM DD, YYYY");return"Invalid Date"===t?(this.released="Release Date Not Revealed",this):(this.released=t,this)},t}();e.default=a},158:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(607),i=n(822),a=n(862);e.default=function(t){var e,n=t.pageArgument,s=t.pageContent,o=function(t){var e=document.querySelector(".page-details");console.log(t),e&&(e.innerHTML="".concat((0,i.default)(t)))};s.innerHTML='\n    <section class="page-details">\n      Hey, this is the Details Page of '.concat(n,"!\n    </section>\n    "),(e=r.games.find((function(t){return t.id===Number(n)})))?o(e):fetch("https://api.rawg.io/api/games/".concat(n,"?key=").concat("de92c7a378e6497c88c0435e934fd4d4")).then((function(t){return t.json()})).then((function(t){return o(new a.default(t).getTrailer().getScreenshots())}))}},415:function(t,e,n){"use strict";var r=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,i=0,a=e.length;i<a;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0});var i=n(482),a=n(604),s=n(484),o=n(607),c=n(862);e.default=function(t){var e=t.pageArgument,n=t.pageContent,u=t.typeArgument,d=1,l=function(t,e){void 0===e&&(e=void 0);var n=e?"".concat(t,"&search=").concat(e):t;console.log(n),fetch(n).then((function(t){return t.json()})).then((function(t){return f(t.results)})).catch((function(t){console.error("Erreur ! 💥💥💥💥💥 =>",t),p()}))},f=function(t){1===d&&o.games.splice(0,o.games.length),t.forEach((function(t){fetch("https://api.rawg.io/api/games/".concat(t.id,"?&key=").concat("de92c7a378e6497c88c0435e934fd4d4")).then((function(t){return t.json()})).then((function(e){return o.games.push(new c.default(e,t.short_screenshots.map((function(t){return t.image}))))})).then((function(){return h()})).catch((function(t){console.error("Erreur ! 💥💥💥💥💥 =>",t),p()}))}))},h=function(){var t=r([],o.games,!0).map((function(t){return(0,i.default)(t)})),e=document.querySelector(".page-list .articles");e?e.innerHTML=t.slice(0,9*d).join("\n"):p()},p=function(){n.innerHTML='\n    <section class="page-list">\n      <div class="articles">Oups ! Nous n\'avons pas réussi à charger le contenu 😅 !</div>\n    </section>\n    '};!function(){n.innerHTML='\n      <section class="page-list">\n        <div class="description">\n          <h2>Welcome,</h2>\n          <p>The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame, the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure to the entire video game industry, all under one roof. This text seems familiar.</p>\n          '.concat((0,a.default)(),'\n        </div>\n        <div class="articles">...loading</div>\n        <button class="show-more">Show More</button>\n      </section>\n    ');var t=document.querySelector(".show-more");null==t||t.addEventListener("click",(function(){return d>=2&&t.remove(),d++,h()}));var r=document.querySelector("select");r&&r.addEventListener("click",(function(){window.location.hash=""===r.value?"":"pageList/parent_platforms=".concat(r.value)})),o.previous_path===window.location.hash?h():function(){if(u)l("https://api.rawg.io/api/games?ordering=-added&page_size=27&".concat(u,"=").concat(e,"&key=").concat("de92c7a378e6497c88c0435e934fd4d4"));else if(""!==e){var t=e.replace(/(\s|%20)+/g,"-");console.log(t),l("https://api.rawg.io/api/games?key=".concat("de92c7a378e6497c88c0435e934fd4d4","&page_size=27"),t)}else l("https://api.rawg.io/api/games?dates=".concat(s().format("YYYY-MM-DD"),",").concat(s().add(1,"year").format("YYYY-MM-DD"),"&ordering=-added&page_size=27&key=").concat("de92c7a378e6497c88c0435e934fd4d4"))}()}()}},742:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r=e.map((function(t){return'<a href="#pageList/'.concat(n,"=").concat(t.id,'">').concat(t.name,"</a>")})).join(", ");return'\n  <div class="detail">\n    <p class="detail__name">'.concat(t,'</p>\n    <p class="detail__values">').concat(r,"</p>\n  </div>\n  ")}},482:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(966);e.default=function(t){var e=t.background_image,n=t.id,i=t.name,a=t.parent_platforms,s=t.released,o=t.rating,c=t.ratings_count,u=t.genres,d=t.developers.map((function(t){return'<span class="dev">'.concat(t.name,"</span>")})),l=u.map((function(t){return'<span class="genre">'.concat(t.name,"</span>")})).join(", ");return'\n  <article class="card-game">\n  <a href="#pageDetail/'.concat(n,'">\n    <div class="card-game__header">\n      <img src="').concat(e,'">\n      <div class="details">\n        <h4 class="released">').concat(s,'</h4>\n        <h4 class="developers">').concat(d,'</h4>\n        <h4 class="rating">').concat(o,"/5 - ").concat(c,' votes</h4>\n        <p class="genres">').concat(l,'</p>\n      </div>\n    </div>\n    <h3 class="card-game__title">').concat(i,'</h3>\n    <div class="card-game__platforms">\n      ').concat((0,r.default)(a),"\n    </div>\n  </a>\n  </article>\n  ")}},822:function(t,e,n){"use strict";var r=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,i=0,a=e.length;i<a;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0});var i=n(607),a=n(742),s=n(482);e.default=function(t){var e=t.id,n=t.name,o=t.description,c=t.released,u=t.background_image,d=t.website,l=t.rating,f=t.ratings_count,h=t.parent_platforms,p=t.stores,v=t.developers,g=t.genres,m=t.tags,y=t.publishers,M=t.trailer,$=t.screenshots,_=p.map((function(t){return t.store})).map((function(t){return'<a class="store" href="'.concat(t.domain.match(/^http/)?t.domain:"http://"+t.domain,'">').concat(t.name,"</a>")})).join("\n"),w="";$&&(w=$.map((function(t){return'<img src="'.concat(t,'" alt="Screenshot">')})).join("\n"));var D="";M&&(D='<h1>Trailer</h1><video src="'.concat(M,'" type="video/mp4">'));var S=r([],i.games,!0).filter((function(t){return t.id!==e})).map((function(t){return(0,s.default)(t)})).slice(0,9).join("\n");return'\n  <div class="header">\n    <img src="'.concat(u,'" alt="illustration">\n    <a class="website" href="').concat(d,'" target="_blank">Check Website</a>\n  </div>\n  <div class="content">\n    <div class="content__header">\n      <h3 class="title">').concat(n,'</h3>\n      <h4 class="rating">').concat(l,"/5 - ").concat(f,'&nbsp;votes</h4>\n    </div>\n    <div class="description">\n      ').concat(o,'\n    </div>\n    <div class="details details-first">\n      <div class="detail">\n        <p class="detail__name">Release Date</p>\n        <p class="detail__values">').concat(c,"</p>\n      </div>\n      ").concat((0,a.default)("Developer(s)",v,"developers"),"\n      ").concat((0,a.default)("Platforms",h.map((function(t){return t.platform})),"parent_platforms"),"\n      ").concat((0,a.default)("Publisher(s)",y,"publishers"),'\n    </div>\n    <div class="details details-last">\n      ').concat((0,a.default)("Genre(s)",g,"genres"),"\n      ").concat((0,a.default)("Tags",m.filter((function(t){return"eng"===t.language})),"tags"),"\n    </div>\n    <h1>Buy</h1>\n    ").concat(_,"\n    ").concat(D,'\n    <h1>Screenshots</h1>\n    <div class="screenshots articles">\n      ').concat(w,'\n    </div>\n    <h1>Similar Games</h1>\n    <div class="articles">\n      ').concat(S,"\n    </div>\n  </div>\n  ")}},966:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(418),i=n(798),a=n(696),s=n(424),o=n(843),c=n(447),u=n(978);e.default=function(t){var e={pc:c.default,xbox:u.default,playstation:s.default,nintendo:o.default,ios:i.default,android:i.default,linux:r.default};return null==t?void 0:t.map((function(t){var n=t.platform,r=n.slug,i=n.name,s=n.id;return'\n      <div class="icon">\n        <div class="hover">'.concat(i,'</div>\n        <a href="#pageList/parent_platforms=').concat(s,'">\n          <img class="icon" src="').concat(e[r]||(e[r]=a.default),'" alt="').concat(i,'">\n        </a>\n      </div>\n    ')})).join("\n")}},604:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return'\n  <select class="platform-select">\n    <option selected value="">Platform: Any</option>\n    <option value="2">PlayStation</option>\n    <option value="3">XBox</option>\n    <option value="7">Switch</option>\n    <option value="1">PC</option>\n    <option value="6">Linux</option>\n    <option value="8,4">Mobile</option>\n  </select>\n  '}},601:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(158),i=n(415),a={"":i.default,pageList:i.default,pageDetail:r.default};e.default=a}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.p="",n(607)})();