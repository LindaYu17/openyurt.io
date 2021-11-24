"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[2641],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return t?o.createElement(g,i(i({ref:n},d),{},{components:t})):o.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},911:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return u},default:function(){return m}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={slug:"How-to-use-service-topology",title:"Use service topology to realize topology-aware traffic routing",authors:["windydayc"],tags:["openyurt"]},p="Service Topology",s={permalink:"/zh/blog/How-to-use-service-topology",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2021-11-24-How-to-use-service-topology.md",source:"@site/blog/2021-11-24-How-to-use-service-topology.md",title:"Use service topology to realize topology-aware traffic routing",description:"Service Topology enables a service to route traffic based on the Node topology of the cluster. For example, a service can specify that traffic be preferentially routed to endpoints that are on the same Node as the client, or in the same availability NodePool.",date:"2021-11-24T00:00:00.000Z",formattedDate:"2021\u5e7411\u670824\u65e5",tags:[{label:"openyurt",permalink:"/zh/blog/tags/openyurt"}],readingTime:5.405,truncated:!1,authors:[{name:"Feng Zeng",title:"Zhejiang University student, Member of OpenYurt",url:"https://github.com/windydayc",imageURL:"https://github.com/windydayc.png",key:"windydayc"}],nextItem:{title:"OpenYurt\uff1a\u5728\u8fb9\u7f18\u573a\u666f\u65e0\u7f1d\u8fd0\u884c\u4f7f\u7528InClusterConfig\u7684\u4e1a\u52a1Pod",permalink:"/zh/blog/How-run-business-pod-in-edge-scenarios"}},d={authorsImageUrls:[void 0]},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"How to use",id:"how-to-use",children:[{value:"Configure kube-proxy",id:"configure-kube-proxy",children:[],level:3},{value:"Create NodePools",id:"create-nodepools",children:[],level:3},{value:"Create UnitedDeployment",id:"create-uniteddeployment",children:[],level:3},{value:"Create Service with TopologyKeys",id:"create-service-with-topologykeys",children:[],level:3},{value:"Create Service without TopologyKeys",id:"create-service-without-topologykeys",children:[],level:3},{value:"Test Service Topology",id:"test-service-topology",children:[],level:3}],level:2}],c={toc:u};function m(e){var n=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Service Topology")," enables a service to route traffic based on the Node topology of the cluster. For example, a service can specify that traffic be preferentially routed to endpoints that are on the same Node as the client, or in the same availability NodePool. "),(0,r.kt)("p",null,"The following picture shows the general function of the ",(0,r.kt)("em",{parentName:"p"},"service topology"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"service-topology",src:t(6119).Z})),(0,r.kt)("p",null,"To use ",(0,r.kt)("em",{parentName:"p"},"service topology"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"EndpointSliceProxying")," ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/"},"feature gate")," must be enabled, and kube-proxy needs to be configured to connect to Yurthub instead of the API server."),(0,r.kt)("p",null,"You can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"topologyKeys")," values of a service to direct traffic as follows. If ",(0,r.kt)("inlineCode",{parentName:"p"},"topologyKeys")," is not specified or empty, no topology constraints will be applied."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"annotation Key")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"annotation Value")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"explain")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"openyurt.io/topologyKeys"),(0,r.kt)("td",{parentName:"tr",align:"center"},"kubernetes.io/hostname"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Only to endpoints on the same node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"openyurt.io/topologyKeys"),(0,r.kt)("td",{parentName:"tr",align:"center"},"kubernetes.io/zone",(0,r.kt)("br",null)," or ",(0,r.kt)("br",null),"openyurt.io/nodepool"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Only to endpoints on the same nodepool.")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kubernetes v1.18 or above, since EndpointSlice resource needs to be supported."),(0,r.kt)("li",{parentName:"ol"},"Yurt-app-manager is deployed in the cluster.")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"Ensure that kubernetes version is v1.18+."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get node\nNAME                 STATUS   ROLES    AGE     VERSION\nkind-control-plane   Ready    master   6m21s   v1.18.19\nkind-worker          Ready    <none>   5m42s   v1.18.19\nkind-worker2         Ready    <none>   5m42s   v1.18.19\n")),(0,r.kt)("p",null,"Ensure that yurt-app-manager is deployed in the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-BASH"},"$ kubectl get pod -n kube-system \nNAME                                         READY   STATUS    RESTARTS   AGE\ncoredns-66bff467f8-jxvnw                     1/1     Running   0          7m28s\ncoredns-66bff467f8-lk8v5                     1/1     Running   0          7m28s\netcd-kind-control-plane                      1/1     Running   0          7m39s\nkindnet-5dpxt                                1/1     Running   0          7m28s\nkindnet-ckz88                                1/1     Running   0          7m10s\nkindnet-sqxs7                                1/1     Running   0          7m10s\nkube-apiserver-kind-control-plane            1/1     Running   0          7m39s\nkube-controller-manager-kind-control-plane   1/1     Running   0          5m38s\nkube-proxy-ddgjt                             1/1     Running   0          7m28s\nkube-proxy-j25kr                             1/1     Running   0          7m10s\nkube-proxy-jt9cw                             1/1     Running   0          7m10s\nkube-scheduler-kind-control-plane            1/1     Running   0          7m39s\nyurt-app-manager-699ffdcb78-8m9sf            1/1     Running   0          37s\nyurt-app-manager-699ffdcb78-fdqmq            1/1     Running   0          37s\nyurt-controller-manager-6c95788bf-jrqts      1/1     Running   0          6m17s\nyurt-hub-kind-control-plane                  1/1     Running   0          3m36s\nyurt-hub-kind-worker                         1/1     Running   0          4m50s\nyurt-hub-kind-worker2                        1/1     Running   0          4m50s\n")),(0,r.kt)("h3",{id:"configure-kube-proxy"},"Configure kube-proxy"),(0,r.kt)("p",null,"To use ",(0,r.kt)("em",{parentName:"p"},"service topology"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"EndpointSliceProxying")," ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/"},"feature gate")," must be enabled, and kube-proxy needs to be configured to connect to Yurthub instead of the API server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl edit cm -n kube-system kube-proxy\napiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    featureGates: # 1. enable EndpointSliceProxying feature gate.\n      EndpointSliceProxying: true\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf # 2. comment this line.\n      qps: 0\n    clusterCIDR: 10.244.0.0/16\n    configSyncPeriod: 0s\n')),(0,r.kt)("p",null,"Restart kube-proxy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl delete pod --selector k8s-app=kube-proxy -n kube-system\npod "kube-proxy-cbsmj" deleted\npod "kube-proxy-cqwcs" deleted\npod "kube-proxy-m9dgk" deleted\n')),(0,r.kt)("h3",{id:"create-nodepools"},"Create NodePools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create test nodepools.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\n\n---\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n  labels:\n    apps.openyurt.io/example: test-hangzhou\n\n---\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: shanghai\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-shanghai\n  labels:\n    apps.openyurt.io/example: test-shanghai\nEOF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add nodes to the nodepool.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node kind-control-plane apps.openyurt.io/desired-nodepool=beijing\nnode/kind-control-plane labeled\n\n$ kubectl label node kind-worker apps.openyurt.io/desired-nodepool=hangzhou\nnode/kind-worker labeled\n\n$ kubectl label node kind-worker2 apps.openyurt.io/desired-nodepool=shanghai\nnode/kind-worker2 labeled\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get NodePool.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get np\nNAME       TYPE    READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud   1            0               63s\nhangzhou   Edge    1            0               63s\nshanghai   Edge    1            0               63s\n")),(0,r.kt)("h3",{id:"create-uniteddeployment"},"Create UnitedDeployment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create test united-deployment1. To facilitate testing, we use a ",(0,r.kt)("inlineCode",{parentName:"li"},"serve_hostname")," image. Each time port 9376 is accessed, the hostname container returns its own hostname.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: united-deployment1\nspec:\n  selector:\n    matchLabels:\n      app: united-deployment1\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: united-deployment1\n      spec:\n        template:\n          metadata:\n            labels:\n              app: united-deployment1\n          spec:\n            containers:\n              - name: hostname\n                image: mirrorgooglecontainers/serve_hostname\n                ports:\n                - containerPort: 9376\n                  protocol: TCP\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 2\n    - name: shanghai\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - shanghai\n      replicas: 2\n  revisionHistoryLimit: 5\nEOF\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create test united-deployment2. Here we use ",(0,r.kt)("inlineCode",{parentName:"li"},"nginx")," image, in order to access the ",(0,r.kt)("inlineCode",{parentName:"li"},"hostname")," pod that created by united-deployment1 above.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: united-deployment2\nspec:\n  selector:\n    matchLabels:\n      app: united-deployment2\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: united-deployment2\n      spec:\n        template:\n          metadata:\n            labels:\n              app: united-deployment2\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.19.3\n                ports:\n                - containerPort: 80\n                  protocol: TCP\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 2\n    - name: shanghai\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - shanghai\n      replicas: 2\n  revisionHistoryLimit: 5\nEOF\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get pods that created by the unitedDeployment.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod -l "app in (united-deployment1,united-deployment2)" -owide\nNAME                                                 READY   STATUS    RESTARTS   AGE   IP           NODE           NOMINATED NODE   READINESS GATES\nunited-deployment1-hangzhou-fv6th-66ff6fd958-f2694   1/1     Running   0          18m   10.244.2.3   kind-worker    <none>           <none>\nunited-deployment1-hangzhou-fv6th-66ff6fd958-twf95   1/1     Running   0          18m   10.244.2.2   kind-worker    <none>           <none>\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt   1/1     Running   0          18m   10.244.1.3   kind-worker2   <none>           <none>\nunited-deployment1-shanghai-5p8zk-84bdd476b6-wjck2   1/1     Running   0          18m   10.244.1.2   kind-worker2   <none>           <none>\nunited-deployment2-hangzhou-lpkzg-6d958b67b6-gf847   1/1     Running   0          15m   10.244.2.4   kind-worker    <none>           <none>\nunited-deployment2-hangzhou-lpkzg-6d958b67b6-lbnwl   1/1     Running   0          15m   10.244.2.5   kind-worker    <none>           <none>\nunited-deployment2-shanghai-tqgd4-57f7555494-9jvjb   1/1     Running   0          15m   10.244.1.5   kind-worker2   <none>           <none>\nunited-deployment2-shanghai-tqgd4-57f7555494-rn8n8   1/1     Running   0          15m   10.244.1.4   kind-worker2   <none>           <none>\n')),(0,r.kt)("h3",{id:"create-service-with-topologykeys"},"Create Service with TopologyKeys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc-ud1\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\nspec:\n  selector:\n    app: united-deployment1\n  type: ClusterIP\n  ports:\n  - port: 80\n    targetPort: 9376\nEOF\n")),(0,r.kt)("h3",{id:"create-service-without-topologykeys"},"Create Service without TopologyKeys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc-ud1-without-topology\nspec:\n  selector:\n    app: united-deployment1\n  type: ClusterIP\n  ports:\n  - port: 80\n    targetPort: 9376\nEOF\n")),(0,r.kt)("h3",{id:"test-service-topology"},"Test Service Topology"),(0,r.kt)("p",null,"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," pod in the shanghai nodepool to test ",(0,r.kt)("em",{parentName:"p"},"service topology"),". Therefore, its traffic can only be routed to the nodes that in shanghai nodepool when it accesses a service with the ",(0,r.kt)("inlineCode",{parentName:"p"},"openyurt.io/topologyKeys: openyurt.io/nodepool")," annotation."),(0,r.kt)("p",null,"For comparison, we first test the service without serviceTopology annotation. As we can see, its traffic can be routed to any nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl exec -it united-deployment2-shanghai-tqgd4-57f7555494-9jvjb bash\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-hangzhou-fv6th-66ff6fd958-twf95\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-hangzhou-fv6th-66ff6fd958-twf95\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-hangzhou-fv6th-66ff6fd958-f2694\n\n")),(0,r.kt)("p",null,"Then we test the service with serviceTopology annotation. As expected, its traffic can only be routed to the nodes in shanghai nodepool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl exec -it united-deployment2-shanghai-tqgd4-57f7555494-9jvjb bash\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-wjck2\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-wjck2\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt\n")))}m.isMDXComponent=!0},6119:function(e,n,t){n.Z=t.p+"assets/images/service-topology-example-4fd2ecf0d4a663ff1fb33adbcfebad43.png"}}]);