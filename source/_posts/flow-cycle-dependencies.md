---
title: Add cycle detection to get expected Flow behavior
date: 2017-08-07
categories:
  - JavaScript
  - Flow
---

Flow had a nasty bug as of version 0.52, which manifested itself in false positives saying _no errors_ when there was an error, but it wasn't spotted because of a cyclic dependency.
