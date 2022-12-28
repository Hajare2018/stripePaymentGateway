const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = 4000;
app.use(cors());
app.use(express.json());

const connection = require("./model/connection");
const { user_routes } = require("./routes/user.routes");
const { hotel_routes } = require("./routes/hotelbooking.routes");
// use routes in app //
app.use("/", user_routes);

app.use("/", hotel_routes);

// app.get('/api/secret', async (req, res) => {

//   const intent = await stripe.paymentIntents.create({
//     amount: 1000,
//     currency: 'inr',
//     payment_method_types: ['card'],
//     metadata: {order_id: session.id},
//   });
//   res.json({client_secret: intent.client_secret});
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { productName, amount, quantity } = req.body;
    console.log("object", { data: req.body });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            unit_amount: parseInt(amount) * 100,
            currency: "inr",
            product_data: {
              name: productName,
            },
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });
    console.log({ session });
    const data = {
      session_id: session.id,
      status: "complete",
      ref_id: "1",
      // amount: "100.00",
    };

    const query = " insert into payment SET ? ";
    await connection.query(query, data, (err, result) => {
      if (err) {
        return res.json(err.sqlMessage);
      }

      //   res.redirect(session.url);
      res.json({
        status: 200,
        response: result,
        id: session.id,
        paymentUrl: session.url,
      });
    });

    // // res.redirect()
    // res.json({ status: 200, id: session.id, paymentUrl: session.url });
  } catch (err) {
    res.json({ status: 400, reponse: err.message });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
