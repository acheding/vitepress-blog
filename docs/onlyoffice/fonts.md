# Onlyoffice 更新字体

复制 Windows 字体包，即 C:\Windows\Fonts 文件夹中字体。

![optimization_2](https://zhang.beer/static/images/optimization_2.gif)

## 进入 onlyOffice 容器

docker exec -it onlyoffice bash

## 进入字体包目录

cd /var/www/onlyoffice/documentserver/core-fonts

## 删除所有字体库

rm -rf \*

## 进入字体缓存目录

cd /var/www/onlyoffice/documentserver/fonts

## 删除所有缓存

rm -rf \*

## 进入其它目录字体库

cd /usr/share/fonts

## 删除所有字体库，truetype 无法删除不必理会

rm -rf \*

## 拷贝字体包至 onlyoffice 容器

docker cp Fonts.zip onlyoffice:/usr/share/fonts/

## 进入 onlyOffice 容器

docker exec -it onlyoffice /bin/bash

## 进入字体包目录

cd /usr/share/fonts

## 解压字体包

unzip Fonts.zip

## 移动字体文件至当前文件夹

mv Fonts/\* ./

## 运行 onlyOffice 加载字体缓存脚本

/usr/bin/documentserver-generate-allfonts.sh

## 清除浏览器缓存
