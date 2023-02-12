"use strict";(self.webpackChunkedrom=self.webpackChunkedrom||[]).push([[432],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>v});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),l=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=l(e.components);return t.createElement(d.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,v=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return n?t.createElement(v,i(i({ref:a},u),{},{components:n})):t.createElement(v,i({ref:a},u))}));function v(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},180:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const r={id:"cuda_cudnn",title:"Instala\xe7\xe3o CUDA e cuDNN",description:"Nesta se\xe7\xe3o ser\xe3o listados as etapas para instala\xe7\xe3o do CUDA e suas depend\xeancias",slug:"/cuda-cudnn",sidebar_position:8},i=void 0,s={unversionedId:"Vis\xe3o/cuda_cudnn",id:"Vis\xe3o/cuda_cudnn",title:"Instala\xe7\xe3o CUDA e cuDNN",description:"Nesta se\xe7\xe3o ser\xe3o listados as etapas para instala\xe7\xe3o do CUDA e suas depend\xeancias",source:"@site/docs/Vis\xe3o/doc_cuda.md",sourceDirName:"Vis\xe3o",slug:"/cuda-cudnn",permalink:"/edromufu/docs/cuda-cudnn",draft:!1,editUrl:"https://github.com/edromufu/edromufu/tree/master/edrom-docs/docs/Vis\xe3o/doc_cuda.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"cuda_cudnn",title:"Instala\xe7\xe3o CUDA e cuDNN",description:"Nesta se\xe7\xe3o ser\xe3o listados as etapas para instala\xe7\xe3o do CUDA e suas depend\xeancias",slug:"/cuda-cudnn",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Resumo da Vis\xe3o",permalink:"/edromufu/docs/Vis\xe3o/create-a-page"},next:{title:"Treinamento da rede neural",permalink:"/edromufu/docs/category/treinamento-da-rede-neural"}},d={},l=[{value:"Instalando CUDA Toolkit",id:"instalando-cuda-toolkit",level:2},{value:"Instalando cuDNN",id:"instalando-cudnn",level:2},{value:"Instalando depend\xeancias do OpenCV e DNN GPU",id:"instalando-depend\xeancias-do-opencv-e-dnn-gpu",level:2},{value:"Baixando OpenCV configurando para rodar com NVIDIA GPU",id:"baixando-opencv-configurando-para-rodar-com-nvidia-gpu",level:2},{value:"Criando e configurando um ambiente virtual do python",id:"criando-e-configurando-um-ambiente-virtual-do-python",level:2},{value:"Instalando NUMPY no ambiente virtual",id:"instalando-numpy-no-ambiente-virtual",level:2},{value:"Determinando a vers\xe3o da arquitetura do CUDA",id:"determinando-a-vers\xe3o-da-arquitetura-do-cuda",level:2},{value:"Configurando OpenCV com suporte para GPU NVIDIA",id:"configurando-opencv-com-suporte-para-gpu-nvidia",level:2},{value:"Instalando OpenCV com suporte para DNN GPU",id:"instalando-opencv-com-suporte-para-dnn-gpu",level:2}],u={toc:l},p="wrapper";function c(e){let{components:a,...r}=e;return(0,o.kt)(p,(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Nesta se\xe7\xe3o voc\xea encontrar\xe1 o passo a passo detalhado para a instala\xe7\xe3o do CUDA e suas depend\xeancias."),(0,o.kt)("admonition",{title:"Para come\xe7ar",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Conferir se possui os drivers gr\xe1ficos da nvidia instalados (vers\xe3o 520+ recomend\xe1vel)")),(0,o.kt)("h2",{id:"instalando-cuda-toolkit"},"Instalando CUDA Toolkit"),(0,o.kt)("p",null,"Executando os comandos abaixo no terminal seguindo a ordem listada, permitir\xe1 a instala\xe7\xe3o do CUDA Toolkit atrav\xe9s de um arquivo .deb (ser\xe1 necess\xe1ria a cria\xe7\xe3o de uma senha):  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin\nsudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600  \nwget https://developer.download.nvidia.com/compute/cuda/11.3.0/local_installers/cuda-repo-ubuntu2004-11-3-local_11.3.0-465.19.01-1_amd64.deb\nsudo dpkg -i cuda-repo-ubuntu2004-11-3-local_11.3.0-465.19.01-1_amd64.deb\nsudo apt-key add /var/cuda-repo-ubuntu2004-11-3-local/7fa2af80.pub\nsudo apt-get update\n\nsudo apt-get -y install cuda\nexport PATH=/usr/local/cuda-11.3/bin${PATH:+:${PATH}}\nexport LD_LIBRARY_PATH=/usr/local/cuda-11.3/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}\n")),(0,o.kt)("p",null,"Para o bloco abaixo, caso o output da primeira linha for igual a imagem, n\xe3o \xe9 necess\xe1rio executar a ultima linha."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"systemctl status nvidia-persistenced \nsudo nvidia-smi -pm 1\nsudo systemctl enable nvidia-persistenced\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"im",src:n(6223).Z,width:"737",height:"178"})),(0,o.kt)("p",null,"Para checar a vers\xe3o do driver NVIDIA, execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"cat /proc/driver/nvidia/version\n")),(0,o.kt)("h2",{id:"instalando-cudnn"},"Instalando cuDNN"),(0,o.kt)("p",null,"Para prosseguir com esta etapa, \xe9 necess\xe1rio se cadastrar no ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cudnn"},"site da NVIDIA"),' caso n\xe3o tenha uma conta ao clicar em "Download cuDNN". Feito isso, baixar os 3 arquivos abaixo:'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/compute/machine-learning/cudnn/secure/8.2.0.53/11.3_04222021/Ubuntu20_04-x64/libcudnn8_8.2.0.53-1+cuda11.3_amd64.deb"},"cuDNN Runtime Library for Ubuntu20.04 x86_64 (Deb)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/compute/machine-learning/cudnn/secure/8.2.0.53/11.3_04222021/Ubuntu20_04-x64/libcudnn8-dev_8.2.0.53-1+cuda11.3_amd64.deb"},"cuDNN Developer Library for Ubuntu20.04 x86_64 (Deb)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/compute/machine-learning/cudnn/secure/8.2.0.53/11.3_04222021/Ubuntu20_04-x64/libcudnn8-samples_8.2.0.53-1+cuda11.3_amd64.deb"},"cuDNN Code Samples and User Guide for Ubuntu20.04 x86_64 (Deb)")),(0,o.kt)("p",null,"Com isso, voc\xea deve ter os seguintes arquivos .deb:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"libcudnn8-samples_8.2.0.53\u20131+cuda11.3_amd64.deb")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"libcudnn8-dev_8.2.0.53\u20131+cuda11.3_amd64.deb")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"libcudnn8_8.2.0.53\u20131+cuda11.3_amd64.deb"))),(0,o.kt)("p",null,"Entrar na pasta em q os pacotes foram instalados (ex: $ cd Downloads) e instalar usando: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"sudo dpkg -i  libcudnn8_8.2.0.53-1+cuda11.3_amd64.deb\nsudo dpkg -i libcudnn8-dev_8.2.0.53-1+cuda11.3_amd64.deb\nsudo dpkg -i libcudnn8-samples_8.2.0.53-1+cuda11.3_amd64.deb\n")),(0,o.kt)("p",null,"Agora, \xe9 preciso testar se est\xe1 havendo a comunica\xe7\xe3o entre o cuDNN e os drivers da NVIDIA:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"nvidia-smi\n")),(0,o.kt)("p",null,'Caso retorne um erro de falha na comunica\xe7\xe3o, uma possivel corre\xe7\xe3o \xe9 executar a linha abaixo. Ser\xe1 necess\xe1rio a cria\xe7\xe3o de uma senha e reinicializa\xe7\xe3o do sistema antes de tentar rodar o "nvidia-smi" novamente.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"sudo mokutil --disable-validation\n")),(0,o.kt)("p",null,"Caso ainda n\xe3o tenha dado certo, provavelmente os drivers de v\xeddeo nao foram devidamente instalados:"),(0,o.kt)("p",null,' abrir "Programas e atualiza\xe7\xf5es" -> drivers adicionais -> NVIDIA Corporation e selecionar o driver mais recente ',(0,o.kt)("strong",{parentName:"p"},"QUE NAO SEJA OPEN KERNEL")),(0,o.kt)("p",null,"Por fim, caso tenha dado certo, o terminal retornar\xe1 algo do tipo:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Output NVIDIA SMI",src:n(9904).Z,width:"723",height:"395"})),(0,o.kt)("h2",{id:"instalando-depend\xeancias-do-opencv-e-dnn-gpu"},"Instalando depend\xeancias do OpenCV e DNN GPU"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ cd\n$ sudo apt-get update\n$ sudo apt-get upgrade\n$ sudo apt-get install build-essential cmake unzip pkg-config\n$ sudo apt-get install libopenblas-dev libatlas-base-dev liblapack-dev gfortran\n$ sudo apt-get install gcc-7 g++-7 -y\n$ sudo ln -s /usr/bin/gcc-7 /usr/bin/gcc\n$ sudo ln -s /usr/bin/g++-7 /usr/bin/g++\n$ sudo ln -s /usr/bin/gcc-7 /usr/bin/cc\n$ sudo ln -s /usr/bin/g++-7 /usr/bin/c++\n$ sudo apt-get install libjpeg-dev libpng-dev libtiff-dev\n$ sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev\n$ sudo apt-get install libv4l-dev libxvidcore-dev libx264-dev\n$ sudo apt-get install libgtk-3-dev\n$ sudo apt-get install libatlas-base-dev gfortran\n$ sudo apt-get install python3-dev\n")),(0,o.kt)("h2",{id:"baixando-opencv-configurando-para-rodar-com-nvidia-gpu"},"Baixando OpenCV configurando para rodar com NVIDIA GPU"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ cd ~\n$ wget -O opencv.zip https://github.com/opencv/opencv/archive/4.6.0.zip\n$ wget -O opencv_contrib.zip https://github.com/opencv/opencv_contrib/archive/4.6.0.zip\n$ unzip opencv.zip\n$ unzip opencv_contrib.zip\n$ mv opencv-4.6.0 opencv\n$ mv opencv_contrib-4.6.0 opencv_contrib\n")),(0,o.kt)("h2",{id:"criando-e-configurando-um-ambiente-virtual-do-python"},"Criando e configurando um ambiente virtual do python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ wget https://bootstrap.pypa.io/get-pip.py \n$ sudo python3 get-pip.py\n$ sudo pip install virtualenv virtualenvwrapper\n$ sudo rm -rf ~/get-pip.py ~/.cache/pip\n")),(0,o.kt)("p",null,"Abra o arquivo ~/.bashrc (dar ctrl+H na pasta pessoal) e no final colocar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"# virtualenv and virtualenvwrapper\nexport WORKON_HOME=$HOME/.virtualenvs\nexport VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3\nsource /usr/local/bin/virtualenvwrapper.sh\n")),(0,o.kt)("p",null,"Salvar o arquivo e dar reload no ~/.bashrc no terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ source ~/.bashrc\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ mkvirtualenv opencv_cuda -p python3\n")),(0,o.kt)("admonition",{title:"Aten\xe7\xe3o",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"A partir de agora tudo ser\xe1 feito nesse ambiente virtual, se por acaso sair de alguma forma, basta dar o comando: $ workon opencv_cuda")),(0,o.kt)("h2",{id:"instalando-numpy-no-ambiente-virtual"},"Instalando NUMPY no ambiente virtual"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"(your-venv)$ pip install numpy\n(your-venv)$ pip install pip --upgrade\n(your-venv)$ pip install -U rosdep rosinstall_generator wstool rosinstall\n(your-venv)$ pip install --upgrade setuptools\n")),(0,o.kt)("p",null,"OBS: (your-venv) \xe9 a indica\xe7\xe3o para seu ambiente virtual."),(0,o.kt)("h2",{id:"determinando-a-vers\xe3o-da-arquitetura-do-cuda"},"Determinando a vers\xe3o da arquitetura do CUDA"),(0,o.kt)("p",null,'Usar o comando "$ nvidia-smi" se nao souber qual a arquiterura da sua placa de video'),(0,o.kt)("p",null,"Entrar no ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cuda-gpus"},"site")," para encontrar sua placa e ver qual vers\xe3o (Compute Capability) est\xe1 relacionada a ela. Salvar esse n\xfamero pois ser\xe1 usado posteriormente."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Arquitetura do CUDA",src:n(5817).Z,width:"1280",height:"819"})),(0,o.kt)("h2",{id:"configurando-opencv-com-suporte-para-gpu-nvidia"},"Configurando OpenCV com suporte para GPU NVIDIA"),(0,o.kt)("p",null,"Entrar no ambiente virtual se n\xe3o estiver mais ($ workon opencv_cuda)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ cd ~/opencv\n$ mkdir build    \n$ cd build\n")),(0,o.kt)("admonition",{title:"CUIDADO",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},'Ao dar o comando do bloco abaixo, em "-D CUDA_ARCH_BIN=7.0 \\" substituir 7.0 pela vers\xe3o compat\xedvel com a sua placa descoberta nos passos anteriores')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ cmake -D CMAKE_BUILD_TYPE=RELEASE \\\n    -D CMAKE_INSTALL_PREFIX=/usr/local \\\n    -D INSTALL_PYTHON_EXAMPLES=ON \\\n    -D INSTALL_C_EXAMPLES=OFF \\\n    -D OPENCV_ENABLE_NONFREE=ON \\\n    -D WITH_CUDA=ON \\\n    -D WITH_CUDNN=ON \\\n    -D OPENCV_DNN_CUDA=ON \\\n    -D ENABLE_FAST_MATH=1 \\\n    -D CUDA_FAST_MATH=1 \\\n    -D CUDA_ARCH_BIN=7.0 \\\n    -D WITH_CUBLAS=1 \\\n    -D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib/modules \\\n    -D HAVE_opencv_python3=ON \\\n    -D PYTHON_EXECUTABLE=~/.virtualenvs/opencv_cuda/bin/python \\\n    -D BUILD_EXAMPLES=ON ..\n")),(0,o.kt)("p",null,'Caso o NVIDIA CUDA e cuDNN tiverem com "NO" na frente (nos lugares onde est\xe1 com YES) executar o pr\xf3ximo bloco de comando:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CUDA E CNN NO",src:n(4410).Z,width:"720",height:"266"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ sudo apt install nvidia-cuda-toolkit\n")),(0,o.kt)("p",null,"Para compilar o OpenCV com suporte para DNN GPU:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ make -j8 \n")),(0,o.kt)("p",null,"OBS: substituir o 8 pela quantidade de n\xfacleos que tiver seu computador."),(0,o.kt)("h2",{id:"instalando-opencv-com-suporte-para-dnn-gpu"},"Instalando OpenCV com suporte para DNN GPU"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"$ sudo make install\n$ sudo ldconfig\n$ ls -l /usr/local/lib/python3.8/site-packages/cv2/python-3.8\n$ cd ~/.virtualenvs/opencv_cuda/lib/python3.8/site-packages/\n$ ln -s /usr/local/lib/python3.8/site-packages/cv2/python-3.8/cv2.cpython-38-x86_64-linux-gnu.so cv2.so\n")),(0,o.kt)("p",null,"OBS: conferir os paths e se vers\xe3o do python do c\xf3digo \xe9 a mesma utilizada no projeto."))}c.isMDXComponent=!0},6223:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/IM-df4a3d8f3ba491f87eeb57f6dd6d15f1.jpeg"},5817:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/cuda_arch-6d272b2667603ee9672bbb392e5776bd.jpeg"},4410:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/cuda_cudnn_NO-0e2a27504002a61c3f0388552c0c6e7a.jpeg"},9904:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/output_nvidia-smi-7c249dc606dd32e94f5f61e6f7e967d7.jpeg"}}]);