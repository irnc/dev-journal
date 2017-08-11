---
title: destructuring and flow type refinement
date: 2017-08-11 16:04:48
tags:
  - Flow
  - ES6
---

```js
type Props =
  | { status: 'error' }
  | { status: 'loaded', data: string }

(props: Props) => {
  const { status } = props;

  switch (status) {
    case 'loaded':
      return props.data;
    case 'error':
      return 'Error';
  }
}
```
