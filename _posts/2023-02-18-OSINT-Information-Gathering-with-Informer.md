---
title: OSINT Information Gathering with Informer
date: 2023-02-18
categories: [Recon, OSINT]
tags: [recon, osint]     # TAG names should always be lowercase
---

As everyone knows information gathering in cyber security and ethical hacking is very important. The more you know about the target, the more success you will get. We are going to see information gathering with a very good tool called informer based on OSINT.

<img src="/assets/img/osint/osint.jpeg">

Before you start, You can join our discord server to engage with like minded people and share everything that you can share with people to help them and get your queries answered by people.

## 🔗 CyberVerse Community
[CyberVerse Discord](https://discord.com/invite/VKJSmqDN5P)

Informer is OSINT based information gathering tool made with python programming language. It has reach features like whois information gathering, geo-location information gathering, DNS information gathering, sub-domain information gathering, and shodan information gathering abilities.

Download: [Informer - Github](https://github.com/sudo0x18/informer)

## 1. Download and Setup

For downloading and installation you must have git and python installed on your device. Clone the repository with git into your computer device and install all requirements.

```bash
#Clone repo
git clone https://github.com/sudo0x18/informer.git

#Move into directory
cd informer

#Install requirements
pip install -r requirements.txt
```

## 2. Usage and Menu

Usage and available option in every tool are very important to understand. Let's look at them very quickly.

```bash
python3 informer.py --help

Options:
 -h, --help Show this help message and exit
 -t TARGET, --target TARGET Target domain name.
 -d , --dns Get DNS Information
 -g , --geolocation Get Geolocation Information.
 -s , --shodan Get Shodan Information.
 -sd, --subdomain Get Subdomain Information.
 -o OUTPUT, --output OUTPUT Save output to the desired file.
```

## 3. Whois info and DNS info gathering
Informer makes whois information and DNS information gathering very fast and in a very easy way. We just need o to provide a valid domain name and specify valid flags to get the desired results.

```bash
python3 informer.py -t google.com -d

# -t : Specify the target domain
# -d : Tells informer to fetch DNS info
```

<img src="/assets/img/osint/informer-1.png">

## 4. Sub-Domain Information gathering
Gathering sub-domain information is very important in web application pen-testing. Informer makes this thing very easy and fasts effectively. You can gather sub-domain info as below.

```bash
python3 informer.py -t example.com -sd

#-sd : Tells informer for sub-domain info gathering
```

<img src="/assets/img/osint/informer-2.png">

## 5. Other options and their usage
The informer also provides location information gathering, shodan info, and saving the output to a file. It will automatically store shodan info in a file called shodan_<domain>.json with a pretty much indentation.

```bash
python3 informer.py -t example.com -g -s -o filename.txt

# -g : For geo-location info gathering
# -s : For shodan info gathering
# -o : To store the output in a file
```

<img src="/assets/img/osint/informer-3.png">

Thank you for reaching till the end of the article. This is the first article of my life. I hope you find this article helpful. Follow me for more interesting articles and blog posts with juicy information.