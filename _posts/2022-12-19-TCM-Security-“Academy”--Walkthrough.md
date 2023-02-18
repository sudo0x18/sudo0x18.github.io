---
title: TCM Security “Academy” — Walkthrough
date: 2022-12-19
categories: [Walkthrough, RedTeam]
tags: [red-team, walkthrough]     # TAG names should always be lowercase
---

Greetings of the day everyone. In today’s article we are going to walkthrough one of best machines of TCM Security Capstone Challenges from Practical Ethical Hacking Course. I am using VMWare Workstation as a hypervisor technology, Kali Linux as a attacking machine and academy vulnerable machine as a victim.

## Download Academy VM
[Academy.zip](https://drive.google.com/file/d/1u4628J7AwEzFCS3gWZbJgv-lhGzwmrvf/view?usp=share_link)

You can download and setup the environment as we are not focusing on the environment setup and installation.

<img src="/assets/img/academy/academy.jpeg">

Before you start, You can join our discord server to engage with like minded people and share everything that you can share with people to help them and get your queries answered by people.

## 🔗 CyberVerse Community
[CyberVerse Discord](https://discord.com/invite/VKJSmqDN5P)

## Initial Information
> Username: root Password : tcm

As the academy machine is based on old distribution it does not have auto DHCP (Dynamic Host Configuration Protocol). We do have to manually run dhclient command to get an IP address and then check it by entering ip addr command.

<img src="/assets/img/academy/ss1.png">

## Scanning & Information Gathering

Information gathering and scanning is the first and essential step to solve a challenge and get the weakness information about target to hijack the system and get the control. First we will do a quick nmap scan to figure out all open ports and running services and it's version information.

```bash
sudo nmap -sV -sC -T4 -p- 192.168.163.129 -oN nmap.scan

#Replace IP address with your ones.
```

If you don't understand the command above, I recommend you to walkthrough my articles on nmap on medium.

### Understanding The NMAP Methedology
[NMAP Part-1](https://medium.com/r/?url=https%3A%2F%2Finfosecwriteups.com%2Fnetwork-mapping-part-1-112116ce6555)

<img src="/assets/img/academy/ss2.png">

As per the nmap scan results, We got three ports open on the victim machine. Each port has some services running and it's versions are shown within. On port number 21, A ftp server is running and anonymous login as allowed to the server. Perfect, we got something here. Let's login to the machine using FTP port.

<img src="/assets/img/academy/ss3.png">

Type above command, give username as anonymous , put password blank and hit enter. Perfect you got logged in FTP server. You can type help to show all the available commands to run on the system. Now type ls to list all the files that are available on the server.

<img src="/assets/img/academy/ss4.png">

We got a file called note.txt on the server. It's looking suspicious, let's download the file using get note.txt command on the server and file will be downloaded to current directory of our system.

<img src="/assets/img/academy/ss5.png">

Perfect, the note.txt file is revealing so much information of database query and student information as student ID and password hash. We got so much juicy information here. Another open port is 22 (SSH), in CTFs there are very less possibilities of having vulnerable service of SSH so we are not gonna waste our time on gathering information on that. Instead we can move further on port 80. As the nmap results, a default page is running on the server that means something interesting might be there.

<img src="/assets/img/academy/ss6.png">

As there is only default page running, we have to dig more into it to gather more information and more pages running on the server. We will use a directory busting tool called gobuster to do so. If you don't have gobuster installed, install it with sudo apt install gobuster command. You can read gobuster manual page to see the use of the tool.

<img src="/assets/img/academy/ss7.png">

Perfect, We found some endpoints on the web server. /academy endpoint is looking suspicious as the machine name suggests. Go to the endpoint and see what is interesting there. A student management portal is running on the server. It has a login form, now remember the query we found in the note.txt file from FTP server. We have student ID and a password hash.

## Initial Access
Now we have much information to get into the machine. We do have to crack the password hash found in the note.txt from FTP server. We will use hashcat tool for cracking the password. Follow the instruction to crack the password. For that first create a file called hash.txt and store the password hash into it.

<img src="/assets/img/academy/ss8.png">

Use above command to initiate a password cracking process. You will get the password soon. In this article, I am showing the password of the hash. Perfect, now we have user ID and a password cracked. We can now log into the student portal.

In the portal we found a student profile page that gives us an option to upload a file. Let's check if it is vulnerable to file upload vulnearbility or not. The website is running on PHP technology. Let's download the PHP reverse shell from github and upload it to the server.

<img src="/assets/img/academy/ss9.png">

Now before uploading the shell file, change the $IP variable to your Kali Linux IP address and start a netcat listening server on the same port as shell.php $port for listening to the incoming connection from the victim machine.

<img src="/assets/img/academy/ss10.png">

And perfect, we are ready to upload a shell to the student profile section. Select a shell.php and update the profile and check if we are getting any connection back from the server or not.

<img src="/assets/img/academy/ss11.png">

Perfect we got a connection back from the victim server and we are now www-data user. Now we have a privilage to read the server configuration files and data. Find out the PHP config file on the /var/www/html/academy folder to check if there is any juicy information or not.

<img src="/assets/img/academy/ss12.png">

Boom, we found a username and password from the PHP config file. Now let's use this information to log into user account using SSH protocol. Use ssh grimmie@<ip> to connect to the server than type yes and provide the password to login.

<img src="/assets/img/academy/ss13.png">

Boom, Now we are in the victim machine as a grimmie user. We have hacked the machine. But that is not the last thing, we have to try to elevate our privileges to root user.

## Privilege Escalation

Privilege escalation is a very important aspect in the CTFs. There are many ways to do that. Here we are going to see one of the ways and how we can leverage that to get root access of the machine , which will give us the highest privileges of the system.

Here, we are going to see how scheduled tasks can be used to elevate the user privs. There a backup.sh file located in the user grimmie's home folder. This script is doing backup of the system. We can see the information about when the script is running (This information can be found on the /etc/crontab file)on the system and change script content with reverse shell to elevate the privs.

<img src="/assets/img/academy/ss14.png">

This script file is running every minute, hour, day, month, week to take a backup. Now change the script with our rev shell and start a netcat listener to get a root priv.

<img src="/assets/img/academy/ss15.png">

Replace the following code in the backup.sh and start a netcat listening server on port 9999 and wait for a connection. Replace you kali linux IP with the above code.

<img src="/assets/img/academy/ss16.png">

Boom, We got an root privileged reverse shell. Now we have a root of the system and we can do anything with the victim. Happy Hacking!

This is it for today's article. If you found it to be interesting and informative then share it with your friends. Thank you for reading till here. Let me know your queries or topics which you want to read an article on my social media.