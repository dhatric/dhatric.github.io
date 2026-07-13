---
slug: how-to-setup-nfs-most-wanted-lan-gaming
title: "How to setup NFS most wanted LAN gaming?"
date: 2010-01-26T16:38:00Z
authors: [giri]
tags: [experience]
---

Here is a detailed tutorial on how to setup NFS most wanted LAN gaming. I will start with my experience and the errors I came across while setup this game on LAN. In my college we had to organize an event on lan gaming .so we decide to go with CS and NFS .Everything went well with CS but when we setup NFS on lan we got an error while creating a server and the error is “**connection lost with the server** ”. I browsed so many websites to find solution to this problem but none had provided any tutorial. I searched for more than 4 hours ,finally I could find solution to this problem .Here is a step by step procedure to setup NFS MW lan gaming .  

<!-- truncate -->

**Tutorial**

**Step1** : Install NFS mw on all computers connected through lan.  
**Step2** : To play game on lan we need to make one computer as a server. so run game in any one computer .  
**Step3** : Then in the game main menu select lan game.  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAdFHr2Y9f9Uk2SaS_Z-9bhMVHHdE86m0peQqz20WUeFpAP8oXSn1S5-QiL1LfPZTXPni7oU4vSuMHUTt48EPnU5fOj2SheOeGLIwuOMPaeWZtaZR9DahV8gz4km5PjnC4UyzEZRw6Ljw6/s320/nfs+mw+lan+cannot+connect+to+server+error.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAdFHr2Y9f9Uk2SaS_Z-9bhMVHHdE86m0peQqz20WUeFpAP8oXSn1S5-QiL1LfPZTXPni7oU4vSuMHUTt48EPnU5fOj2SheOeGLIwuOMPaeWZtaZR9DahV8gz4km5PjnC4UyzEZRw6Ljw6/s1600-h/nfs+mw+lan+cannot+connect+to+server+error.JPG)  
**Step4** :click on create a server.  
[  
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFoQr0Pf7Rkj8MA7y8jAcXq7xCkKm-2YqrUsnrLrJUrR8ePF6M5wZscKVT9a6OLDcvIUxYKACR015I6jWu7sQGfo9B3U7tq3BHNrBdrgXHHhwcKS2AJ1XVXMIb1x0tqdkPlQCcM6B1Y0o_/s1600-h/create+nfs+server+cannot+connect+to+server+error.JPG) [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyGItwttpfCn8sXJdB36UOS8ak2qAxYi8yngIhuem9jTs5xufJoZHpfnTk4dxitpqgng04EOHJGR99f9Ht-iqPDKEFYGUbmdDmWV2CqA5fxoQmAHDA-j_YAzneCYgtmCLy-tjLCnAKI6ds/s400/create+nfs+server+cannot+connect+to+server+error.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyGItwttpfCn8sXJdB36UOS8ak2qAxYi8yngIhuem9jTs5xufJoZHpfnTk4dxitpqgng04EOHJGR99f9Ht-iqPDKEFYGUbmdDmWV2CqA5fxoQmAHDA-j_YAzneCYgtmCLy-tjLCnAKI6ds/s1600-h/create+nfs+server+cannot+connect+to+server+error.JPG)  

**Step5** : Enter game server name and then press enter  
**Step6:** Here you may get an error stated **” connection lost with the server”**.if you don’t get this error skip this step  
This error occurs due to incorrect ip setting .follow this steps to remove this error  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_OPJpdaVhcaI9iBTnXFZgtzSQthwvB3fQTXzSGiBw6UDNIvftUWehNGwPdKEcfW7WXtJFlZp7guQP0HUru6fB4y1qMbuzSgLXY3E-xCjmbmrpKQuHSo2S_MX2igUA3jlAMapDDn9L2FtS/s400/nfs+mw+ip+address+setting+cannot+connect+to+server+error.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_OPJpdaVhcaI9iBTnXFZgtzSQthwvB3fQTXzSGiBw6UDNIvftUWehNGwPdKEcfW7WXtJFlZp7guQP0HUru6fB4y1qMbuzSgLXY3E-xCjmbmrpKQuHSo2S_MX2igUA3jlAMapDDn9L2FtS/s1600-h/nfs+mw+ip+address+setting+cannot+connect+to+server+error.JPG)  

Server computer ip configuration (computer in which you have created the game server)  
IP address:**10.0.0. 2** (this may be different in your computer)  
Subnet mask:255.255.255.0(this may be different in your computer)  
Default gateway:10.0.0.1(this may be different in your computer)  
DNS server:10.0.0.1(this may be different in your computer)  
**All the other computers should have the same subnet mask, default gateway and dns server and a different ip address.**  
other computer ip configuration  
IP address: **10.0.0****.3** (**assign different ip addresses for all other computers**)  
Subnet mask:255.255.255.0  
Default gateway:10.0.0.1  
DNS server:10.0.0.1  
Then again try to create a server ,now you will not see any error and you will enter into nsf mw lan main menu .If you still see the error then you made an incorrect ip setting .read step6 again.  
**Step7:**  
Then in LAN main menu select create game .select the circuit and minimum number of players .Then ask all other computer players to join the game  
**Step8** :**How other computers will join the game?**  
All the other computers should run the game and select lan game from the nfs main menu.Then it will search for lan server and display the name of the server which you have created in the game server computer .if you could not see any server then go through step6 and make sure that every thing is correct and there is a connection between server and the other computers in lan.  
**Step9** :  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBGKZfJ6n8jK6ElLIC6Ds-LUN8e3P86niZko-f7X_yw9ZbWwB5eY1swMqnEbBlZmrAFPzejYHXRKXEWwpG1tCMjEXd6MXo8UiMVGEJOvQdWWEBSMicqQU_9g6RHazXuMeBrV7iXkJzzyjy/s400/NFS+cannot+connect+to+server+error.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBGKZfJ6n8jK6ElLIC6Ds-LUN8e3P86niZko-f7X_yw9ZbWwB5eY1swMqnEbBlZmrAFPzejYHXRKXEWwpG1tCMjEXd6MXo8UiMVGEJOvQdWWEBSMicqQU_9g6RHazXuMeBrV7iXkJzzyjy/s1600-h/NFS+cannot+connect+to+server+error.JPG)  
I cant see the name of the server because I am in the game server computer. all other computers connected through lan will see the name of the game server created .select and click on join.  

**Step10:**  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAdFHr2Y9f9Uk2SaS_Z-9bhMVHHdE86m0peQqz20WUeFpAP8oXSn1S5-QiL1LfPZTXPni7oU4vSuMHUTt48EPnU5fOj2SheOeGLIwuOMPaeWZtaZR9DahV8gz4km5PjnC4UyzEZRw6Ljw6/s320/nfs+mw+lan+cannot+connect+to+server+error.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAdFHr2Y9f9Uk2SaS_Z-9bhMVHHdE86m0peQqz20WUeFpAP8oXSn1S5-QiL1LfPZTXPni7oU4vSuMHUTt48EPnU5fOj2SheOeGLIwuOMPaeWZtaZR9DahV8gz4km5PjnC4UyzEZRw6Ljw6/s1600-h/nfs+mw+lan+cannot+connect+to+server+error.JPG)  

****then you will enter into lan main menu click on quick race and select same circuit which was selected by server computer.  
DONE now enjoy the lan gaming
