---
title: "Week 1: Windows OS Architecture & Processes"
draft: false 
description: The notebook demonstrates Windows Architecture and Processes.
tags:
    - windows-architecture
    - kernel-mode
    - user-mode
---



**Objective:** Understand Windows OS core components: processes, threads, memory, and DLLs.

---

### Day 1: Windows OS Architecture  
- Learn about User Mode vs Kernel Mode.  
- Understand how the Windows Kernel manages resources.  
- **Resources:**  
  - [Windows Internals Part 1 (Book overview)](https://www.microsoftpressstore.com/store/windows-internals-part-1-system-architecture-processes-9780735684188)  
  - [John Hammond - Windows Internals for Malware Analysts](https://www.youtube.com/watch?v=Nkz-nJs77-w) (First 20 mins)

### Day 2: Processes & Threads  
- Define process vs thread.  
- Understand process lifecycle and thread scheduling.  
- **Practice:** Use Task Manager & Process Explorer to observe processes and threads.  
- **Resources:**  
  - [Process Explorer Tool](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)  
  - [Process Hacker](https://processhacker.sourceforge.io/)

### Day 3: Memory Management Basics  
- Virtual memory and address space.  
- Stack vs heap memory.  
- **Practice:** Explore memory usage with Process Explorer.  
- **Resources:**  
  - [Memory Management Basics](https://docs.microsoft.com/en-us/windows/win32/memory/memory-management)

### Day 4: DLLs (Dynamic Link Libraries)  
- Role and purpose of DLLs.  
- Loading and linking of DLLs by processes.  
- **Practice:** Use `tasklist /m` to list DLLs per process; explore DLLs in Process Explorer.  
- **Resources:**  
  - [DLL Injection Overview](https://www.crowdstrike.com/epp-101/dll-injection-techniques/)

### Day 5: System Calls & WinAPI  
- Introduction to system calls and WinAPI functions.  
- How apps communicate with OS services.  
- **Resources:**  
  - [Windows API documentation](https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list)  
  - [Intro to System Calls](https://docs.microsoft.com/en-us/windows-hardware/drivers/kernel/using-the-windows-apis)

### Day 6-7: Revision & Hands-On Practice  
- Explore processes & DLLs with Process Explorer and Process Hacker.  
- Document differences between processes like explorer.exe and cmd.exe.  
- Optional: Try [TryHackMe Windows Fundamentals 1](https://tryhackme.com/room/windowsfundamentals1)  
