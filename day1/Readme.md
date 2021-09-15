# Redis

To open Redis - `redis-cli`

> Data is stored in form of key-value pairs.
> Value is always string.

## Table of content

- String
- Array
- set
- Hashmap

---

## String

```
SET key value
GET key
DEL key
EXISTS key
KEYS *
FLUSHALL
TTL key (TTL means time to live)
EXPIRE key seconds
SETEX key seconds value
```

## Array

```
LPUSH key value
LRANGE key start stop (LRANGE hospital 0 -1 - to print all data of the array)
RPUSH key value
LPOP key
RPOP key
```

## SET

```
SADD key members
SMEMBERS key
SREM key value
```

## HashMap

```
HSET key field value
HGET key field
HGETALL key
HDEL key field
HEXISTS key field
```

---

<br>

# PostgreSQL

`psql -U postgres`
<br>
`\l - to list all the database`

```
Create DATABASE name
\c databaseName - to connect to the given database
CREATE TABLE tableName(key datatype constraint)
\d - to see all the tables
\d tableName - to check the data inside a particular table
DROP TABLE tableName - to delete a table
```
