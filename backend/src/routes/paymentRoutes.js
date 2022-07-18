const express = require("express");
const paymentController = require("../controllers/paymentController");
const authController = require("./../controllers/authController");
const router = express.Router();

// router.use(authController.protect);

// router.get("/checkout-session/:tourId", bookingController.getCheckoutSession);

// router.use(authController.restrictTo("admin", "lead-guide"));

router
  .route("/create-checkout-session/:subscriptionID")
  .post(paymentController.createCheckoutSession);

router.route("/create-payment-intent").post(paymentController.paymentIntent);

router.use(authController.protect);
router
  .route("/crud-payment-method")
  .get(paymentController.getCards)
  .put(paymentController.updatePaymentIntent)
  .post(paymentController.setupIntent);

module.exports = router;

// app.post("/create-checkout-session", createCheckoutSession);

// app.post("/create-payment-intent", paymentIntent);

// app.post("/crud-payment-method", validateUser, setupIntent);

// app.get("/crud-payment-methods", validateUser, getCards);

// app.put("/crud-payment-intent", validateUser, updatePaymentIntent);
