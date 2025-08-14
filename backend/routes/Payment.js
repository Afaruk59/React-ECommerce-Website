const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Siparişleri getir
router.get("/orders", async (req, res) => {
  try {
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 100,
    });

    const orders = paymentIntents.data.map((intent) => ({
      id: intent.id,
      amount: intent.amount / 100,
      currency: intent.currency,
      status: intent.status,
      created: new Date(intent.created * 1000),
      description: intent.description || "Sipariş",
      customer_email: intent.receipt_email,
      products: intent.products,
    }));

    res.status(200).json(orders);
  } catch (error) {
    console.error("Stripe Orders Error:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { products, user, total, discount, fastCargo } = req.body;
  let description = "Sipariş Detayları:\n";

  products.forEach((product) => {
    description += `• ${product.name} (x${product.quantity}) - $${(
      product.price.current * product.quantity
    ).toFixed(2)}\n`;
  });

  if (fastCargo) {
    description += `• Hızlı Kargo - $15.00\n`;
  }

  if (discount && discount > 0) {
    const subtotal = products.reduce(
      (acc, product) => acc + product.price.current * product.quantity,
      0
    );
    const discountAmount = (subtotal * discount) / 100;
    description += `• İndirim (%${discount}) - -$${discountAmount.toFixed(
      2
    )}\n`;
  }

  const lineItems = [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "Sipariş Toplamı",
          description: description.trim(),
        },
        unit_amount: Math.round(total * 100), // Frontend'den gelen total'i kullan
      },
      quantity: 1,
    },
  ];

  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cart`,
    });
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
