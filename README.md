# Inventory Expand

A way to expand Ansible-style host ranges into a full list.

`echo 'host[0:4].yoyodyne.net' | invexp` returns:

```
host0.yoyodyne.net
host1.yoyodyne.net
host2.yoyodyne.net
host3.yoyodyne.net
host4.yoyodyne.net
```
