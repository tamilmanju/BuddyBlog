const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is mandatory!"],
  },
  email: {
    type: String,
    required: [true, "Email is mandatory!"],
    unique: [true, "Entered email already exist!"],
  },
  password: {
    type: String,
    required: [true, "password is mandatory!"],
    max: 10,
    min: 5,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm Password is mandatory!"],
    max: 10,
    min: 5,
    select: false,
  },
  dob: {
    type: Date,
    required: [true, "Date of Birth is mandatory"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified(this.password)) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  return next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
