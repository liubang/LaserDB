(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=n,d=s["".concat(i,".").concat(f)]||s[f]||b[f]||o;return t?a.a.createElement(d,c(c({ref:r},p),{},{components:t})):a.a.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(6),o=(t(0),t(100)),i={id:"fqa",title:"\u5e38\u89c1\u95ee\u9898",sidebar_label:"\u5e38\u89c1\u95ee\u9898",slug:"/fqa"},c={unversionedId:"fqa",id:"fqa",isDocsHomePage:!1,title:"\u5e38\u89c1\u95ee\u9898",description:"\u901a\u7528",source:"@site/docs/fqa.md",slug:"/fqa",permalink:"/docs/fqa",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/fqa.md",version:"current",sidebar_label:"\u5e38\u89c1\u95ee\u9898",sidebar:"docs",previous:{title:"\u9519\u8bef\u7801",permalink:"/docs/reference/server-error-code"},next:{title:"\u672f\u8bed\u8868",permalink:"/docs/terminology"}},l=[{value:"\u901a\u7528",id:"\u901a\u7528",children:[]}],p={rightToc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u901a\u7528"},"\u901a\u7528"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u4ec0\u4e48\u662f LaserDB?"),Object(o.b)("p",{parentName:"li"},"  LaserDB \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u5728\u7ebf\u5206\u5e03\u5f0f KV \u6570\u636e\u5e93\uff0c\u5b83\u652f\u6301\u9ad8\u6027\u80fd\u8bfb\u5199\u3001\u6279\u91cf\u5bfc\u5165\u3001\u6279\u91cf\u83b7\u53d6\u3001\u5355\u96c6\u7fa4\u591a\u79df\u6237\u7b49\u7279\u6027, \u662f\u4e00\u4e2a\u6ee1\u8db3\u673a\u5668\u5b66\u4e60\u3001\u6df1\u5ea6\u5b66\u4e60\u6216\u8005\n\u5176\u4ed6\u4e1a\u52a1\u573a\u666f\u7684\u9ad8\u6027\u80fd\u3001\u5927\u5bb9\u91cf KV \u5b58\u50a8\u6570\u636e\u5e93\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"LaserDB \u548c Redis \u5173\u7cfb\uff1f"),Object(o.b)("p",{parentName:"li"},"  LaserDB \u53ea\u662f\u901a\u8fc7 LaserProxy \u652f\u6301\u517c\u5bb9\u4e86 Redis \u534f\u8bae\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Redis client \u548c LaserProxy \u4ea4\u4e92\u5b8c\u6210\u6570\u636e\u7684\u8bfb\u5199\uff0c\u5f53\u7136 LaserDB \u4e5f\u63d0\u4f9b\u4e86\nC++ \u548c Golang \u7684\u5ba2\u6237\u7aef SDK \u53ef\u4ee5\u66f4\u52a0\u9ad8\u6548\u7684\u4e0e LaserServer \u4ea4\u4e92\n")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"LaserDB \u662f\u5426\u652f\u6301\u8bfb\u5199\u5206\u79bb\uff1f"),Object(o.b)("p",{parentName:"li"},"  LaserDB \u5728 Laser Client \u5c42\u4e0a\u81ea\u52a8\u8fdb\u884c\u5224\u65ad\u4e3b\u4ece\uff0c\u5982\u679c\u662f\u5199\u64cd\u4f5c\u90fd\u4f1a\u5728\u4e3b\u8282\u70b9\u4e0a\u64cd\u4f5c\u5b8c\u6210\uff0c\u5982\u679c\u662f\u8bfb\u64cd\u4f5c\u7528\u6237\u53ef\u4ee5\u9009\u62e9 Leader_read(\u4ec5\u4ece\u4e3b\u8282\u70b9\u8bfb\u53d6)\u3001Follower_read(\u4ec5\u4ece\u4ece\u8282\u70b9\u4e0a\u8bfb\u53d6) \u4e0e Mixed_read(\u4e3b\u4ece\u6df7\u5408\u8bfb\u53d6)\n\u4e09\u79cd\u6a21\u5f0f\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u90e8\u7f72\u60c5\u51b5\u6216\u8005\u4e1a\u52a1\u9700\u6c42\u7075\u6d3b\u8fdb\u884c\u9009\u62e9\uff0c\u9664\u4e86 Laser Client \u652f\u6301\u8bfb\u5199\u6a21\u5f0f\u9009\u62e9\u5916\uff0cLaser Proxy \u7528\u6237\u4e5f\u53ef\u4ee5\u7075\u6d3b\u7684\u6307\u5b9a"))))}u.isMDXComponent=!0}}]);