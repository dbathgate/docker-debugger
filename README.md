# docker-debug-container
* Returns environment variables, hostname, and network interfaces

```
$ curl 10.1.2.55:18080

Environment Variables:

NODE_VERSION=0.12.13
HOSTNAME=e98166d1f700
HOME=/root
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
PWD=/


Host:

Hostname: e98166d1f700


Network Interfaces:

lo: 127.0.0.1
lo: ::1
eth0: 172.17.0.2
eth0: fe80::42:acff:fe11:2
eth1: 10.1.2.55
eth1: fe80::8c5:49ff:fe25:8801
```
