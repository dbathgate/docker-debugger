# docker-debug-container
* Returns environment variables, hostname, and network interfaces

## Print Environment Variables:
```
$ curl 127.0.0.1:18080/env

HOSTNAME=e98166d1f700
HOME=/root
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
PWD=/
```

## Print Hostname:
```
$ curl 127.0.0.1:18080/hostname

e98166d1f700
```

## Print Network Interfaces

```
$ curl 127.0.0.1:18080/interfaces

lo: 127.0.0.1
lo: ::1
eth0: 172.17.0.2
eth0: fe80::42:acff:fe11:2
eth1: 10.1.2.55
eth1: fe80::8c5:49ff:fe25:8801
```
