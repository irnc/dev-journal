---
title: fixing-snapd
date: 2017-09-29 16:01:38
tags:
  - Ubuntu
  - snap
---

```
$ snap list
error: cannot list snaps: cannot communicate with server: Get http://localhost/v2/snaps: dial unix /run/snapd.socket: connect: connection refused
```

`journalctl -xe` shows following error on `snapd` service startup:

```
-- Unit snapd.service has begun starting up.
snapd[12461]: Inconsistency detected by ld.so: ../sysdeps/x86_64/dl-machine.h: 517: elf_machine_rela_relative: Assertion `ELFW(R_TYPE) (reloc->r_info) == R_X86_64_RELATIVE' failed!
systemd[1]: snapd.service: Main process exited, code=exited, status=127/n/a
systemd[1]: Failed to start Snappy daemon.
```

https://bugs.launchpad.net/ubuntu/+bug/63222 suggested that binary is corrupted, either on disk or in memory, reboot or reinstall should fix it.

```
$ /usr/lib/snapd/snapd
Inconsistency detected by ld.so: ../sysdeps/x86_64/dl-machine.h: 517: elf_machine_rela_relative: Assertion `ELFW(R_TYPE) (reloc->r_info) == R_X86_64_RELATIVE' failed!
```

2.27.5

```
$ md5sum *
5611f5fb624be3477cdaef1a402a58f9  snapd.corrupted
a3149548e9a78c3f9121373c5798664f  snapd.reinstalled
```
