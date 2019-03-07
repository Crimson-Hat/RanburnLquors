const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spiritsSchema = new Schema({
  ProductName: { type: String, required: true },
  Volume: { type: String, required: false },
  Abv: { type: String, required: false },
  Category: { type: String, required: false },
  Type: { type: String, required: false },
  SubType: { type: String, required: false },
  Country: { type: String, required: false },
  Price: { type: String, required: false },
  Description: { type: String, required: false }
});

const Spirits = mongoose.model("Spirits", spiritsSchema);

module.exports = Spirits;