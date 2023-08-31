---
title: Scripting IDA Debugger to Deobfuscate Nymaim
dateadded: 2017-03-03 10:11:42
lastmod: 2017-03-03 10:33:26
date: 2017-03-03 10:30:00
version: v1.0
language: EN
author: GovCERT.ch
filetype: pdf
md5: 170dd70cf1ff2ad6763256decdbce986
filesize: 1.2 MB
filename: nymaim_govcertch.pdf
slug: scripting-ida-debugger-to-deobfuscate-nymaim
aliases: 
  - 2/scripting-ida-debugger-to-deobfuscate-nymaim
---

Nymaim is active worldwide since at least 2013 and is also responsible for many infections in Switzerland. Sinkhole Data shows that Nymaim is responsible for about 2% of infected devices 1 in Switzerland that hit sinkholes the last few days. Nymaim uses powerful code obfuscation techniques. These techniques have already been discussed several times. Many approaches use code emulation. We'd like to present an approach in this paper to do so by directly using IDA's debugger feature and IDAPython to do the same, as it might be the more generic approach in certain cases. Also, we follow a slightly different approach to actually find all the obfuscation functions, and make the deobfuscation a bit more generic. No addi tional Python modules are required.

