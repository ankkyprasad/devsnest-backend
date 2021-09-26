app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "secret$%123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1000 * 60 * 10,
    },
  })
);