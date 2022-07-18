const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const User = require("../models/userModel");
const Booking = require("../models/paymentModel");
const catchAsync = require("../utils/catchAsync");
// const factory = require("./controlMiddleware");

exports.createCheckoutSession = catchAsync(async (req, res, next) => {
  const { email, firstName, lastName } = req.body;
  const subscriptionType = req.params.subscriptionType;

  if (!email || !firstName) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],

    customer_email: email,
    line_items: [
      {
        price:
          subscriptionType == "Basic"
            ? 1200
            : subscriptionType == "Standard"
            ? 1600
            : 2400,
        currency: "usd",
        quantity: 1,
      },
    ],
    success_url: `${req.protocol}://${req.get("host")}/`,
    cancel_url: `${req.protocol}://${req.get("host")}/pricing`,
  });

  // 3) Create session as response
  res.status(200).json({
    status: "success",
    session,
  });
});

exports.createBookingCheckout = async (session) => {
  const user = (await User.findOne({ email: session.customer_email })).id;
  // const price = session.display_items[0].price / 100;
  await Booking.create({ user, subscriptionType, paid: true });
};

exports.webhookCheckout = (req, res, next) => {
  const signature = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed")
    createBookingCheckout(event.data.object);

  res.status(200).json({ received: true });
};

// exports.createBooking = factory.createOne(Booking);
// exports.getBooking = factory.getOne(Booking);
// exports.getAllBookings = factory.getAll(Booking);
// exports.updateBooking = factory.updateOne(Booking);
// exports.deleteBooking = factory.deleteOne(Booking);

// Get Payment Method
exports.getCards = async function getCards(req, res) {
  const { UserEmail } = req;
  const userID = (await User.findOne({ email: UserEmail })).id;

  let cards;

  try {
    cards = await stripe.paymentMethods.list({
      customer: userID,
      type: "card",
    });
    res.status(200).json(cards.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "an error occured, unable to get cards" });
  }
};

// Payment Intent ????
exports.paymentIntent = async function paymentIntent(req, res) {
  const { subscriptionType, email } = req.body;
  let paymentIntent;

  try {
    paymentIntent = await stripe.paymentIntents.create({
      price:
        subscriptionType == "Basic"
          ? 1200
          : subscriptionType == "Standard"
          ? 1600
          : 2400,
      currency: "usd",
      payment_method_types: ["card"],
      customer_email: email,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "an error occured, unable to create payment intent" });
  }
};

// SetUp Intent

exports.setupIntent = async function setupIntent(req, res) {
  const { currentUser } = req;
  // get stripe customer
  const userID = (await User.findOne({ email: UserEmail })).id;
  let setupIntent;

  try {
    setupIntent = await stripe.setupIntents.create({
      customer: userID,
    });
    res.status(200).json(setupIntent);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "an error occured, unable to create setup intent" });
  }
};

// Update Payment Intent ???????

exports.updatePaymentIntent = async function updatePaymentIntent(req, res) {
  const {
    email,
    body: { paymentIntentId },
  } = req;

  const userID = (await User.findOne({ email: email })).id;
  let paymentIntent;

  try {
    paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
      customer: userID,
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "unable to update payment intent" });
  }
};

// WEBHOOK ?????
const webHookHandlers = {
  "checkout.session.completed": (data) => {
    console.log("Checkout completed successfully", data);
    // other business logic
  },

  "payment_intent.succeeded": (data) => {
    console.log("Payment succeeded", data);
  },
  "payment_intent.payment_failed": (data) => {
    console.log("Payment Failed", data);
  },
};

exports.webhook = function webhook(req, res) {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req["rawBody"],
      sig,
      process.env.WEB_HOOK_SECRET
    );
  } catch (error) {
    return res.status(400).send(`Webhook error ${error.message}`);
  }

  if (webHookHandlers[event.type]) {
    webHookHandlers[event.type](event.data.object);
  }
};
