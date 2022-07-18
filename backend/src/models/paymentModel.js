const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Payment must belong to a User!"],
  },
  price: {
    type: Number,
    default: 0,
    set: function () {
      const answer =
        this.SubscriptType == "Basic"
          ? 12
          : this.SubscriptType == "Standard"
          ? 16
          : 24;
      return answer;
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  SubscriptType: {
    type: String,
    enum: ["None", "Basic", "Standard", "Enterprise"],
    default: "None",
  },
  paid: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: "No Subscription is selected",
    set: function () {
      const answer =
        this.SubscriptType == "Basic"
          ? "You will have access to basic utilities of this blog website."
          : this.SubscriptType == "Standard"
          ? "You will have access to basic utilities of this blog website."
          : "You will have access to basic utilities of this blog website.";
      return answer;
    },
  },
});

bookingSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "tour",
    select: "name",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
