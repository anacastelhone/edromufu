"use strict";(self.webpackChunkedrom=self.webpackChunkedrom||[]).push([[7955],{3905:(e,o,a)=>{a.d(o,{Zo:()=>p,kt:()=>f});var t=a(7294);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),c=function(e){var o=t.useContext(u),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},p=function(e){var o=c(e.components);return t.createElement(u.Provider,{value:o},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(a),d=r,f=l["".concat(u,".").concat(d)]||l[d]||m[d]||n;return a?t.createElement(f,i(i({ref:o},p),{},{components:a})):t.createElement(f,i({ref:o},p))}));function f(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var u in o)hasOwnProperty.call(o,u)&&(s[u]=o[u]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5233:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const n={id:"comandos_visao",title:"Comandos utilizados pela vis\xe3o",description:"Aqui ser\xe3o explicados quais s\xe3o os comandos da vis\xe3o e suas fun\xe7\xf5es",slug:"/cmd_visao",sidebar_position:3},i=void 0,s={unversionedId:"vision/comandos_visao",id:"vision/comandos_visao",title:"Comandos utilizados pela vis\xe3o",description:"Aqui ser\xe3o explicados quais s\xe3o os comandos da vis\xe3o e suas fun\xe7\xf5es",source:"@site/docs/vision/comandos_visao.md",sourceDirName:"vision",slug:"/cmd_visao",permalink:"/edromufu/docs/cmd_visao",draft:!1,editUrl:"https://github.com/edromufu/edromufu/tree/master/edrom-docs/docs/vision/comandos_visao.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"comandos_visao",title:"Comandos utilizados pela vis\xe3o",description:"Aqui ser\xe3o explicados quais s\xe3o os comandos da vis\xe3o e suas fun\xe7\xf5es",slug:"/cmd_visao",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instala\xe7\xe3o CUDA e cuDNN",permalink:"/edromufu/docs/cuda-cudnn"},next:{title:"\xc1rvore de Arquivos",permalink:"/edromufu/docs/mapeamento-visao"}},u={},c=[],p={toc:c},l="wrapper";function m(e){let{components:o,...a}=e;return(0,r.kt)(l,(0,t.Z)({},p,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A vis\xe3o utiliza basicamente dois comandos que habilitam o seu funcionamento, sendo eles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"roslaunch object_finder vision.launch\n")),(0,r.kt)("p",null,"O ",(0,r.kt)("em",{parentName:"p"},"roslaunch")," \xe9 um comando que ",(0,r.kt)("strong",{parentName:"p"},"come\xe7a")," ou ",(0,r.kt)("strong",{parentName:"p"},"para")," um ",(0,r.kt)("em",{parentName:"p"},"node (Processo que realizada computa\xe7\xe3o) ROS")," que leva um ou mais arquivos tipo ",(0,r.kt)("em",{parentName:"p"},".launch")," como argumentos. Para usar o launch \xe9 necess\xe1rio o nome do arquivo tipo ",(0,r.kt)("em",{parentName:"p"},"launch"),". Voc\xea pode especificar o caminho ou o arquivo ",(0,r.kt)("em",{parentName:"p"},"launch")," ou voc\xea pode especificar o nome do pacote e o arquivo ",(0,r.kt)("em",{parentName:"p"},"launch")," dentro desse pacote (como fazemos)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"roslaunch <nome_do_pacote> <arquivo_.launch>\n")),(0,r.kt)("p",null,"No nosso caso, executamos o vision.launch dentro do pacote ",(0,r.kt)("em",{parentName:"p"},"objectfinder"),"."),(0,r.kt)("p",null,"Esse comando inicia todos os c\xf3digos da vis\xe3o, al\xe9m de poder receber alguns argumentos, sendo eles:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"camera")," : Recebe qual a c\xe2mera ser\xe1 utilizada (default 0)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"img_output")," : Recebe um booleano (true ou false) se ter\xe1 um retorno visual (default = false)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ajuste"),' : Recebe um booleano para entrar no modo de ajuste de brilho, onde ser\xe1 utilizado "=" para aumentar o brilho, "-" para diminuir e "w" para continuar detec\xe7\xe3o (default = false).'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"brilho")," : Recebe um valor entre -64 e 64 para o fator de brilho da c\xe2mera (default = 4)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"rosrun object_finder connecting_and_showing.py\n")),(0,r.kt)("p",null,"O ",(0,r.kt)("em",{parentName:"p"},"rosrun")," permite voc\xea executar um arquivo execut\xe1vel dentro de um pacote arbitr\xe1rio de qualquer lugar sem ter que digitar seu caminho completo ou ",(0,r.kt)("em",{parentName:"p"},"cd/roscd")," primeiro."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"rosrun <pacote> <executavel>\n")),(0,r.kt)("p",null,"Neste caso, executamos o arquivo ",(0,r.kt)("strong",{parentName:"p"},"Python")," ",(0,r.kt)("em",{parentName:"p"},"connect_and_showing.py")," dentro do diretorio ",(0,r.kt)("em",{parentName:"p"},"object_finder"),"."),(0,r.kt)("p",null,"\xc9 o comando que roda o c\xf3digo do connecting and showing, que executa as fun\xe7\xf5es da vis\xe3o no geral"),(0,r.kt)("admonition",{title:"Como passar o argumento",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'Utilizar o modelo "nome_argumento:=valor_desejado"')))}m.isMDXComponent=!0}}]);