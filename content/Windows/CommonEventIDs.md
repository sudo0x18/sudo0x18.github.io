---
title: Windows Common Security Events to Monitor
draft: false 
description: Windows Common Security Events to Monitor which can be useful to identify and mitigate potential incidents.
tags:
    - windows
    - security
    - eventcodes
    - eventids
date: 2024-11-01
---

| EventID | Event Description     | Explaination                |
| :-------- | :------- | :------------------------- |
| `ID 4624` | An account was successfully logged on | This event is generated when a logon session is created. It is generated on the computer that was accessed. |
| `ID 4625` | An account failed to log on | This event is generated when a logon request fails. It is generated on the computer where access was attempted. |
| `ID 4648` | A logon was attempted using explicit credentials | This event is generated when a process attempts to log on an account by explicitly specifying that account’s credentials.  This most commonly occurs in batch-type configurations such as scheduled tasks, or when using the RUNAS command. |

[🏡 Home](/index)