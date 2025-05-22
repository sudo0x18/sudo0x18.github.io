---
title: "=> Week 2: Windows Registry & DLL Injection Basics"
draft: false 
description: The notebook demonstrates Windows Registry & DLL Injection Basics.
tags:
    - windows-registry
    - dll-injection
    - malware-persistence
    - process-monitoring
    - windows-services
---

**Objective:** Learn how Windows Registry works, services, and DLL injection techniques.

---

### Day 1: Windows Registry Basics  
- What is the Windows Registry?  
- Registry keys, values, and hives explained.  
- **Resources:**  
  - [Windows Registry Overview](https://docs.microsoft.com/en-us/windows/win32/sysinfo/registry)  
  - [Registry Tutorial for Beginners](https://www.thewindowsclub.com/windows-registry)

### Day 2: Exploring Registry Editor  
- Use `regedit` to browse Registry keys.  
- Identify keys related to startup programs and malware persistence.  
- **Practice:** Open regedit, explore `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` key.  

### Day 3: Windows Services  
- What are Windows Services?  
- How malware abuses services for persistence.  
- **Practice:** Use `services.msc` to list services and understand their states.  
- **Resources:**  
  - [Windows Services Documentation](https://docs.microsoft.com/en-us/windows/win32/services/services)

### Day 4: DLL Injection Introduction  
- What is DLL Injection?  
- Common injection methods overview.  
- **Resources:**  
  - [CrowdStrike on DLL Injection](https://www.crowdstrike.com/epp-101/dll-injection-techniques/)  
  - [MalwareTech - DLL Injection Video](https://www.youtube.com/watch?v=sO-VVKhx_Hk)

### Day 5: Tools for Monitoring Injection  
- Introduction to Process Monitor for tracking registry and file activity.  
- Using Process Monitor to detect suspicious DLL injections.  
- **Tools:**  
  - [Process Monitor](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon)  

### Day 6-7: Hands-On & Labs  
- Perform exercises using Process Monitor on test processes.  
- Optional: Try [TryHackMe Windows Fundamentals 2 & 3](https://tryhackme.com/room/windowsfundamentals2)  
