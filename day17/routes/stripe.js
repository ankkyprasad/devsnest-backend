const router = require("express").Router();
const path = require("path");
const stripe = require("stripe")(
  "sk_test_51JjHU0SE4g0erxIz4Eck1vauEMaQ6Iydr3kFhaLD0KuFXcNMVORdJxjKblamNhbMUqMRtnCyxyaSso9mCadqbxsE00XssWt6mF"
);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: req.body.price * 100,
          name: "Shopping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      //not going to work(they are hardcoded and no page are build for that particular address)
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}?canceled=true`,
    });
    res.redirect(303, session.url);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
});

//gives error - registered indian businesses can accept international payments as per indian regulation
//but the code is working fine

module.exports = router;
