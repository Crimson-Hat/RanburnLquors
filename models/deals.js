const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dealsSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: String, required: true },
  size: { type: String, required: true },
  alc: { type: String, required: true },
  was: { type: String, required: true }
});

const Deals = mongoose.model("Deals", dealsSchema);

module.exports = Deals;