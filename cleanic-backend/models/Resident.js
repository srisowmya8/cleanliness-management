const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const ResidentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  area: { type: String, required: true },
  flatNo: { type: String, required: true },
  buildingName: { type: String, required: true },
});

// Hash password before saving
ResidentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("Resident", ResidentSchema);
