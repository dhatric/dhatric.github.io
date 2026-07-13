---
slug: java-crash-course-garbage-collection
title: "Java Crash Course : Garbage Collection"
date: 2018-12-04T11:41:00.002Z
authors: [giri]
tags: []
---

In Languages like C, C++ it is the responsibility of the developer to allocate/deallocate the memory needed for a program using malloc and calloc commands.  

<!-- truncate -->

In Java, it is done by Java virtual machine automatically using the Garbage collector. In general, any object on the heap which cannot be referenced from the stack is eligible for garbage collection.  

Garbage Collection uses two strategies to clear the heap.  

  1. **Match and sweep** - Instead of identifying the objects with no references, GC maps all the objects for which there is a reference from the stack and sweeps others.
  2. **Generation Collection** \- It was discussed as part of Java Memory management crash course where the heap is divided into four sections. Objects from the young generation are swept more than the objects in the old generation.

Java provides two methods for interacting with Garbage collection.A developer has a minimum to no control on managing how and when to run garbage collection.

[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)[](https://www.blogger.com/blogger.g?blogID=8470057581532936149)
  1. **System.gc()** \- Using which we can explicitly call garbage collection but there is no guarantee that it would execute. Further, while the garbage collector is running, all the threads are halted. i.e., the entire application is suspended.
  2. **Finalize()** \- Object class has finalize method which can be overridden on your class as well to do some activity. Again, as in System.gc() there is no guarantee that this method is called when an object is garbage collected. The only valid use case is to see if the resources used are closed or not.

>   
> public void finalize()  
> {  
>  if(file.isOpen())  
>  {  
>  log "object is discarded without releasing its resource"  
>  }  
> }

If the maximum heap size allocated to the program is reached, the program will be terminated and java.lang.OutOfMemory error is thrown.
