"use strict";(self.webpackChunkjcp=self.webpackChunkjcp||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=c,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7294),c=n(6010),o=n(2802),a=n(9960),i=n(3919),l=n(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,c.Z)("card padding--lg",s)},n)}function p(e){let{href:t,icon:n,title:o,description:a}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:o},n," ",o),a&&r.createElement("p",{className:(0,c.Z)("text--truncate",d),title:a},a))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:null==c?void 0:c.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const a=(0,o.MN)(t);return r.createElement("section",{className:(0,c.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),c=(n(7294),n(3905)),o=n(2991);const a={},i="Introduction",l={unversionedId:"index",id:"index",title:"Introduction",description:"A collection of useful guides, commands, shortcuts and code snippets.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",lastUpdatedBy:"James C. Palmer",lastUpdatedAt:1665511456,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{},sidebar:"docs",next:{title:"Dotfiles",permalink:"/docs/dotfiles"}},s={},u=[{value:"Documents",id:"documents",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"introduction"},"Introduction"),(0,c.kt)("p",null,"A collection of useful guides, commands, shortcuts and code snippets."),(0,c.kt)("h2",{id:"documents"},"Documents"),(0,c.kt)(o.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);