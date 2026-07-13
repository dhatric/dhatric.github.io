---
slug: java-crash-course-memory-management-in
title: "Java Crash Course : Memory Management in JVM"
date: 2018-12-04T11:06:00.002Z
authors: [giri]
tags: []
---

This document holds the summary of memory management concepts in JVM (Java Virtual Machine) that every software engineer should be aware of while designing/coding in Java.

<!-- truncate -->

[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)Memory is divided into 2 parts

[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)

[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)
  1. Stack 
  2. Heap

####  Stack : Small when compared to heap memory and stores local variables and references to the objects in Heap.

  1. Each thread has its own Stack.
  2. Shorter life span
  3. Data from Stack is removed as soon as close braces ( } ) is encountered.
  4. Primitive types are saved in Stack.
  5. If a method pushed 10 elements to the Stack, all the 10 will be removed upon encountering closing braces.

####   

####  Heap : This should be your main focus while designing/coding/debugging/testing the application.

  1. Long term memory.
  2. All objects are stored in the heap and references of those are saved on Stack.
  3. JDK provides jvisualvm application to analyse heap memory.
  4. In modern JVM heap is split into 2 types.
     1. Old Generation
     2. Young Generation - which in turn split into 3 types.
        * Eden
        * Survivor 0
        * Survivor 1

In older java versions 6 & 7, PermGen is also part of Heap memory which stores classes metadata and Strings which can never be garbage collected. From Java 8 PermGen/Metaspace is moved out of heap memory, and Strings are moved to Old Generation where they can be garbage collected.

###  Heap Memory to the Naked Eye

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW7RlQMUzbDgSs0QFUa9Qpl5ty1qiU5QLYC6s0GxBml2CO8NqJiXeHy4exlKNH_XdrkYz7OxXKtPfogj5pDzFL-zXbPsZ-Onqebkr1Y81RVg64BimHPBjtyzqFBdBQ6tgQrdTZY7b3yNU5/s640/HeapMemory.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW7RlQMUzbDgSs0QFUa9Qpl5ty1qiU5QLYC6s0GxBml2CO8NqJiXeHy4exlKNH_XdrkYz7OxXKtPfogj5pDzFL-zXbPsZ-Onqebkr1Y81RVg64BimHPBjtyzqFBdBQ6tgQrdTZY7b3yNU5/s1600/HeapMemory.JPG)

  * Above image shows the heap memory of a spring boot application where the maximum heap size set to 50mb.
  * For maven spring boot application.
    * set MAVEN_OPTS="-Xmx50m"
    * mvn spring-boot:run
  * Look how 50Mb is split among old, Eden, Survivor 1 and 2 memory.
    * Old Generation – 33.5 MB
    * Survivor 1 & 2 – 2.5 MB each
    * Eden – 15 MB
  * Objects are first allocated in Eden memory location if they survive the garbage collection, they are moved to survivor memory, then to Old generation. An object, in general, is moved to Old generation if it survives garbage collection more than eight times.
  * Garbage collector decides which memory should be cleared, i.e. Eden memory/ Old Gen memory based on the amount of memory it needs. In general, GC mostly clears the young memory and sometimes rarely old Gen.

Explore jvisualvm tool of JDK to monitor CPU, memory, threads, instances and get the heap dump.  Use eclipse memory analyser to see which class instances take up huge memory and which member variable is responsible for the memory leak.
