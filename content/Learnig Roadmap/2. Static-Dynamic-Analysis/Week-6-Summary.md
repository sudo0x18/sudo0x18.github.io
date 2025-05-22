---
title: "=> Week 6: Dynamic Analysis Introduction & Setup"
draft: false 
description: The notebook demonstrates Dynamic Analysis Introduction & Setup.
tags:
    - dynamic-analysis
    - malware-lab
    - vm-setup
    - network-monitoring
    - behavior-analysis
---

**Objective:** Set up your malware analysis lab and start running malware safely in controlled environments.

---

### Day 1: Lab Setup Essentials  
- Understand virtualization (VMware/VirtualBox).  
- Setup Windows VM with snapshot support.  
- **Resources:**  
  - [Setting up Malware Analysis Lab](https://www.malwareunicorn.org/workshops/windows_forensics_and_malware_analysis/01_lab_setup.html)  
  - [VMware Player](https://www.vmware.com/products/workstation-player.html)  

### Day 2: Network Isolation and Snapshots  
- Network isolation techniques to prevent malware from escaping.  
- Using snapshots to rollback VM state.

### Day 3: Dynamic Analysis Tools Introduction  
- Procmon, Wireshark, Regshot basics.  
- **Tools:**  
  - [Process Monitor](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon)  
  - [Wireshark](https://www.wireshark.org/)  
  - [Regshot](https://sourceforge.net/projects/regshot/)

### Day 4: Running Simple Samples  
- Execute safe, known benign test samples.  
- Observe behavior with Procmon and Regshot.

### Day 5: Monitoring Network Traffic  
- Capture and analyze traffic with Wireshark.  
- Identify suspicious connections.

### Day 6-7: Practice Dynamic Analysis  
- Run a malware sample in VM (preferably test samples from MalwareBazaar).  
- Document changes: file, registry, process creation, and network behavior.
