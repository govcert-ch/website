---
title: Fobber Analysis
dateadded: 2015-09-11 07:40:47
date: 2015-09-11 07:45:00
version: v1.0
language: EN
author: GovCERT.ch
filetype: pdf
md5: e5c2ba441026a7437c45d73cd89e1ad0
filesize: 790 KB 
filename: govcertch_fobber_analysis.pdf
slug: fobber-analysis
aliases: 
  - 1/fobber-analysis
---

After reading the a blog post on Malwarebytes describing Fobber, a new variant of Tinba, we wanted to have a look at it ourselves. Fobber uses an interesting and unusual approach to make static analysis harder: we'll try to explain it and give hints on how to recover the original un-encrypted shellcode. Furthermore we analysed all injection stages used by the malware and described what kind of shellcode run within each injected code.  
