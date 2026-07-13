---
slug: how-to-configure-mingw-on-eclipse-c-ide
title: "How to configure MinGW on Eclipse C++ IDE?"
date: 2012-09-29T17:51:00.002Z
authors: [giri]
tags: [experience]
---

Follow below steps to setup MinGw on eclipse C++ IDE and to get started with First "Hello World" program.

<!-- truncate -->

###  Step 1 : Downloading Eclipse C++ IDE 

 Download Eclipse C++ IDE from official eclipse web site or install CDT plugin for you existing eclipse IDE

###  **Step 2 :** Downloading and configuring MinGw and MSYS.

You need to download 2 packages 

**1.MinGw**

[Download link for Mingw](http://sourceforge.net/projects/mingw/)

It does not have the complete package, just a installer. While installing you need internet connection to download packages.

Some times downloading packages may fail for some reason. If you encounter this situation download a off line installer from below link

[Download MinGw Offline installer](http://code.google.com/p/gcc-offline/downloads/detail?name=mingw-6.6.exe&can=2&q=)

Once you are done with installing add the installation path bin directory to your s/m variable.

Eg: If your installation directory is "C:\MinGw\" add "C:\MinGw\bin" to PATH environment variable.

**How to add BIN Directory to PATH env variable ?**

Go to Control Panel -> System and Security -> System -> Advanced System  
Settings (off on left side of window) -> Environment Variables (button near  
bottom).Select the System Variable named Path and Click Edit. Add bin directory location to the end, not forgetting the semicolon at the beginning.

Eg:  "; C:\MinGw\bin"

**Why to add MinGW BIN directory to PATH Environment variable?**

If you dont add MinGw bin directory to PATH env variable the executables of MinGW will be only accessed with its folder  i.e. within "C:\MinGw\".To make the executables global and to allow other programs to use it we should add BIN directory to path env variable.

**Check Point  **

Once you have added bin directory to PATH env variable ,you can test it by typing "gcc --version" in command prompt.It you get "gcc not found" go to your installation directory by giving "cd C:\MinGw\" command and again type "gcc --version" if you could see the version then you have not added bin directory to path properly. If you still get "gcc not found" then you have not installed MinGw properly.  

**2.MSYS**

[Download Link for MSYS](http://downloads.sourceforge.net/mingw/MSYS-1.0.11.exe)

Download and install MSYS from above link. After installation it will ask for MinGw directory location .Give correct location and installation will be completed.

Add MSYS BIN directory to PATH env variable as you have done for MinGW.

**Check Point   **

**  
**

To test whether installation is success or not type "mingw32-make" in cmd line .If you get "No Target Specified" then you installation is success .If you get "mingw32-make not found " then either you have not added bin folder to PATH variable or not installed MSYS properly.

###  **Step 3 :** Configure Eclipse C++ IDE 

Open Eclipse C++ IDE .Choose new C project. Uncheck "Show project types and tool chains only if they are supported".Now you can see "MinGW CC" in tool chains list .

Select "Makefile project" from project types list and "MinGW CC" from tools chain list and click finish.

**Check Point**  

Once project is shown on project explorer list go to project properties(right click on project -> properties).In C/C++ build tab uncheck "use default build command" and give "mingw32-make" as build command.

###  Step 4 : Building and execution "Hello World" C program.

Create a new C file(helloworld.c) and add following lines.

**#include**

**#include**

**void** **main**()

{

      **printf**("Hello World");

}

Create a new file(makefile) and add following lines

all:

            gcc -o Helloworld.exe helloworld.c

Build the project by clicking "hammer" icon from tools menu. 

You can see following log in console

**** Build of configuration MinGW GCC for project HelloWorld ****

 ****  WARNING: The "MinGW GCC" Configuration may not build  ****

****  because it uses the "cdt.managedbuild.toolchain.gnu.mingw.base"  ****

****  tool-chain that is unsupported on this system.  ****

****  Attempting to build...  **** 

make all 

gcc -o Helloworld.exe helloworld.c "

Click play button to run the program. You will see "Hello world " on the console.

Please provide comments if you are facing any issues.I will try to solve them .  

Happy Programming !!!!
