// require("dotenv").config({ path: "./config.env" });

// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// const express = require("express");
// const paymentrouter = require("express");

// paymentrouter.use(express.json());

// paymentrouter.post("/", async (req, res) => {
//   try {
//     const value = req.body.amount;
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: req.body.items.map((item) => {
//         return {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: "Fcoins",
//             },
//             unit_amount: value.priceInCents,
//           },
//           //   quantity: item.quantity,
//         };
//       }),
//       success_url: `${process.env.CLIENT_URL}/success.html`,
//       cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
//     });
//     res.json({ url: session.url });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// // export default paymentrouter;
