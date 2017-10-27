---
title: flow-existential-type
date: 2017-10-27 11:14:38
tags:
  - Flow
---

In order to understand Flow documentation on existential type, first look at `Class<T>` type.

- https://flow.org/en/docs/types/utilities/#toc-class
- https://flow.org/en/docs/types/utilities/#toc-the-existential-type

From documentation it is obvious that existential type could be used for

- return types
- class properties

http://sitr.us/2015/05/31/advanced-features-in-flow.html#existential-types also suggests that existential type could be used for _parameters of an inner function_.

Answer at https://stackoverflow.com/questions/44106189/what-is-the-use-of-asterisk-type-in-flow-and-what-is-the-equivalent-of-that suggests that existential type should be used when Flow is able to infer type from type flowing into existential type.

# Don't use existential type on parameters of exported function

While that function is not called inside a module, Flow has no information for inference, because inference is bould inside a module boundary.

# Papers

- Static Analysis: 13th International Symposium, SAS 2006, Seoul, Korea 
  - Existential Label Flow Inference via CFL Reachability
    - http://www.cs.umd.edu/~mwh/papers/existsflow.pdf
  - references https://dl.acm.org/citation.cfm?id=45065
- https://stackoverflow.com/questions/10753073/whats-the-theoretical-basis-for-existential-types
  - references https://en.wikibooks.org/wiki/Haskell/Existentially_quantified_types
