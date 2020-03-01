Linux is an operating system that could be used with only a mouse and a keyboard. In order to make it easier for you guys to configure linux and python, I have summarized some tips of my previous month's installation experience and shared it with you guys.

(Ps: I am using ubuntu 18.10, ubuntu 18.04lts and ubuntu 16.04 are also ok but slightly different)

### Why Linux

Summarized into keywords: fast, convenient, safe, powerful

For my old computer a few years ago, installing Linux is a better choice. I started to learn some basic operations by installing a virtual machine. After that, I began to install dual system. Linux is not only small and convenient but also open-source. installing Linux is a very good choice for most computers.

The reason why Linux is suitable for old computers is that it has a smaller occupation of the system. Computers using Windows are basically as slow as ox carts after being used for six or seven years, whereas the amazing operating system Linux may not change much after using ten to twenty years. According to our school's English teacher, his father originally installed Linux on his old computer and found it to be particularly fast (he installed Xubuntu, an operating system specifically for old computers).

Having said so much, in fact, the most important reason: it is **free**!

### VMware Installation tutorial：

1,Download

url: https://www.ubuntu.com/download/desktop

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbgU89Npr626J3ne4CC0P2aaOJLYSYJiatEuVMicbtLa2wVbjA2Vy98OMQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

it will be an iso file，so first we need to save our computer.

2，configuration

Create a New Virtual Machine in VMware.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7Nb1LIaKmmDtte6icsPAfLJj05fOqRicJa9wIEral3cujngvqNDZNQBl6bg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Then it will pop up the installation interface. ("Typical" is enough for most cases, here I chose "Custom" for more configuration).

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7Nb7iaiaJicus08o4c2VjXEC1icibS66E2T7g18ay4Zh8xJSfJicibcTpb8pZCLw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Click Next.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7Nb88jU4ztupXvUPlj7r09lwqI7xjCPjJZiasphfp2Z57ywRCIicicBicOoHQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Here we need to choose the iso file we previously downloaded. 

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbOa9hWQqczwdjmRicXvsvN0Y0lAAUI2HSXSRKgWicqV1AUUj1dia33Oib6Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Enter the Name and the password. 

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7Nb3mIV6RaQKrj1klal65ibqE5DtLSvgwccdFq7zw6NgJJhBadictQmtcibA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Choose the installation location (try to find a larger space)

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbDoxczFdZLwtQMA09VLjREExePVpSicGViaP6YC7kDFdkF65wibiaicSBGRw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

The number of processors is depended on use. For testing out, 1 is enough. 

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbAuOB9rfFJdKuwnxhdXs1BkSM9cZuX05ac5h30bzib891gs5ntjT1qcA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Memory. Still based on needs.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbxlicxP488WicsgDM0ibPJf4LIxQS7yIjsS7SBBLOmD80nGFrOGJxlGfNA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Here we need to choose network connection. I chose bridged networking for  using ssh to connect.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbxoYwDuicicdl4eT24hFfAx0ldsDTfjfV78TpFyFdAibJiaUYiaiaAbybib58A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Keep clicking "Next".

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NblplpxOKOwKZowGUwU0icOnUJVbtmCBjrhAuSeFX3Rr7bmexBm0uLJ0A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Configurating disk size. Strongly recommend to configure a larger space. （Be cautious! We can only enlarge the space but not decrease in the future）

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbDQibPsHvvlus86ibIbTn3t8BV1RbzgTkwCc98GkibWyAe92JpSsRGKVog/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Keep clicking next until seeing this. Double check our configuration.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbaX86Y7ONO4FeZSggTicLU5q0laE8Zh8VHGmBoqGCkkm8uSHNcfxLsBA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

After several minutes, your Linux machine is done!

Installing Dual system: 

1，Download the iso file

2，prepare an empty USB drive (Please make sure it is empty)

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7Nb724E5TnLibmMf9dvePZgEB1JO2aiajhLYGQzDEv7FwbuxFzdVMoNKiaicA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Download universal-USB-installer on google. Run it.

*Many installers are not compatible with ubuntu. Universal-USB-installer is 100% compatible with ubuntu. 

(I recommend to close all the anti virus programs)

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7Nb724E5TnLibmMf9dvePZgEB1JO2aiajhLYGQzDEv7FwbuxFzdVMoNKiaicA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Click agree.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbOAdDS6w689EcWEejia6iaWbWFfjHibLVO5Xaxxp1DY6QRKRacLVfvicLgg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

step1, choose your system (ubuntu).

step2, choose your iso file

step3, choose your empty USB driver.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbzVrLNFx0yZZQ2LcNdTQax3VT0wr92jQ5ibEbBzdNyOHP9u3O8sqAlag/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

It will be done after clicking "create".

Then we need to download EasyBCD.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7Nbujg1sSaeIPe5PNILf3bY3GbRictgjYIgUEWDXwyPQab8vehlmicHoluQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Just install it at the moment. We need to use it later.

Now restart our computer and press f12 to access to BIOS (Different computers have different ways to access BIOS. You can check it out on Google)

Choose "Boot from USB".

(Keep clicking next, and set up your username and password)

#Here we need to notice that there should be a boot section (Around 1GB), A swap section(I chose 5 GB), home section (based on need).

Restart After Installing.

Open EasyBCD.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbUFkrUlWwK0yBC9PqB3y4XTQMMqWJxBoyF12kzXDUyuqzWW4VTL4kDA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Add a new config

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbictuhurC1htzcvmAgYm0VJSCEagjgnpKxclkYoOUtxB1oK9Kict9zicFA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Do not change the first row. The second row is for changing names.

Choose your boot section in the third row.

Add a new config, click "yes" after Linux.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbWb0sJOytcRNPg94y9UicFBLYaOerWvq36bD2MLUFSKMyKqNZL2exVOQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Save, Restart, and Enjoy!





Then for connecting with ssh

We need to download some apps to 

You can use MobaXterm, Putty, Xshell, etc.

I chose MobaXterm as an example.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbnzQxHylqJN9cjLFLRrmxJq0xvOEN7NMXzibiaHtxhwWmxN3ua1vchibEA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Select new session.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbkB5hBDkvj1DeftaCZNBQaSzTXGuotxksPGf87IRM4xzgdXKXn9Vfgg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

type in your IP address. (You can check by typing ipconfig)

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbBzJrICWENsdV4P7eib6Ptg5PD41WFths10iaOVCgVCUF1Ny39yMOyYXw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Here we need to type in Username and Password.



##### Now it is time to configurate Python!

In fact Linux has many pre-installed apps, which is enough for daily use.

type ctrl+alt+T to access the terminal. 

Type "python" to see your version.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbZxbpLdzxPibmX3qIp09rab0UIC6sTgxX9rqQvwoYO98sD8VjNs6m86A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

Now we can see the version is 2.7.15. Type "python3" to use python 3.6.7.

![img](https://mmbiz.qpic.cn/mmbiz_jpg/TsKul87IC1sWkcl1K50LDDzwxe8mq7NbcyorkQFBEHnE00YNOOCXY3iciczoZZD1OXV4MOTSLVAI3JxSQOgDoYSQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

We can also add some plugins to our python environment.

I recommend to install virtualenv or anaconda beforehand. 

Virtualenv

```
sudo apt-get install virtualenv
```

or

```
sudo pip install virtualenv
```

Anaconda

```
conda create -n "name" python=3.6
```

Then for virtualenv users:

```
virtualenv venv
```

Anaconda users:

```
conda activate "the name"
```

virtualenv:

```
source my_project/venv/bin/activate
```

Then our environment is set up. We can install some plugins.

```
pip install tensorflow
pip install numpy
pip install pytz
pip install pandas
pip install "your plugins"
```

##### Your Linux and Python environment is set!



My personal Website: www.charliecheng.ga

Welcome to visit my website. I will update more articles in the future.



#### Thanks for patiently reading to the end.