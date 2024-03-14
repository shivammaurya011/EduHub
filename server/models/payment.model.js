const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
