"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9423],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return s}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),k=p(n),s=l,y=k["".concat(a,".").concat(s)]||k[s]||d[s]||o;return n?r.createElement(y,u(u({ref:t},i),{},{components:n})):r.createElement(y,u({ref:t},i))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,u=new Array(o);u[0]=k;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:l,u[1]=c;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return i},default:function(){return k}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),u=["components"],c={title:"Yurtctl convert/revert"},a=void 0,p={unversionedId:"openyurt-install/yurtctl-convert-revert",id:"openyurt-install/yurtctl-convert-revert",isDocsHomePage:!1,title:"Yurtctl convert/revert",description:"\u6253\u5f00openYurt\u7684README.md\uff0c\u5728\u7b80\u5355\u4ecb\u7ecd\u4e4b\u540e\u5c31\u662fGetting started:",source:"@site/docs/openyurt-install/yurtctl-convert-revert.md",sourceDirName:"openyurt-install",slug:"/openyurt-install/yurtctl-convert-revert",permalink:"/docs/openyurt-install/yurtctl-convert-revert",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/openyurt-install/yurtctl-convert-revert.md",tags:[],version:"current",lastUpdatedBy:"Peeknut",lastUpdatedAt:1638522440,formattedLastUpdatedAt:"12/3/2021",frontMatter:{title:"Yurtctl convert/revert"},sidebar:"docs",previous:{title:"Manually Setup",permalink:"/docs/manually-setup"},next:{title:"Architecture",permalink:"/docs/core-concepts/architecture"}},i=[{value:"yurtctl convert \u5230\u5e95\u505a\u4e86\u4e9b\u4ec0\u4e48\uff1f",id:"yurtctl-convert-\u5230\u5e95\u505a\u4e86\u4e9b\u4ec0\u4e48",children:[{value:"\u6838\u5fc3\u6d41\u7a0b",id:"\u6838\u5fc3\u6d41\u7a0b",children:[],level:3},{value:"disable nodelifecycle controller \u505a\u4e86\u4ec0\u4e48\uff1f",id:"disable-nodelifecycle-controller-\u505a\u4e86\u4ec0\u4e48",children:[],level:3},{value:"\u8282\u70b9\u8f6c\u6362\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff0c\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u6709\u4ec0\u4e48\u5dee\u5f02?",id:"\u8282\u70b9\u8f6c\u6362\u662f\u600e\u4e48\u5b9e\u73b0\u7684\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u6709\u4ec0\u4e48\u5dee\u5f02",children:[{value:"kubelet\u7684\u4fee\u6539",id:"kubelet\u7684\u4fee\u6539",children:[],level:5},{value:"yurthub\u7684\u542f\u52a8\u7ec6\u8282",id:"yurthub\u7684\u542f\u52a8\u7ec6\u8282",children:[],level:5}],level:3},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",children:[],level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:3}],level:2},{value:"yurtctl revert \u53c8\u5e72\u4e86\u4e9b\u4ec0\u4e48\uff1f",id:"yurtctl-revert-\u53c8\u5e72\u4e86\u4e9b\u4ec0\u4e48",children:[{value:"\u6838\u5fc3\u6d41\u7a0b",id:"\u6838\u5fc3\u6d41\u7a0b-1",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3-1",children:[],level:2}],d={toc:i};function k(e){var t=e.components,n=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6253\u5f00openYurt\u7684README.md\uff0c\u5728\u7b80\u5355\u4ecb\u7ecd\u4e4b\u540e\u5c31\u662fGetting started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," yurtctl convert --provider [minikube|kubeadm|kind] // To convert an existing Kubernetes cluster to an OpenYurt cluster\n yurtctl revert // To uninstall and revert back to the original cluster settings\n")),(0,o.kt)("p",null,"\u7b80\u5355\u4e00\u884c\u547d\u4ee4\u5c31\u53ef\u4f53\u9a8cOpenYurt\u4e86\uff0c\u611f\u89c9\u975e\u5e38\u65b9\u4fbf\u3002"),(0,o.kt)("p",null,"\u7a0d\u7b49\uff01\u4e3a\u4ec0\u4e48\u662f convert/revert \u800c\u4e0d\u662f install/uninstall ?"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u5bf9\u96c6\u7fa4\u505a\u4e86\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,"\u770b\u6765\uff0c\u5728\u6267\u884c\u5b83\u4e4b\u524d\u6709\u5fc5\u8981\u641e\u6e05\u695a\u5b83\u5230\u5e95\u505a\u4e86\u4ec0\u4e48\u3002"),(0,o.kt)("h2",{id:"yurtctl-convert-\u5230\u5e95\u505a\u4e86\u4e9b\u4ec0\u4e48"},"yurtctl convert \u5230\u5e95\u505a\u4e86\u4e9b\u4ec0\u4e48\uff1f"),(0,o.kt)("h3",{id:"\u6838\u5fc3\u6d41\u7a0b"},"\u6838\u5fc3\u6d41\u7a0b"),(0,o.kt)("p",null,"\u8ddf\u968fopenYurt",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/5063752a9f6645270e3177e39a46df8c23145af2/pkg/yurtctl/cmd/convert/convert.go#L300"},"\u6e90\u4ee3\u7801"),"\uff0c\u68b3\u7406\u4e86convert\u7684\u6838\u5fc3\u6d41\u7a0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. \u68c0\u67e5\n   1.1 \u68c0\u67e5\u6240\u6709node\u8282\u70b9\u72b6\u6001\u4e3aready\n2. \u7ec4\u4ef6\u90e8\u7f72\n  2.1 \u7ed9node\u8282\u70b9\u6253\u4e0a\u76f8\u5e94\u7684label\u3002\n  2.2 \u4f7f\u7528deployment\u90e8\u7f72yurt-controller-manager\u3002\n  2.3 \u4f7f\u7528deployment\u90e8\u7f72yurt-tunnel-server\u3002\n  2.4 \u4f7f\u7528daemonset\u90e8\u7f72yurt-tunnel-agent\uff0c\u90e8\u7f72\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u3002\n  2.5 \u4f7f\u7528deployment\u90e8\u7f72yurt-app-manager\u3002\n3. k8s\u7ec4\u4ef6\u4fee\u6539\n  3.1 \u4fee\u6539kube-controller-manager.yaml\uff0c\u7528\u6765disable nodelifecycle controller\n4. \u8282\u70b9\u8f6c\u6362\n   4.1 \u5199\u5165yurthub.yaml\u5230/etc/kubernetes/manifests\uff0c\u542f\u52a8\u9759\u6001pod\n   4.2 \u4fee\u6539kubelet\u914d\u7f6e\uff0c\u4f7f\u5f97kubelet\u8bbf\u95eeyurthub\u800c\u4e0d\u662f\u76f4\u8fdeapiServer\n")),(0,o.kt)("p",null,"\u53ef\u89c11\u30012\u5e76\u6ca1\u6709\u4ec0\u4e48\u7279\u522b\uff0c\u53ea\u662f\u5e38\u89c4\u7684\u670d\u52a1\u90e8\u7f72"),(0,o.kt)("p",null,"3\uff0c\u5219\u662f\u5bf9\u539f\u6709k8s\u7cfb\u7edf\u7ec4\u4ef6\u7684\u64cd\u4f5c\uff0c\u9700\u8981\u7279\u522b\u6ce8\u610f"),(0,o.kt)("p",null,"4-\u8282\u70b9\u8f6c\u6362\u770b\u7740\u4e5f\u5e76\u4e0d\u590d\u6742\uff0c\u5374\u5bf9\u8fb9\u7f18\u81f3\u5173\u91cd\u8981\u3002"),(0,o.kt)("h3",{id:"disable-nodelifecycle-controller-\u505a\u4e86\u4ec0\u4e48"},"disable nodelifecycle controller \u505a\u4e86\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,"\u5de5\u4f5c\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. \u67e5\u8be2\u63a7\u5236\u9762\u8282\u70b9\n2. \u521b\u5efajob\uff0c\u901a\u8fc7` nodeName: {{.nodeName}}` \u786e\u4fddjob\u7684pod\u8c03\u5ea6\u5230\u5bf9\u5e94node\u4e0a\u6267\u884c(\u901a\u8fc7nsenter\u7684\u65b9\u5f0f\u6267\u884c\uff0c\u4fee\u6539\u5bbf\u4e3b\u673a\u4e0a\u6587\u4ef6)\u3002\n3. sed -i 's/--controllers=/--controllers=-nodelifecycle,/g' /etc/kubernetes/manifests/kube-controller-manager.yaml\n")),(0,o.kt)("p",null,"\u67e5\u770bkube-controller-manager.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\ncontainers:\n- command:\n- kube-controller-manager\n- --allocate-node-cidrs=true\n    ...\n- --controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner\n...\n")),(0,o.kt)("p",null,"\u53ef\u89c1\uff0c\u4e0a\u9762\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\u6700\u7ec8\u5c31\u662f\u4fee\u6539\u4e86kube-controller-manager\u7684\u542f\u52a8\u547d\u4ee4\u3002"),(0,o.kt)("p",null,"\u67e5\u770bkube-controller-manager\u542f\u52a8\u53c2\u6570\u8bf4\u660e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--controllers \u4ee3\u8868\u9700\u8981\u5f00\u542f\u7684controller\u5217\u8868\n")),(0,o.kt)("p",null,"\u53ef\u89c1\uff0csed\u547d\u4ee4\u5c31\u662f\u53bb\u6389\u4e86nodelifecycle\u8fd9\u4e2acontroller\u3002"),(0,o.kt)("p",null,"\u90a3\uff0cnodelifecycle controller\u662f\u505a\u4ec0\u4e48\u7684\uff1f"),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. \u4e0d\u65ad\u76d1\u542c\uff0ckubelet\u4e0a\u62a5\u4e0a\u6765\u7684node\u4fe1\u606f\n2. \u5982\u679c\u67d0\u4e2anode\u72b6\u6001\u5f02\u5e38\uff0c\u6216\u8005\u8bf4\u957f\u65f6\u95f4\u6ca1\u6709\u4e0a\u62a5\u7b49\n  2.1 \u9a71\u9010\u8fd9\u4e2anode\u8282\u70b9\u6216\u8005\u5176\u4ed6 ---\x3e \u5bfc\u81f4\u4e0a\u9762\u7684pod\u88ab\u91cd\u65b0\u8c03\u5ea6\n")),(0,o.kt)("p",null,"\u53ef\u89c1\uff0c\u5bf9\u4e8e\u5904\u4e8e\u5f31\u7f51\u73af\u5883\u7684\u8fb9\u7f18\u8282\u70b9\uff0c\u5f88\u5bb9\u6613\u5c31\u547d\u4e2d\u5f02\u5e38\u72b6\u6001\uff0c\u5bfc\u81f4node\u88ab\u9a71\u9010\uff0cpod\u88ab\u91cd\u65b0\u8c03\u5ea6\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u8fd9\u91cc\u628a\u5b83\u53bb\u6389\u4e86\u3002\u4f7f\u7528yurt-controller-manager\u6765\u4ee3\u66ff\u5b83\u3002"),(0,o.kt)("p",null,"\u5373\u4f7f\u8282\u70b9\u5fc3\u8df3\u4e22\u5931\uff0c\u5904\u4e8e\u81ea\u6cbb\u6a21\u5f0f\u7684\u8282\u70b9\u4e2d\u7684pod\u4e5f\u4e0d\u4f1a\u4eceAPIServer\u4e2d\u9a71\u9010\u3002"),(0,o.kt)("p",null,"\u6ce8\uff1a\u8fd9\u91cc\u81ea\u6cbb\u6a21\u5f0f\u7684\u8282\u70b9\uff0c\u6307\u7684\u5c31\u662f\u8fb9\u7f18\u8282\u70b9\u3002\u6211\u4eec\u901a\u5e38\u4f1a\u901a\u8fc7\u52a0annotation\u7684\u65b9\u5f0f\u628a\u8282\u70b9\u6807\u8bb0\u4e3a\u81ea\u6cbb\u8282\u70b9\u3002"),(0,o.kt)("h3",{id:"\u8282\u70b9\u8f6c\u6362\u662f\u600e\u4e48\u5b9e\u73b0\u7684\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u6709\u4ec0\u4e48\u5dee\u5f02"},"\u8282\u70b9\u8f6c\u6362\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff0c\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u6709\u4ec0\u4e48\u5dee\u5f02?"),(0,o.kt)("p",null,"\u540c\u6837\uff0c\u662f\u901a\u8fc7\u8dd1job\u7684\u65b9\u5f0f\uff0c\u5728\u76ee\u6807\u5bbf\u4e3b\u673a\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\u76f8\u5173\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u4e0d\u8fc7\uff0c\u76f8\u6bd4\u4e8e\u66b4\u529b\u4f7f\u7528nsenter\uff0c\u8fd9\u91cc\u7528\u4e86\u66f4\u52a0\u4f18\u96c5\u7684\u65b9\u5f0f\u3002\u901a\u8fc7\u5c06\u5bbf\u4e3b\u673a\u6839\u8def\u5f84 volume\u6302\u8f7d\u5230\u5bb9\u5668\u91cc\u7684\u65b9\u5f0f\u3002"),(0,o.kt)("h5",{id:"kubelet\u7684\u4fee\u6539"},"kubelet\u7684\u4fee\u6539"),(0,o.kt)("p",null,"\u5728\u6587\u4ef6/var/lib/kubelet/kubeadm-flags.env \u4e2d\u4e3aKUBELET_KUBEADM_ARGS\u6dfb\u52a0\u914d\u7f6e\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--kubeconfig=/var/lib/openyurt/kubelet.conf --bootstrap-kubeconfig=")),(0,o.kt)("p",null,"\u4f5c\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. \u53c2\u6570\uff1a--kubeconfig \uff0c \u7ed9kubelet\u6307\u5b9a\u4e86\u8bbf\u95eeapiServer\u7684\u914d\u7f6e\u6587\u4ef6\u3002\n2. \u5f53--kubeconfig \u6587\u4ef6\u5b58\u5728\uff0c--bootstrap-kubeconfig\u4e3a\u7a7a\u65f6\uff0c\n   kubelet\u542f\u52a8\u5c31\u4e0d\u9700\u8981\u901a\u8fc7bootstrap-token\u7f6e\u6362\u6587\u4ef6\u8bc1\u4e66\u7b49\u8fc7\u7a0b\uff0c\u76f4\u63a5\u8bfb\u53d6kubeconfig\u6587\u4ef6\u8bbf\u95eeapiServer\u3002\n3. \u7531\u4e8eKUBELET_KUBEADM_ARGS \u662fkubelet\u542f\u52a8\u53c2\u6570\u7684\u6700\u540e\u4e00\u90e8\u5206\uff0c\u6240\u4ee5\u53ef\u4ee5\u8d77\u5230\u8986\u76d6\u524d\u9762\u53c2\u6570\u7684\u4f5c\u7528\u3002\n")),(0,o.kt)("p",null,"\u5176\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/openyurt/kubelet.conf"),"\u5185\u5bb9\u5982\u4e0b\uff0c\u76f4\u63a5\u5c06\u6d41\u91cf\u6307\u5b9a\u5230yurthub\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apiVersion: v1\nclusters:\n- cluster:\nserver: http://127.0.0.1:10261\nname: default-cluster\ncontexts:\n- context:\ncluster: default-cluster\nnamespace: default\nuser: default-auth\nname: default-context\ncurrent-context: default-context\nkind: Config\npreferences: {}\n")),(0,o.kt)("h5",{id:"yurthub\u7684\u542f\u52a8\u7ec6\u8282"},"yurthub\u7684\u542f\u52a8\u7ec6\u8282"),(0,o.kt)("p",null,"yurthub\u5bb9\u5668\u542f\u52a8\u53c2\u6570\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"command:\n- yurthub\n- --v=2\n- --server-addr=__kubernetes_service_addr__\n- --node-name=$(NODE_NAME)\n- --join-token=__join_token__\n- --working-mode=__working_mode__\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u53c2\u6570\u6211\u4eec\u53ef\u770b\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. server-addr \u6307\u5b9a\u4e86\u4e91\u7aefapiServer\u5730\u5740\u3002\u6ce8\u610f\u8fd9\u91cc\u7684\u5730\u5740\u4e00\u5b9a\u662f\u516c\u7f51\u53ef\u8bbf\u95ee\u5730\u5740\uff0c\u5426\u5219\u5f02\u6784\u7f51\u7edc\u4e0b\u4f1a\u6709\u95ee\u9898\u3002\n2. join-token \u5c31\u662f\u52a0\u5165\u8282\u70b9\u7684token\uff0c\u53ef\u4f7f\u7528`kubeadm token create`\u6765\u521b\u5efa\u3002k8s\u63d0\u4f9b\u673a\u5236\uff0c\u901a\u8fc7token\u7f6e\u6362\u51fa\u6b63\u5e38\u8bbf\u95ee\u7684kubeconf\u6587\u4ef6\u3002\n3. working-mode\uff1a cloud/edge\u3002\u8fd9\u5c31\u662f\u8fb9\u7f18\u8282\u70b9\u548c\u4e91\u7aef\u8282\u70b9\u7684\u5dee\u5f02\u3002\n")),(0,o.kt)("p",null,"\u6211\u4eec\u90fd\u77e5\u9053yurthub\u53ef\u4ee5\u7528\u6765\u505a\u7f13\u5b58\uff0c\u662f\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u7684\u91cd\u8981\u73af\u8282\u3002\u90a3\u4e48\u4e91\u7aef\u4e3a\u4ec0\u4e48\u4e5f\u9700\u8981\u90e8\u7f72\uff1f\u4e3a\u4ec0\u4e48\u8fd8\u8981\u533a\u5206edge\u6216\u8005cloud\u5de5\u4f5c\u6a21\u5f0f\uff1f"),(0,o.kt)("p",null,"\u7b80\u5355\u67e5\u770byurthub\u6e90\u4ee3\u7801 cmd/yurthub/app/start.go:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'if cfg.WorkingMode == util.WorkingModeEdge {\n    cacheMgr, err = cachemanager.NewCacheManager(cfg.StorageWrapper, cfg.SerializerManager, cfg.RESTMapperManager, cfg.SharedFactory)\n    ...\n} else {\n    klog.Infof("%d. disable cache manager for node %s because it is a cloud node", trace, cfg.NodeName)\n}\nif cfg.WorkingMode == util.WorkingModeEdge {\n    ...\n    gcMgr, err := gc.NewGCManager(cfg, restConfigMgr, stopCh)\n} else {\n    klog.Infof("%d. disable gc manager for node %s because it is a cloud node", trace, cfg.NodeName)\n}\n')),(0,o.kt)("p",null,"\u53ef\u89c1\uff0c\u4e91\u7aefyurthub\uff0c\u5c11\u505a\u4e86 cache\u3001GC\u7684\u5de5\u4f5c\u3002"),(0,o.kt)("p",null,"\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/450"},"issue")," \u53ef\u4e86\u89e3\uff1a\u4e91\u7aef\u4e5f\u53ef\u4ee5\u5229\u7528yurthub\u63d0\u4f9b\u7684data-filtering\u80fd\u529b\u6765\u63a7\u5236service\u7684\u6d41\u91cf"),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u4e91\u7aef\u4e5f\u4e0d\u9700\u8981\u505acache\u7b49\u5de5\u4f5c\u3002"),(0,o.kt)("h3",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,o.kt)("p",null,"\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u6709\u51e0\u4e2a\u53c2\u6570\u6bd4\u8f83\u91cd\u8981\uff1a"),(0,o.kt)("p",null,"--cloud-nodes \u7528\u4e8e\u6807\u8bc6\u54ea\u4e9b\u662f\u4e91\u7aef\u8282\u70b9\uff0c\u591a\u4e2a\u8282\u70b9\u7528\u9017\u53f7\u5206\u9694\uff1anode1,node2"),(0,o.kt)("p",null,"--deploy-yurttunnel \u6807\u8bb0\u662f\u5426\u8981\u90e8\u7f72yurttunnel"),(0,o.kt)("p",null,"--kubeadm-conf-path \u6807\u8bb0\u8282\u70b9\u673a\u5668\u4e0akubeadm\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u3002\u9ed8\u8ba4\uff1a/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"),(0,o.kt)("p",null,"\u66f4\u591a\u53c2\u6570\uff0c\u53ef\u4f7f\u7528 yurtctl convert --help \u6765\u67e5\u770b\u3002"),(0,o.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0cconvert\u6838\u5fc3\u505a\u4e86\u51e0\u4e2a\u4e8b\u60c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. disable k8s \u7684nodelifecontroller\uff0c\u7528\u81ea\u5df1\u7684yurtcontrollermanager\u6765\u66ff\u6362\u5b83\u7684\u804c\u8d23\u3002\n2. \u5b89\u88c5\u81ea\u5df1\u7684\u5404\u7c7b\u7ec4\u4ef6\uff0cdeployment\u3001damenonset \u7b49\u6a21\u5f0f\u90e8\u7f72\u3002\uff08\u8fd9\u7c7b\u8d44\u6e90\u90e8\u7f72\u65e0\u9700\u4efb\u4f55\u62c5\u5fc3\uff0c\u56e0\u4e3a\u641e\u4e0d\u574f\u96c6\u7fa4\uff0c\u4e5f\u4e0d\u592a\u4f1a\u51fa\u73b0\u95ee\u9898\u3002\uff09\n3. \u8fb9\u7f18\u8282\u70b9\uff1a\u542f\u52a8yurthub\u9759\u6001pod;\u5c06kubelet\u6d41\u91cf\u8f6c\u53d1\u5230yurthub\u3002\n")),(0,o.kt)("p",null,"\u53ef\u89c1\uff0cconvert\u7684\u4e8b\u60c5\u8fd8\u662f\u6bd4\u8f83\u53ef\u63a7\u7684\u3002\u6267\u884cyurtctl convert \u4e5f\u4e0d\u7528\u592a\u62c5\u5fc3\u3002"),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u6700\u540e\u7684\u62c5\u5fc3\u4e5f\u5e94\u8be5\u7531 yurtctl revert \u6765\u5f7b\u5e95\u6d88\u9664\uff01"),(0,o.kt)("h2",{id:"yurtctl-revert-\u53c8\u5e72\u4e86\u4e9b\u4ec0\u4e48"},"yurtctl revert \u53c8\u5e72\u4e86\u4e9b\u4ec0\u4e48\uff1f"),(0,o.kt)("h3",{id:"\u6838\u5fc3\u6d41\u7a0b-1"},"\u6838\u5fc3\u6d41\u7a0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. \u68c0\u67e5\n  1.1 \u786e\u4fdd\u6240\u6709node\u90fd\u5df2\u7ecfready\n2. \u5220\u9664\u81ea\u8eab\u90e8\u7f72\u7ec4\u4ef6\n  2.1 \u5220\u9664 yurt-controller-manager deployment\u4ee5\u53ca\u76f8\u5173\u8d44\u6e90 \n  2.2 \u5220\u9664yurt-tunnel-agent\u4ee5\u53ca\u76f8\u5173\u8d44\u6e90\n  2.2 \u5220\u9664yurt-tunnel-server\u4ee5\u53ca\u76f8\u5173\u8d44\u6e90  \n  2.3 \u5220\u9664yurt-app-manager\u4ee5\u53ca\u76f8\u5173\u8d44\u6e90\n3. k8s\u7ec4\u4ef6\u4fee\u6539\n  3.1 \u5f00\u542fnodelifecontroller, \u8fd9\u4e2a\u5f88\u597d\u7406\u89e3\uff0c\u5c31\u662f\u628a\u4fee\u6539\u7684\u547d\u4ee4\u901a\u8fc7sed\u547d\u4ee4\u6539\u56de\u6765\u3002\n4. \u4e91\u7aef\u3001\u8fb9\u7f18\u8282\u70b9\u8f6c\u6362\u4e3a\u539f\u751f\u8282\u70b9\n  4.1 \u4fee\u6539kubelet\u914d\u7f6e\uff0c\u76f4\u8fdeapiServer\n  4.2 \u5220\u9664yurthub\u76f8\u5173\u914d\u7f6e\u3001\u76ee\u5f55\n")),(0,o.kt)("p",null,"\u6574\u4e2arevert\u7684\u8fc7\u7a0b\u5c31\u662fconvert\u7684\u53cd\u5411\u64cd\u4f5c\uff0c\u8fd8\u6bd4\u8f83\u597d\u7406\u89e3\u3002"),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u3002\u5982\u679cconvert\u5931\u8d25\uff0c\u6bd4\u5982job\u6267\u884c\u8d85\u65f6\u6216\u8005\u5931\u8d25\u3002job\u662f\u4e0d\u4f1a\u88ab\u5220\u9664\u7684\u3002"),(0,o.kt)("p",null,"\u5373\u4f7fyurtctl revert \u4e5f\u4e0d\u4f1a\u5220\u9664\u3002\u76ee\u7684\u662f\u4e3a\u4e86\u4fdd\u7559\u73b0\u573a\u65b9\u4fbf\u5b9a\u4f4d\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u91cd\u65b0\u6267\u884cyurtctl convert\uff0c \u9700\u8981\u624b\u52a8\u5220\u9664job\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get job -n kube-system -A |grep convert\nkubectl delete job -n kube-system < job-name>\n")),(0,o.kt)("h2",{id:"\u603b\u7ed3-1"},"\u603b\u7ed3"),(0,o.kt)("p",null,"yurtctl convert/revert \u547d\u4ee4\u662f\u6700\u5feb\u6377\u4f53\u9a8copenYurt\u529f\u80fd\u7684\u65b9\u6cd5\u4e4b\u4e00\u3002"),(0,o.kt)("p",null,"\u5728\u4e86\u89e3\u4e86\u8fd9\u4e24\u4e2a\u547d\u4ee4\u7684\u5b9e\u73b0\u539f\u7406\uff0c\u4e5f\u5c31\u5bf9openYurt\u7684\u6280\u672f\u65b9\u6848\u4e86\u89e3\u5927\u534a\u4e86\u3002"),(0,o.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u4e5f\u4e0d\u62c5\u5fc3\u4e86\uff0cso easy\uff01"))}k.isMDXComponent=!0}}]);