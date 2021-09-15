# Redis

**subscribe channel**

**publish channel message**

```
127.0.0.1:6379> subscribe devsnest
Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "devsnest"
3) (integer) 1
1) "message"
2) "devsnest"
3) "hello"
```

1 in the list specifies the type, 2 defines the location or channel and 3 is the message

``` 
PSUBSCRIBE d*
PUNSUBSCRIBE d*
```
> d* subscribes or unsubscribes all the publishers which starts with letter d.

```
XADD key id field string
XADD mystream * name Anna
XREAD COUNT 200 STREAMS mystream 0
XREAD BLOCK 10000 STREAMS mystream 0 - disconnects after 10 seconds
XREAD block 0 STREAM mystream 0 - never disconnects
XREAD BLOCK 10000 STREAM mystream $ - wait for 10 seconds then close
XRANGE key start end
XRANGE myStream - + COUNT 2 - display 2 message from start to end
XREVRANGE mystream + - COUNT 2 - display 2 messages from the reverse

```
