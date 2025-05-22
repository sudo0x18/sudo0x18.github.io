---
title: "=> Week 5: Static Malware Analysis Fundamentals"
draft: false 
description: The notebook demonstrates Static Malware Analysis Fundamentals.
tags:
    - static-analysis
    - pe-structure
    - string-extraction
    - import-analysis
    - packer-detection
---


**Objective:** Learn to analyze malware binaries without running them, focusing on PE structure, strings, and imports.

---

### Day 1: Review PE File Format in Depth  
- Understand sections, headers, and metadata in PE files.  
- **Resources:**  
  - [Microsoft PE Format Specification](https://docs.microsoft.com/en-us/windows/win32/debug/pe-format)  
  - [PE Format Explained (Article)](https://www.aldeid.com/wiki/PE-Format)

### Day 2: Strings Extraction & Analysis  
- Extract printable strings from binaries to find clues.  
- **Tools:**  
  - `strings` utility (Sysinternals or Linux)  
  - [Strings in Ghidra](https://ghidra-sre.org/)  
- **Practice:** Run `strings` on sample malware binaries.

### Day 3: Dependency Walker & Import Table  
- Analyze which DLLs and APIs malware calls.  
- **Tools:**  
  - [Dependency Walker](http://www.dependencywalker.com/)  
- Identify suspicious or uncommon API calls.

### Day 4: Introduction to PEiD and Packers  
- Learn about packers and how malware uses them to obfuscate.  
- **Resources:**  
  - [PEiD tool](https://www.aldeid.com/wiki/PEiD)  
  - Article: [What is a packer?](https://www.r3tw0rld.com/packers-cryptors/)

### Day 5: Using Exeinfo PE  
- Detect packers and compilers automatically.  
- **Practice:** Analyze malware binaries for packing.

### Day 6-7: Practice Static Analysis  
- Apply tools to a set of sample binaries.  
- Document findings: suspicious imports, packer presence, extracted strings.
