"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4212],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),i=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=i(e.components);return o.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(t),p=r,y=m["".concat(d,".").concat(p)]||m[p]||c[p]||a;return t?o.createElement(y,u(u({ref:n},s),{},{components:t})):o.createElement(y,u({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,u=new Array(a);u[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var i=2;i<a;i++)u[i]=t[i];return o.createElement.apply(null,u)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1951:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),u=["components"],l={title:"Node Autonomy"},d=void 0,i={unversionedId:"user-manuals/autonomy/node-autonomy",id:"version-v0.7.0/user-manuals/autonomy/node-autonomy",isDocsHomePage:!1,title:"Node Autonomy",description:"1. Background",source:"@site/versioned_docs/version-v0.7.0/user-manuals/autonomy/node-autonomy.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/node-autonomy",permalink:"/docs/user-manuals/autonomy/node-autonomy",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/node-autonomy.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Congrool",lastUpdatedAt:1656948942,formattedLastUpdatedAt:"7/4/2022",frontMatter:{title:"Node Autonomy"},sidebar:"version-v0.7.0/docs",previous:{title:"YurtDeviceController",permalink:"/docs/core-concepts/yurt-device-controller"},next:{title:"Raven",permalink:"/docs/user-manuals/network/raven"}},s=[{value:"1. Background",id:"1-background",children:[],level:2},{value:"2. How to Use",id:"2-how-to-use",children:[],level:2},{value:"3. Note",id:"3-note",children:[],level:2}],c={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-background"},"1. Background"),(0,a.kt)("p",null,"The capability of Node Autonomy ensures that pods can run stably on edge nodes even when the network between cloud and edge jitters."),(0,a.kt)("p",null,"With Node Autonomy of OpenYurt, when cloud-edge network breaks, pods running on edge nodes can still run as they are instead of being rescheduled, and in addition they can successfully recover when the edge node restart."),(0,a.kt)("h2",{id:"2-how-to-use"},"2. How to Use"),(0,a.kt)("p",null,"Users can enable/disable Node Autonomy feature by following steps."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Add Autonomy Annotation Manually"))),(0,a.kt)("p",null,"Users can add autonomy annotation to nodes to enable the Node Autonomy feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# enable Node Autonomy on node1\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true\n")),(0,a.kt)("p",null,"There're following two ways to disable the Node Autonomy of node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# remove the autonomy annotation\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy-\n\n# set the value of autonomy annotation as false\nkubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enable/Disable Node Autonomy with Yurtctl"))),(0,a.kt)("p",null,"After compiling the Yurtctl, users can use it to enable/disable the Node Autonomy feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# enable autonomy on node1, node2\nyurtctl markautonomous -a node1,node2\n\n# enable autonomy on all edge nodes\nyurtctl markautonomous\n")),(0,a.kt)("h2",{id:"3-note"},"3. Note"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If enable the Node Autonomy feature, pods running on the node will never be evicted, no matter the NotReady is caused by disconnection between cloud and edge or by the breakdown of node itself."),(0,a.kt)("li",{parentName:"ul"},"It is not recommended to enable the Node Autonomy feature on cloud nodes. If enabled, pods cannot be evicted and rescheduled when the cloud node is NotReady.")))}m.isMDXComponent=!0}}]);