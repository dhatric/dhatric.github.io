---
slug: how-to-install-moviepy-on-aws-ec2
title: "How to install Moviepy on a AWS EC2"
date: 2020-08-22T11:44:00.008Z
authors: [giri]
tags: [experience]
---

![](https://cdn-images-1.medium.com/max/1200/1*VmfsAxtyz956cF8XFhYX3g.jpeg)

<!-- truncate -->

Recently, I wanted to move a python application from my local windows machine to the AWS EC2 instance. The application uses Moviepy for audio and video rendering. It took quite a bit of effort to port the application to AWS because the Moviepy intern uses FFMPEG and ImageMagick modules for rendering.

The below tutorial helps you install and configure the Moviepy module and its dependencies on an AWS EC2 instance. I assume you already have an EC2 instance up and running, refer to AWS documentation if you need help to launch an EC2 instance and SSH into the instance.

**Table of content:**

  1. Update the AWS EC2 instance and activate python 3
  2. Install FFMPEG
  3. Install and configure ImageMagick
  4. Install Moviepy

**Step 1: Update the AWS EC2 instance and activate python 3**

Execute below command to update the EC2 instance.

    sudo amazon-linux-extras install python3 && _sudo yum update_

Validate whether python is activated using below command.

    python3 -V

**Step 2: Install FFMPEG**

Refer to this M[edium link](https://medium.com/@maskaravivek/how-to-install-ffmpeg-on-ec2-running-amazon-linux-451e4a8e2694) to install FFMPEG on AWS EC2 instance. The end goal is to make sure the below command returns a response when you execute it.

    ffmpeg

![](https://cdn-images-1.medium.com/max/1200/1*AEkDyRKgQnZHS8J4-VjlGQ.png)

**Step 3: Install and configure ImageMagick**

Execute the below command to install ImageMagick

    sudo yum install ImageMagick

Update the policy.xml file and comment all the policies. (you will get unauthorized error if you miss this step)

    sudo nano /etc/ImageMagick/policy.xml

![](https://cdn-images-1.medium.com/max/1200/1*826RR2WjbgRFPo8HIXfBWg.png)

Execute the below command to make sure ImageMagick is installed and working as expected

    convert

![](https://cdn-images-1.medium.com/max/1200/1*SiFZur7aU725sJUT773wcA.png)

**Step 4: Install Moviepy**

Below command will install moviepy python module along with its dependencies.

    sudo pip3 install moviepy

![](https://cdn-images-1.medium.com/max/1200/1*9AysVFK39bzQNY9vPmXLeg.png)

That’s it, Moviepy will auto detect FFMPEG and CONVERT modules and you should not face any issues.
