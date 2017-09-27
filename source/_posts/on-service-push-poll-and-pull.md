---
title: on-service-push-poll-and-pull
date: 2017-09-28 00:22:16
tags:
  - Uber
---

> Instead of archaically polling to see if something has changed, we’re moving to a pub-sub pattern (publishing updates to subscribers). HTTP/2 and SPDY more easily enable this push model. Several poll-based features within the Uber app will see a tremendous speedup by moving to push.

> -- Uber https://eng.uber.com/tech-stack-part-one/

# On Amazon Lambda invocation models

- http://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html
