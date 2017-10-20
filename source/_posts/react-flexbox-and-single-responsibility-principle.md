---
title: react-flexbox-and-single-responsibility-principle
date: 2017-09-15 10:54:55
tags:
  - React
---

It is all right to define flex container in one component and flex item properties in another? Doesn't that break single responsibility principle (_принцип единственной ответственности_)?

## Composition is a single responsibility

Composition of some block should be done in one place. Composed parts should alter composition rules.

Parts should be blocks by themselves, i.e. they shouldn't depend on parents, but adjust to them.
