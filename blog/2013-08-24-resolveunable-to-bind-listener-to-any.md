---
slug: resolveunable-to-bind-listener-to-any
title: "Resolved:unable to bind listener to any port in the range 32000 to 32999"
date: 2013-08-24T19:53:00.004Z
authors: [giri]
tags: [experience, raspberry-pi]
---

I got this error when i tried to install e commerce software on raspberry pi.****  

<!-- truncate -->

**Error** : unable to bind listener to any port in the range 32000 to 32999. (Cannot assign requested address)  

Java Service Wrapper Community Edition 32-bit 3.5.20  
  Copyright (C) 1999-2013 Tanuki Software, Ltd. All Rights Reserved.  
    http://wrapper.tanukisoftware.com  
 unable to bind listener to any port in the range 32000 to 32999. (Cannot assign requested address)  
<\-- span="" stopped="" wrapper="">  

**Solution** :  

First check whether any other application is LISTENING on the port range which you have given by using below command  

**sudo netstat -an|less**  

**output** :  

Active Internet connections (servers and established)  
Proto Recv-Q Send-Q Local Address           Foreign Address         State  
tcp        0      0 0.0.0.0:9091            0.0.0.0:*               LISTEN  
tcp        0      0 0.0.0.0:50695           0.0.0.0:*               LISTEN  
tcp        0      0 0.0.0.0:8009            0.0.0.0:*               LISTEN  
tcp        0      0 0.0.0.0:9001            0.0.0.0:*               LISTEN  
tcp        0      0 0.0.0.0:9002            0.0.0.0:*               LISTEN  
tcp        0      0 0.0.0.0:9003            0.0.0.0:*               LISTEN  
tcp        0      0 0.0.0.0:51413           0.0.0.0:*               LISTEN  
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN  

Make sure that the no other application is listening on ports from 32000 to 32999.If any then change your application min and max port in wrapper.conf file  

**wrapper.port=65534  
wrapper.port.min=65530  
wrapper.port.max=65535**  

Still if you face same error then add below line to wrapper.config file  

**wrapper.backend.type=PIPE**  

This configuration  allow you to avoid using sockets and use pipes instead to get around this problem.  

"wrapper.backend.type=PIPE"  solved my problem **  
**
