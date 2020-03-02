linux相信大家都不陌生。在机器学习和数据分析上都有很大作用。linux是一个不用鼠标的操作系统，光靠键盘就可以玩转电脑。为了更简单地让各位大佬和新手们配置linux或者python，我总结了自己前一个月的装机经验与各位大佬们分享。

（ps:我这里用的是ubuntu 18.10, ubuntu 18.04lts和ubuntu 16.04也可以参考我的文章）

### 为啥选择linux

总结成关键词：快，文件小，病毒少，功能强大

对于我这种几年前的“渣”电脑，安装linux是一个不错的选择。一开始还是先安装虚拟机来练习一下基本操作。然后到后期再安装双系统使用。linux不仅小巧、便捷，并且还是开源版本。所以安装linux对于大部分电脑是一个非常好的选择

对于为什么说它适合“渣”电脑。主要还是后台进程占用的比较少。用windows的电脑用个六七年基本就和牛车一样慢，但是Linux这个神奇的操作系统用上十几年二十年速度可能没啥大变化。据我们学校英语老师说他的父亲原来在他的老电脑上装了linux，发现特别快（他装得是xubuntu,一个专门面向老电脑的操作系统）

说了这么多，其实最最最主要的一个原因：它**免费**！

下面进入正题

### VMware安装方法：

1，下载

地址：https://www.ubuntu.com/download/desktop

![img](\img\linux tutorial\1.webp)

下载之后是一个iso的镜像文件，先存到一个自己比较熟悉的位置（桌面）

2，配置

打开vmware，选择新建虚拟机

![img](\img\linux tutorial\2.webp)

然后会弹出一个安装选择的界面，这里我选择高级模式（平时做一些基本的其实用typical足够了）

![img](\img\linux tutorial\3.webp)

点击确定

![img](\img\linux tutorial\4.webp)

这里添加自己刚刚下载好的镜像，然后确定

![img](\img\linux tutorial\5.webp)

用户名密码

![img](\img\linux tutorial\6.webp)

选择安装地址（最好剩余空间大一些）

![img](\img\linux tutorial\7.webp)

这里配置cpu核数，取决于用途。如果就是玩玩其实一个cpu够了，做训练如果在cpu上建议多弄几个

![img](\img\linux tutorial\8.webp)

内存，还是看个人需要，建议4GB以上

![img](\img\linux tutorial\9.webp)

这里配置网络连接方式，我这里使用桥接，这样更方便使用ssh

![img](\img\linux tutorial\10.webp)

一路确定

![img](\img\linux tutorial\11.webp)

硬盘的内存，这个得给大点，至少20个GB，不然用不了两下就空间满了（这个位置建议先保守一点，后期修改大小只能调大，不能调小！！）

![img](\img\linux tutorial\12.webp)

一路确定后来到这个界面，检查自己的配置

![img](\img\linux tutorial\13.webp)

过几分钟，你的linux就安装完成了！

双系统安装方法：

1，老规矩，下载镜像（网址在上面）

2，准备一个空的U盘（一定要是空的，不然容易出问题）

![img](\img\linux tutorial\14.webp)

百度搜索universal-USB-installer，启动

*很多usb安装盘工具不兼容ubuntu，大家一定看好自己的工具能不能用，这里universal-USB-installer是百分之100可以用的。建议大家下载

（建议这个时候暂时把360等杀毒软件关掉）

![img](\img\linux tutorial\14.webp)

点击同意

![img](\img\linux tutorial\15.webp)

step1选择自己要装得系统(ubuntu)

step2选择镜像（刚刚下载过）

step3选择usb（一定清空了啊）

![img](\img\linux tutorial\16.webp)

然后点击create就做好了！

接着下载软件EasyBCD

![img](\img\linux tutorial\17.webp)

这个下载安装好就可以了，到后期使用。

现在电脑重启，重启完跳出系统界面时候疯狂按f12（这里不同电脑不一样，大家可以到百度上搜如何让电脑从u盘启动。thinkpad是f12，貌似别的电脑有f2,f3等）

从U盘启动后选择安装ubuntu

（一路确定+设置用户名）

\#在设置分区的时候需要特别注意，给自己分配一个boot区用来启动（1GB左右），一定要有一个交换空间swap(我用了5GB),然后就是主空间（根据个人需求设定）

安装完成后重启电脑，打开windows

打开安装好的easyBCD

![img](\img\linux tutorial\18.webp)

点击添加新条目

![img](\img\linux tutorial\19.webp)

第一行不要改，第二行可以改名字也可以不改

第三行选择自己配置的boot分区

然后添加条目，回到主界面，在linux那个后面打√

![img](\img\linux tutorial\19.webp)

保存设置，重启，大功告正！





另附ssh连接方法

windows自带的远程电脑连接器用不了，所以需要下载点工具。

比较常见的有mobaxterm, putty， xshell（都可以）

我这里用mobaxterm演示

![img](\img\linux tutorial\20.webp)

打开后选择new session,新建一个会话

![img](\img\linux tutorial\21.webp)

这里输入自己的主机ip地址（如果不知道可以在终端输入ifconfig查看）

![img](\img\linux tutorial\22.webp)

这里输入用户名和密码就ok了



##### 看到这里你已经完成了一大半，后面就是配置python了！

其实当你安装好了镜像，系统已经为你安装好了一大批软件（浏览器、文件查看器、python等。新版的还帮你安装好了caliberoffice）

这时候按住ctrl+alt+T进入终端（桌面右键也可以）

（我这里用ssh演示一下）

先输入python查看自己python的版本

![img](\img\linux tutorial\23.webp)

哈，是python2，显然用的人不是很多了，大部分人还是喜欢用python3，所以这时候输入python3即可（先关掉运行的python2,输入ctrl+c结束运行）

![img](\img\linux tutorial\24.webp)

看来镜像里还是有python3的，这时候我们可以通过加插件来让我们的python变得强大

在这里建议各位安装anaconda或者virtualenv

virtualenv安装方法：

```
sudo apt-get install virtualenv
```

或者

```
sudo pip install virtualenv
```

（不会的可以百度一下，这里节省时间不讲了）

用anaconda的输入：（这里虚拟环境的名字自己瞎起就行,python3.6是我比较喜欢的版本，这里大佬们可以按照自己的需求修改一下）

```
conda create -n "虚拟环境的名字" python=3.6
```

用virtualenv的输入：

```
virtualenv venv
```

然后使用anaconda的输入：

```
conda activate "刚刚创建的名字"
```

virtualenv:

```
source my_project/venv/bin/activate
```

这时候我们的虚拟环境就创建成功了，我们可以下载我们想用的插件了！

```
pip install tensorflow
pip install numpy
pip install pytz
pip install pandas
pip install 你想要的东西
```

##### 大功告成！你的基于linux的python环境已经搭建完成



我的个人网站链接：charliecheng.ga

欢迎各位访问我的网站，我将会不定期分享关于python和linux的小技巧和做视频的方法！



#### 感谢你能耐心的看到底