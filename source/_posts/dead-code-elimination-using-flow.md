---
title: Dead Code Elimination Using Flow
date: 2017-08-10 16:29:03
categories:
  - JavaScript
  - Flow
tags:
  - DCE
---

## Detecting dead code to aid developers

Build tools could eliminate dead code from artifacts to reduce its size. It is helpful when developer import a big library, but uses only subset of it.

We are interested in dead code detection to tidy code after refactoring, e.g. see that some exports are not used at all and make them local, or remove it is not used even locally.

## Could Flow Detect Dead Code?

- https://github.com/facebook/flow/issues/3492

## Integration with Editors

## Dead Code Elimination from a Build Artifact

- webpack?

## PS. Into to Flow

see https://github.com/irnc/flow-by-experiment/tree/wip
