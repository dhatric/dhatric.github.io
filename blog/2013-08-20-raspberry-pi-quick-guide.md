---
slug: raspberry-pi-quick-guide
title: "Raspberry Pi Quick Guide"
date: 2013-08-20T14:17:00Z
authors: [giri]
tags: [raspberry-pi]
---

Below are some basic commands which you need to know to PLAY with raspberry pi  

<!-- truncate -->

**How to install softwares/packages in raspberry pi ?**  
sudo apt-get install packagename  

**How to remove softwares/packages in raspberry pi ?**  
sudo apt-get --purge remove   

**How to update/upgrade raspberry pi**  
sudo apt-get update && sudo apt-get upgrade  

**How to go to GUI mode in raspberry pi ?**  
startx  

**How to give root access to pi ?**  

sudo su  
**  
How to see all packages installed in raspberry pi?**

dpkg -l

**How to change password/memory split /time in raspberry pi?**

sudo raspi-config  

**How to see list of devices attached to raspberry pi?**

df -h  

**How to see all services in raspberry pi ?**  
service  \--status-all  

**How to stop any service in raspberry pi ?**  
service mysql stop  

**How to Disabe unwanted services in raspberry pi?**  

update-rc.d  mysql disable  
** **

**How to keep raspberry pi up to date?**  

[Source](http://wrightrocket.blogspot.in/2012/06/getting-sound-and-video-to-work-on.html#Firmware)  
    Install software needed to perform the update:  
        pi@raspberrypi:~$ sudo apt-get install ca-certificates git-core binutils  
    Download the script:  
        pi@raspberrypi:~$ sudo wget https://raw.github.com/Hexxeh/rpi-update/master/rpi-update  
    Copy the script to /usr/local/bin:  
        pi@raspberrypi:~$ sudo cp rpi-update /usr/local/bin/rpi-update  
    Make the script executable:  
        pi@raspberrypi:~$ sudo chmod +x /usr/local/bin/rpi-update  
    Run the script:  
        pi@raspberrypi:~$ sudo rpi-update  
        In the future to check for updates, just execute this last step!  

**How to Change owner/Group in raspberry pi?**  
chown -R pi   
chgrp  -R pi   

**How to see what all ports are bind in raspberry pi ?**  
sudo netstat -an|less
