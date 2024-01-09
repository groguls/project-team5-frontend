"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[508],{697:(t,e,n)=>{n.d(e,{Z:()=>y});var a=n(7462),r=n(3366),o=n(2791),i=n(3733),u=n(2421),s=n(104),d=n(8519),c=n(418),l=n(184);const h=["className","component"];var m=n(5902),f=n(7107),g=n(988);const w=(0,n(5878).Z)("MuiBox",["root"]),v=(0,f.Z)(),b=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:e,defaultTheme:n,defaultClassName:m="MuiBox-root",generateClassName:f}=t,g=(0,u.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(s.Z),w=o.forwardRef((function(t,o){const u=(0,c.Z)(n),s=(0,d.Z)(t),{className:w,component:v="div"}=s,b=(0,r.Z)(s,h);return(0,l.jsx)(g,(0,a.Z)({as:v,ref:o,className:(0,i.Z)(w,f?f(m):m),theme:e&&u[e]||u},b))}));return w}({themeId:g.Z,defaultTheme:v,defaultClassName:w.root,generateClassName:m.Z.generate}),y=b},4461:(t,e,n)=>{function a(t){return t instanceof Date||"object"===typeof t&&"[object Date]"===Object.prototype.toString.call(t)}n.d(e,{W:()=>at});function r(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new t.constructor(+t):"number"===typeof t||"[object Number]"===e||"string"===typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function o(t){if(!a(t)&&"number"!==typeof t)return!1;const e=r(t);return!isNaN(Number(e))}const i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(t){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}const s={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function c(t){return(e,n)=>{let a;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=null!==n&&void 0!==n&&n.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=null!==n&&void 0!==n&&n.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function l(t){return function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?m(u,(t=>t.test(i))):h(u,(t=>t.test(i)));let d;d=t.valueCallback?t.valueCallback(s):s,d=n.valueCallback?n.valueCallback(d):d;const c=e.slice(i.length);return{value:d,rest:c}}}function h(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function m(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}var f;const g={code:"en-US",formatDistance:(t,e,n)=>{let a;const r=i[t];return a="string"===typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:s,formatRelative:(t,e,n,a)=>d[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:c({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:c({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:c({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:c({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:c({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=t.match(f.matchPattern);if(!n)return null;const a=n[0],r=t.match(f.parsePattern);if(!r)return null;let o=f.valueCallback?f.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;const i=t.slice(a.length);return{value:o,rest:i}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let w={};function v(){return w}Math.pow(10,8);const b=6048e5;function y(t){const e=r(t);return e.setHours(0,0,0,0),e}function p(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function M(t,e){const n=y(t),a=y(e),r=n.getTime()-p(n),o=a.getTime()-p(a);return Math.round((r-o)/864e5)}function k(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function x(t){const e=r(t),n=k(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function P(t){const e=r(t);return M(e,x(e))+1}function D(t,e){var n,a,o,i,u,s,d,c;const l=v(),h=null!==(n=null!==(a=null!==(o=null!==(i=null===e||void 0===e?void 0:e.weekStartsOn)&&void 0!==i?i:null===e||void 0===e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==o?o:l.weekStartsOn)&&void 0!==a?a:null===(d=l.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0,m=r(t),f=m.getDay(),g=(f<h?7:0)+f-h;return m.setDate(m.getDate()-g),m.setHours(0,0,0,0),m}function S(t){return D(t,{weekStartsOn:1})}function W(t){const e=r(t),n=e.getFullYear(),a=k(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const o=S(a),i=k(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const u=S(i);return e.getTime()>=o.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function T(t){const e=W(t),n=k(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),S(n)}function C(t){const e=r(t),n=S(e).getTime()-T(e).getTime();return Math.round(n/b)+1}function N(t,e){var n,a,o,i,u,s,d,c;const l=r(t),h=l.getFullYear(),m=v(),f=null!==(n=null!==(a=null!==(o=null!==(i=null===e||void 0===e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null===e||void 0===e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==a?a:null===(d=m.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1,g=k(t,0);g.setFullYear(h+1,0,f),g.setHours(0,0,0,0);const w=D(g,e),b=k(t,0);b.setFullYear(h,0,f),b.setHours(0,0,0,0);const y=D(b,e);return l.getTime()>=w.getTime()?h+1:l.getTime()>=y.getTime()?h:h-1}function Y(t,e){var n,a,r,o,i,u,s,d;const c=v(),l=null!==(n=null!==(a=null!==(r=null!==(o=null===e||void 0===e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null===e||void 0===e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==r?r:c.firstWeekContainsDate)&&void 0!==a?a:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1,h=N(t,e),m=k(t,0);m.setFullYear(h,0,l),m.setHours(0,0,0,0);return D(m,e)}function O(t,e){const n=r(t),a=D(n,e).getTime()-Y(n,e).getTime();return Math.round(a/b)+1}function q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const F={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return q("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):q(n+1,2)},d:(t,e)=>q(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>q(t.getHours()%12||12,e.length),H:(t,e)=>q(t.getHours(),e.length),m:(t,e)=>q(t.getMinutes(),e.length),s:(t,e)=>q(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return q(Math.floor(a*Math.pow(10,n-3)),e.length)}},H="midnight",j="noon",E="morning",z="afternoon",L="evening",Q="night",A={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return F.y(t,e)},Y:function(t,e,n,a){const r=N(t,a),o=r>0?r:1-r;if("YY"===e){return q(o%100,2)}return"Yo"===e?n.ordinalNumber(o,{unit:"year"}):q(o,e.length)},R:function(t,e){return q(W(t),e.length)},u:function(t,e){return q(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return q(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return q(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return F.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return q(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=O(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):q(r,e.length)},I:function(t,e,n){const a=C(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):q(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):F.d(t,e)},D:function(t,e,n){const a=P(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):q(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return q(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?j:0===a?H:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?L:a>=12?z:a>=4?E:Q,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return F.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):F.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):q(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):q(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):F.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):F.s(t,e)},S:function(t,e){return F.S(t,e)},X:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return G(r);case"XXXX":case"XX":return X(r);default:return X(r,":")}},x:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return G(r);case"xxxx":case"xx":return X(r);default:return X(r,":")}},O:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(r,":");default:return"GMT"+X(r,":")}},z:function(t,e,n,a){const r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(r,":");default:return"GMT"+X(r,":")}},t:function(t,e,n,a){const r=a._originalDate||t;return q(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return q((a._originalDate||t).getTime(),e.length)}};function B(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+q(o,2)}function G(t,e){if(t%60===0){return(t>0?"-":"+")+q(Math.abs(t)/60,2)}return X(t,e)}function X(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=t>0?"-":"+",a=Math.abs(t),r=q(Math.floor(a/60),2),o=q(a%60,2);return n+r+e+o}const Z=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},_=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},J={p:_,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return Z(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",Z(a,e)).replace("{{time}}",_(r,e))}},I=/^D+$/,R=/^Y+$/,U=["D","DD","YY","YYYY"];function $(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return"Use `".concat(t.toLowerCase(),"` instead of `").concat(t,"` (in `").concat(e,"`) for formatting ").concat(a," to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md")}(t,e,n);if(console.warn(a),U.includes(t))throw new RangeError(a)}const V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tt=/^'([^]*?)'?$/,et=/''/g,nt=/[a-zA-Z]/;function at(t,e,n){var a,i,u,s,d,c,l,h,m,f,w,b,y,p,M,k,x,P;const D=v(),S=null!==(a=null!==(i=null===n||void 0===n?void 0:n.locale)&&void 0!==i?i:D.locale)&&void 0!==a?a:g,W=null!==(u=null!==(s=null!==(d=null!==(c=null===n||void 0===n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null===n||void 0===n||null===(l=n.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==d?d:D.firstWeekContainsDate)&&void 0!==s?s:null===(m=D.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==u?u:1,T=null!==(w=null!==(b=null!==(y=null!==(p=null===n||void 0===n?void 0:n.weekStartsOn)&&void 0!==p?p:null===n||void 0===n||null===(M=n.locale)||void 0===M||null===(k=M.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==y?y:D.weekStartsOn)&&void 0!==b?b:null===(x=D.locale)||void 0===x||null===(P=x.options)||void 0===P?void 0:P.weekStartsOn)&&void 0!==w?w:0,C=r(t);if(!o(C))throw new RangeError("Invalid time value");const N={firstWeekContainsDate:W,weekStartsOn:T,locale:S,_originalDate:C};return e.match(K).map((function(t){const e=t[0];if("p"===e||"P"===e){return(0,J[e])(t,S.formatLong)}return t})).join("").match(V).map((function(a){if("''"===a)return"'";const r=a[0];if("'"===r)return function(t){const e=t.match(tt);if(!e)return t;return e[1].replace(et,"'")}(a);const o=A[r];if(o)return null!==n&&void 0!==n&&n.useAdditionalWeekYearTokens||(i=a,!R.test(i))||$(a,e,String(t)),null!==n&&void 0!==n&&n.useAdditionalDayOfYearTokens||!function(t){return I.test(t)}(a)||$(a,e,String(t)),o(C,a,S.localize,N);var i;if(r.match(nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return a})).join("")}}}]);
//# sourceMappingURL=508.7f76387e.chunk.js.map