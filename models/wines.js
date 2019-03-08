const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const winesSchema = new Schema({
  FamilyName: { type: String, required: true },
  Country: { type: String, required: false },
  Size: { type: String, required: false },
  Types: { type: String, required: false },
  Description: { type: String, required: false },
  ImgUrl:{ type: String, required: false }
});

const Wines = mongoose.model("Wines", winesSchema);

module.exports = Wines;