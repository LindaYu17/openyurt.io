"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4446],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5311:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"How to Build and Test"},u=void 0,s={unversionedId:"developer-manuals/how-to-build-and-test",id:"version-v0.5.0/developer-manuals/how-to-build-and-test",isDocsHomePage:!1,title:"How to Build and Test",description:"In OpenYurt repository, currently(v0.5.0, commit",source:"@site/versioned_docs/version-v0.5.0/developer-manuals/how-to-build-and-test.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/how-to-build-and-test",permalink:"/docs/developer-manuals/how-to-build-and-test",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-build-and-test.md",tags:[],version:"v0.5.0",lastUpdatedBy:"Congrool",lastUpdatedAt:1641225234,formattedLastUpdatedAt:"1/3/2022",frontMatter:{title:"How to Build and Test"},sidebar:"version-v0.5.0/docs",previous:{title:"Practices 1",permalink:"/docs/best-practices/practices-1"},next:{title:"Local Up OpenYurt",permalink:"/docs/developer-manuals/local-up-openyurt"}},p=[{value:"How to build",id:"how-to-build",children:[{value:"Build based on the loacl platform",id:"build-based-on-the-loacl-platform",children:[],level:3},{value:"Cross Compilation",id:"cross-compilation",children:[{value:"Mac",id:"mac",children:[],level:4},{value:"Windows",id:"windows",children:[],level:4}],level:3},{value:"Build images manually",id:"build-images-manually",children:[{value:"yurtctl(yurt-servant) dockerfile",id:"yurtctlyurt-servant-dockerfile",children:[],level:4},{value:"yurt-node-servant dockerfile",id:"yurt-node-servant-dockerfile",children:[],level:4},{value:"dockerfiles of other components",id:"dockerfiles-of-other-components",children:[],level:4}],level:3}],level:2},{value:"How to test",id:"how-to-test",children:[{value:"Unit test",id:"unit-test",children:[],level:3},{value:"e2e test",id:"e2e-test",children:[],level:3},{value:"Run e2e test manually",id:"run-e2e-test-manually",children:[],level:3}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt"},"OpenYurt repository"),", currently(v0.5.0, ",(0,o.kt)("inlineCode",{parentName:"p"},"commit: ef26d5c6"),") 5 components are contained, including:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"yurthub"),(0,o.kt)("li",{parentName:"ol"},"yurt-controller-manager"),(0,o.kt)("li",{parentName:"ol"},"yurt-tunnel-server"),(0,o.kt)("li",{parentName:"ol"},"yurt-tunnel-agent"),(0,o.kt)("li",{parentName:"ol"},"yurtctl"),(0,o.kt)("li",{parentName:"ol"},"yurt-node-servant")),(0,o.kt)("p",null,"This artical will give you an introduction of how to build and test the code after development of above components."),(0,o.kt)("h2",{id:"how-to-build"},"How to build"),(0,o.kt)("p",null,"Many approaches of building OpenYurt have been provided in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/Makefile"},"Makefile"),". The most often used approach is ",(0,o.kt)("inlineCode",{parentName:"p"},"make release"),", which will compile the code and build images for you. Here's the use case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'make release WHAT="${components[@]}" ARCH="${archs[@]}" REGION="${your_region}"\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WHAT")," represents components that you want to build, as mentioned at the beginning of the artical.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ARCH")," represents archtectures of target platforms, including ",(0,o.kt)("inlineCode",{parentName:"p"},"amd64"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"arm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"arm64"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"REGION")," will affect the ",(0,o.kt)("inlineCode",{parentName:"p"},"GOPROXY")," when compiling the code. Currently, ",(0,o.kt)("inlineCode",{parentName:"p"},"cn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"us")," are supported, representing using  ",(0,o.kt)("inlineCode",{parentName:"p"},"GOPROXY=https://goproxy.cn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GOPROXY=https://proxy.golang.org")," respectively. Its default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"us"),". It's recommanded that developers in China should always set ",(0,o.kt)("inlineCode",{parentName:"p"},"REGION=cn")," explicitly to ensure the successful build."),(0,o.kt)("p",null,"eg."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'make release WHAT="yurtctl yurthub" ARCH="arm64 amd64" REGION=cn\n')),(0,o.kt)("p",null,"After the successful build, we can find images and binaries under ",(0,o.kt)("inlineCode",{parentName:"p"},"_output")," folder, dockerfiles under ",(0,o.kt)("inlineCode",{parentName:"p"},"dockerbuild")," folder. All of these images are built based on the Linux platform. Currently, we cannot change the target OS platform. If you actually want to do it, please refer to the following approach."),(0,o.kt)("p",null,"Another build approach is provided in Makefile, using ",(0,o.kt)("inlineCode",{parentName:"p"},"make build")," command. With this command, we can compile the code for any archtecture and any platform. We will take ",(0,o.kt)("inlineCode",{parentName:"p"},"yurtctl")," as an example, and other components can be built in the same way."),(0,o.kt)("h3",{id:"build-based-on-the-loacl-platform"},"Build based on the loacl platform"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make build WHAT=yurtctl\n")),(0,o.kt)("p",null,"This command will build the yurtctl binary according to the archtecture and OS of your local host. The output binary can be found under the ",(0,o.kt)("inlineCode",{parentName:"p"},"_output")," folder."),(0,o.kt)("h3",{id:"cross-compilation"},"Cross Compilation"),(0,o.kt)("h4",{id:"mac"},"Mac"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=yurtctl\n")),(0,o.kt)("p",null,"This command will enable the built yurtctl binary to run on any platform as you want, through setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"target_os")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"target_arch"),". To avoid some problems of compatibility, we'd better set ",(0,o.kt)("inlineCode",{parentName:"p"},"CGO_ENABLED=0"),"."),(0,o.kt)("h4",{id:"windows"},"Windows"),(0,o.kt)("p",null,"Because there's no make command on Windows(if you don't have Cygwin), we have to run ",(0,o.kt)("inlineCode",{parentName:"p"},"go build")," manually to compile the code. Steps in powershell(run as administrator) are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"prepare environment variables\nReplace ",(0,o.kt)("inlineCode",{parentName:"li"},"target_os")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"target_arch")," as what you want.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"$Env:GOOS = $Env:target_os\n$Env:GOARCH = $Env:target_arch\n$Env:CGO_ENABLED = 0\n$Env:GOLDFLAGS = \"-s -w \n-X github.com/openyurtio/openyurt/pkg/projectinfo.projectPrefix=yurt\n-X github.com/openyurtio/openyurt/pkg/projectinfo.labelPrefix=openyurt.io\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitVersion=$(git describe --abbrev=0)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitCommit=$(git rev-parse HEAD)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.buildDate=$(date -u +'%Y-%m-%dT%H:%M:%SZ')\"\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"run go build\nRun ",(0,o.kt)("inlineCode",{parentName:"li"},"go build")," to compile the code, with the ",(0,o.kt)("inlineCode",{parentName:"li"},"-ldflags=$Env:GOLDFLAGS")," option.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"go build -ldflags=$Env:GOLDFLAGS cmd/yurtctl/yurtctl.go\n")),(0,o.kt)("h3",{id:"build-images-manually"},"Build images manually"),(0,o.kt)("p",null,"In this section, we can find the dockerfile for each component. It will help you use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build")," to build images. Here's the table giving base images ",(0,o.kt)("inlineCode",{parentName:"p"},"yurtctl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-node-servant")," will use.  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arch"),(0,o.kt)("th",{parentName:"tr",align:null},"Base Image"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amd64"),(0,o.kt)("td",{parentName:"tr",align:null},"amd64/alpine:3.9")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"arm64"),(0,o.kt)("td",{parentName:"tr",align:null},"arm64v8/alpine:3.9")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"arm"),(0,o.kt)("td",{parentName:"tr",align:null},"arm32v7/alpine:3.9")))),(0,o.kt)("h4",{id:"yurtctlyurt-servant-dockerfile"},"yurtctl(yurt-servant) dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM ${baseimage}\nADD yurtctl /usr/local/bin/yurtctl\n")),(0,o.kt)("h4",{id:"yurt-node-servant-dockerfile"},"yurt-node-servant dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM ${baseimage}\nADD entry.sh /usr/local/bin/entry.sh\nRUN chmod +x /usr/local/bin/entry.sh\nADD yurt-node-servant /usr/local/bin/node-servant\n")),(0,o.kt)("h4",{id:"dockerfiles-of-other-components"},"dockerfiles of other components"),(0,o.kt)("p",null,"Other components use the different base image. We use ",(0,o.kt)("inlineCode",{parentName:"p"},"${arch}")," to represent the target arch(including amd64, arm and arm64), ",(0,o.kt)("inlineCode",{parentName:"p"},"${component}")," to represent the component to built(as mentioned at the beginning of this artical). Then the dockerfile is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM k8s.gcr.io/debian-iptables-${arch}:v11.0.2\nCOPY ${component} /usr/local/bin/${component}\nENTRYPOINT ["/usr/local/bin/${component}"]\n')),(0,o.kt)("h2",{id:"how-to-test"},"How to test"),(0,o.kt)("p",null,"There are tests of two types: unit test and e2e test."),(0,o.kt)("h3",{id:"unit-test"},"Unit test"),(0,o.kt)("p",null,"In unit test, it will run the test code under cmd and pkg folder, whose names have the suffix of ",(0,o.kt)("inlineCode",{parentName:"p"},"_test.go"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,o.kt)("h3",{id:"e2e-test"},"e2e test"),(0,o.kt)("p",null,"This section shows how to build and run the e2e test for OpenYurt. The test for node autonomy is still under development."),(0,o.kt)("p",null,"If you have already set up the OpenYurt cluster, you can immediately follow the steps to test your cluster. Otherwise, you can quickly set up the OpenYurt at your local host with instructions at ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer-manuals/local-up-openyurt"},"Local Up OpenYurt"),"."),(0,o.kt)("p",null,"You can use the following command to run e2e tests. Assuming that you've entered the openyurt work path, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make e2e-tests\n")),(0,o.kt)("p",null,"This command will help you run e2e tests on OpenYurt cluster. It will use kubeconfig at ",(0,o.kt)("inlineCode",{parentName:"p"},"${KUBECONFIG}"),", default path is ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),". If there's no config found, it will end with error. The test result will show on the stdout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Ran 5 of 5 Specs in 82.279 seconds\nSUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped\nPASS\n")),(0,o.kt)("p",null,"If you need further configuration for yurt-e2e-test to specify its behavior(such as running autonomy e2e test case), you can manually run the e2e test as we will introduce in the next section."),(0,o.kt)("h3",{id:"run-e2e-test-manually"},"Run e2e test manually"),(0,o.kt)("p",null,"Let's build the e2e binary yurt-e2e-test as follows:"),(0,o.kt)("p",null,"1) entering the openyurt work path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd openyurt\n")),(0,o.kt)("p",null,"2) building the binary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ make e2e\n")),(0,o.kt)("p",null,"Then, you can use yurt-e2e-test binary to test OpenYurt.\n1) If you run yurt-e2e-test without node autonomy test, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./\n")),(0,o.kt)("p",null,"This will run some basic tests after k8s is converted to openyurt. It refers to the operation of namespace and pod."),(0,o.kt)("p",null,"2) If you run yurt-e2e-test, and want to test yurt node autonomy on local machine.In this way, it depends on yourself to restart node. And yurt-e2e-test will wait for restarting node and checking pod status to test yurt node autonomy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./  --enable-yurt-autonomy=true\n")),(0,o.kt)("p",null,"3) If you want to test yurt node autonomy on aliyun ecs or aliyun ens with binary of yurt-e2e-test, TBD."),(0,o.kt)("p",null,"Note:",(0,o.kt)("br",{parentName:"p"}),"\n","The path of yurt-e2e-test binary depends on the platform of your local host."),(0,o.kt)("p",null,"Finally, you can check test result in stdout or in file yurt-e2e-test-report_01.xml(specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"--report-dir")," option)."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'"go: github.com...unknown revision xxx" occurs during build',(0,o.kt)("br",{parentName:"p"}),"\n","It's often caused for too low git version on your host. You can try to update git.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'"unsupported GOOS/GOARCH pair xxx/xxx" occurs during compilation',(0,o.kt)("br",{parentName:"p"}),"\n","Not all GOOS/GOARCH pairs are supported by go, such as go1.17.3 cannot support windows/arm64. You can check all supported pairs through ",(0,o.kt)("inlineCode",{parentName:"p"},"go tool dist list"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'"cannot execute binary file: Exec format error" occurs when running binaries built on other platform.',(0,o.kt)("br",{parentName:"p"}),"\n","It's often caused by an unsuccessful cross compilation, and the OS cannot recoginze the file format. When you run cross compilation on Windows, please ensure that you run it as an administractor."))))}c.isMDXComponent=!0}}]);