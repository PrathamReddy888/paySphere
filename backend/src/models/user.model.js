const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  defaultOvertimeRate: {
    type: Number,
    default: 0,
  },
  defaultDailyRate: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
