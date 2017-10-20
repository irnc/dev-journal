---
title: who-steal-focus-react
date: 2017-10-19 13:09:35
tags:
---

In app with keyboard navigation in a Grid focus change doesn't work as expected. Step one is to see who steals the focus. For that we add following listener to main module:

```
document.addEventListener('focusin', ({ target }) => console.log('focusin', target, new Error))
```

`new Error` is needed to see a stack trace which would answer a question of who calls `element.focus()`.

```
Error
    at HTMLDocument.<anonymous> (index.js:55)
    at focusNode (focusNode.js:22)
    at ReactReconcileTransaction.restoreSelection (ReactInputSelection.js:57)
    at ReactReconcileTransaction.closeAll (Transaction.js:206)
    at ReactReconcileTransaction.perform (Transaction.js:153)
    at ReactUpdatesFlushTransaction.perform (Transaction.js:140)
    at ReactUpdatesFlushTransaction.perform (ReactUpdates.js:89)
    at Object.flushBatchedUpdates (ReactUpdates.js:172)
    at ReactDefaultBatchingStrategyTransaction.closeAll (Transaction.js:206)
    at ReactDefaultBatchingStrategyTransaction.perform (Transaction.js:153)
    at Object.batchedUpdates (ReactDefaultBatchingStrategy.js:62)
    at Object.batchedUpdates (ReactUpdates.js:97)
    at dispatchEvent (ReactEventListener.js:147)
```

The latest non-utility call is `restoreSelection` from `ReactInputSelection`. It seems to deal with focus on input element. But we deal with arrow navigation between links, so it doesn't make sense.

Looking into source code would tell us that it restores focus on previously focused element if it is still in document. So don't try to focus on `componentWillReceiveProps`, only on `componentDidUpdate`. But what if I don't want component to be updated?

This happens right in between `componentWillReceiveProps` and `componentDidUpdate`.

```
componentWillReceiveProps(nextProps) {
  if (nextProps.active) {
    this.anchor.focus()
  }
}

shouldComponentUpdate(nextProps) {
  return falseIfOnlyActivePropWasChanged;
}
```

Logically it worked out for me, there is no need to _update_ component when I could act on activation from `componentWillReceiveProps`. Focus restoration hinted that it is not ok, and https://github.com/facebook/react/issues/7835 confirmed that.

# Takeaways

Don't work with DOM node on `componentWillReceiveProps`, it could be replaced before `componentDidUpdate`.
