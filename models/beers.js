const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beersSchema = new Schema({
  FamilyName: { type: String, required: true },
  Month: { type: String, required: false },
  Country: { type: String, required: false },
  Size: { type: String, required: false },
  Types: { type: String, required: false },
  Description: { type: String, required: false },
  ImgUrl:{ type: String, required: false }
});

const beers = mongoose.model("beers", beersSchema);

module.exports = beers;