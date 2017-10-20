---
title: flow-0.53
date: 2017-10-13 15:09:04
tags:
---

```
                   v------------------
 98:               <ActiveFeedRenderer
 99:                 list={list}
100:                 totalCountOfFeeds={rowCount}
...:
104:               >
                   ^ React element `ActiveFeedRenderer`
 29: export default class ActiveFeedRenderer extends ActiveRenderer<Props, State> {
                          ^^^^^^^^^^^^^^^^^^ statics of type application of identifier `ActiveRenderer`. Expected polymorphic type instead of. See: src/components/library/ActiveFeedRenderer.js:29
 29: export default class ActiveFeedRenderer extends ActiveRenderer<Props, State> {
                                                     ^^^^^^^^^^^^^^ class type: ActiveRenderer. See: src/components/library/ActiveFeedRenderer.js:29
```

# Similar issues

- https://github.com/facebook/flow/issues/4617

# Terms

- type application
  - type application **of** _identifier `AR`_
  - _statics_ **of** type application
  - _Type application_ means constructing new type by applicating specific types to parameters of a polymorphic type.
- Expected polymorphic type instead of _class type: AR_

# How to understand it?

- https://github.com/flowtype/flow-codemod/tree/master/transforms/strict-type-args
  - gives definition of _polymorphic type application_

> “Polymorphic type application” describes a type expression like `Promise<string>`, which applies the type argument string to the polymorphic type `Promise`.
