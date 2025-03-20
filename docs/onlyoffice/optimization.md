# Onlyoffice 编译打包运行过程优化

## 1 编译时

即执行`./automate.py server`时。

### 1.1 源码更新慢

在首次编译后，可以关闭源码更新，这将会省去一大笔时间。

```bash
./automate.py server --update=0
```

### 1.2 下载 cef_binary.7z 慢

经观察，即使关闭了源码更新，仍然要去外网下载 cef_binary.7z 文件，下载速度很慢。

我们可以修改源码 /home/build_tools/scripts/core_common/modules/cef.py，找到 url_platform 相关代码，去对应地址下载完成后，移动到本地或上传到易于下载的存储地址。
然后修改 url_platform = "对应地址"

![optimization_1](https://zhang.beer/static/images/optimization_1.png)

## 2 打包时

即执行`docker build -t onlyoffice/documentserver:8.2.2-1 .`时。

### 2.1 下载 Ubuntu 镜像慢

在本地通过科学上网工具提前下好 Dockerfile 中对应版本的 Ubuntu 镜像，导入服务器并加载。

### 2.2 下载字体包慢

剪切 core-fonts 中的字体，或者你自己喜欢的字体到 Dockerfile 同目录（Docker-DocumentServer 目录下），
保证 core-fonts 目录为空即可，通过 Dockerfile 复制到容器中。
主要目的就是使得 core-fonts 目录为空，这样打包镜像时就不会去下载对应的字体包。
（删除绿色部分的内容，添加红色部分的内容）
![optimization_3](https://zhang.beer/static/images/optimization_3.png)

如果发现字体包中字体不够用，或者需要更换字体，请查看另一篇博客：[Onlyoffice 更新字体](./fonts.md)

## 3 构建容器后

即执行`docker run -dit -p 8888:80 -p 5432:5432 --name onlyoffice --restart=always -e JWT_ENABLED=false onlyoffice/documentserver:8.2.2-1 bash`后。

### 3.1 优化 `-e JWT_ENABLED=false` 参数

每次编译时都需要添加这个参数，不如直接修改配置，使得默认为 false。

修改 Docker-DocumentServer/run-document-server.sh

```bash
JWT_ENABLED=${JWT_ENABLED:-false}
```

### 3.2 优化允许私有 IP 访问

每次构建完镜像都需要进入容器修改允许私有 IP 访问，不如直接修改配置，使得默认为 true。

修改 Docker-DocumentServer/run-document-server.sh

```bash
ALLOW_META_IP_ADDRESS=${ALLOW_META_IP_ADDRESS:-true}
ALLOW_PRIVATE_IP_ADDRESS=${ALLOW_PRIVATE_IP_ADDRESS:-true}
```
