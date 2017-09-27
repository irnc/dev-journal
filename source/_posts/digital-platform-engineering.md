---
title: digital-platform-engineering
date: 2017-09-27 23:44:12
tags:
  - Uber
---

Companies using platforms:

- Uber
  - https://eng.uber.com/tech-stack-part-one/
  - TK https://eng.uber.com/experimentation-platform/

# Why companies turn to platforms?

- to scale development by scaling teams (Uber)
- to innovate

  > Our stack’s flexibility encourages competition so the best ideas can win. -- Uber

# Technical notes on platforms

- Docker containers on Mesos
  - at Uber https://eng.uber.com/tech-stack-part-one/
    - _Ringpop, a consistent hashing layer, brings cooperation and self-healing to the application level. Hyperbahn enables services to find and communicate with others simply and reliably, even as services are scheduled dynamically with Mesos._

# Bringing legacy services to platform

> Legacy services use local HAProxy instances to route JSON over HTTP requests to other services, with front-end web server NGINX proxying to servers in the back end. This well-established way of transferring data makes troubleshooting easy, which was crucial throughout several migrations to newly developed systems in the last year.

> - Uber https://eng.uber.com/tech-stack-part-one/
