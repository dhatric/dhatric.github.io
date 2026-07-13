---
slug: how-to-format-sd-card-to-ext4
title: "How to Format Sd card to ext4?"
date: 2013-03-09T16:23:00Z
authors: [giri]
tags: [experience]
---

In this tutorial i will explain  how to format SD card to EXT4.I came across this issue when my Raspberry Pi cant detect an SD card .I goggled it and here is a quick fix.  
Before we format it to SD card i will explain why we should format it to EXT4.  

<!-- truncate -->

  * SD cards which are formatted with  NTFS/FAT cant be recognized by Linux based systems.
  * Even if some Linux based OS can recognize it when you try to edit it you will get "permission denied " error even if your are "root" user.

**Note : If you format your SD card with ext4 you cant access data present in it   from windows. **  

I used  Mini Tool Partition wizard Home edition 7 software to do this.  

[Click To download](http://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&sqi=2&ved=0CDAQFjAA&url=http%3A%2F%2Fdownload.cnet.com%2FMiniTool-Partition-Wizard-Home-Edition%2F3000-2094_4-10962200.html&ei=vmA7UYXSG5CsrAfmj4GIDg&usg=AFQjCNEu0XxNCpZd6aH3BiEl1RLBGmVwrA&sig2=mVgqKiBRgdmjzuzEib8yyg&bvm=bv.43287494,d.bmk)  

GUI of partition wizard is self explanatory. Right click on your partition  ==>'create' then choose "ext4" from drop down of file s/m then "ok".Then Click on "Apply" on top left corner to start formatting. Once formatting is done place your SD card in linux s/m as you cant see that drive in windows.
