---
title: early-return
date: 2017-09-13 15:44:22
tags:
  - Clean Code
---

```js
if (a) {
  if (b) {
    // ...
  }
} else if (c) {
  // ...
}
```

There is a dead end if `a` but not `b`, which is confusing and ask for refactoring.

```js
if (a && b) {
  // ...
} else if (c) {
  // ...
}
```

Code above is not equal. If `a` but not `b`, if first `c` wouldn't be evaluated, but in second case it would be.

## Early return

```js
if (a) {
  if (b) {
  }

  return;
}

if (c) {
}
```

Could we now easily combine conditions and check for `if (a && b)`? No. It still has the same problem.
