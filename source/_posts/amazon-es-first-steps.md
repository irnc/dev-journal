---
title: amazon-es-first-steps
date: 2017-10-04 17:12:49
tags:
  - AWS
---

> Your domain is being initialized, which takes about 10 minutes. You cannot load data or run queries against your domain until the initialization is complete. The domain status will change to Active as soon as your domain is ready to use.

After creating a domain with one data node and attaching 10GB EBS to it, console shows that only 7.24 GB free storage space is awailable. I assume that other 2.76 GB was used for software, as alongside Elasticsearch there is Kibana.
